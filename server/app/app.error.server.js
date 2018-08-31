/**
 * app错误处理模块
 * Created by SivenLee on 2017/3/14.
 */

module.exports = function(app){
    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
        var err = new Error('File Not Found');
        err.status = 404;
        next(err);
    });

    // error handler
    app.use(function (err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = (ENV == 'w' || ENV == 't') ? err : {};

        // render the error page
        res.status(err.status || 500);
        //res.send('404');
        //res.render('cn/error');
        if(ENV == 'w' || ENV == 't'){
            //开发环境直接显示错误信息
            res.render('cn/error');
        }else{
            //其他环境跳转到404页面
            res.render('404');
            //res.render('cn/error');
        }
    });

    return app;

}