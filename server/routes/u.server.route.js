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
router.get('/asset2', function(req, res, next) {
    res.render(TEMP_MANAGE,{
        templateMain:'u/asset/index.html',
        column : 0
    });
});
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
/*router.get('/safe', function(req, res, next) {
    res.render(TEMP_MANAGE,{
        templateMain:'u/safe/index.html'
    });
});

router.get('/safe/setLoginPwd', function(req, res, next) {
    res.render(TEMP_MANAGE,{
        templateMain:'u/safe/setLoginPwd.html'
    });
});

router.get('/safe/setSafePwd', function(req, res, next) {
    res.render(TEMP_MANAGE,{
        templateMain:'u/safe/setSafePwd.html'
    });
});

router.get('/safe/resetSafePwd', function(req, res, next) {
  res.render(TEMP_MANAGE,{
    templateMain:'u/safe/resetSafePwd.html'
  });
});

router.get('/safe/setEmail', function(req, res, next) {
    res.render(TEMP_MANAGE,{
        templateMain:'u/safe/setEmail.html'
    });
});

router.get('/safe/setMobile', function(req, res, next) {
  res.render(TEMP_MANAGE,{
    templateMain:'u/safe/setMobile.html'
  });
});

router.get('/safe/setStrategy', function(req, res, next) {
  res.render(TEMP_MANAGE,{
    templateMain:'u/safe/setStrategy.html'
  });
});

router.get('/safe/setGoogle', function(req, res, next) {
    res.render(TEMP_MANAGE,{
        templateMain:'u/safe/setGoogle.html'
    });
});

router.get('/safe/smsLoginCheck', function(req, res, next) {
    res.render(TEMP_MANAGE,{
        templateMain:'u/safe/smsLoginCheck.html'
    });
});


router.get('/safe/loginGoogleAuth', function(req, res, next) {
    res.render(TEMP_MANAGE,{
        templateMain:'u/safe/loginGoogleAuth.html'
    });
});


router.get('/safe/payGoogleAuth', function(req, res, next) {
    res.render(TEMP_MANAGE,{
        templateMain:'u/safe/payGoogleAuth.html'
    });
});

router.get('/safe/payMobileAuth', function(req, res, next) {
    res.render(TEMP_MANAGE,{
        templateMain:'u/safe/payMobileAuth.html'
    });
});

router.get('/fund', function(req, res, next) {
    res.render(TEMP_MANAGE,{
        templateMain:'u/fund/index.html'
    });
});

router.get('/fund/payin', function(req, res, next) {
    res.render(TEMP_MANAGE,{
        templateMain:'u/fund/payin.html'
    });
});

router.get('/fund/payout', function(req, res, next) {
    res.render(TEMP_MANAGE,{
        templateMain:'u/fund/payout.html'
    });
});

router.get('/fund/loan', function(req, res, next) {
    res.render(TEMP_MANAGE,{
        templateMain:'u/fund/loan.html'
    });
});

router.get('/fund/transfer', function(req, res, next) {
  res.render(TEMP_MANAGE,{
    templateMain:'u/fund/transfer.html'
  });
});

router.get('/fund/investor', function(req, res, next) {
  res.render(TEMP_MANAGE,{
    templateMain:'u/fund/investor.html'
  });
});

router.get('/fund/coupon', function(req, res, next) {
  res.render(TEMP_MANAGE,{
    templateMain:'u/fund/coupon.html'
  });
});

router.get('/other/buy', function(req, res, next) {
  res.render(TEMP_MANAGE,{
    templateMain:'u/other/buy.html'
  });
});

router.get('/other/usdbuy', function(req, res, next) {
  res.render(TEMP_MANAGE,{
    templateMain:'u/other/usdbuy.html'
  });
});
router.get('/other/rmbbuy', function(req, res, next) {
  res.render(TEMP_MANAGE,{
    templateMain:'u/other/rmbbuy.html'
  });
});
router.get('/other/buyxbtc', function(req, res, next) {
  res.render(TEMP_MANAGE,{
    templateMain:'u/other/buyxbtc.html'
  });
});
*/

module.exports = router;
