/**
 * 网站信息配置
 * Created by SivenLee on 2017/3/14.
 */
module.exports = function(LAN) {
    //配置信息多语言支持
    var LANG = global.LANG(LAN);

    return {
        NAME : LANG('网站通用名称'),
        TITLE : LANG('网站通用标题'),
        KEYWORD : LANG('网站通用关键字'),
        DESCRIPTION : LANG('网站通用描述'),
        LOGO : STATIC + '/images/logo.png?' + VERSION,
        LOGO_FOOT : STATIC + '/images/logo.png' + VERSION,
        FAVICON : STATIC + '/images/favicon/favicon.ico?' + VERSION,
        ICP : LANG('网站ICP备案号'),
        LAN : {
            cn : '简体中文',
            hk : '繁體中文',
            en : 'English',
            // jp : 'JP',
            // kr : 'KR'
        },
        EMAIL : {
            name : LANG('邮箱'),
            val : 'support@xt.com',
            href : 'mail://support@xt.com'
        },
        SHUTDOWN: {     //停机维护
            flag: false,
            startTime: '2018-12-11 15:00',
            endTime: '2018-12-11 18:00'
        }
    }
}
