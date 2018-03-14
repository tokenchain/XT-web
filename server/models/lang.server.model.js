/**
 * 后端语言包
 * @param {string} lan 传入当前语言类别 cn || en || hk
 * @return {function(key){}} 返回一个方法
 * Created by SivenLee on 2017/3/15.
 */
/**
 * @description mergeJsons 合并json对象
 * @param  {object} des 基准对象，要输出新的对象则为{};
 * @param  {[object]} src 要合并的json对象数组 ;
 * @param  {Boolean} override 是否覆盖重复键值;
 * @return {object} 返回一个和基准对象合并的对象;
 * Created by SivenLee on 2017/3/15.
 */
var mergeJsons = function (des, src, override) {
    if (src instanceof Array) {
        for (var i = 0, len = src.length; i < len; i++) {
            mergeJsons(des, src[i], override);
        }
    }
    for (var key in src) {
        if (override || !(key in des)) {
            des[key] = src[key];
        }
    }
    return des;
}
//引入所有语言包并合并
var LANGPACK = mergeJsons({},[
    require('../langs/global.server.lang.json'),
    require('../langs/loan.server.lang.json'),
    require('../langs/payin.server.lang.json'),
    require('../langs/payout.server.lang.json'),
    require('../langs/trade.server.lang.json'),
    require('../langs/user.server.lang.json'),
    require('../langs/path.server.lang.json'),
    require('../langs/api.server.lang.json'),
    require('../langs/web.server.lang.json'),
    require('../langs/exchange.server.lang.json')
], true);

var FANTI_PACK = require('../langs/chinese.traditional.json');
var JTPYStr = FANTI_PACK.JTPYStr;
var FTPYStr = FANTI_PACK.FTPYStr;

var toFT = function (cc) {
    var str = '',
        ss = JTPYStr,
        tt = FTPYStr;
    for (var i = 0; i < cc.length; i++) {
        if (cc.charCodeAt(i) > 10000 && ss.indexOf(cc.charAt(i)) != -1) {
            str += tt.charAt(ss.indexOf(cc.charAt(i)));
        } else {
            str += cc.charAt(i);
        }
    }
    return str;
};
var toJT = function (cc) {
    var str = '',
        ss = JTPYStr,
        tt = FTPYStr;
    for (var i = 0; i < cc.length; i++) {
        if (cc.charCodeAt(i) > 10000 && tt.indexOf(cc.charAt(i)) != -1) {
            str += ss.charAt(tt.indexOf(cc.charAt(i)));
        } else {
            str += cc.charAt(i);
        }
    }
    return str;
};

module.exports = function (LAN) {
    //返回一个方法
    return function(key){
        try {
            var result = "";
            var currentLang = LAN;
            if (currentLang == "hk") {
                result = toFT(LANGPACK[key]["cn"]);
            } else {
                result = LANGPACK[key][currentLang];
            }
            if (result == ""){
                if(currentLang == "hk"){
                    key = toFT(key);
                }
                return key;
            }
            //替换语言包中的变量
            if (arguments.length > 1) {
                for (var i = 1; i < arguments.length; i++) {
                    result = result.replace(eval('/\\[\\$' + i + '\\]/g'), arguments[i]);
                }
            }
            return result;
        } catch (e) {
            if(currentLang == "hk"){
                key = toFT(key);
            }
            return key;
        }
    }
}