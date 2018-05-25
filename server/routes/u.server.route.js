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
   switch(uOn){
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
    if(!uId || uOn != 1 || !uName){
        res.redirect('/login');
    }else{
        next();
    }
});
//column
//0财务中心，1用户中心
router.get('/', function(req, res, next) {
    res.redirect('/u/account');
});
//财务中心
router.get('/asset', function(req, res, next) {
    res.render(TEMP_MANAGE,{
        templateMain:'u/asset/indexNew.html',
        column : 0
    });
});
//综合账单
router.get(['/bill','/bill/:coin'], function(req, res, next) {
    var coin = req.params.coin;
    res.render(TEMP_MANAGE,{
        templateMain:'u/asset/bill.html',
        coin : coin ? coin.toLowerCase() : 'all',
        column : 0
    });
});
//委托记录
router.get(['/entrust','/entrust/:market'], function(req, res, next) {
    var market = req.params.market;
    if(!market){
        res.redirect('/u/entrust/all_all');
    }else{
        res.render(TEMP_MANAGE,{
            templateMain:'u/asset/entrust.html',
            market : market.toLowerCase(),
            column : 0
        });
    }
});
//充值业务-虚拟货币
router.get(['/payin','/payin/:coin'], function(req, res, next) {
    var coin = req.params.coin;
    if(!coin){
        res.redirect('/u/payin/btc');
    }else{
        res.render(TEMP_MANAGE,{
            templateMain:'u/asset/payin.html',
            coin : coin.toLowerCase(),
            column : 0,
            isLayerCoin: 0
        });
    }
});
//充值业务-法币
router.get(['/payin/legaltender','/payin/legaltender/:coin'], function(req, res, next) {
    var coin = req.params.coin;
    if(!coin){
        res.redirect('/u/payin/btc');
    }else{
        res.render(TEMP_MANAGE,{
            templateMain:'u/asset/payin.html',
            coin : coin.toLowerCase(),
            column : 0,
            isLayerCoin: 1
        });
    }
});
//提现业务-虚拟货币
router.get(['/payout','/payout/:coin'], function(req, res, next) {
    var coin = req.params.coin;
    if(!coin){
        res.redirect('/u/payout/btc');
    }else{
        res.render(TEMP_MANAGE,{
            templateMain:'u/asset/payout.html',
            coin : coin.toLowerCase(),
            column : 0,
            isLayerCoin: 0
        });
    }
});
//提现业务-法币
router.get(['/payout/legaltender','/payout/legaltender/:coin'], function(req, res, next) {
    var coin = req.params.coin;
    if(!coin){
        res.redirect('/u/payout/legaltender/btc');
    }else{
        res.render(TEMP_MANAGE,{
            templateMain:'u/asset/payout.html',
            coin : coin.toLowerCase(),
            column : 0,
            isLayerCoin: 1
        });
    }
});
//糖果领取
// router.get(['/sweet','/sweet/:coin'], function(req, res, next) {
//     var coin = req.params.coin;
//     if(!coin){
//         res.redirect('/u/sweet/btc');
//     }else{
//         res.render(TEMP_MANAGE,{
//             templateMain:'u/asset/sweet.html',
//             coin : coin.toLowerCase(),
//             column : 0
//         });
//     }
// });
//CHBTC资金转入
router.get('/welcome', function(req, res, next) {
    res.render(TEMP_MANAGE,{
        templateMain:'u/welcome.html',
        column : 0
    });
});
//账号
router.get('/account', function(req, res, next) {
    res.render(TEMP_MANAGE,{
        templateMain:'u/safe.html',
        column : 1
    });
});
//安全中心
router.get('/safe', function(req, res, next) {
    res.render(TEMP_MANAGE,{
        templateMain:'u/safe.html',
        column : 1
    });
});
//API管理界面
router.get('/api', function(req, res, next) {
    res.render(TEMP_MANAGE,{
        templateMain:'u/api.html',
        column : 1
    });
});
//推荐人页面
router.get('/recommend', function(req, res, next) {
    res.render(TEMP_MANAGE,{
        templateMain:'u/recommend/index.html',
        column : 1
    });
});

/**
 *作者: GongQi
 *时间: 2018/5/23
 *功能: 新增用户认证
 */
router.get('/account/basic_information', function(req, res, next) {
    res.render(TEMP_MANAGE,{
        templateMain:'u/certified/basic_information.html',
        column : 2,
        STEP : 'STEP 1'
    });
});
router.get('/account/verified', function(req, res, next) {
    res.render(TEMP_MANAGE,{
        templateMain:'u/certified/verified.html',
        column : 2,
        STEP : 'STEP 2'

    });
});
router.get('/account/payment_information', function(req, res, next) {
    res.render(TEMP_MANAGE,{
        templateMain:'u/certified/payment_information.html',
        column : 2,
        STEP : 'STEP 3'
    });
});

module.exports = router;
