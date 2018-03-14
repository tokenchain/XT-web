/**
 * 开发环境下的配置信息
 * 公共项目部署使用
 * Created by SivenLee on 2017/3/15.
 */
module.exports = {
    //环境变量前缀(用于cookie前缀区分环境)
    ENV : "w",
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
    DOMAIN_EXC2C : "http://tw.exc2c.com",
    DOMAIN_WEB : "//tw.exx.com",
    DOMAIN_MAIN : "//tmain.exx.com:8002",
    DOMAIN_TRADE : "//ttrans.exx.com:8002",
    DOMAIN_SOCKET : "ws://tkline.exx.com",
    DOMAIN_FILE : "//img1.exx.com",
    API_PREFIX : "/api/web/V1_0/",
    API_MODULE : "/entrust/entrustController/" //新开发接口调试
}
/* * 开发环境前端 + 开发环境后端* */