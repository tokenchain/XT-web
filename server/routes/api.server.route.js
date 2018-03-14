/**
 * 用户相关路由
 * Created by SivenLee on 2017/3/14.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render(TEMP_FULL,{
        templateMain:'api/index.html'
    });
});
router.get('/websocket', function(req, res, next) {
    res.render(TEMP_FULL,{
        templateMain:'api/websocket_index.html'
    });
});






module.exports = router;