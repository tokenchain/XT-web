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

    DOMAIN_DEV : "https://www.xt.com",  //后端接口 域
    WEBSOCKET : "wss://ws.xt.com",     //WEBSOCKET 服务地址

    DISH_API: "http://179kline.zbg.com"
}
/* * 开发环境前端 + 开发环境后端* */
