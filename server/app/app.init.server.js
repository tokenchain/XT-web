/**
 * app中间件及全局变量定义
 * Created by SivenLee on 2017/3/14.
 */
//初始化APP项目配置
var CONFIG = require('../configs/main.server.config.js');
var METHOD = require('../models/method.server.model.js');
//设置全局配置
for (var key in CONFIG) {
    global[key] = CONFIG[key];
}
global.METHOD = METHOD;
//此处定义为方法返回才能及时更新语言包
global.LANG = function (LAN) {
    return require('../models/lang.server.model')(LAN);
}
global.WEB = function (LAN) {
    return require('../configs/web.server.config')(LAN);
}
// global.CURRENCY = require('../configs/currency.server.config');
global.USER = require('../configs/user.server.config');
global.MARKET = require('../configs/market.server.config');
global.LEGAL = require('../configs/legal.server.config');
global.ROUTER = require('../configs/router.server.config');
//设置主模板文件变量
global.TEMP_BASIC = 'cn/basic-page';
global.TEMP_HOME = 'cn/homePage';
global.TEMP_FULL = 'cn/fullPage';
global.TEMP_FULL_NEW = 'cn/fullPageNew';
global.TEMP_MOBILE = 'cn/mobilePage';
global.TEMP_MAIN = 'cn/mainPage';
global.TEMP_USER = 'cn/userPage';
global.TEMP_MANAGE = 'cn/managePage';
global.TEMP_MANAGE_NEW = 'cn/managePageNew';
global.TEMP_ASSERT='cn/managePageasset.html';
global.TEMP_SITE = 'cn/mainPage';
global.TEMP_TRADE = 'cn/tradePage';
global.TEMP_gTRADE_PRO = 'cn/tradeProPage';
global.TEMP_COMPLAIN = 'cn/complain'
module.exports = function (app) {

    //多语言支持设置
    app.use(function (req, res, next) {
        debugger
        console.log(req.cookies, '--------req.cookies  app.init.server.js--------')
        console.log(req.query, '--------req.query  app.init.server.js---------')

        // var reqLAN = req.query.lan || req.cookies[ENV + "lan"];
        var reqLAN = req.cookies[ENV + "lan"];
        console.log(reqLAN, '--------reqLAN  app.init.server.js--------')
        //语言类别检测
        if (reqLAN && (reqLAN == "cn" || reqLAN == "en" || reqLAN == "hk" || reqLAN == "jp" || reqLAN == "kr")) {
            global.LAN = reqLAN;
        }
        /*for(var key in global.WEB.LAN){
            console.log(reqLAN ,key)
            if(reqLAN == key){
                global.LAN = reqLAN;
            }
        }*/
        //设置语言cookie（7天）
       /* res.cookie(ENV + 'lan', global.LAN, {
            domain: DOMAIN_BASE,
            path: '/',
            expires: new Date(Date.now() + 604800000)
        });*/
        //设置模板变量
        //app.locals > global
        app.locals.PATH = req.path;
        app.locals.LANG = global.LANG(LAN);
        app.locals.WEB = global.WEB(LAN);

        app.locals.LEGAL = global.LEGAL;

        app.locals.UON = req.cookies[ENV + "uon"];
        app.locals.UID = req.cookies[ENV + "uid"];
        app.locals.CUR_UID = req.cookies[ENV + "currentAccountId"];
        app.locals.UNAME = req.cookies[ENV + "uname"];
        app.locals.MONEY = req.cookies[ENV + "mname"] || 'usd';
        //console.log('当前PATH：',req.path);
        //console.log('当前cookie：',req.cookies);

        //登录状态变量
        //console.log(app.locals.UON,app.locals.UID,app.locals.UNAME,req.cookies[ENV + "JSESSIONID"]);
        //app.locals.isLogin = app.locals.UON == 1 && app.locals.UID && app.locals.UNAME && req.cookies[ENV + "JSESSIONID"];
        app.locals.isLogin = app.locals.UON == 1 && app.locals.UID && app.locals.UNAME;
        console.log('当前是否登录：', Boolean(app.locals.isLogin));

        //用户cookie转发变量
        global.COOKIES = ENV + "uname=" + req.cookies[ENV + 'uname'] + "; " + ENV + "uon=" + req.cookies[ENV + 'uon'] + "; " + ENV + "uid=" + req.cookies[ENV + 'uid'] + "; " + ENV + "currentAccountId=" + req.cookies[ENV + 'currentAccountId'] + "; " + ENV + "JSESSIONID=" + req.cookies[ENV + 'JSESSIONID'] + "; " + ENV + "lan=" + req.cookies[ENV + 'lan'] + "";

        next();
    });


    return app;
}
