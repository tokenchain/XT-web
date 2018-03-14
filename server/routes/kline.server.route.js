/**
 * K线相关路由
 * Created by SivenLee on 2017/8/12.
 */
var express = require('express');
var router = express.Router();
var axios = require('axios');

var chbtcFormat = function (market) {
    return 'chbtc'+ market.replace('_','');
}

router.get('/', function(req, res, next) {
    res.redirect('/kline/lite/etc_btc');
});
//从CHBTC请求测试数据
router.get('/klineLastData', function(req, res, next) {
    axios.get('https://trans.chbtc.com/markets/klineLastData', {
        params: {
            //jsoncallback : req.query.jsoncallback,
            needTickers: req.query.needTickers,
            symbol : chbtcFormat(req.query.symbol),
            type : req.query.type,
            size : req.query.size,
            since : req.query.since,
            '_' : req.query['_'],
        }
    }).then(function (result) {

        var json = result.data;

        if(json.isSuc){
            res.jsonp(json);
        }else{
            var err = new Error(json.des);
            err.status = 404;
            return next(err);
        }
    }).catch(function (error) {
        console.log(error);
    });
});
//从CHBTC请求测试数据
router.get('/depth', function(req, res, next) {
    axios.get('https://trans.chbtc.com/depth', {
        params: {
            //jsoncallback : req.query.jsoncallback,
            lastTime: req.query.lastTime,
            symbol : chbtcFormat(req.query.symbol),
            length : req.query.length,
            depth : req.query.depth
        }
    }).then(function (result) {

        var json = result.data;

        //坑爹的数据格式 每个都不一样
        if(json.result == 'success'){
            res.jsonp(json);
        }else{
            var err = new Error(json.des);
            err.status = 404;
            return next(err);
        }
    }).catch(function (error) {
        console.log(error);
    });
});
//从CHBTC请求测试数据
router.get('/getLastTrades', function(req, res, next) {
    axios.get('https://trans.chbtc.com/getLastTrades', {
        params: {
            //jsoncallback : req.query.jsoncallback,
            last_trade_tid: req.query.last_trade_tid,
            symbol : chbtcFormat(req.query.symbol)
        }
    }).then(function (result) {

        var json = result.data;

        //坑爹的数据格式 每个都不一样
        if(json.data){
            res.jsonp(json);
        }else{
            var err = new Error(json.des);
            err.status = 404;
            return next(err);
        }
    }).catch(function (error) {
        console.log(error);
    });
});
//页面渲染
router.get('/lite/:market', function(req, res, next) {
    var market = req.params.market;

    //通过配置文件排查市场是否存在并可用
    /*var isMarket = false;
    for(var key in MARKET){
        if(market == key && !MARKET[key].disable){
            isMarket = true;
        }
    }
    if(!isMarket){
        res.redirect('/kline/lite/etc_btc');
    }*/
    //页面渲染
    res.render('cn/kline/lite.html', {
        market : market
    });
});
//页面渲染
router.get('/:market', function(req, res, next) {
    var market = req.params.market;

    //通过配置文件排查市场是否存在并可用
    /*var isMarket = false;
    for(var key in MARKET){
        if(market == key && !MARKET[key].disable){
            isMarket = true;
        }
    }
    if(!isMarket){
        res.redirect('/kline/etc_btc');
    }*/
    //页面渲染
    res.render('cn/kline/index.html', {
        market : market
    });
});





module.exports = router;