/**
 * 前端API接口模块
 * Created by SivenLee on 2017/4/29.
 */
var API = {};

API.ajax = function (option) {
    var defaultOption = {
        url: '',
        type: 'post',
        jsonp: 'jsoncallback',
        dataType: 'jsonp',
        beforeSend: function(result) {

        },
        success: function(result) {

        },
        error: function(result) {

        },
        complete: function(result) {

        }
    }

    $.ajax();
}

API.doSendCode = function (data,callback) {
    $.ajax({
        url: DOMAIN_VIP +"/u/safe/isNotIpTransSafe",
        type: 'post',
        jsonp: 'jsoncallback',
        dataType: 'jsonp',
        success: function(json) {

        }
    });
}