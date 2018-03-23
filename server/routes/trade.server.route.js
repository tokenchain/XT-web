/**
 * 交易相关路由
 * Created by SivenLee on 2017/3/14.
 */
var express = require('express');
var router = express.Router();

router.get(['/', '/:market'], function(req, res, next) {
    var market = req.params.market;

    if(!market){
        res.redirect('/trade/etc_btc');
    }else{
        //页面渲染
        res.render(TEMP_TRADE, {
            templateMain : 'tradePro/index.html',
            market : market
        });
    }
});

module.exports = router;