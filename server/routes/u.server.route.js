/**
 /**
 * Created by SivenLee on 2017/3/14.
 */
var express = require('express');
var router = express.Router();


//登录状态控制
router.use(function (req, res, next) {
    var uOn = parseInt(req.cookies[ENV + "uon"]);
    console.log("UON：" + uOn);
    //判断登录状态code
    switch (uOn) {
        case 1:
            //通过二次登陆验证
            next();
            break;
        case 1059:
            //需要邮件验证
            res.redirect('/loginAuth');
            break;
        case 1018:
            //需要Google验证
            res.redirect('/loginAuth');
            break;
        case 1058:
            //需要短信验证
            res.redirect('/loginAuth');
            break;
        /*case 5:
            //需要设置二级密码
            res.redirect('/u/safe/safePwd');
            break;*/
        default:
            //否则都不通过验证
            res.redirect('/login');
    }
})

//用户权限检测
router.use(function (req, res, next) {
    /*var sessionId = req.cookies[ENV + "JSESSIONID"],
        uId = req.cookies[ENV + "uid"],
        uOn = req.cookies[ENV + "uon"],
        uName = req.cookies[ENV + "uname"];
    if(!sessionId || !uId || uOn != 1 || !uName){
        res.redirect('/login');
    }else{
        next();
    }*/
    var uId = req.cookies[ENV + "uid"],
        uOn = req.cookies[ENV + "uon"],
        uName = req.cookies[ENV + "uname"];
    if (!uId || uOn != 1 || !uName) {
        res.redirect('/login');
    } else {
        next();
    }
});
//column
//0财务中心，1用户中心
router.get('/', function (req, res, next) {
    res.redirect('/u/account');
});
//财务中心
router.get('/asset', function (req, res, next) {
    res.render(TEMP_ASSERT, {
        templateMain: 'u/asset/indexNew.html',
        column: 0
    });
});
//综合账单
router.get(['/bill', '/bill/:coin'], function (req, res, next) {
    var coin = req.params.coin;
    res.render(TEMP_MANAGE_NEW, {
        templateMain: 'u/asset/bill.html',
        coin: coin ? coin.toLowerCase() : 'all',
        column: 0
    });
});
//委托记录
router.get(['/entrust', '/entrust/:market'], function (req, res, next) {
    var market = req.params.market;
    if (!market) {
        res.redirect(ROUTER.entrustRouter);
    } else {
        res.render(TEMP_MANAGE_NEW, {
            templateMain: 'u/asset/entrust.html',
            market: market.toLowerCase(),
            column: 0
        });
    }
});
//充值业务-虚拟货币
router.get(['/payin', '/payin/:coin'], function (req, res, next) {
    var coin = req.params.coin;
    if (!coin) {
        res.redirect('/u/payin/btc');
    } else {
        res.render(TEMP_MANAGE_NEW, {
            templateMain: 'u/asset/payin.html',
            coin: coin.toLowerCase(),
            column: 0,
            isLegalCoin: 0
        });
    }
});
//充值业务-法币
router.get(['/payin/legaltender', '/payin/legaltender/:coin'], function (req, res, next) {
    var coin = req.params.coin;
    if (!coin) {
        // res.redirect('/u/payin/legaltender/btc');
    } else {
        res.render(TEMP_MANAGE_NEW, {
            templateMain: ROUTER.legalRouter,
            coin: coin.toLowerCase(),
            column: 0,
            isLegalCoin: 1
        });
    }
});
//提现业务-虚拟货币
router.get(['/payout', '/payout/:coin'], function (req, res, next) {
    var coin = req.params.coin;
    if (!coin) {
        res.redirect('/u/payout/btc');
    } else {
        res.render(TEMP_MANAGE_NEW, {
            templateMain: 'u/asset/payout.html',
            coin: coin.toLowerCase(),
            column: 0,
            isLegalCoin: 0
        });
    }
});
//提现业务-法币
router.get(['/payout/legaltender', '/payout/legaltender/:coin'], function (req, res, next) {
    var coin = req.params.coin;
    if (!coin) {
        res.redirect('/u/payout/legaltender/btc');
    } else {
        res.render(TEMP_MANAGE_NEW, {
            templateMain: 'u/asset/payout.html',
            coin: coin.toLowerCase(),
            column: 0,
            isLegalCoin: 1
        });
    }
});
//糖果领取
// router.get(['/sweet','/sweet/:coin'], function(req, res, next) {
//     var coin = req.params.coin;
//     if(!coin){
//         res.redirect('/u/sweet/btc');
//     }else{
//         res.render(TEMP_MANAGE_NEW,{
//             templateMain:'u/asset/sweet.html',
//             coin : coin.toLowerCase(),
//             column : 0
//         });
//     }
// });
//CHBTC资金转入
router.get('/welcome', function (req, res, next) {
    res.render(TEMP_MANAGE_NEW, {
        templateMain: 'u/welcome.html',
        column: 0
    });
});
//账号
router.get('/account', function (req, res, next) {
    res.render(TEMP_MANAGE_NEW, {
        templateMain: 'u/safe.html',
        column: 1
    });
});
//安全中心
router.get('/safe', function (req, res, next) {
    res.render(TEMP_MANAGE_NEW, {
        templateMain: 'u/safe.html',
        column: 1
    });
});
//API管理界面
router.get('/api', function (req, res, next) {
    res.render(TEMP_MANAGE_NEW, {
        templateMain: 'u/api.html',
        column: 1
    });
});
//推荐人页面
router.get('/recommend', function (req, res, next) {
    res.render(TEMP_MANAGE_NEW, {
        templateMain: 'u/recommend/index.html',
        column: 1
    });
});

