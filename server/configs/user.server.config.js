/**
 * 用户相关配置信息
 * Created by SivenLee on 2017/3/14.
 */
module.exports = {
    //默认注册方式[0：用户名，1：手机，2：邮箱]
    defaultRegType: 1,
    //默认登录方式[0：用户名，1：手机，2：邮箱]
    defaultLogType: 0,
    //是否开启用户名注册
    regByName: false,
    //是否开启手机注册
    regByPhone: true,
    //是否开启邮箱注册
    regByEmail: true,
    //是否开启用户名登录
    logByName: true,
    //是否开启手机登录
    logByPhone: true,
    //是否开启邮箱登录
    logByEmail: true,
    //是否开启扫码登录
    logByQrcode: false,
    //登录密码长度控制
    logPwdLength: [8, 20],
    //二级密码长度控制
    safePwdLength: [6, 20],
    //用户积分等级
    vipLevel: [0, 8000, 25000, 50000, 200000, 1000000],
    avatarList: ['u001.jpg', 'u002.jpg', 'u003.jpg', 'u004.jpg', 'u005.jpg', 'u006.jpg', 'u007.jpg', 'u008.jpg', 'u009.jpg', 'u010.jpg', 'u011.jpg', 'u012.jpg', 'u013.jpg', 'u014.jpg'],
    //添加 滑动验证 key  （登录，找回密码，注册）
    captchaId: '525d48dba54a4e49ba0f53c78d8d9128'
}