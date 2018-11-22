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
    // res.render(TEMP_HOME,{
    //     templateMain:'index.html'
    // });
    //}
    console.log(global.LAN, '-------global.LAN  index.server.route.js------')
    res.render('cn/zbg/index.html');
});

// router.get('/activity', function(req, res, next) {
//     res.render(TEMP_FULL,{
//         templateMain:'activity/million.html'
//     });
// });

// router.get('/dev', function(req, res, next) {
//     res.render('cn/service/index-graph.html');
// });

router.get('/500', function(req, res, next) {
    res.render('500.html');
});
router.get('/404', function(req, res, next) {
    res.render('404.html');
});
router.get('/sorry', function(req, res, next) {
    res.render('sorry.html');
});

// router.get('/exx', function(req, res, next) {
//     res.render('cn/activity/exx');
// });

// router.get('/app', function(req, res, next) {
//     res.render(TEMP_FULL,{
//         templateMain:'app/index.html'
//     });
// });

// router.get('/about', function(req, res, next) {
//     res.render(TEMP_FULL,{
//         templateMain:'about/index.html'
//     });
// });
//登录
router.get('/login', function(req, res, next) {
    res.render(TEMP_FULL_NEW,{
        templateMain:'user/login.html'
    });
});

router.get('/login/success', function(req, res, next) {
    res.render(TEMP_FULL_NEW,{
        templateMain:'user/loginsuccess.html'
    });
});

router.get('/regSuccess', function(req, res, next) {
    res.render(TEMP_FULL_NEW,{
        templateMain:'user/regSuccess.html'
    });
});


router.get('/zt', function(req, res, next) {
    res.render('cn/zt/zt.html')
});
// router.get('/zb_zt', function(req, res, next) {
//     res.render('cn/zt/zb_zt.html')
// });
router.get('/ztfee', function(req, res, next) {
    res.render('cn/zt/ztfee.html')
});
router.get('/newztfee', function(req, res, next) {
    res.render('cn/zt/ztfee.html')
});
// router.get('/ztuser', function(req, res, next) {
//     res.render('cn/zt/ztuser.html')
// });
router.get('/ztminers', function(req, res, next) {
    res.render('cn/zt/ztminer-old.html')
});

router.get('/ztminer', function(req, res, next) {
    res.render('cn/zt/ztminer.html')
});

router.get('/tradeRange', function(req, res, next) {
    res.render('cn/zt/tradeRange.html')
});

router.get('/miner-calculator', function(req, res, next) {
    res.render('cn/zt/miner-calculator.html')
});




router.get('/zttest', function(req, res, next) {
    res.render('cn/zt/test.html')
});

router.get('/appstore', function(req, res, next) {
    res.render('cn/zbg/app.html')
});
// router.get('/market', function(req, res, next) {
//     res.render('cn/zbg/market.html')
// });

// router.get('/marketglobal', function(req, res, next) {
//     res.render('cn/zbg/marketglobal.html')
// });

router.get('/newmarket', function(req, res, next) {
    res.render('cn/zbg/newmarket.html')
});


router.get('/info', function(req, res, next) {

    res.render('cn/tradePro/disinfo.html')
});

router.get('/otcTrade', function(req, res, next) {
    res.render('cn/otcTrade.html')
});

// router.get('/project-hpc', function(req, res, next) {
//     res.render('cn/zbg/project-hpc.html')
// });
// router.get('/project-ftl', function(req, res, next) {
//     res.render('cn/zbg/project-ftl.html')
// });
// router.get('/project-xwc', function(req, res, next) {
//     res.render('cn/zbg/project-xwc.html')
// });
// router.get('/project-uc', function(req, res, next) {
//     res.render('cn/zbg/project-uc.html')
// });
// router.get('/project-dag', function(req, res, next) {
//     res.render('cn/zbg/project-dag.html')
// });
// router.get('/project-fc', function(req, res, next) {
//     res.render('cn/zbg/project-fc.html')
// });
// router.get('/project-lext', function(req, res, next) {
//     res.render('cn/zbg/project-lext.html')
// });
// router.get('/project-sdc', function(req, res, next) {
//     res.render('cn/zbg/project-sdc.html')
// });
// router.get('/project-eubc', function(req, res, next) {
//     res.render('cn/zbg/project-eubc.html')
// });
// router.get('/project-bcac', function(req, res, next) {
//     res.render('cn/zbg/project-bcac.html')
// });
// router.get('/project-comc', function(req, res, next) {
//     res.render('cn/zbg/project-comc.html')
// });
// router.get('/project-airc', function(req, res, next) {
//     res.render('cn/zbg/project-airc.html')
// });
// router.get('/project-vdo', function(req, res, next) {
//     res.render('cn/zbg/project-vdo.html')
// });






router.get('/apply', function(req, res, next) {
    res.render('cn/zbg/apply.html')
});

router.get('/icon', function(req, res, next) {
    res.render('cn/service/icon.html')
});

router.get('/icon2', function(req, res, next) {
    res.render('cn/service/icon2.html')
});

//登录验证
router.get('/loginAuth', function(req, res, next) {
    res.render(TEMP_FULL,{
        templateMain:'user/logAuthen.html'
    });
});
// router.get('/passport', function(req, res, next) {
//     res.render(TEMP_FULL,{
//         templateMain:'user/passport.html'
//     });
// });

router.get('/register', function(req, res, next) {
    /*res.cookie('secureKey', 'hello !', {
        expires: 0,
        httpOnly: true ,
        domain: '.' + DOMAIN_BASE,
        path: '/',
        secure: false
    });*/
    res.render(TEMP_FULL_NEW,{
        templateMain:'user/register_new.html'
    });
});

router.get('/findLoginPwd', function(req, res, next) {
    res.render(TEMP_FULL_NEW,{
        templateMain:'user/passwordFind.html'
    });
});

//推荐跳转至注册
router.get('/r/:recommendCode', function(req, res, next) {
    var recommendCode = req.params.recommendCode;
    res.cookie(ENV + 'recommendCode', recommendCode);
    res.redirect('/register');
});

router.get('/new_register', function(req, res, next) {
    /*res.cookie('secureKey', 'hello !', {
        expires: 0,
        httpOnly: true ,
        domain: '.' + DOMAIN_BASE,
        path: '/',
        secure: false
    });*/
    res.render(TEMP_FULL,{
        templateMain:'user/new_register.html'
    });
});

/*router.get('/getWebConfig', function(req, res, next) {
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

router.get('/setLan', function(req, res, next) {
    res.end();
});*/

module.exports = router;
