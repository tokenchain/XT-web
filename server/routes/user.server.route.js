/**
 * 用户相关路由
 * Created by SivenLee on 2017/3/14.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.redirect('/user/login');
});

router.get('/login', function(req, res, next) {
    res.render(TEMP_FULL,{
        templateMain:'user/login.html',
        templateMenu:'user/register.html'
    });
});

router.get('/register', function(req, res, next) {
    res.render(TEMP_FULL,{
        templateMain:'user/register.html'
    });
});


module.exports = router;