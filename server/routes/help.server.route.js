/**
 * 用户相关路由
 * Created by SivenLee on 2017/3/14.
 */
var express = require('express');
var router = express.Router();

// router.get('/', function (req, res, next) {
//     res.render(TEMP_FULL, {
//         templateMain: 'help/index.html'
//     });
// });


// router.get('/display', function (req, res, next) {
//     res.render(TEMP_FULL, {
//         templateMain: 'help/display.html',
//         //articleId: id
//     });
// });

// router.get('/coin', function (req, res, next) {
//     res.render(TEMP_FULL, {
//         templateMain: 'help/coin.html',
//         //articleId: id
//     });
// });

// router.get('/list', function (req, res, next) {
//     res.render(TEMP_FULL, {
//         templateMain: 'help/list.html'
//     });
// });

router.get('/leverRule', function (req, res, next) {
    var temp = 'activity/scales.html';
    if (LAN != 'cn' && LAN != 'hk') {
        temp = 'activity/scales_en.html'
    }
    res.render(TEMP_FULL, {
        templateMain: temp
    });
});

// router.get('/leverTech', function (req, res, next) {
//     var temp = 'activity/tech.html';
//     if (LAN != 'cn' && LAN != 'hk') {
//         temp = 'activity/tech_en.html'
//     }
//     res.render(TEMP_FULL, {
//         templateMain: temp
//     });
// });

// router.get('/forwardRule', function (req, res, next) {
//     var temp = 'activity/forward.html';
//     if (LAN != 'cn' && LAN != 'hk') {
//         temp = 'activity/forward_en.html'
//     }
//     res.render(TEMP_FULL, {
//         templateMain: temp
//     });
// });

router.get('/restApi', function (req, res, next) {
    res.render(TEMP_FULL, {
        templateMain: 'help/api/ws.html'
        // templateChild: 'restApi.html'
    });
});


router.get('/httpApi', function (req, res, next) {
    res.render(TEMP_FULL, {
        templateMain: 'help/api/http.html'
        // templateChild: 'restApi.html'
    });
});


/**
 *作者: GongQi
 *时间: 2018/5/8
 *功能:
 */
router.get('/apiContent', function (req, res, next) {
    res.render(TEMP_FULL, {
        templateMain: 'api/index.html',
        templateChild: 'api_content.html'
    });
});

router.get('/websocketApi', function (req, res, next) {
    res.render(TEMP_FULL, {
        templateMain: 'api/index.html',
        templateChild: 'websocketApi.html'
    });
});

router.get('/rate', function (req, res, next) {
    res.render(TEMP_FULL, {
        templateMain: 'help/rate.html'
    });
});

router.get('/search', function (req, res, next) {
    res.render(TEMP_FULL, {
        templateMain: 'help/search_result.html'
    });
});

router.get('/articles', function (req, res, next) {
    res.render(TEMP_FULL, {
        templateMain: 'help/index.html'
    });
});
// router.get('/escape', function (req, res, next) {
//     res.render(TEMP_FULL, {
//         templateMain: 'help/escape.html'
//     });
// });
router.get('/rule', function (req, res, next) {
    res.render(TEMP_FULL, {
        templateMain: 'help/rule.html'
    });
});
router.get('/privacy', function (req, res, next) {
    res.render(TEMP_FULL, {
        templateMain: 'help/privacy.html'
    });
});
router.get('/agreement', function (req, res, next) {
    res.render(TEMP_FULL, {
        templateMain: 'help/agreement.html'
    });
});
router.get('/OTCagreement', function (req, res, next) {
    res.render(TEMP_FULL, {
        templateMain: 'help/OTCagreement.html'
    });
});

module.exports = router;

