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
        LOGO : STATIC + '/images/logoXt.png?' + VERSION,
        LOGO_FOOT : STATIC + '/images/logoXt.png' + VERSION,
        FAVICON : STATIC + '/images/favicon/favicon.ico?' + VERSION,
        ICP : LANG('网站ICP备案号'),
        LAN : {
            cn : '简体中文',
            hk : '繁體中文',
            en : 'English',
            // jp : 'JP',
            // kr : 'KR'
        },
        SNS : {
            sina : {
                name : 'ZBG官方微博',
                href : 'https://weibo.com/p/1005056104128706',
                qrcode : 'https://s.chbtc.com/statics/img/v2/common/ma-weixin.png'
            },
            weixin : {
                name : 'EXX官方微信',
                href : 'http://weibo.com/312328098',
                qrcode : STATIC + '/images/home/exx_wb_qr.jpg'
            },
            twitter : {
                name : 'Twitter',
                href : 'https://twitter.com/GroupExx',
                qrcode : ''
            },
            telegram : {
                name : 'Telegram',
                href : 'https://t.me/EXXcom ',
                qrcode : ''
            },
            facebook : {
                name : 'Facebook',
                href : 'https://www.facebook.com/Exxgroup-725134700976057/?ref=aymt_homepage_panel',
                qrcode : ''
            }
        },
        TEL : {
            service : {
                name : LANG('国内'),
                number : '400-616-6611',
                href : 'tel://4006166611'
            },
            company : {
                name : LANG('固话'),
                number : '+00852-22086066',
                href : 'tel://076088315186'
            },
            oversea : {
                name : LANG('海外'),
                number : '+0086 010-4006166611',
                href : 'tel://00860104006166611'
            }
        },
        EMAIL : {
            name : LANG('邮箱'),
            val : 'support@exx.com',
            href : 'mail://support@exx.com'
        },
        QQ : [{
            number : '4006166611',
            name : LANG('企业QQ'),
            href : 'javascript:window.open("http://b.qq.com/webc.htm?new=0&amp;sid=4006166611&amp;eid=218808P8z8p8K8x8K808p&amp;o=www.chbtc.com&amp;q=7&amp;ref="+document.location, "_blank", "height=502,width=644,toolbar=no,scrollbars=no,menubar=no,status=no");'
        }],
        QQGroup : [{
            number : '37798541',
            name : LANG('QQ交流群'),
            href : 'http://shang.qq.com/wpa/qunwpa?idkey=c9d1bc4439f52b75a68e4ac4aa00efe1c603e27fca409033953a7ce30b4cdb81'
        },{
            number : '46678541',
            name : LANG('QQ新手群'),
            href : 'http://shang.qq.com/wpa/qunwpa?idkey=c9d1bc4439f52b75a68e4ac4aa00efe1c603e27fca409033953a7ce30b4cdb81'
        }]
    }
}
