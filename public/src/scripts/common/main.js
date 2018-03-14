function setLan(lan){
    var Href = window.location.href;
    if(Href.indexOf('?') != -1){
        Href += '&lan=' + lan;
    }else{
        Href += '?lan=' +lan;
    }
    window.location.href = Href;
    console.log(lan);
}

$.ajaxSetup({
  headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
  xhrFields: {
    withCredentials: true
  }
});

var TEST = {
  isEmail: function(string) {
    var emailReg = /^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,4}$/;
    return emailReg.test(string);
  },
  isPhone: function(string) {
    return /^1(3|4|5|7|8)\d{9}$/.test(string);
  },
  isAllNumber: function(str){
		var regExp = new RegExp("^[0-9]*$");
		return regExp.test(str);
	}
}

var ACT = {
  isEmail: function(string) {
    var emailReg = /^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,4}$/;
    return emailReg.test(string);
  },
  isPhone: function(string) {
    return /^1(3|4|5|7|8)\d{9}$/.test(string);
  },
  isAllNumber: function(str){
		var regExp = new RegExp("^[0-9]*$");
		return regExp.test(str);
	},
  checkUserType: function(userName) {
    if (this.isEmail(userName)) {
      userType = 2
    } else if (this.isPhone(userName)) {
      userType = 1
    } else {
      userType = 3
    }
    return userType
  },
  //检测密码强度
  checkPwdStrength: function(pwd) {
    var level = 0, index = 1
    if (pwd.length >= 8 && pwd.length <= 20){
      //正则表达式验证符合要求的
      if (/\d/.test(pwd)) level++; //数字
      if (/[a-z]/.test(pwd)) level++; //小写
      if (/[A-Z]/.test(pwd)) level++; //大写
      if (/\W/.test(pwd)) level++; //特殊字符
      if (level > 1 && pwd.length > 12) level++;//超过12位并且两种组合以上
    }
    return level
  },
  sendCode: function(data) {
    $.ajax({
      type: "POST",
      url: DOMAIN_MAIN + API_PREFIX + 'sendCode',
      data: data
    }).done(function(res) {
      var resMsg = res.resMsg;
      JuaBox.sure(EXX.L(resMsg.message));
    });
  },
  logout: function(data) {
    window.localStorage.setItem(ENV + 'userInfo', null);
    window.location.replace('/');
  },
  // 获取保存在本地存储的用户信息
  getLocalUserInfo: function() {
    var userInfo = window.localStorage.getItem(ENV + 'userInfo');
    userInfo = userInfo ? JSON.parse(userInfo) : false
    return userInfo
  },
  // 获取特定 cookie 的值
  getCookie: function(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }
};
