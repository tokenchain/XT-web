/**
 * 生产环境下的配置信息
 * Created by SivenLee on 2017/3/15.
 */
module.exports = {
    //环境变量前缀(用于cookie前缀区分环境)
    ENV: "z",
    //静态目录
    STATIC: "/src",
    IMG_STATIC: "https://img.xt.com/src",   //图片资源地址
    STYLE_STATIC: "https://assets.xt.com/src", //样式请求地址
    //默认语言
    LAN: "cn",
    //法币单位
    UNIT: "krw",
    //网站端口
    PORT: "3002",
    //版本号
    VERSION: Date.now(),
    //域配置
    DOMAIN_BASE : "www.xt.com",   //本地域

    DOMAIN_DEV : "https://www.xt.com",  //后端接口 域
    WEBSOCKET : "wss://ws.xt.com", //WEBSOCKET 服务地址
    DISH_API: "https://ws.xt.com"
}
/* * 开发环境前端 + 生产环境后端* */
