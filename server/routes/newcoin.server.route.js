/**
 * 新币种上线路由文件
 * Created by SivenLee on 2017/11/13.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.redirect('/');
});

router.get('/hyperPay', function(req, res, next) {
    res.render(TEMP_FULL,{
        templateMain:'activity/newCoin/hyperPay.html'
    });
});
router.get('/2018', function(req, res, next) {
    res.render(TEMP_FULL,{
        templateMain:'activity/newCoin/2018.html'
    });
});
router.get('/app/2018', function(req, res, next) {
    res.render(TEMP_MOBILE,{
        templateMain:'activity/newCoin/2018_mobile.html'
    });
});

router.get('/bcd', function(req, res, next) {
    var temp = 'activity/newCoin/bcd.html';
    if(LAN != 'cn' && LAN != 'hk'){
        temp = 'activity/newCoin/bcd_en.html'
    }
    res.render(TEMP_FULL,{
        templateMain: temp
    });
});
router.get('/cfun', function(req, res, next) {
    var temp = 'activity/newCoin/cfun.html';
    if(LAN != 'cn' && LAN != 'hk'){
        temp = 'activity/newCoin/cfun_en.html'
    }
    res.render(TEMP_FULL,{
        templateMain: temp
    });
});
router.get('/vlc', function(req, res, next) {
    var temp = 'activity/newCoin/vlc.html';
    if(LAN != 'cn' && LAN != 'hk'){
        temp = 'activity/newCoin/vlc_en.html'
    }
    res.render(TEMP_FULL,{
        templateMain: temp
    });
});

router.get('/bot', function(req, res, next) {
    var temp = 'activity/newCoin/bot.html';
    if(LAN != 'cn' && LAN != 'hk'){
        temp = 'activity/newCoin/bot_en.html'
    }
    res.render(TEMP_FULL,{
        templateMain: temp
    });
});

router.get('/trx', function(req, res, next) {
    var temp = 'activity/newCoin/trx.html';
    if(LAN != 'cn' && LAN != 'hk'){
        temp = 'activity/newCoin/trx_en.html'
    }
    res.render(TEMP_FULL,{
        templateMain: temp
    });
});

router.get('/qash', function(req, res, next) {
    var temp = 'activity/newCoin/qash.html';
    if(LAN != 'cn' && LAN != 'hk'){
        temp = 'activity/newCoin/qash_en.html'
    }
    res.render(TEMP_FULL,{
        templateMain: temp
    });
});


router.get('/mco', function(req, res, next) {
    var temp = 'activity/newCoin/mco.html';
    if(LAN != 'cn' && LAN != 'hk'){
        temp = 'activity/newCoin/mco_en.html'
    }
    res.render(TEMP_FULL,{
        templateMain: temp
    });
});
router.get('/sexc', function(req, res, next) {
    var temp = 'activity/newCoin/sexc.html';
    if(LAN != 'cn' && LAN != 'hk'){
        temp = 'activity/newCoin/sexc_en.html'
    }
    res.render(TEMP_FULL,{
        templateMain: temp
    });
});

router.get('/spc', function(req, res, next) {
    var temp = 'activity/newCoin/spc.html';
    if(LAN != 'cn' && LAN != 'hk'){
        temp = 'activity/newCoin/spc_en.html'
    }
    res.render(TEMP_FULL,{
        templateMain: temp
    });
});


router.get('/tv', function(req, res, next) {
    var temp = 'activity/newCoin/tv.html';
    if(LAN != 'cn' && LAN != 'hk'){
        temp = 'activity/newCoin/tv_en.html'
    }
    res.render(TEMP_FULL,{
        templateMain: temp
    });
});


router.get('/can', function(req, res, next) {
    var temp = 'activity/newCoin/can.html';
    if(LAN != 'cn' && LAN != 'hk'){
        temp = 'activity/newCoin/can_en.html'
    }
    res.render(TEMP_FULL,{
        templateMain: temp
    });
});



router.get('/btm', function(req, res, next) {
    var temp = 'activity/newCoin/btm.html';
    if(LAN != 'cn' && LAN != 'hk'){
        temp = 'activity/newCoin/btm_en.html'
    }
    res.render(TEMP_FULL,{
        templateMain: temp
    });
});



router.get('/ink', function(req, res, next) {
    var temp = 'activity/newCoin/ink.html';
    if(LAN != 'cn' && LAN != 'hk'){
        temp = 'activity/newCoin/ink_en.html'
    }
    res.render(TEMP_FULL,{
        templateMain: temp
    });
});

router.get('/metaverse', function(req, res, next) {
    var temp = 'activity/newCoin/metaverse.html';
    if(LAN != 'cn' && LAN != 'hk'){
        temp = 'activity/newCoin/metaverse_en.html'
    }
    res.render(TEMP_FULL,{
        templateMain: temp
    });
});

module.exports = router;
