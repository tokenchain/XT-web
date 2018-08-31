/**
 * 后端使用的方法合集
 * Created by SivenLee on 2017/3/15.
 */
var axios = require('axios');
var methods = {};

methods.axios = function (data,next) {
    var protocol = ENV == 'z' ? 'https:' : 'http:' ;
    var fullUrl = protocol + '' + DOMAIN_MAIN + '' + API_PREFIX + '' + data.method;

    axios.get(fullUrl, {
        headers:{
            Cookie : global.COOKIES
        },
        params: data.param
    }).then(function (result) {
        var json = result.data;
        //console.log(result);
        if(json.resMsg.code == 1000){
            //console.log(json);
            data.success && data.success(json);
        }else{
            console.log('----------------axios请求失败：' + fullUrl + ' ' + new Date());
            //console.log(json);
            var err = new Error(json.resMsg.message);
            err.status = 404;
            next(err);
        }
    }).catch(function (error) {
        console.log('----------------axios请求错误：' + fullUrl + ' ' + new Date());
        console.log(error);
        var err = new Error(error);
        err.status = 404;
        next(err);
    });
}

methods.getDateTime = function (timestamp, format) {
    var pad = function (val, len) {
        val = String(val);
        len = len || 2;
        while (val.length < len) val = "0" + val;
        return val;
    };
    var date = new Date(parseFloat(timestamp));
    var year = date.getFullYear();
    var month = pad(date.getMonth() + 1);
    var day = pad(date.getDate());
    var hour = pad(date.getHours());
    var minutes = pad(date.getMinutes());
    var second = pad(date.getSeconds());
    switch (format) {
        case 'MM-DD HH:MM:SS':
            return [month, day].join('-') + ' ' + [hour, minutes, second].join(':');
            break;
        case 'YYYY-MM-DD HH:MM:SS':
            return [year,month, day].join('-') + ' ' + [hour, minutes, second].join(':');
            break;
        case 'HH:MM:SS':
            return [hour, minutes, second].join(':');
            break;
        case 'HH:MM':
            return [hour, minutes].join(':');
            break;
        case 'array':
            return [year, month, day, hour, minutes, second];
            break;
        default:
            return [year, month, day].join('') + ' ' + [hour, minutes, second].join(':');
            break;
    }
}

module.exports = methods;
