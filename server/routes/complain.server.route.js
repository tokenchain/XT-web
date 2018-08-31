/**
/**
 * Created by wuxin on 2018/8/10.
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
    var uId = req.cookies[ENV + "uid"],
        uOn = req.cookies[ENV + "uon"],
        uName = req.cookies[ENV + "uname"];
    if (!uId || uOn != 1 || !uName) {
        res.redirect('/login');
    } else {
        next();
    }
});

router.get('/', function (req, res, next) {
    res.redirect('/u/account');
});
//财务中心
router.get('/complains', function (req, res, next) {
    var obj = req.query
    res.render(TEMP_COMPLAIN, {
        templateMain: 'complain/complains.html',
        website: obj.website,
        id: obj.id
    });
});
//综合账单
router.get('/addComplain', function (req, res, next) {
    var obj = req.query
    res.render(TEMP_COMPLAIN, {
        templateMain: 'complain/addComplain.html',
        website: obj.website,
        id: obj.id
    });
});

module.exports = router;