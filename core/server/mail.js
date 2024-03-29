var _          = require('lodash'),
    Promise    = require('bluebird'),
    nodemailer = require('nodemailer'),
    validator  = require('validator'),
    config     = require('./config');

function GhostMailer(opts) {
    opts = opts || {};
    this.transport = opts.transport || null;
}

// ## E-mail transport setup
// *This promise should always resolve to avoid halting Ghost::init*.
GhostMailer.prototype.init = function () {
    var self = this;
    self.state = {};
    if (config.mail && config.mail.transport) {
        this.createTransport();
        return Promise.resolve();
    }

    self.transport = nodemailer.createTransport('direct');
    self.state.usingDirect = true;

    return Promise.resolve();
};

GhostMailer.prototype.createTransport = function () {
    this.transport = nodemailer.createTransport(config.mail.transport, _.clone(config.mail.options) || {});
};

GhostMailer.prototype.from = function () {
    var from = config.mail && (config.mail.from || config.mail.fromaddress);

    // If we don't have a from address at all
    if (!from) {
        // Default to ghost@[blog.url]
        from = 'ghost@' + this.getDomain();
    }

    // If we do have a from address, and it's just an email
    if (validator.isEmail(from)) {
        if (!config.theme.title) {
            config.theme.title = 'Ghost at ' + this.getDomain();
        }
        from = config.theme.title + ' <' + from + '>';
    }

    return from;
};

// Moved it to its own module
GhostMailer.prototype.getDomain = function () {
    var domain = config.url.match(new RegExp('^https?://([^/:?#]+)(?:[/:?#]|$)', 'i'));
    return domain && domain[1];
};

// Sends an e-mail message enforcing `to` (blog owner) and `from` fields
// This assumes that api.settings.read('email') was aready done on the API level
GhostMailer.prototype.send = function (message) {
    var self = this,
        to,
        sendMail;

    message = message || {};
    to = message.to || false;

    if (!this.transport) {
        return Promise.reject(new Error('邮件配置错误: 没有配置邮件发送服务器。'));
    }
    if (!(message && message.subject && message.html && message.to)) {
        return Promise.reject(new Error('邮件配置错误: 未知错误，请联系管理员。'));
    }
    sendMail = Promise.promisify(self.transport.sendMail.bind(self.transport));

    message = _.extend(message, {
        from: self.from(),
        to: to,
        generateTextFromHTML: true,
        encoding: 'base64'
    });

    return new Promise(function (resolve, reject) {
        sendMail(message, function (error, response) {
            if (error) {
                return reject(new Error(error));
            }

            if (self.transport.transportType !== 'DIRECT') {
                return resolve(response);
            }

            response.statusHandler.once('failed', function (data) {
                var reason = '邮件发送错误: 邮件发送失败';
                if (data.error.errno === 'ENOTFOUND') {
                    reason += ': there is no mail server at this address: ' + data.domain;
                }
                reason += '.';
                return reject(new Error(reason));
            });

            response.statusHandler.once('requeue', function (data) {
                return reject(new Error('邮件发送错误: 邮件发送失败 :( \n更多信息: ' + data.error.message));
            });

            response.statusHandler.once('sent', function () {
                return resolve('邮件已发送成功。如未收到请检查垃圾邮箱 :)');
            });
        });
    });
};

module.exports = new GhostMailer();
