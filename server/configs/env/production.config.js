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
    DOMAIN_WEB : "//ww.exx.com",
    DOMAIN_EXC2C : "http://ww.exc2c.com",
    DOMAIN_MAIN : "https://main.exx.com",
    DOMAIN_TRADE : "//trans.exx.com",
    DOMAIN_SOCKET : "wss://kline.exx.com",
    DOMAIN_FILE : "//img1.exx.com",
    API_PREFIX : "/api/web/V1_0/",
    //调试用
    DOMAIN_DEV : "http://ww.exx.com/test"
}
/* * 开发环境前端 + 生产环境后端* */