/**
 * 首页路由文件
 * Created by SivenLee on 2017/3/14.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var isMobile = function(agent) {
        var sUserAgent = agent.toLowerCase() || '';
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsLetv = sUserAgent.match(/letv/i) == "letv";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        if (bIsIpad || bIsLetv || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
            return true;
        } else {
            return false;
        }
    };
    //移动端下不进入首页
    /*if(isMobile(req.headers['user-agent'])){
        res.redirect('/trade');
    }else{*/
        res.render(TEMP_HOME,{
            templateMain:'index.html'
        });
    //}
});

router.get('/activity', function(req, res, next) {
    res.render(TEMP_FULL,{
        templateMain:'activity/million.html'
    });
});

router.get('/500', function(req, res, next) {
    res.render('500.html');
});
router.get('/404', function(req, res, next) {
    res.render('404.html');
});
router.get('/sorry', function(req, res, next) {
    res.render('sorry.html');
});

router.get('/exx', function(req, res, next) {
    res.render('cn/activity/exx');
});

router.get('/app', function(req, res, next) {
    res.render(TEMP_FULL,{
        templateMain:'app/index.html'
    });
});

router.get('/about', function(req, res, next) {
    res.render(TEMP_FULL,{
        templateMain:'about/index.html'
    });
});

router.get('/login', function(req, res, next) {
    res.render(TEMP_FULL,{
        templateMain:'user/login.html'
    });
});

router.get('/loginAuth', function(req, res, next) {
    res.render(TEMP_FULL,{
        templateMain:'user/logAuthen.html'
    });
});
router.get('/passport', function(req, res, next) {
    res.render(TEMP_FULL,{
        templateMain:'user/passport.html'
    });
});

router.get('/register', function(req, res, next) {
    /*res.cookie('secureKey', 'fuck you !', {
        expires: 0,
        httpOnly: true ,
        domain: '.' + DOMAIN_BASE,
        path: '/',
        secure: false
    });*/
    res.render(TEMP_FULL,{
        templateMain:'user/register.html'
    });
});

router.get('/findLoginPwd', function(req, res, next) {
    res.render(TEMP_FULL,{
        templateMain:'user/passwordFind.html'
    });
});

router.get('/getWebConfig', function(req, res, next) {
    res.jsonp(WEB(LAN));
});

router.get('/getCurrencyConfig', function(req, res, next) {
    res.jsonp(CURRENCY);
});

router.get('/getUserConfig', function(req, res, next) {
    res.jsonp(USER);
});

router.get('/getMarketConfig', function(req, res, next) {
    res.jsonp(MARKET);
});

router.get('/r/:recommendCode', function(req, res, next) {
  var recommendCode = req.params.recommendCode;
  res.cookie(ENV + 'recommendCode', recommendCode);
  res.redirect('/register');
});

router.get('/setLan', function(req, res, next) {
    res.end();
});

module.exports = router;
