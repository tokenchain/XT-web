/**
 * 开发环境下的配置信息
 * 公共项目部署使用
 * Created by SivenLee on 2017/3/15.
 */
module.exports = {
    //环境变量前缀(用于cookie前缀区分环境)
    ENV: "w",
    //静态目录
    STATIC: "/src",
    IMG_STATIC: "/src",   //图片资源地址
    STYLE_STATIC: "/src", //样式请求地址
    STATIC2: "../views/cn/service/",
    //默认语言
    LAN: "cn",
    //法币单位
    UNIT: "krw",
    //网站端口
    PORT: "9002",
    //版本号
    VERSION: Date.now(),

    //域配置
    DOMAIN_BASE : "ww.xt.com",

    DOMAIN_DEV : "",  //后端接口 域
    WEBSOCKET : "wss://ws.xt.com",     //WEBSOCKET 服务地址

    DISH_API: "https://ws.xt.com"     //盘口数据地址
}
/* * 开发环境前端 + 开发环境后端* */
