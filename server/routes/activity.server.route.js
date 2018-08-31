/**
 * 活动相关路由
 * Created by SivenLee on 2017/3/14.
 */
var express = require('express');
var router = express.Router();

// router.get('/', function(req, res, next) {
//     res.render(TEMP_FULL,{
//         templateMain:'activity/million.html'
//     });
// });
//
// router.get('/tech', function(req, res, next) {
//     res.render(TEMP_FULL,{
//         templateMain:'activity/tech.html'
//     });
// });
router.get('/newsActivity', function (req, res, next) {
    res.render(TEMP_FULL, {
        templateMain: 'activity/newsActivity.html'
    });
});

module.exports = router;