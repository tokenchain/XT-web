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
    PORT: "3002",
    //版本号
    VERSION: Date.now(),
    //域配置
    DOMAIN_BASE: "exx.com",

    DOMAIN_DEV: "http://ww.exx.com/test",
    // DOMAIN_DEV : "http://72.main.zbg.com",
    // DOMAIN_DEV : "http://192.168.8.70:9000",
    WEBSOCKET: "ws://192.168.20.13:28080",

    DISH_API: "http://179kline.zbg.com"
}
/* * 开发环境前端 + 开发环境后端* */
