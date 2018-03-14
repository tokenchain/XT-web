/**
 * C2C交易相关路由
 * Created by SivenLee on 2017/11/22.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render(TEMP_USER, {
        templateMain : 'exchange/index.html'
    });
});



//用户权限检测(此句后的路由都需要登录权限)
router.use(function (req, res, next) {
    var sessionId = req.cookies[ENV + "JSESSIONID"],
        uId = req.cookies[ENV + "uid"],
        uOn = req.cookies[ENV + "uon"],
        uName = req.cookies[ENV + "uname"];
    if(!sessionId || !uId || uOn != 1 || !uName){
        res.redirect('/login');
    }else{
        next();
    }
});

router.get('/entrust', function(req, res, next) {
    res.render(TEMP_USER, {
        templateMain : 'exchange/entrust.html'
    });
});
router.get('/entrustList', function(req, res, next) {
    res.render(TEMP_USER, {
        templateMain : 'exchange/entrustList.html'
    });
});

router.get('/account', function(req, res, next) {
    res.render(TEMP_USER, {
        templateMain : 'exchange/account.html'
    });
});

router.get('/orderCreate', function(req, res, next) {
    res.render(TEMP_USER, {
        templateMain : 'exchange/orderCreate.html'
    });
});

router.get('/orderList', function(req, res, next) {
    res.render(TEMP_USER, {
        templateMain : 'exchange/orderList.html'
    });
});

router.get('/orderInfo', function(req, res, next) {
    res.render(TEMP_USER, {
        templateMain : 'exchange/orderInfo.html'
    });
});

router.get('/userInfo', function(req, res, next) {
    res.render(TEMP_USER, {
        templateMain : 'exchange/userInfo.html'
    });
});

router.get('/dispute', function(req, res, next) {
    res.render(TEMP_USER, {
        templateMain : 'exchange/dispute.html'
    });
});

router.get('/business', function(req, res, next) {
    res.render(TEMP_USER, {
        templateMain : 'exchange/business.html'
    });
});

router.get('/apply', function(req, res, next) {
    res.render(TEMP_USER, {
        templateMain : 'exchange/apply.html'
    });
});

router.get('/report', function(req, res, next) {
    res.render(TEMP_USER, {
        templateMain : 'exchange/report.html'
    });
});

module.exports = router;