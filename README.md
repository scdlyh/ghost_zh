> 更新到 Ghost 0.5.6

ghost_zh 分支为lyhapp提供的中文版，支持UPYUN\QINIU\ALIYUN OSS
专用于部署在coding
---演示图片为英文版

主要变化

* [New] Sitemaps
* [New] Footnotes & Highlight
* [New] Labs page
* [Fixed] Posts failing to save after an error
* [Fixed] Password reset and invitation links not working with mailgun
* [Fixed] Image helper not working correctly with subdirectories
* [Fixed] RSS feed warning in Chrome
* [More](https://gist.github.com/ErisDS/1b97fe28930c19fd7c64)

![1](http://dn-tucdn.qbox.me/pC.png/w.jpg)
![2](http://dn-tucdn.qbox.me/nC.png/w.jpg)
![3](http://dn-tucdn.qbox.me/qC.png/w.jpg)

----

> notic: 如果要把在Coding上部署的Ghost当作生产系统的话，请不要把图片等文件直接上传到Ghost，重启后，这些文件会被清空。

##如何部署：

* 注册登录[Coding.net](http://coding.net)
* Fork https://coding.net/u/tayuo/p/Ghost-On-Coding-Paas/
* 进入`演示` - `开始检测` - 勾选已阅读...并点`开启功能` - 设置`访问域名`，点保存

![1](http://dn-tucdn.qbox.me/Px.png)

* 进入`服务管理` - 添加服务 - 选择`Mysql`并勾选`绑定创建后的服务到此项目(可选)`
* 创建成功后点`连接信息`，你需要把`hostname` `name` `password` `username`记录下来

* 回到`代码`找到`config.js`并点进去，点右边的`编辑`，把刚才记录的数据填入`connection`对应的位置，修改`url`为你设置的值，然后点`保存到Master分支`

![2](http://dn-tucdn.qbox.me/Mx.png)

* 再回到`演示` - 在`部署版本`中填入`master`，点`一键部署`，稍等1分钟左右，当`当前状态`变为绿灯`正在运行`的时候，Ghost博客就部署完毕了！点`马上访问`就可以看到你的Ghost了，在网址后面加上`/ghost`注册成为你博客的主人吧！

演示： http://ghostx.coding.io



---

# [Ghost](https://github.com/TryGhost/Ghost) [![Build Status](https://travis-ci.org/TryGhost/Ghost.svg?branch=master)](https://travis-ci.org/TryGhost/Ghost)

![Ghost Screenshot](https://cloud.githubusercontent.com/assets/120485/4828504/9e832764-5f80-11e4-8ac1-0332bcc67a35.png)

Ghost is a free, open, simple blogging platform that's available to anyone who wants to use it. Lovingly created and maintained by [John O'Nolan](http://twitter.com/JohnONolan) + [Hannah Wolfe](http://twitter.com/ErisDS) + an amazing group of [contributors](https://github.com/TryGhost/Ghost/contributors).

Visit the project's website at <http://ghost.org> &bull; docs on <http://support.ghost.org>.

## Getting Involved

Want to report a bug, request a feature, contribute or translate Ghost? Check out our in-depth guide to [Contributing to Ghost](https://github.com/TryGhost/Ghost/blob/master/CONTRIBUTING.md). We need all the help we can get! You can also join in with our [community](https://github.com/TryGhost/Ghost#community) to keep up-to-date and meet other Ghosters.

## Getting Started

There are a few different ways to install Ghost, take care to use the method which best suits your needs.

**Please note** - the downloadable zip files we provide on [Ghost.org](http://ghost.org/download), the [GitHub releases page](https://github.com/TryGhost/Ghost/releases), and via npm are pre-built packages designed for getting setup quickly. Cloning from the git repository requires you to install several dependencies and build the assets yourself. 

### Install from zip (fastest & best for bloggers)

If you just want to get a Ghost blog running in the fastest time possible, this method is for you.

For detailed instructions for various platforms visit the [Ghost Installation Guide](http://support.ghost.org/installation/). If you get stuck, help is available on [our support site](http://support.ghost.org/).

1. Install [Node.js](http://nodejs.org) - Ghost requires **Node v0.10.x**
1. Download the latest Ghost package from [Ghost.org](http://ghost.org/download). 
1. Create a new directory where you would like to run the code, and un-zip the package to that location.
1. Fire up a Terminal, the Node Command Prompt or shell and change directory to the root of the Ghost application (where config.example.js and index.js are)
1. run `npm install --production` to install the node dependencies. If you see `error Error: ENOENT` on this step, make sure you are in the project directory and try again.
1. To start ghost, run `npm start`
1. Visit `http://localhost:2368/` in your web browser or go to `http://localhost:2368/ghost` to log in

Check out the [Documentation](http://support.ghost.org/) for more detailed instructions, or get in touch via the [forum](http://ghost.org/forum) if you get stuck.



### Install from git

If you're a developer or someone comfortable getting up and running from a `git clone`, this method is for you.

If you clone the GitHub repository, you will need to build a number of assets using grunt.

Please do **NOT** use the master branch of Ghost in production. If you are using git to deploy to production, please use the latest [release](https://github.com/TryGhost/Ghost/releases) or the [stable](https://github.com/TryGhost/Ghost/tree/stable) branch which contains the latest release.

#### Quickstart:

1. `npm install -g grunt-cli`
1. `npm install`
1. `grunt init` (and `grunt prod` if you want to run Ghost in production mode)
1. `npm start`

Full instructions & troubleshooting tips can be found in the [Contributing Guide](https://github.com/TryGhost/Ghost/blob/master/CONTRIBUTING.md) under the heading "[Working on Ghost Core](https://github.com/TryGhost/Ghost/blob/master/CONTRIBUTING.md#working-on-ghost-core)".

Check out the [Documentation](http://support.ghost.org/) for more detailed instructions, or get in touch via the [forum](http://ghost.org/forum) if you get stuck.

### Install from npm

If you want to build Ghost into a larger node app, or are familiar with using `npm` packages, then this method might be for you.

`npm install ghost`

Further setup instructions can be found in the [using Ghost as a NPM module](https://github.com/TryGhost/Ghost/wiki/Using-Ghost-as-an-NPM-module) wiki entry.


### Upgrading to The Latest Version

Upgrade instructions can be found on the [Ghost Support Site](http://support.ghost.org/how-to-upgrade/)

### Logging in For The First Time

Once you have the Ghost server up and running, you should be able to navigate to `http://localhost:2368/ghost/` from a web browser, where you will be prompted to setup your blog and user account. Once you have entered your desired credentials you will be automatically logged in to the admin area. The setup screen will not be accessible once the process has been completed.


## Community

Keep track of Ghost development and Ghost community activity.

* Follow Ghost on [Twitter](http://twitter.com/TryGhost), [Facebook](https://www.facebook.com/ghost) and [Google+](https://plus.google.com/114465948129362706086).
* Read and subscribe to the [Official Ghost Blog](http://blog.ghost.org) and the [Ghost Development Blog](http://dev.ghost.org).
* Join in discussions on the [Ghost Forum](http://ghost.org/forum/)
* Chat with Ghost developers on IRC. We're on `irc.freenode.net`, in the `#Ghost` channel. We have a public meeting every Tuesday at 5:30pm London time.


## Versioning

For transparency and insight into our release cycle, and for striving to maintain backward compatibility, Ghost will be maintained according to the [Semantic Versioning](http://semver.org/) guidelines as much as possible.

Releases will be numbered with the following format:

`<major>.<minor>.<patch>-<build>`

Constructed with the following guidelines:

* A new *major* release indicates a large change where backwards compatibility is broken.
* A new *minor* release indicates a normal change that maintains backwards compatibility.
* A new *patch* release indicates a bugfix or small change which does not affect compatibility.
* A new *build* release indicates this is a pre-release of the version.


## Copyright & License

Copyright (c) 2013-2014 Ghost Foundation - Released under the [MIT license](LICENSE).
