/**
 * 用户相关路由
 * Created by SivenLee on 2017/3/14.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render(TEMP_MAIN,{
        templateMain:'safe/index.html'
    });
});

router.get('/setStrategy', function(req, res, next) {
  res.render(TEMP_MAIN,{
    templateMain:'safe/setStrategy.html'
  });
});






module.exports = router;