router.get('/realName', function (req, res, next) {
    res.render(TEMP_MANAGE_NEW, {
        templateMain: 'u/account/realName.html',
        column: 1
    });
});

router.get('/invite', function (req, res, next) {
    res.render(TEMP_MANAGE_NEW, {
        templateMain: 'u/account/invite.html',
        column: 1
    });
});

router.get('/certify', function (req, res, next) {
    res.render(TEMP_MANAGE_NEW, {
        templateMain: 'u/account/certify.html',
        column: 1
    });
});
router.get('/upload', function (req, res, next) {
    res.render(TEMP_MANAGE_NEW, {
        templateMain: 'u/account/upload.html',
        column: 1
    });
});
router.get('/examine', function (req, res, next) {
    res.render(TEMP_MANAGE_NEW, {
        templateMain: 'u/account/examine.html',
        column: 1
    });
});

/**
 *作者: GongQi
 *时间: 2018/5/23
 *功能: 新增用户认证
 */
router.get('/account/basic_information', function (req, res, next) {
    res.render(TEMP_MANAGE_NEW, {
        templateMain: 'u/certified/basic_information.html',
        column: 2,
        STEP: 'STEP 1'
    });
});
router.get('/realAuth', function (req, res, next) {
    res.render(TEMP_MANAGE_NEW, {
        templateMain: ROUTER.realAuthRouterPage,
        column: 1
    });
});
router.get('/account/payment_information', function (req, res, next) {
    res.render(TEMP_MANAGE_NEW, {
        templateMain: 'u/certified/payment_information.html',
        column: 2,
        STEP: 'STEP 3'
    });
});

/**
 *作者: GongQi
 *时间: 2018/5/29
 *功能: 新增重置提现密码
 */
router.get('/account/reset_funds_pwd', function (req, res, next) {
    res.render(TEMP_MANAGE_NEW, {
        templateMain: 'u/account/reset-funds-pwd.html',
    });
});

/**
 * 2018-9-20
 * zch
 * 收益详情页面
 */
router.get('/earnings', function (req, res, next) {
    res.render(TEMP_MANAGE_NEW, {
        templateMain: 'u/earnings.html',
        column: 1
    });
});

/**
 * 2018-9-20
 * zch
 * 用户数详情页面
 */
router.get('/userDetails', function (req, res, next) {
    res.render(TEMP_MANAGE_NEW, {
        templateMain: 'u/userDetails.html',
        column: 1
    });
});

router.get('/ordersManage', function (req, res, next) {
    res.render(TEMP_MANAGE_NEW, {
        templateMain: 'u/otcSettings/ordersManage.html',
        column: 1
    });
});

router.get(['/ordersDetail', '/ordersDetail/:orderNo'], function (req, res, next) {
    var orderNo = req.params.orderNo;
    res.render(TEMP_MANAGE_NEW, {
        templateMain: 'u/otcSettings/ordersDetail.html',
        orderNo: orderNo ? orderNo.trim() : 'all',
        column: 1
    });
});

router.get('/business', function (req, res, next) {
    res.render(TEMP_MANAGE_NEW, {
        templateMain: 'u/otcSettings/business.html',
        column: 1
    });
});

router.get('/advertisement', function (req, res, next) {
    res.render(TEMP_MANAGE_NEW, {
        templateMain: 'u/otcSettings/advertisement.html',
        column: 1
    });
});

router.get(['/advDetail', '/advDetail/:advNo'], function (req, res, next) {
    var advNo = req.params.advNo;
    res.render(TEMP_MANAGE_NEW, {
        templateMain: 'u/otcSettings/advDetail.html',
        advNo: advNo ? advNo.trim() : 'all',
        column: 1
    });
});

router.get('/publishAdv', function (req, res, next) {
    res.render(TEMP_MANAGE_NEW, {
        templateMain: 'u/otcSettings/publishAdv.html',
        column: 1
    });
});

router.get('/settingsPayType', function (req, res, next) {
    res.render(TEMP_MANAGE_NEW, {
        templateMain: 'u/otcSettings/settingsPayType.html',
        column: 1
    });
});

router.get('/finance', function (req, res, next) {
    res.render(TEMP_MANAGE_NEW, {
        templateMain: 'u/otcSettings/finance.html',
        column: 1
    });
});

module.exports = router;
