/**
 * app路由中间件
 * 对匹配的路由使用中间件app.use(path,middleware)
 * Created by SivenLee on 2017/3/14.
 */
module.exports = function(app){
    //首页路由
    app.use('/', require('../routes/index.server.route.js'));
    //用户中心需要授权的路由
    //app.use('/u', require('../routes/u.server.route'));
    //app.use('/u/asset', require('../routes/u.asset.server.route'));
    //app.use('/u/safe', require('../routes/u.safe.server.route'));
    //app.use('/u/payin', require('../routes/u.payin.server.route'));
    //app.use('/u/payout', require('../routes/u.panout.server.route'));
    //app.use('/u/loan', require('../routes/u.loan.server.route'));
    //app.use('/u/loanout', require('../routes/u.loanout.server.route'));
    //app.use('/u/bill', require('../routes/u.bill.server.route'));
    //app.use('/u/account', require('../routes/u.account.server.route'));
    //不需授权的路由
    //app.use('/entrust', require('../routes/entrust.server.route'));
    app.use('/trade', require('../routes/trade.server.route'));
    app.use('/trading', require('../routes/chbtc.server.route'));
    app.use('/tradePro', require('../routes/tradePro.server.route'));
    //app.use('/tradeNew', require('../routes/tradeNew.server.route'));
    app.use('/kline', require('../routes/kline.server.route'));
    /*app.use('/user', require('../routes/user.server.route'));*/
    app.use('/help', require('../routes/help.server.route'));
    app.use('/blog', require('../routes/blog.server.route'));
    //app.use('/about', require('../routes/about.server.route'));
    //app.use('/app', require('../routes/app.server.route'));
    //app.use('/safe', require('../routes/safe.server.route'));
    //app.use('/api', require('../routes/api.server.route'));
    //app.use('/activity', require('../routes/activity.server.route'));
    app.use('/newcoin', require('../routes/newcoin.server.route'));
    //app.use('/exchange', require('../routes/exchange.server.route'));

    //用户中心需要授权的路由
    app.use('/u', require('../routes/u.server.route'));

    return app;

}