/**
 * 用户相关路由
 * Created by SivenLee on 2017/3/14.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render(TEMP_FULL,{
        templateMain:'help/index.html'
    });
});


router.get('/display', function(req, res, next) {
  res.render(TEMP_FULL,{
    templateMain:'help/display.html',
    //articleId: id
  });
});

router.get('/coin', function(req, res, next) {
    res.render(TEMP_FULL,{
        templateMain:'help/coin.html',
        //articleId: id
    });
});

router.get('/list', function(req, res, next) {
    res.render(TEMP_FULL,{
        templateMain:'help/list.html'
    });
});

router.get('/leverRule', function(req, res, next) {
    var temp = 'activity/scales.html';
    if(LAN != 'cn' && LAN != 'hk'){
        temp = 'activity/scales_en.html'
    }
    res.render(TEMP_FULL,{
        templateMain: temp
    });
});

router.get('/leverTech', function(req, res, next) {
    var temp = 'activity/tech.html';
    if(LAN != 'cn' && LAN != 'hk'){
        temp = 'activity/tech_en.html'
    }
    res.render(TEMP_FULL,{
        templateMain: temp
    });
});

router.get('/forwardRule', function(req, res, next) {
    var temp = 'activity/forward.html';
    if(LAN != 'cn' && LAN != 'hk'){
        temp = 'activity/forward_en.html'
    }
    res.render(TEMP_FULL,{
        templateMain: temp
    });
});

router.get('/restApi', function(req, res, next) {
    res.render(TEMP_FULL,{
        templateMain:'api/index.html',
        templateChild : 'restApi.html'
    });
});

router.get('/websocketApi', function(req, res, next) {
    res.render(TEMP_FULL,{
        templateMain:'api/index.html',
        templateChild : 'websocketApi.html'
    });
});

router.get('/rate', function(req, res, next) {
    res.render(TEMP_FULL,{
        templateMain:'help/rate.html'
    });
});

module.exports = router;

