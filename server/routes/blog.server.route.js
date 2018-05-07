/**
 * 公告相关路由
 * Created by SivenLee on 2017/3/14.
 */
var express = require('express');
var router = express.Router();
//var axios = require('axios');

router.get('/', function(req, res, next) {
    res.render(TEMP_FULL,{
        templateMain:'blog/index.html'
    });
});
router.get('/display2', function(req, res, next) {

    res.render(TEMP_FULL,{
        templateMain:'blog/display.html'
    });

});

router.get('/display', function(req, res, next) {

    res.render(TEMP_FULL,{
        templateMain:'blog/display.html'
    });

});

// router.get('/display', function(req, res, next) {
//     res.render(TEMP_FULL,{
//         templateMain:'blog/displays.html'
//     });
//
//     // METHOD.axios({
//     //     method : 'getProblemContent',
//     //     param : {
//     //         ids : req.query.id
//     //     },
//     //     success : function (json) {
//     //         res.render(TEMP_FULL,{
//     //             templateMain:'blog/displays.html',
//     //             content : json.datas.problemList[0],
//     //             newsType : req.query.type
//     //         });
//     //     }
//     // },next)
// });

module.exports = router;

