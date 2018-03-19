/**
 * Created by SivenLee on 2017/3/14.
 */
var express = require('express');
var router = express.Router();


//录状态控制
router.use(function (req, res, next) {
   var uOn = parseInt(req.cookies[ENV + "uon"]);
   console.log("UON：" + uOn);
   switch(uOn){
       case 1:
           //通过二次登陆验证
           next();
           break;
       case 0:
           //需要登录验证
           res.redirect('/loginAuth');
           break;
       case 2:
           //需要Google登录验证
           res.redirect('/loginAuth');
           break;
       case 3:
           //需要异地登录验证
           res.redirect('/loginAuth');
           break;
       case 4:
           //需要2和3的验证
           res.redirect('/loginAuth');
           break;
       case 5:
           //需要设置二级密码
           res.redirect('/u/safe/safePwd');
           break;
       default:
           //否则都不通过验证
           res.redirect('/login');
   }
})

//用户权限检测
router.use(function (req, res, next) {
    var sessionId = req.cookies[ENV + "JSESSIONID"],
        uId = req.cookies[ENV + "uid"],
        uOn = req.cookies[ENV + "uon"],
        uName = req.cookies[ENV + "uname"];
    if(!sessionId || !uId || uOn != 1 || !uName){
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
//充值业务
router.get(['/payin','/payin/:coin'], function(req, res, next) {
    var coin = req.params.coin;
    if(!coin){
        res.redirect('/u/payin/btc');
    }else{
        res.render(TEMP_MANAGE,{
            templateMain:'u/asset/payin.html',
            coin : coin.toLowerCase(),
            column : 0
        });
    }
});
//提现业务
router.get(['/payout','/payout/:coin'], function(req, res, next) {
    var coin = req.params.coin;
    if(!coin){
        res.redirect('/u/payout/btc');
    }else{
        res.render(TEMP_MANAGE,{
            templateMain:'u/asset/payout.html',
            coin : coin.toLowerCase(),
            column : 0
        });
    }
});
//糖果领取
router.get(['/sweet','/sweet/:coin'], function(req, res, next) {
    var coin = req.params.coin;
    if(!coin){
        res.redirect('/u/sweet/btc');
    }else{
        res.render(TEMP_MANAGE,{
            templateMain:'u/asset/sweet.html',
            coin : coin.toLowerCase(),
            column : 0
        });
    }
});
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

module.exports = router;
