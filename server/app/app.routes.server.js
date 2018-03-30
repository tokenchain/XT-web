/**
 * app路由中间件
 * 对匹配的路由使用中间件app.use(path,middleware)
 * Created by SivenLee on 2017/3/14.
 */
module.exports = function(app){
    //首页路由
    app.use('/', require('../routes/index.server.route.js'));
    //不需授权的路由
    app.use('/trade', require('../routes/trade.server.route'));
    app.use('/trading', require('../routes/chbtc.server.route'));
    app.use('/tradePro', require('../routes/tradePro.server.route'));
    app.use('/kline', require('../routes/kline.server.route'));
    app.use('/help', require('../routes/help.server.route'));
    app.use('/blog', require('../routes/blog.server.route'));
    app.use('/newcoin', require('../routes/newcoin.server.route'));
    //用户中心需要授权的路由
    app.use('/u', require('../routes/u.server.route'));

    return app;

}