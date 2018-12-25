/**
 * app入口文件
 * Created by SivenLee on 2017/3/14.
 */
var express = require('express');
var app = express();
//引入第三方中间件
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var browserSync = require('browser-sync');   //热加载
// var reload = browserSync.reload;   //热加载

//使用app.use(logger('dev'))可以将请求信息打印在控制台
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(require('node-sass-middleware')({
    src:path.join(__dirname, 'public'),
    outputStyle: 'compressed'
}));
app.use(require('less-middleware')(path.join(__dirname, 'public')));
//静态目录资源设置
app.use('/', express.static(path.join(__dirname, 'public')));

//模板视图文件
app.set('views', path.join(__dirname, 'views'));
//set ejs to html file
app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');

//是否开启视图缓存
app.set('view cache', false);
app.set('x-powered-by', true);
app.set('jsonp callback name', 'jsoncallback');
//启用区分路径大小写
//app.set('case sensitive routing', true);
//app.set('strict routing', true);


// app init
require('./server/app/app.init.server')(app);
// app route init
require('./server/app/app.routes.server')(app);
// app error
require('./server/app/app.error.server')(app);

module.exports = app;
