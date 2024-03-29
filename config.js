// # Ghost Configuration
// Setup your Ghost install for various environments
// Documentation can be found at http://support.ghost.org/config/

var path = require('path'),
    config;

config = {
    // ### Production
    // When running Ghost in the wild, use the production environment
    // Configure your URL and mail settings here
    production: {
        url: 'http://', //输入你的演示域名
        mail: {
			transport: 'SMTP',
			options: {
				service: 'Mailgun',
				auth: {
				user: 'sanxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.mailgun.org',
				pass: 'dxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxf'
				}
			}
		},
        database: {
            client: 'mysql',
            connection: {
                host     : 'xxxxxxxxx', //输入数据库地址
                user     : 'xxxxxxxxx', //输入数据库用户
                password : 'SFxxxxxxxxxlnO', //输入你的 MySQL 密码
                database : 'cxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx4992', //输入数据库名称
                charset  : 'utf8'
            }
        },
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '0.0.0.0',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: process.env.VCAP_APP_PORT || 3000,
        },
		//Storage.Now,we can support `qiniu`,`upyun`, `aliyun oss` and `local-file-store`
        storage: {
            provider: 'qiniu',
            bucketname: 'xxxx',
            ACCESS_KEY: 'ycUJVxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxnihqs47HMonBq_x2',
            SECRET_KEY: 'SnL1WxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxEiv',
            root: '/image/',
            prefix: 'http://xxxx.qiniudn.com'
        }
    },

    // ### Development **(default)**
    development: {
        // The url to use when providing links to the site, E.g. in RSS and email.
        // Change this to your Ghost blogs published URL.
        url: 'http://localhost:2368',

        // Example mail config
        // Visit http://support.ghost.org/mail for instructions
        // ```
        mail: {
			transport: 'SMTP',
			options: {
				service: 'Mailgun',
				auth: {
				user: 'sxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxbd4.mailgun.org',
				pass: 'ddxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx06f'
				}
			}
		},
        // ```

        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '127.0.0.1',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: '2368'
        },
        paths: {
            contentPath: path.join(__dirname, '/content/')
        }
    },

    // **Developers only need to edit below here**

    // ### Testing
    // Used when developing Ghost to run tests and check the health of Ghost
    // Uses a different port number
    testing: {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-test.db')
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },

    // ### Testing MySQL
    // Used by Travis - Automated testing run through GitHub
    'testing-mysql': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'mysql',
            connection: {
                host     : '127.0.0.1',
                user     : 'root',
                password : '',
                database : 'ghost_testing',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },

    // ### Testing pg
    // Used by Travis - Automated testing run through GitHub
    'testing-pg': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'pg',
            connection: {
                host     : '127.0.0.1',
                user     : 'postgres',
                password : '',
                database : 'ghost_testing',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    }
};

// Export config
module.exports = config;
