/**
 *作者: GongQi
 *时间: 2018/5/3
 *功能: 杠杆交易路由
 */

var express = require('express');
var router = express.Router();

router.get(['/', '/:market'], function(req, res, next) {
    var market = req.params.market;

    if(!market){
        res.redirect('/leverage/etc_btc');
    }else{
        //页面渲染
        res.render(TEMP_TRADE_PRO, {
            templateMain : 'leverage/v2/index.html',
            market : market
        });
    }
});

module.exports = router;