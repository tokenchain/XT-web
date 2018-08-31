/**
 * API相关配置信息
 * Created by SivenLee on 2017/3/14.
 */
module.exports = {
    //默认注册方式[0：用户名，1：手机，2：邮箱]
    defaultRegType : 1,
    //默认登录方式[0：用户名，1：手机，2：邮箱]
    defaultLogType : 0,
    //是否开启用户名注册
    regByName : false,
    //是否开启手机注册
    regByMobile : true,
    //是否开启邮箱注册
    regByEmail : true,
    //是否开启用户名登录
    logByName : true,
    //是否开启手机登录
    logByMobile : true,
    //是否开启邮箱登录
    logByEmail : true,
    //是否开启扫码登录
    logByQrcode : false,
    //登录密码长度控制
    logPwdLength : [8,20],
    //二级密码长度控制
    safePwdLength : [6,20],
    //用户积分等级
    vipLevel : [0, 8000, 25000, 50000, 200000, 1000000]
}