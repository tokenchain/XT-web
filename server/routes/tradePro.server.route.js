/**
 * 交易相关路由
 * Created by SivenLee on 2017/3/14.
 */
var express = require('express');
var router = express.Router();

router.get(['/', '/:market'], function(req, res, next) {
    var market = req.params.market;

    if(!market){
        res.redirect('/tradePro/etc_btc');
    }else{
        //页面渲染
        res.render(TEMP_TRADE_PRO, {
            templateMain : 'tradePro/v2/index.html',
            market : market
        });
    }
});

module.exports = router;