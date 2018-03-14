/**
 * 交易相关路由
 * Created by SivenLee on 2017/3/14.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

    //不带参数访问显示列表页
    /*res.render(TEMP_TRADE, {
        templateMain : 'trade/list.html',
        market : 'null'
    });*/
    //获取默认市场
    var reqProtocol = '';
    if(ENV == 'w' || ENV == 't'){
        reqProtocol = 'http:';
    }else{
        reqProtocol = 'https:';
    }
    res.redirect(reqProtocol + '' + DOMAIN_MAIN + '/trade');
});

router.get('/:market', function(req, res, next) {
    var market = req.params.market;

    //通过配置文件排查市场是否存在并可用
    // var isMarket = false;
    // for(var key in MARKET){
    //     if(market == key && !MARKET[key].disable){
    //         isMarket = true;
    //     }
    // }
    // if(!isMarket){
    //     res.redirect('/trade/etc_btc');
    // }
    //页面渲染
    res.render(TEMP_TRADE, {
        templateMain : 'tradePro/index.html',
        market : market
    });
});

module.exports = router;