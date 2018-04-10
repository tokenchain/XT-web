/**
 * 生产环境下的配置信息
 * Created by SivenLee on 2017/3/15.
 */
module.exports = {
    //环境变量前缀(用于cookie前缀区分环境)
    ENV : "z",
    //静态目录
    STATIC : "/src",
    //默认语言
    LAN : "en",
    //网站端口
    PORT : "3002",
    //版本号
    VERSION : Date.now(),
    //域配置
    DOMAIN_BASE : "exx.com",

    DOMAIN_DEV : "http://137.main.exx.com",
    WEBSOCKET : "ws://192.168.4.137:28080"
}
/* * 开发环境前端 + 生产环境后端* */
