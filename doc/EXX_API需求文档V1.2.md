#EXX网页端API需求文档1.0


| 版本   | 时间         | 修订人  | 修订内容 | 备注   |
| :--- | :--------- | :--- | :--- | :--- |
| 1.0  | 2017-04-18 | 农达超  | 创建文档 |      |

[TOC]


##接口约定

###通讯授权协议

> - **session/cookie认证机制**

前端传回的cookie有以下值可用，参数中不再进行回传。

| cookie           | 类型     | httponly | 描述                                       |
| ---------------- | ------ | -------- | ---------------------------------------- |
| [env]JSESSIONID  | String | √        | 用户会话ID                                   |
| [env]uon         | string | -        | 登录状态值  <br/>0或空：未登录<br/>1：登录正常<br/>2：需要Google登录验证<br/>3：需要异地登录验证<br/>4：需要2和3的验证<br/>5：需要设置二级密码 |
| [env]uid         | string | -        | 用户ID                                     |
| [env]uname       | string | -        | 用户名                                      |
| [env]vip         | string | -        | 用户vip等级                                  |
| [env]lan         | string | -        | 当前语言cn/en/hk                             |
| [env]recommendId | string | -        | 推荐人ID                                    |

### **说明**

1.[env]为环境变量前缀，开发环境为w，测试环境为t，生产环境为z。
2.[env]uon为用户的当前登录状态标识，为避免用户篡改，后端请使用对应的session值进行标识，cookie仅用于前端控制路由跳转。
3.所有后端设置的cookies请设置域为**<font color='red'>exx.com</font>**。

###请求方法说明

>- **get、post**
>   用户名、密码等部分参数进行RSA加密处理
>- **websocket**
>   行情、委托、盘口、资金等接口需配备推送方法
>- **url**
>   默认url前缀为 DOMAIN/api/web/v1_0/
>- **headers**
>   'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'

###返回规范

各个接口方法统一最外层都返回resMsg ，datas 两个对象，datas视具体的方法返回值内容。

| 参数名    | 类型   | 是否必须 | 描述                                     |
| ------ | ---- | ---- | -------------------------------------- |
| resMsg | {}   | 是    | 消息对象，所有接口都会返回该对象，接口定义中不再说明。            |
| datas  | {}   | 是    | 其他返回参数，所有接口返回的参数都封装到datas里面，接口定义中不再说明。 |

**resMsg 对象**

| 参数名     | 类型     | 是否必须 | 描述   |
| ------- | ------ | ---- | ---- |
| code    | string | 是    | 错误代码 |
| message | string | 是    | 错误描述 |

`错误代码参阅每个项目的systemCode.java文件`
```
{
	resMsg: {
	"code":"1000",
	"message":"SUCCESS."
	},
	datas: {
	  "userInfo": {
	    "userId":"1",
	    "userName":"test",
	    "pnumber":"18900000000",
	    "email":"myemail@163.com"
	  },
	}
}
```

**数据格式**

>- **字符串：**除了使用数字代表的状态值参数使用整型，其他全部使用字符串返回。
>- **时间戳：**时间类型的返回值全部使用时间戳返回。
>- **资产小数位：**人民币资产返回4位小数，虚拟货币资产返回8位小数。

###分页约定

接口中凡是需要分页的地方都不返回总数量和总页码数量，前台只传入以下两个参数作为分页查询依据。

| 参数名       | 类型   | 是否必须 | 示例   | 描述        |
| :-------- | :--- | :--- | :--- | :-------- |
| pageIndex | int  | 否    |      | 页码 默认1    |
| pageSize  | int  | 否    |      | 每页数量 默认10 |

排序默认按照时间降序排列。

##一、全局通用接口
----------

###1.1  发送短信/邮件验证码

**描述**：
>- 全站发送短信/邮箱验证码方法全部统一为一个接口实现。
>- 后端先判断codeType是否需要授权，然后再根据codeType检查对应的参数是否合法。
>- 优先使用手机验证码，不论手机还是邮箱，发送的都是验证码，不再使用加密链接。

**请求URL**： 
> sendcode

**请求方法**
> post

**请求参数**

| 参数名         | 类型     | 是否必须 | 描述       |
| :---------- | :----- | :--- | :------- |
| codeType    | int    | 是    | 请求类型     |
| countryCode | String | 否    | 区号       |
| imgCode     | String | 否    | 图形验证码    |
| safePwd     | String | 否    | 二级密码   |
| mobile      | String | 否    | 手机号      |
| email       | String | 否    | 邮箱       |
| cardId      | String | 否    | 实名认证的证件号 |

**codeType类型对应表**

| codeType | 操作                   | 类型       | 是否授权 | 所需参数                                     |
| :------- | :------------------- | :------- | :--- | :--------------------------------------- |
| 1        | 注册                   | 短信/邮箱验证码 | 否    | 手机注册：countryCode + mobile + imgCode<br>邮箱注册：email + imgCode |
| 2        | 找回登陆密码               | 短信/邮箱验证码 | 否    | 手机找回：countryCode + mobile + imgCode + [cardId]<br>邮箱找回：email + imgCode + [cardId] |
| 3        | 找回二级密码               | 短信/邮箱验证码 | 是    | 手机找回：countryCode + mobile + imgCode<br>邮箱找回：email + imgCode |
| 4        | 异地登录验证               | 短信/邮箱验证码 | 是    | -                                        |
| 5        | 认证邮箱                 | 邮箱验证码    | 是    | safePwd                                  |
| 5        | 认证邮箱                 | 短信验证码    | 是    | safePwd                                  |
| 6        | 认证手机                 | 短信验证码    | 是    | countryCode + mobile                     |
| 7        | 认证手机                 | 邮件验证码    | 是    | -                                        |
| 8        | 修改手机                 | 邮箱验证码    | 是    | -                                        |
| 9        | 修改手机                 | 原短信验证码   | 是    | -                                        |
| 10       | 修改手机                 | 新短信验证码   | 是    | countryCode + mobile                     |
| 11       | 绑定/修改/关闭<br>google验证 | 短信/邮箱验证码 | 是    | -                                        |
| 12       | 修改登录密码               | 短信/邮箱验证码 | 是    | -                                        |
| 13       | 修改二级密码             | 短信/邮箱验证码 | 是    | -                                        |
| 14       | API开通/关闭/绑定IP        | 短信/邮箱验证码 | 是    | -                                        |
| 15       | API生成密钥              | 短信/邮箱验证码 | 是    | -                                        |
| 16       | 修改登录策略               | 短信/邮箱验证码 | 是    | -                                        |
| 17       | 修改提现策略               | 短信/邮箱验证码 | 是    | -                                        |
| 18       | 认证提现地址               | 短信/邮箱验证码 | 是    | safePwd                                  |
| 19       | 人民币提现                | 短信/邮箱验证码 | 是    | safePwd                                  |
| 20       | 虚拟币提现                | 短信/邮箱验证码 | 是    | safePwd                                  |

**返回结果**

> 发送成功后返回本次发送验证码的信息详情

| 参数名         | 类型     | 是否必须 | 示例                               | 描述                                       |
| :---------- | :----- | :--- | :------------------------------- | :--------------------------------------- |
| type        | int    | 是    | 1                                | 1=手机验证码，2=邮箱验证码                          |
| dynamicCode | String | 是    | 4A95DF572D43F61DF386D4918E3B11E5 | 加密的动态验证码，通过该值可自行预先判断用户输入的动态验证码是否正确<br>(MD5.toMD5( MD5.toMD5(mobileNumber或email) + MD5.toMD5(dynamicCode) );) |
| countdown   | int    | 否    | 60                               | 再次发送等待时间（秒）                              |
| countryCode | String | 否    |                                  | 区号                                       |
| mobile      | String | 否    |                                  | 手机号                                      |
| email       | String | 否    |                                  | 邮箱                                       |

**返回示例**

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	},
	"datas": {
	    "type": 1,
	     "dynamicCode": "2D929D4A0562ACA107FAB3EECDAFDAAC"
	    "countdown": 60,
	    "countryCode": "+86",
	    "mobile": "1382541541",
	    "email" : "fwfwfw@163.com"
	}
}

```

###1.2  获取图形验证码

**描述**：

**请求URL**： 
>/imagecode/get-:fontsize-:width-:height-:timestramp

**请求方法**
> get

**请求参数**
> /imagecode/get-28-100-50-1492758524014
> /方法名/get-字体大小-图片宽度-图片高度-时间戳

**返回结果**

###1.3  获取国家列表

**描述**：

**请求URL**： 
>getCountry

**请求方法**
> get

**请求参数**

**返回结果**

| 参数名         | 类型        | 是否必须 | 示例   | 描述          |
| :---------- | :-------- | :--- | :--- | :---------- |
| countries   | [country] | 是    |      | 国家信息数组      |
| **country** | {}        |      |      |             |
| id          | String    | 是    |      | id          |
| name        | String    | 是    | 斯洛伐克 | 国家名         |
| code        | String    | 是    | +86  | 电话区位码       |
| group       | String    | 否    | 亚洲   | 自定义分组（备用字段） |
| localName   | String    | 是    | 斯洛伐克 | 该国家语言写的国家名  |
| englishName | String    | 是    | 斯洛伐克 | 国家英文名       |

**返回示例**

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	},
	"datas" : {
		countries : [
			{Country}
		]
	}
}
```

###1.4  获取地区信息

**描述**：

**请求URL**： 
>getAreas

**请求方法**
> get

**请求参数**

**返回结果**

| 参数名      | 类型     | 是否必须 | 示例   | 描述         |
| :------- | :----- | :--- | :--- | :--------- |
| areas    | [area] | 是    |      | 地区信息数组     |
| **area** | {}     |      |      |            |
| id       | String | 是    |      | 地区id       |
| name     | String | 是    | 东城区  | 地名         |
| parentId | String | 是    | 北京   | 所属地id 1为省份 |

**返回示例**

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	},
	"datas" : {
		countries : [
			{Country}
		]
	}
}
```

###1.5  获取RSA加密公钥

**描述**：

**请求URL**： 
>getPubTag

**请求方法**
> get

**请求参数**

**返回结果**
| 参数名    | 类型     | 是否必须 | 示例   | 描述    |
| :----- | :----- | :--- | :--- | :---- |
| pubTag | String | 是    |      | RSA公钥 |

**返回示例**

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	},
	"datas" : {
		pubTag: "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCD5F7g3uqTaHKeV3HitJI9fJLceeA+Ul6TK7gp+u/J0r9A5MzCFafu9awLIk8jEulQE0Ycxy4FcxqF7n9OnvhQ5OAaF7sK5ePdQ7APsud/08lXBBtVtURDsnE22AEpks+gF97Tgp/fHkVpr/rIhIXi8X+xmBfxaBgLFLYcgsFWkQIDAQAB"
	}
}
```

### 1.6 获取Google验证码

**描述**：
登录后才能设置

**请求URL**： 

> getGoogle

**请求方法**

> post

**请求参数**

| 参数名    | 类型     | 是否必须 | 描述       |
| :----- | :----- | :--- | :------- |
| method | int    | 是    | 操作类型 1修改 |
| userId | String | 否    | 用户id     |

 **正常登录：**
 返回结果"操作成功"

 **异常返回：**

自动获取用户Id为null,则返回手动输入

**需要填写短信验证码：**

返回googleAuth谷歌双重验证是否开启(0未验证     1验证未开启     2已开启)



##二、用户相关接口

----------
###2.1  用户注册 

**描述**：

提供使用手机或者Email注册功能，单个手机、Email只允许注册一个账号，使用短信/邮箱验证码验证帐号有效性，邮箱注册不发送加密连接。

**请求URL**： 
> register

**请求方法**
> post

**请求参数**

| 参数名      | 类型     | 是否必须 | 描述                 |
| :------- | :----- | :--- | :----------------- |
| userType | int    | 是    | 用户名类型 1：手机号码，2：邮箱  |
| userName | String | 是    | 手机号/邮箱             |
| password | String | 是    | 登录密码（暂未加密）         |
| imgCode  | String | 是    | 图形验证码 （暂未加密）       |
| smsCode  | String | 是    | 动态验证码 （暂未加密）手机注册才有 |

**返回结果**

>- 手机注册成功后即完成登录，返回结果与getUserInfo方法一致。
>- 注册成功后设置[env]uon登录状态值为5，需要设置二级密码。

###2.2  检查手机/邮箱是否可用

**描述**：
在注册、邮箱认证、手机认证等场景中使用，用户填写完手机或邮箱后提示是否可用。

**请求URL**： 
> checkusername

**请求方法**
> get

**请求参数**

| 参数名         | 类型     | 是否必须 | 描述                |
| :---------- | :----- | :--- | :---------------- |
| userType    | int    | 是    | 用户名类型 1：手机号码，2：邮箱 |
| userName    | String | 是    | 手机号/邮箱            |
| countryCode | String | 否    | 区号                |

**返回结果**
**返回示例**
```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	}
}
```

###2.3  首次设置二级密码

**描述**：
注册成功后强制用户设置二级密码，未设置不可以跳转页面。

**请求URL**： 
> setSafePwd

**请求方法**
> post

**请求参数**

| 参数名        | 类型     | 是否必须 | 描述   |
| :--------- | :----- | :--- | :--- |
| newSafePwd | String | 是    | 二级密码 |

**返回示例**
```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	}
}

```

###2.4  用户登录 

**描述**：
提供使用手机号、用户名、Email登录，使用手机号登录时，如果该手机关联多个账号，则返回错误提示要求用户使用用户名或账号进行登录

**请求URL**： 
> login

**请求方法**
> post

**请求参数**

| 参数名        | 类型     | 是否必须 | 描述                      |
| :--------- | :----- | :--- | :---------------------- |
| userType   | int    | 是    | 用户名类型 0：用户名，1：手机号码，2：邮箱 |
| userName   | String | 是    | 用户名/手机号/邮箱              |
| password   | String | 是    | 登录密码（暂未加密）              |
| imgCode    | String | 否    | 失败次数过多则需要填写图形验证码（暂未加密）  |
| smsCode    | String | 否    | 短信验证码（暂未加密）             |
| googleCode | String | 否    | 开启才有（暂未加密）              |
| safe       | String | 否    | 需要显示验证码（0不显示、1显示）       |

 **正常登录：**
 返回结果与getUserInfo方法返回结果一致

**需要填写图形验证码：**
返回1024错误，前端显示图形验证码表单，返回结果datas对象为空。

**需要二次登录：**
返回1017，1018，1020错误，返回结果与getUserInfo方法返回结果一致

**需要设置二级密码：**
返回1026错误，返回结果与getUserInfo方法返回结果一致

###2.5   异地登录验证+Google登录验证 

**描述**：
根据用户设置进行二次登录验证

**请求URL**： 
> loginAuth

**请求方法**
> post

**请求参数**

| 参数名         | 类型     | 是否必须 | 描述           |
| :---------- | :----- | :--- | :----------- |
| dynamicCode | String | 否    | 异地登录手机/邮箱验证码 |
| googleCode  | String | 否    | google验证码    |

>- **返回结果：**返回结果与getUserInfo方法返回结果一致
>  -

###2.6 设置二级密码 、修改二级密码

**描述**：
登录后才能设置

**请求URL**： 
> safeUpdate

**请求方法**
> post

**请求参数**

| 参数名        | 类型     | 是否必须 | 描述              |
| :--------- | :----- | :--- | :-------------- |
| currentPwd | String | 是    | 原始二级密码（第一次添加为空） |
| safePwd    | String | 是    | 新二级密码           |
| smsCode    | String | 是    | 邮件验证码（暂未加密）     |
| safeLevel  | int    | 是    | 二级密码难度(5以上)     |
| googleCode | long   | 是    | Google验证码（暂未加密） |

 **正常登录：**
 返回结果"操作成功"

**需要填写邮件验证码：**
返回1024错误，前端显示图形验证码表单，返回结果datas对象为空。


**需要设置二级密码：**

### 2.7 修改Google验证码

**描述**：
登录后才能设置

**请求URL**： 

> setGoogleCode

**请求方法**

> post

**请求参数**

| 参数名        | 类型     | 是否必须 | 描述                        |
| :--------- | :----- | :--- | :------------------------ |
| type       | int    | 是    | 操作类型 1 设置/修改谷歌验证 0 关闭谷歌验证 |
| userId     | String | 是    | 用户id                      |
| session    | String | 是    | 新二级密码                     |
| googleCode | String | 是    | Google验证码（暂未加密）           |
| smsCode    | String | 是    | 短信验证码（暂未加密）               |

 **正常登录：**
 返回结果"操作成功"

**需要填写短信验证码：**



###2.7  退出登录

**描述**：
清空用户会话信息，安全退出。

**请求URL**： 
> logOut

**请求方法**
> get POST

**请求参数**

**返回示例**
```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	}
}

```

###2.8  找回登陆密码

**描述**：
使用手机/邮箱找回登录密码。

**请求URL**： 
>changePwd

**请求方法**
>post

**请求参数**

| 参数名         | 类型     | 是否必须 | 描述                 |
| :---------- | :----- | :--- | :----------------- |
| userType    | int    | 是    | 用户名类型 1：手机号码，2：邮箱  |
| countryCode | String | 否    | 手机区号               |
| userName    | String | 是    | 手机号/邮箱             |
| imgCode     | String | 是    | 图形验证码              |
| smsCode     | String | 是    | 手机/邮箱验证码           |
| newPassword | String | 是    | 新的登录密码             |
| idCardNo    | String | 否    | 已通过实名认证需要填写（没有就不用） |

**返回示例**
```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	}
}

```

返回结果

///未写

###2.9  找回二级密码

**描述**：
使用手机/邮箱找回二级密码，需要登录才能操作。

**请求URL**： 
>findSafePwd

**请求方法**
>post

**请求参数**

| 参数名         | 类型     | 是否必须 | 描述       |
| :---------- | :----- | :--- | :------- |
| dynamicCode | String | 是    | 手机/邮箱验证码 |
| imgCode     | String | 是    | 图形验证码    |
| loginPwd    | String | 是    | 当前帐号登录密码 |
| newSafePwd  | String | 是    | 新的二级密码   |

**返回示例**
```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	}
}

```
###2.10   获取用户信息

**描述**：
获取用户的基本信息、认证信息、安全信息，**若未完成二次登录验证则只返回userId和userName。**

**请求URL**： 
> getuserinfo

**请求方法**
> get

**返回结果**

返回结果存储在Session Storage中，需要时再更新用户信息。

| 参数名                  | 类型     | 是否必须 | 示例              | 描述                                       |
| -------------------- | :----- | :--- | :-------------- | :--------------------------------------- |
| lastTime             | String | 是    |                 | 当前时间戳                                    |
| userInfo             | {}     | 是    |                 | 用户信息对象                                   |
| **用户基本信息**           |        |      |                 |                                          |
| userId               | int    | 是    | 1               | 用户ID                                     |
| userType             | int    | 是    | 1               | **用户类型（新增）**<br>1：个人账户，2：机构账户，3：子账户<br>个人账户可以升级机构账户，机构账户才能设置子账户 |
| userName             | String | 否    | test            | 用户名                                      |
| countryCode          | String | 否    |                 | 手机号码对应国家码                                |
| mobile               | String | 否    | 18900000000     | 手机号                                      |
| email                | String | 否    | myemail@163.com | 邮箱                                       |
| totalScore           | String | 是    | 2300            | 总积分                                      |
| realName             | String | 是    |                 | 实名认证姓名/企业名称，未认证时为空                       |
| realAuthType         | int    | 是    |                 | 0：未选择，1：个人认证，2：企业认证                      |
| vipLevel             | int    | 是    |                 | vip等级0-9                                 |
| loginPwdLevel        | int    | 是    |                 | 登录密码强度0-100                              |
| safePwdLevel         | int    | 是    |                 | 二级密码强度0-100                              |
| mailing              | int    | 是    |                 | 是否设置邮寄地址：<br/>0：否，1：是                    |
| loginPwd             | int    | 是    |                 | 是否设置登录密码：<br/>0：否，1：是                    |
| safePwd              | int    | 是    |                 | 是否设置二级密码：<br/>0：否，1：是                    |
| **用户认证信息**           |        |      |                 |                                          |
| mobileAuth           | int    | 是    |                 | 是否手机认证：<br/>0：否，1：是，[2：修改失败，-1：修改审核中]    |
| emailAuth            | int    | 是    |                 | 是否邮箱认证：<br/>0：否，1：是                      |
| googleAuth           | int    | 是    |                 | 是否开启GoogleAuth：<br/>0：否，1：是，[2：修改失败，-1：修改审核中] |
| realAuth             | int    | 是    |                 | 实名认证状态（通用状态值）<br>0:初级认证-未提交  1: 初级认证-待审核 <br> 2:初级认证-不通过  3:初级认证-通过 <br>4:高级认证-未提交 5:高级认证-待审核 <br> 6:高级认证-不通过  7:高级认证-通过 <br> 8:视频认证-未提交  9:视频认证-待审核 <br> 10:视频认证-不通过  11：视频认证-已通过 |
| mobileAuthFailReason | String | 否    |                 | 修改手机失败原因                                 |
| googleAuthFailReason | String | 否    |                 | 修改Google验证失败原因                           |
| realAuthFailReason   | String | 否    |                 | 实名认证失败原因                                 |
| **用户安全信息**           |        |      |                 |                                          |
| appLoginTip          | int    | 是    |                 | 是否开启网页登录APP提醒<br/>0：否，1：是                |
| appPayTip            | int    | 是    |                 | 是否开启充值/提现APP推送提醒<br/>0：否，1：是             |
| snsPayTip            | int    | 是    |                 | 是否开启人民币充值/提现短信提醒<br/>0：否，1：是             |
| apiStatus            | int    | 是    |                 | 是否开启API<br/>0：否，1：是                      |
| loginAuth            | int    | 是    |                 | 登录验证策略：0.未选择<br/>1.密码<br/>2.密码+Google验证码<br/>3.密码+异地登录验证<br/>4. 密码+Google验证码+异地登录验证 |
| tradeAuth            | int    | 是    |                 | 交易验证策略：0.未选择<br/>1.永不输入二级密码<br/>2.6小时内免输二级密码<br/>3.每次交易均验证二级密码 |
| payoutAuth           | int    | 是    |                 | 提现验证策略：0.未选择<br/>1.二级密码+短信/邮件验证码<br/>2.二级密码+Google验证码<br/>3.二级密码+短信/邮件验证码+Google验证码 |

##三、交易相关接口

###3.1 `getAllMarket` 获取所有行情数据 

 **返回结果**

| 参数名        | 类型       | 是否必须 | 示例       | 描述             |
| :--------- | :------- | :--- | :------- | :------------- |
| markets    | [market] | 是    |          | 行情数据数组         |
| **market** | {}       |      |          |                |
| key        | String   | 是    | btc_cny  | 市场名称_          |
| name       | String   | 是    | BTC/CNY  | 市场名称/          |
| range      | String   | 是    | '+6.12%' | 24H涨跌幅（保留两位小数） |
| high       | String   | 是    | 2000     | 24H最高          |
| low        | String   | 是    |          | 24H最低          |
| vol        | String   | 是    |          | 24H成交量         |
| lastPrice  | String   | 是    |          | 最新交易价          |


**返回示例**

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	},
	"datas" : {
		"markets ": [
			{market}
		]
	}
}
```

----------
###3.2 `getDishData` 获取盘口数据 

**传入参数**

| 参数名    | 类型     | 是否必须 | 示例      | 描述                          |
| :----- | :----- | :--- | :------ | :-------------------------- |
| market | String | 是    | btc_cny | 市场名称                        |
| depth  | int    | 否    | 1       | 深度ID 默认第一档（只要传入深度参数则只返回5档）  |
| length | int    | 否    | 10      | 档位 默认5（只要传入档位参数大于5则深度变为默认值） |

 **返回结果**

| 参数名               | 类型     | 是否必须 | 示例        | 描述         |
| :---------------- | :----- | :--- | :-------- | :--------- |
| ask               | [ ]    | 是    |           | 买单盘口数据     |
| bid               | [ ]    | 是    |           | 卖单盘口数据     |
| **ask[ ]、bid[ ]** | [ ]    |      |           |            |
| 0                 | String | 是    | '7005.23' | 价格         |
| 1                 | String | 是    | '0.254'   | 数量         |
| 2                 | String | 是    | '1.988'   | 累积深度（累积数量） |



**返回示例**

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	},
	"datas" : {
		ask:[
			['7845.22','1.20','1.20'],
			['7845.22','1.20','2.40'],
			['7845.22','1.20','3.60'],
			……
		],
		bid:[
			['7845.22','1.20','1.20'],
			['7845.22','1.20','2.40'],
			['7845.22','1.20','3.60'],
			……
		]
	}
}
```

----------
###3.3 `getDealRecord` 获取市场成交记录 

**传入参数**

| 参数名      | 类型     | 是否必须 | 示例      | 描述                               |
| :------- | :----- | :--- | :------ | :------------------------------- |
| market   | String | 是    | btc_cny | 市场名称                             |
| lastTime | string | 否    |         | 客户端存储的时间戳，用于增量更新，返回时间戳后的最多200条记录 |
| length   | string | 否    | 50      | 首次请求时指定返回数量 默认50 最多200           |


 **返回结果**

| 参数名                | 类型     | 是否必须 | 示例            | 描述         |
| :----------------- | :----- | :--- | :------------ | :--------- |
| lastTime           | string | 是    |               | 服务器端提供的时间戳 |
| dealRecord         | [ ]    | 是    |               | 成交记录数据     |
| **dealRecord [ ]** | [ ]    |      |               |            |
| 0                  | String | 是    | '14554412542' | 时间         |
| 1                  | String | 是    | '7005.23'     | 价格         |
| 2                  | String | 是    | '0.254'       | 数量         |

**返回示例**

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	},
	"datas" : {
		lastTime : '14554412542',
		dealRecord :[
			['14554412542','7845.22','1.20'],
			['14554412542','7845.22','1.20'],
			['14554412542','7845.22','1.20'],
			……
		]
	}
}
```



----------
###3.4 `getChartData` 获取图表数据 

> 未完善

----------
###3.5 `getEntrustRecord` 获取用户委托记录 

 **请求参数**

| 参数名         | 类型      | 是否必须 | 描述                                       |
| :---------- | :------ | :--- | :--------------------------------------- |
| market      | String  | 是    | 市场名称，btc_cny                             |
| entrustType | Integer | 是    | 委托类型   1 限价委托(默认)  2 计划委托                |
| tradeType   | Integer | 是    | 交易类型   -1 不限(默认) 0 卖单 1 买单               |
| tradeStatus | Integer | 是    | 委托状态 -1 计划中  0 不限(默认) 1 已取消 2 已完成  3 待成交 |
| dayRange    | Integer | 是    | 时间范围  0：最近委托(默认)    1：归档委托               |
| pageIndex   | Integer | 是    | 页码 从1开始                                  |
| pageSize    | Integer | 是    | 每页显示数量 默认10 最大200                        |

 **限价委托返回结果**

| 参数名                | 类型              | 是否必须 | 示例                               | 描述     |
| :----------------- | :-------------- | :--- | :------------------------------- | :----- |
| entrustRecords     | [entrustRecord] | 是    |                                  | 限价委托数组 |
| **entrustRecord**  | {}              | 是    |                                  | 限价委托对象 |
| entrustId          | Integer         | 是    | 委托ID                             |        |
| tradeType          | Integer         | 是    | 交易类型   0 卖单 1 买单                 |        |
| tradeStatus        | Integer         | 是    | 委托状态  1 已取消 2 已完成  3 待成交  4 部分成交 |        |
| submitTime         | Integer         | 是    | 委托时间                             |        |
| entrustNumber      | Integer         | 是    | 委托数量                             |        |
| completeNumber     | Integer         | 是    | 成交数量                             |        |
| unitPrice          | Integer         | 是    | 委托价格                             |        |
| averagePrice       | Integer         | 是    | 成交均价                             |        |
| completeTotalMoney | Integer         | 是    | 成交总额                             |        |
| source             | Integer         | 是    | 订单来源ID 5:app,6:api,8:网页,9:P2P平仓  |        |

**计划委托返回结果**

| 参数名                   | 类型                  | 是否必须 | 示例                               | 描述       |
| :-------------------- | :------------------ | :--- | :------------------------------- | :------- |
| planEntrustRecords    | [planEntrustRecord] | 是    |                                  | 计划委托数组   |
| **planEntrustRecord** | {}                  | 是    |                                  | 计划委托对象   |
| entrustId             | Integer             | 是    | 委托ID                             |          |
| planType              | Integer             | 是    | 计划类型   0 卖单 1 买单                 |          |
| planStatus            | Integer             | 是    | 计划状态 -1 等待委托  1 已取消 2 已委托        |          |
| submitTime            | Integer             | 是    | 提交时间                             |          |
| triggerLowPrice       | String              | 否    |                                  | 低位触发价    |
| planLowPrice          | String              | 否    |                                  | 低位委托价    |
| triggerHighPrice      | String              | 否    |                                  | 高位触发价    |
| planHighPrice         | String              | 否    |                                  | 高位委托价    |
| planAmount            | String              | 是    |                                  | 委托量      |
| source                | Integer             | 是    | 订单来源ID  5:app,6:api,8:网页,9:P2P平仓 |          |
| formalEntrustId       | String              | 是    |                                  | 正式限价委托ID |


**返回事例**

限价委托、计划委托只返回其中一种，返回结果使用对象名称区别

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	},
	"datas" : {
		entrustRecords : [
			{entrustRecord }
		],
		planEntrustRecords :[
			{planEntrustRecord }
		]
	}
}
```

----------
###3.6 `getCacheEntrustRecord` 获取缓存的用户委托记录（限价、计划、历史各10条） 

 **请求参数**

| 参数名    | 类型     | 是否必须 | 描述           |
| :----- | :----- | :--- | :----------- |
| market | String | 是    | 市场名称，btc_cny |

**返回事例**

同时返回限价委托、历史委托、计划委托各10条，返回结果使用对象名称区别

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	},
	"datas" : {
		entrustRecords : [
			{entrustRecord }
		],
		historyEntrustRecords : [
			{entrustRecord }
		],
		planEntrustRecords :[
			{planEntrustRecord }
		]
	}
}
```



----------
###3.7 `getDealDetail` 获取委托成交详情 

**请求参数**

| 参数名       | 类型     | 是否必须 | 示例   | 描述           |
| :-------- | :----- | :--- | :--- | :----------- |
| market    | String | 是    |      | 市场名称，btc_cny |
| entrustId | String | 是    |      | 委托ID         |

**返回结果**

| 参数名            | 类型           | 是否必须 | 示例      | 描述                   |
| :------------- | :----------- | :--- | :------ | :------------------- |
| dealRecords    | [dealRecord] | 是    |         | 成交记录数组               |
| **dealRecord** | {}           | 是    |         | 成交纪录对象               |
| dealId         | String       | 是    |         | 成交记录id               |
| dealType       | String       | 是    |         | 成交类型 1：taker,2:maker |
| dealPrice      | String       | 是    | 80.11   | 成交价格                 |
| dealMoney      | String       | 是    | 1250.11 | 成交额                  |
| dealNumber     | String       | 是    | 50.11   | 成交数量                 |
| dealTime       | String       | 是    |         | 成交时间（时间戳）            |



**返回事例**

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	},
	"datas" : {
		dealRecords : [
			{dealRecord}
		]
	}
}
```

----------
###3.8 `doLimitEntrust` 限价委托 

 **请求参数**

| 参数名       | 类型      | 是否必须 | 描述               |
| :-------- | :------ | :--- | :--------------- |
| market    | string  | 是    | 交易市场   btc_cny   |
| type      | Integer | 是    | 交易类型   0 卖单 1 买单 |
| number    | string  | 是    | 委托数量             |
| unitPrice | string  | 是    | 委托价格             |
| safePwd   | string  | 否    | 二级密码             |

**返回事例**

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	}
}
```

----------
###3.9 `doPlanEntrust`计划委托 

 **请求参数**

| 参数名              | 类型     | 是否必须 | 描述             |
| :--------------- | :----- | :--- | :------------- |
| market           | string | 是    | 交易市场   btc_cny |
| type             | int    | 是    | 计划类型：0 卖单 1 买单 |
| planAmount       | String | 否    | 计划委托总金额或数量     |
| triggerHighPrice | String | 否    | 高位触发价          |
| triggerLowPrice  | String | 否    | 低位触发价          |
| planHighPrice    | String | 否    | 高位委托价          |
| planLowPrice     | String | 否    | 低位委托价          |
| safePwd          | String | 否    | 二级密码           |

**返回事例**

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	}
}
```



----------
###3.10 `doBatchEntrust` 批量委托 

 **请求参数**

| 参数名       | 类型      | 是否必须 | 描述               |
| :-------- | :------ | :--- | :--------------- |
| market    | string  | 是    | 交易市场   btc_cny   |
| type      | Integer | 是    | 交易类型   0 卖单 1 买单 |
| number    | string  | 是    | 委托数量             |
| highPrice | string  | 是    | 限定最高委托价格         |
| lowPrice  | string  | 是    | 限定最低委托价格         |
| safePwd   | string  | 否    | 二级密码             |

**返回结果**

| 参数名    | 类型     | 是否必须 | 示例    | 描述   |
| :----- | :----- | :--- | :---- | :--- |
| number | String | 是    | 总委托数量 |      |
| money  | String | 是    | 总委托金额 |      |
| hands  | String | 是    | 委托笔数  |      |


**返回事例**

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	},
	"datas":{
		number:'0.354',
		money:'1645.25',
		hands:'5'
	}
}
```

----------
###3.11 `doCancelEntrust ` 取消委托 

 **请求参数**

| 参数名       | 类型     | 是否必须 | 描述             |
| :-------- | :----- | :--- | :------------- |
| market    | string | 是    | 交易市场   btc_cny |
| entrustId | String | 是    | 委托ID           |

**返回事例**

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	}
}
```



----------
###3.12 `doBatchCancelEntrust `批量取消委托 

**请求参数**

| 参数名      | 类型      | 是否必须 | 描述                   |
| :------- | :------ | :--- | :------------------- |
| market   | string  | 是    | 交易市场   btc_cny       |
| type     | Integer | 是    | 交易类型  -1不限 0 卖单 1 买单 |
| minPrice | string  | 否    | 限定单价高于               |
| maxPrice | string  | 否    | 限定单价低于               |

**返回结果**

| 参数名   | 类型     | 是否必须 | 示例   | 描述   |
| :---- | :----- | :--- | :--- | :--- |
| hands | String | 是    |      | 笔数   |


**返回事例**

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	},
	"datas":{
		hands:'5'
	}
}
```

----------
###3.13 `doCancelPlanEntrust ` 取消计划委托 

 **请求参数**

| 参数名       | 类型     | 是否必须 | 描述             |
| :-------- | :----- | :--- | :------------- |
| market    | string | 是    | 交易市场   btc_cny |
| entrustId | String | 是    | 委托ID           |

**返回事例**

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	}
}
```

----------
###3.14 `doCancelAllPlanEntrust`取消全部计划委托 

**请求参数**

| 参数名    | 类型     | 是否必须 | 描述             |
| :----- | :----- | :--- | :------------- |
| market | string | 是    | 交易市场   btc_cny |

**返回结果**

| 参数名   | 类型     | 是否必须 | 示例   | 描述   |
| :---- | :----- | :--- | :--- | :--- |
| hands | String | 是    |      | 笔数   |


**返回事例**

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	},
	"datas":{
		hands:'5'
	}
}
```

----------


##四、财务相关接口

###4.1 `getAsset` 获取用户资产数据 

**返回结果**

| 参数名           | 类型     | 是否必须 | 示例            | 描述                               |
| :------------ | :----- | :--- | :------------ | :------------------------------- |
| lastTime      | String | 是    |               | 当前时间戳                            |
| totalAsset    | String | 是    |               | 总资产（CNY）                         |
| netAsset      | String | 是    |               | 净资产（CNY）                         |
| balances      | []     | 是    |               | 资产余额数组                           |
| **balance**[] | {}     | 是    |               | 资产数据对象                           |
| type          | String | 是    |               | 货币类型：<br>BTC：比特币，LTC：莱特币，CNY：人民币 |
| total         | String | 是    |               | 总额                               |
| usable        | String | 是    |               | 可用                               |
| frozen        | String | 是    |               | 冻结                               |
| loan          | String | 是    | "-2.01412147" | **借入返回正数，借出返回负数，没有借贷为0**         |

**返回事例**

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	},
	"datas":{
		lastTime:"145214124714",
		totalAsset :'0.354',
		netAsset   :'1645.25',
		balances : [
			{balance}
		]
	}
}
```

----------
###4.2 `getBill` 获取用户综合账单 

 **请求参数**

| 参数名       | 类型     | 是否必须 | 描述                              |
| :-------- | :----- | :--- | :------------------------------ |
| startTime | String | 否    | 开始时间 （时间戳）                      |
| endTime   | String | 否    | 结束时间 （时间戳）                      |
| billType  | int    | 否    | 账单类型                            |
| dataType  | int    | 是    | 0：30天内数据  1：30天前数据              |
| type      | String | 是    | 货币类型：all：全部   cny: 人民币， btc：比特币 |
| pageIndex | String | 是    | 页码 从1开始                         |
| pageSize  | String | 是    | 每页显示数量 默认10 最多200               |

 **返回结果**

| 参数名              | 类型     | 是否必须 | 示例             | 描述             |
| :--------------- | :----- | :--- | :------------- | :------------- |
| bills            | []     | 是    |                | 账单数组           |
| **bill**[]       | {}     | 是    |                | 账单对象           |
| id               | String | 是    | '2541222'      | 账单ID           |
| type             | String | 是    | '152'          | 账单类型           |
| typeName         | String | 是    | '卖出BTC'        | 账单类型名称         |
| billDate         | String | 是    | '141554411411' | 账单日期（时间戳）      |
| **主币种信息**        |        |      |                |                |
| mainCurrency     | String | 是    | 'CNY'          | 主币种货币类型        |
| mainChange       | String | 是    | '+500.12'      | 主币种本次变化的量（带符号） |
| mainBalance      | String | 是    | '1500.21'      | 主币种余额          |
| **副币种信息，没有就不返回** |        |      |                | 交易或兑换引起的变化币种   |
| subCurrency      | String | 否    | 'BTC'          | 副币种货币类型        |
| subChange        | String | 否    | '-0.11'        | 副币种本次变化的量（带符号） |
| subBalance       | String | 否    | '0.87214521'   | 副币种余额          |
| entrustId        | String | 否    | '25412541'     | 委托ID（没有则为0）    |
| market           | String | 否    | 'btc_cny'      | 若为交易则返回委托市场    |


**返回事例**

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	},
	"datas":{
		bills : [
			{bill }
		]
	}
}
```

----------
###4.3 `getBillType` 获取账单类型 

 **返回结果**

| 参数名      | 类型     | 是否必须 | 示例   | 描述       |
| :------- | :----- | :--- | :--- | :------- |
| billType | {}     | 是    |      | 账单类型对象   |
| key      | String | 是    |      | 账单类型标识   |
| value    | String | 是    |      | 账单类型显示名称 |

**返回事例**

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	},
	"datas":{
		billTypes : {
			"150" : "买入BTC",
			"151" : "买入BTC",
			"152" : "买入BTC",
			"153" : "买入BTC"
			……
		}
	}
}
```

----------
###4.4 `getPayinCnyConfig` 获取人民币充值信息


**各充值方式约定返回对象名**

| 对象名              | 类型   | 是否必须 | 示例   | 描述      |
| :--------------- | :--- | :--- | :--- | :------ |
| online           | {}   | 是    |      | 在线充值    |
| offline          | {}   | 是    |      | 汇款充值    |
| alipayByScan     | {}   | 否    |      | 支付宝扫码充值 |
| weixinByScan     | {}   | 否    |      | 微信扫码充值  |
| alipayByTransfer | {}   | 否    |      | 支付宝转账充值 |
| weixinByTransfer | {}   | 否    |      | 微信转账充值  |

 **充值方式属性**

| 参数名       | 类型     | 是否必须 | 示例   | 描述           |
| :-------- | :----- | :--- | :--- | :----------- |
| id        | String | 是    |      | 充值方式id       |
| name      | String | 是    |      | 充值方式名称       |
| fees      | String | 是    |      | 手续费          |
| disabled  | int    | 是    |      | 是否禁用，0可用，1禁用 |
| targetUrl | string | 否    |      | 第三方充值信息提交地址  |

**返回事例**

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	},
	"datas":{
		online: {
			id : '0',
			name : '在线充值',
			fees : '0.005',
			disabled : 0,
			targetUrl : "https://m.bitbank.com/bitbank/cny/charge"
		},
		offline: {
			id : '1',
			name : '汇款充值',
			fees : '0',
			disabled : 0
		},
		alipayByScan : {
			id : '2',
			name : '支付宝扫码充值',
			fees : '0.007',
			disabled : 1
		},
		weixinByScan : {
			id : '3',
			name : '微信扫码充值',
			fees : '0.007',
			disabled : 1
		},
		……
	}
}
```

----------
###4.5 `getRandomMoney` 获取人民币充值尾数 

**返回结果**

| 参数名         | 类型     | 是否必须 | 示例   | 描述   |
| :---------- | :----- | :--- | :--- | :--- |
| randomMoney | String | 是    | 0.82 | 随机尾数 |

 **返回事例**

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	},
	"datas":{
		randomMoney : '0.82'
	}
}
```

----------
###4.6 `getBanks ` 获取银行列表 

**返回结果**
| 参数名       | 类型      | 是否必须 | 示例   | 描述          |
| :-------- | :------ | :--- | :--- | :---------- |
| banks     | [bank ] | 是    |      | 银行列表数组      |
| **bank ** | {}      | 是    |      | 银行对象        |
| id        | Integer | 是    |      | ID          |
| name      | String  | 是    |      | 名称          |
| tag       | String  | 是    |      | 标签          |
| payin     | int     | 是    |      | 0不可充值，1可以充值 |
| payout    | int     | 是    |      | 0不可提现，1可以提现 |

 **返回事例**

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	},
	"datas":{
		banks : [
			{bank}
		]
	}
}
```

----------
###4.7 `getPayinAddress` 获取平台虚拟币充值地址 

 **请求参数**

| 参数名  | 类型     | 是否必须 | 描述                   |
| :--- | :----- | :--- | :------------------- |
| type | String | 是    | 货币类型：btc/ltc/eth/etc |

- **返回结果**

| 参数名     | 类型      | 是否必须 | 示例   | 描述   |
| :------ | :------ | :--- | :--- | :--- |
| id      | Integer | 是    |      | 地址ID |
| address | String  | 是    |      | 地址   |

**返回事例**

> 若地址库没有可用地址则返回错误代码（代码待定）。

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	},
	"datas":{
		id : '1024'
		address : '1JIJFIEOFJOWJJNJNLS'
	}
}
```

----------
###4.8 `getBankCardInfo` 通过银行卡获取银行信息（通过支付宝） 

>- 在nodejs端实现。

----------
###4.9 `doPayinCny` 充值人民币 

**请求参数**

| 参数名        | 类型     | 是否必须 | 描述             |
| :--------- | :----- | :--- | :------------- |
| type       | String | 是    | 充值方式ID         |
| accountId  | String | 否    | 资金账户ID         |
| amount     | String | 是    | 充值金额（不带尾数）     |
| 用户填写信息     |        |      | 若提交了资金账户ID则不需要 |
| bankId     | String | 否    | 银行ID           |
| realName   | String | 否    | 用户账户真实姓名       |
| cardNumber | String | 否    | 用户账户卡号         |

**返回结果**

| 参数名          | 类型     | 是否必须 | 示例   | 描述                        |
| :----------- | :----- | :--- | :--- | :------------------------ |
| **payin**    | {}     |      |      | **充值信息**                  |
| id           | String | 是    |      | 流水号                       |
| type         | int    | 是    |      | 充值方式ID                    |
| subTime      | String | 是    |      | 提交时间（时间戳）                 |
| endTime      | String | 否    |      | 入账时间（时间戳）                 |
| amount       | String | 是    |      | 充值金额（带尾数）                 |
| actualAmount | String | 是    |      | 实际到帐                      |
| status       | int    | 是    |      | 状态值 0 已取消 1 待支付 2 失败 3 成功 |
| failReason   | String | 是    |      | 失败或取消原因                   |
| **payee**    | {}     |      |      | **收款方信息（平台）**             |
| name         | String | 是    |      | 收款方银行/支付宝/微信开户名           |
| bankId       | String | 是    |      | 收款银行ID                    |
| bankTag      | String | 是    |      | 收款银行标签                    |
| bankName     | String | 是    |      | 收款银行名称                    |
| bankProvince | String | 是    |      | 收款银行开户省                   |
| bankCity     | String | 是    |      | 收款银行开户市                   |
| bankBranch   | String | 是    |      | 收款银行支行名称                  |
| account      | String | 是    |      | 收款方银行/支付宝/微信账号            |
| **payer**    | {}     |      |      | **付款方信息（用户）**             |
| name         | String | 是    |      | 付款人姓名                     |
| bankId       | String | 是    |      | 付款银行ID                    |
| bankTag      | String | 是    |      | 付款银行标签                    |
| bankName     | String | 是    |      | 付款银行名称                    |
| bankProvince | String | 否    |      | 付款银行开户省                   |
| bankCity     | String | 否    |      | 付款银行开户市                   |
| bankBranch   | String | 否    |      | 付款银行支行名称                  |
| account      | String | 是    |      | 付款账号                      |

**返回事例**

> 支付宝扫描充值、微信扫描充值不需要付款方信息（用户）。

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	},
	"datas":{
		payin : {},
		payee : {},
		payer : {}
	}
}
```

<font color="red">返回code说明：5003表示需要初级实名认证, 5004表示需要高级实名认证</font>

----------
###4.10 `getPayinCnyList` 获取人民币充值列表 

**请求参数**

| 参数名       | 类型     | 是否必须 | 示例   | 描述                |
| :-------- | :----- | :--- | :--- | :---------------- |
| pageIndex | String | 是    |      | 页码 从1开始           |
| pageSize  | String | 是    |      | 每页显示数量 默认10 最多200 |

**返回结果**

| 参数名       | 类型   | 是否必须 | 示例   | 描述       |
| :-------- | :--- | :--- | :--- | :------- |
| **payin** | {}   |      |      | **充值信息** |


**返回事例**

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	},
	"datas":{
		payin : [
			{payin}
		]
	}
}
```

----------
###4.11 `getPayinCnyDetail` 获取人民币充值详情 

> 只有待支付状态的充值订单有详情，失败、成功、取消都不返回。

**请求参数**

| 参数名  | 类型     | 是否必须 | 示例   | 描述   |
| :--- | :----- | :--- | :--- | :--- |
| id   | String | 是    |      | 充值ID |

**返回结果（与doPayinCny返回结果相同）**

| 参数名       | 类型   | 是否必须 | 示例   | 描述            |
| :-------- | :--- | :--- | :--- | :------------ |
| **payin** | {}   |      |      | **充值信息**      |
| **payee** | {}   |      |      | **收款方信息（平台）** |
| **payer** | {}   |      |      | **付款方信息（用户）** |

**返回事例**

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	},
	"datas":{
		payin : {},
		payee : {},
		payer : {}
	}
}
```
----------
###4.12 `getPayinQrcode` 获取扫码支付二维码 

> 可能不会再使用此种充值方式，先不做。

**请求参数**

| 参数名  | 类型     | 是否必须 | 示例   | 描述   |
| :--- | :----- | :--- | :--- | :--- |
| id   | String | 是    |      | 充值ID |

**返回结果**

>- 支付宝/微信扫码支付二维码图片
>- < img src='/getPayinQrcode/2017043210012' >

----------
###4.13 `doPayinByQrcode` 获取扫码支付结果 

> 可能不会再使用此种充值方式，先不做。
> 轮询请求服务器端，检查是否充值成功。
> 若充值成功则返回本次充值的信息。

**请求参数**

| 参数名  | 类型     | 是否必须 | 示例   | 描述   |
| :--- | :----- | :--- | :--- | :--- |
| id   | String | 是    |      | 充值ID |

**返回结果**

| 参数名       | 类型   | 是否必须 | 示例   | 描述       |
| :-------- | :--- | :--- | :--- | :------- |
| **payin** | {}   |      |      | **充值信息** |
```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	},
	"datas":{
		payin : {}
	}
}
```

----------
###4.14 `getPayoutInfo ` 获取提现费率/限额 

**请求参数**

| 参数名  | 类型     | 是否必须 | 描述                  |
| :--- | :----- | :--- | :------------------ |
| type | String | 是    | cny/btc/ltc/eth/etc |

**返回参数**

| 参数名           | 类型        | 是否必须 | 描述                  |
| :------------ | :-------- | :--- | :------------------ |
| defaultFees   | String    | 否    | 默认选中的手续费ID          |
| minFees       | String    | 否    | 单笔最少收取的手续费          |
| minAmount     | String    | 否    | 单笔最少提现金额            |
| **fees**      | String或[] | 是    | CNY手续费/手续费数组        |
| **feesInfo**  | {}        |      | 手续费对象               |
| id            | String    | 是    | 手续费ID               |
| value         | String    | 是    | 手续费值                |
| **limit**     | []        |      | 周期限额信息数组            |
| **limitInfo** | {}        |      | 周期限额信息对象            |
| id            | String    | 是    | 周期限额信息ID            |
| name          | String    | 是    | 周期限额名称              |
| tag           | String    | 是    | 周期限额标识符（作为class样式名） |
| total         | String    | 是    | 当前周期最大提现额度          |
| used          | String    | 是    | 当前周期已用提现额度          |




**cny-返回结果**

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	},
	"datas":{
		fees : '0.001',
		minFees : '5',
		minAmount : '5',
		maxAmount : '200000',
		limit : [
			{limitInfo}
		]
	}
}
```

**btc/ltc/eth/etc-返回结果**

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	},
	"datas":{
		fees : [
			{feesInfo}
		],
		limit : [
			{limitInfo}
		],
		minAmount : '0.001',
		maxAmount : '200',
		defaultFees : '1011'
	}
}
```

----------
###4.15 `doPayoutCny ` 提现人民币 

**请求参数**

| 参数名         | 类型     | 是否必须 | 描述        |
| :---------- | :----- | :--- | :-------- |
| accountId   | String | 是    | 提现资金账户ID  |
| amount      | String | 是    | 提现金额      |
| safePwd     | String | 是    | 二级密码      |
| dynamicCode | String | 是    | 动态验证码     |
| googleCode  | String | 否    | google验证码 |

**返回结果**

| 参数名          | 类型     | 是否必须 | 示例   | 描述                        |
| :----------- | :----- | :--- | :--- | :------------------------ |
| **payout**   | {}     |      |      | **提现信息**                  |
| id           | String | 是    |      | 流水号                       |
| subTime      | String | 是    |      | 提交时间（时间戳）                 |
| endTime      | String | 否    |      | 打款时间（时间戳）                 |
| amount       | String | 是    |      | 提现金额                      |
| fees         | String | 是    |      | 手续费                       |
| actualAmount | String | 是    |      | 实际到帐                      |
| status       | String | 是    |      | 状态值 0 已取消 1 处理中 2 失败 3 成功 |
| failReason   | String | 是    |      | 失败或取消原因                   |
| **payee**    | {}     |      |      | **收款方信息（用户）**             |
| bankCardId   | String | 是    |      | 银行卡ID                     |
| name         | String | 是    |      | 收款方银行开户名                  |
| bankId       | String | 是    |      | 收款银行ID                    |
| bankTag      | String | 是    |      | 收款银行标签                    |
| bankName     | String | 是    |      | 收款银行名称                    |
| bankProvince | String | 是    |      | 收款银行开户省                   |
| bankCity     | String | 是    |      | 收款银行开户市                   |
| bankBranch   | String | 是    |      | 收款银行支行名称                  |
| account      | String | 是    |      | 收款方银行账号                   |

**返回事例**

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	},
	"datas":{
		payout : {},
		payee : {}
	}
}
```

###4.16 `getPayoutCnyList`获取人民币提现记录

**请求参数**

| 参数名       | 类型     | 是否必须 | 示例   | 描述                |
| :-------- | :----- | :--- | :--- | :---------------- |
| pageIndex | String | 是    |      | 页码 从1开始           |
| pageSize  | String | 是    |      | 每页显示数量 默认10 最多200 |

**返回结果**

| 参数名        | 类型   | 是否必须 | 示例   | 描述       |
| :--------- | :--- | :--- | :--- | :------- |
| **payout** | {}   |      |      | **提现信息** |


**返回事例**

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	},
	"datas":{
		payout : [
			{payout}
		]
	}
}
```

----------
###4.17 `doPayoutCoin ` 提现虚拟货币 

**请求参数**

| 参数名         | 类型     | 是否必须 | 描述                   |
| :---------- | :----- | :--- | :------------------- |
| type        | String | 是    | 提现类型 btc/ltc/eth/etc |
| addressId   | String | 是    | 提现地址ID               |
| feesId      | String | 是    | 手续费ID                |
| amount      | String | 是    | 提现金额                 |
| safePwd     | String | 是    | 二级密码                 |
| dynamicCode | String | 是    | 动态验证码                |
| googleCode  | String | 否    | google验证码            |
| noBlock     | String | 否    | 内部转账  0不同意  1同意      |

**返回结果**

| 参数名          | 类型     | 是否必须 | 示例   | 描述                          |
| :----------- | :----- | :--- | :--- | :-------------------------- |
| **payout**   | {}     |      |      | **提现信息**                    |
| id           | String | 是    |      | 流水号                         |
| subTime      | String | 是    |      | 提交时间（时间戳）                   |
| endTime      | String | 否    |      | 处理时间（时间戳）                   |
| amount       | String | 是    |      | 提现金额                        |
| fees         | String | 是    |      | 手续费                         |
| actualAmount | String | 是    |      | 实际到帐                        |
| status       | String | 是    |      | 状态值 0已取消 1 待审核 2打币中 3失败 4成功 |
| failReason   | String | 是    |      | 失败或取消原因                     |
| address      | String | 是    |      | 提现地址                        |
| memo         | String | 是    |      | 地址标签                        |


**返回事例**

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	},
	"datas":{
		payout : {}
	}
}
```



----------
###4.18 `getPayoutCoinRecord` 获取虚拟货币提现记录

**请求参数**

| 参数名       | 类型     | 是否必须 | 示例   | 描述                    |
| :-------- | :----- | :--- | :--- | :-------------------- |
| type      | String | 是    |      | 货币类型  btc/ltc/eth/etc |
| pageIndex | String | 是    |      | 页码 从1开始               |
| pageSize  | String | 是    |      | 每页显示数量 默认10 最多200     |

**返回结果**

| 参数名        | 类型   | 是否必须 | 示例   | 描述       |
| :--------- | :--- | :--- | :--- | :------- |
| **payout** | {}   |      |      | **提现信息** |


**返回事例**

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	},
	"datas":{
		payout : [
			{payout}
		]
	}
}
```



----------



###4.19 `doCancelPayinCny` 取消人民币充值 

**请求参数**

| 参数名  | 类型     | 是否必须 | 示例   | 描述   |
| :--- | :----- | :--- | :--- | :--- |
| id   | String | 是    |      | 充值ID |

**返回结果**
```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	}
}
```

----------
###4.20 `doCancelPayout` 取消提现

> 取消提现不再进行身份验证，注意仅对可取消提现的状态进行取消处理。

**请求参数**

| 参数名  | 类型     | 是否必须 | 示例   | 描述                        |
| :--- | :----- | :--- | :--- | :------------------------ |
| type | String | 是    |      | 货币类型  cny/btc/ltc/eth/etc |
| id   | String | 是    |      | 提现ID                      |

**返回结果**
```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	}
}
```

----------
###4.21 `getPayinCoinRecord ` 获取虚拟币充值记录 

**请求参数**

| 参数名       | 类型     | 是否必须 | 示例   | 描述                    |
| :-------- | :----- | :--- | :--- | :-------------------- |
| type      | String | 是    |      | 货币类型  btc/ltc/eth/etc |
| pageIndex | String | 是    |      | 页码 从1开始               |
| pageSize  | String | 是    |      | 每页显示数量 默认10 最多200     |

**返回结果**

| 参数名          | 类型     | 是否必须 | 示例   | 描述                    |
| :----------- | :----- | :--- | :--- | :-------------------- |
| **payin**    | {}     |      |      | **充值信息**              |
| id           | String | 是    |      | 流水号                   |
| type         | String | 是    |      | 充值类型  0：区块链转入  1：内部转入 |
| subTime      | String | 是    |      | 提交时间（时间戳）             |
| endTime      | String | 否    |      | 处理时间（时间戳）             |
| amount       | String | 是    |      | 充值金额                  |
| actualAmount | String | 是    |      | 实际到帐                  |
| status       | String | 是    |      | 状态值 0 失败 1 确认中 2成功    |
| confirmTimes | String | 是    |      | 确认次数                  |
| address      | String | 是    |      | 充值地址                  |


**返回事例**

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	},
	"datas":{
		payin : [
			{payin}
		]
	}
}
```

----------
###4.22 `getAccounts` 获取用户资金帐户信息（充提银行卡、提现地址） 

**请求参数**

| 参数名  | 类型     | 是否必须 | 示例   | 描述                        |
| :--- | :----- | :--- | :--- | :------------------------ |
| type | String | 是    |      | 资金类型  cny/btc/ltc/eth/etc |

**cny返回结果-银行卡信息**

| 参数名         | 类型     | 是否必须 | 示例   | 描述                 |
| :---------- | :----- | :--- | :--- | :----------------- |
| **account** | {}     |      |      | **银行卡账户信息**        |
| id          | String | 是    |      | 银行卡ID              |
| account     | String | 是    |      | 银行账号               |
| openName    | String | 是    |      | 银行开户名              |
| bankId      | String | 是    |      | 银行ID               |
| provinceId  | String | 是    |      | 银行开户省id            |
| cityId      | String | 是    |      | 银行开户市id            |
| bankBranch  | String | 是    |      | 收款银行支行名称           |
| isAuth      | int    | 是    |      | 是否认证地址  0未认证  1已认证 |

**btc/ltc/eth/etc返回结果-提现地址信息**

| 参数名         | 类型     | 是否必须 | 示例   | 描述                 |
| :---------- | :----- | :--- | :--- | :----------------- |
| **account** | {}     |      |      | **提现地址账户信息**       |
| id          | String | 是    |      | 地址ID               |
| account     | String | 是    |      | 地址                 |
| memo        | String | 是    |      | 地址标签               |
| isAuth      | int    | 是    |      | 是否认证地址  0未认证  1已认证 |

**返回事例**

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	},
	"datas":{
		accounts : [
			{account}
		]
	}
}
```
----------
###4.23 `doSetBankCard` 增加/编辑/删除银行卡账户 

**请求参数**

| 参数名        | 类型     | 是否必须 | 示例   | 描述                           |
| :--------- | :----- | :--- | :--- | :--------------------------- |
| type       | String | 是    |      | 操作类型  增加:add，编辑:edit，删除:dele |
| id         | String | 否    |      | 银行卡ID                        |
| account    | String | 否    |      | 银行账号                         |
| openName   | String | 否    |      | 银行开户名                        |
| bankId     | String | 否    |      | 银行ID                         |
| provinceId | String | 否    |      | 银行开户省id                      |
| cityId     | String | 否    |      | 银行开户市id                      |
| bankBranch | String | 否    |      | 收款银行支行名称                     |

----------
###4.24 `doSetAddress` 增加/编辑/删除/认证提现地址 

**请求参数**

| 参数名         | 类型     | 是否必须 | 示例   | 描述                                   |
| :---------- | :----- | :--- | :--- | :----------------------------------- |
| type        | String | 是    |      | 操作类型  增加:add，编辑:edit，删除:dele，认证:auth |
| id          | String | 否    |      | 地址ID                                 |
| account     | String | 否    |      | 地址                                   |
| memo        | String | 否    |      | 地址标签                                 |
| safePwd     | String | 否    |      | 二级密码                               |
| dynamicCode | String | 否    |      | 动态验证码                                |

----------

###4.25 `getLoanInfo` 获取用户融资融币信息 

> 融资融币相关接口不需要再写，改版后指向回原来借贷界面进行操作。

**返回结果**

| 参数名            | 类型           | 是否必须 | 示例   | 描述                       |
| :------------- | :----------- | :--- | :--- | :----------------------- |
| leverage       | String       | 是    |      | 平仓风险 总资产/借入资产            |
| loanInfo       | [loanDeatil] | 是    |      | 融资融币信息数组                 |
| **loanDeatil** | {}           |      |      | 融资融币信息对象                 |
| type           | String       | 是    |      | 货币类型：cny/btc/ltc/eth/etc |
| netAssets      | String       | 是    |      | 净资产                      |
| hasLoanin      | String       | 是    |      | 已借入金额                    |
| canLoanin      | String       | 是    |      | 可以借的金额                   |
| loanRate       | String       | 是    | 0.1% | 当前最优日费率                  |

**返回事例**

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	},
	"datas":{
		leverage : "210%",
		loanInfo : [
			{loanDeatil}
		]
	}
}
```

----------
###4.26 `getLoanRecord` 获取借贷记录 

> 融资融币相关接口不需要再写，改版后指向回原来借贷界面进行操作。

**请求参数**

| 参数名       | 类型      | 是否必须 | 描述                                     |
| :-------- | :------ | :--- | :------------------------------------- |
| type      | String  | 是    | 货币类型：cny/btc/ltc/eth/etc               |
| status    | Integer | 是    | 借款状态 1还款中 2已还款 3需要平仓 4平仓还款(不传时 表示查询全部) |
| isIn      | Integer | 是    | 区分借入/借出 1 借入记录 0 借出记录                  |
| pageIndex | String  | 是    | 页码 从1开始                                |
| pageSize  | String  | 是    | 每页显示数量 最大200                           |

**返回结果**

| 参数名                 | 类型           | 是否必须 | 示例     | 描述                         |
| :------------------ | :----------- | :--- | :----- | :------------------------- |
| loanRecords         | [LoanRecord] | 是    |        | 借款记录数组                     |
| **loanRecord**      | {}           |      |        | 借款记录对象                     |
| id                  | String       | 是    | 1023   | 借款id                       |
| type                | String       | 是    |        | 货币类型：cny/btc/ltc/eth/etc   |
| debtAmount          | String       | 是    | 5000.0 | 借入金额                       |
| rate                | String       | 是    | 0.1%   | 借款利率                       |
| hasRepay            | String       | 是    | 200    | 已还金额(本金+利息)                |
| principal           | String       | 是    | 200    | 已还本金                       |
| submitTime          | String       | 是    |        | 借款时间                       |
| isUsedTicket        | Integer      | 是    |        | 是否使用免息劵                    |
| daysWithNoRate      | Integer      | 是    |        | 总免息天数                      |
| restDaysWithNoRate  | Integer      | 是    |        | 剩余免息天数                     |
| amountWithNoRate    | String       | 是    |        | 免息额度                       |
| daysWithRate        | Integer      | 是    |        | 已计息天数                      |
| interestAmount      | Integer      | 是    |        | 总计利息金额(含今天利息)              |
| amountShouldBeRepay | String       | 是    |        | 应还总额                       |
| status              | int          | 是    |        | 借款状态 1还款中 2已还款 3需要平仓 4平仓还款 |
| remainingPrincipal  | Integer      | 是    |        | 剩余欠款                       |
| arrearsLx           | Double       | 是    |        | 拖欠利息/累计利息(不计算当天利息)         |
**返回事例**

```
{
	"resMsg": {
	    "code": 1000,
	    "message": "success"
	},
	"datas":{
		loanRecords : [
			{loanRecord}
		]
	}
}
```

----------
###4.27 `getRepayRecord` 获取还款记录 

> 融资融币相关接口不需要再写，改版后指向回原来借贷界面进行操作。

**请求参数**

| 参数名       | 类型      | 是否必须 | 描述           |
| :-------- | :------ | :--- | :----------- |
| id        | Integer | 是    | 借款记录id       |
| pageIndex | String  | 是    | 页码 从1开始      |
| pageSize  | String  | 是    | 每页显示数量 最大200 |

 **返回结果**

| 参数名                  | 类型            | 是否必须 | 示例     | 描述                                       |
| :------------------- | :------------ | :--- | :----- | :--------------------------------------- |
| repayRecords         | [RepayRecord] | 是    |        | 还款记录数组                                   |
| **repayRecord**      | {}            |      |        | 还款记录对象                                   |
| id                   | String        | 是    | 1023   | 还款记录id                                   |
| type                 | String        | 是    |        | 货币类型：cny/btc/ltc/eth/etc                 |
| principalAndInterest | String        | 是    | 5000.0 | 还款金额(本息)                                 |
| status               | String        | 是    | 1      | 0 未还<br>1 已还<br>2  延时还<br>3  逾期已还<br>4  逾期未还 |
| shouldRepayTime      | String        | 是    |        | 应还时间（时间戳）                                |
| repayTime            | String        | 是    |        | 还款时间（时间戳）                                |

----------
###4.28 `doRepayLoan` 单笔/多笔还款 

> 融资融币相关接口不需要再写，改版后指向回原来借贷界面进行操作。

----------
###4.29 `getLoanoutRecord` 获取投资记录 

> 融资融币相关接口不需要再写，改版后指向回原来借贷界面进行操作。

----------
###4.30 `doLoanin` 借入资金 

> 融资融币相关接口不需要再写，改版后指向回原来借贷界面进行操作。

----------
###4.31 `doLoanout` 借出资金 

> 融资融币相关接口不需要再写，改版后指向回原来借贷界面进行操作。


##五、安全相关接口

### 5.1 `getSafeLog` 获取安全日志

 **请求参数**

| 参数名          | 类型        | 是否必须 | 描述                         |
| :----------- | :-------- | :--- | :------------------------- |
| **safeLogs** | [safeLog] |      | **日志信息数组**                 |
| **safeLog**  | {}        |      | **日志信息对象**                 |
| type         | String    | 是    | 日志类型<br>1.登录日志；2.操作日志（未开发） |
| pageIndex    | String    | 是    | 页码 从1开始                    |
| pageSize     | String    | 是    | 每页显示数量 默认10 最多200          |

 **返回结果**

| 参数名          | 类型      | 是否必须 | 描述      |
| :----------- | :------ | :--- | :------ |
| id           | String  | 是    | 日志ID    |
| type         | int     | 是    | 日志类型ID  |
| typeName     | int     | 是    | 日志类型名称  |
| ip           | String  | 是    | IP地址    |
| terminal     | Integer | 是    | 终端类型ID  |
| terminalName | String  | 是    | 终端类型名   |
| city         | String  | 是    | IP所属城市  |
| time         | String  | 是    | 日志时间    |
| result       | int     | 是    | 0失败，1成功 |
| describe     | String  | 是    | 描述      |

- **返回示例**

```
	{
		"resMsg": {
			"code": 1000,
			"message": "success"
		},
		datas: {
		  safeLogs: [
				{safeLog}
			]
		}   
	}
```

### 5.2 `doSetSafeStrategy`设置安全策略

 **请求参数**

| 参数名         | 类型      | 是否必须 | 描述                                       |
| :---------- | :------ | :--- | :--------------------------------------- |
| type        | Integer | 是    | 策略类型（1. 登录 2. 交易 3. 提现）                  |
| key         | Integer | 是    | 策略设置值（见下表）                               |
| safePwd     | String  | 否    | 二级密码（设置交易验证策略时需要）                        |
| dynamicCode | String  | 否    | 动态验证码（设置登录、提现验证策略时需要）                    |
| googleCode  | String  | 否    | 谷歌验证码（设置登录、提现验证策略时, 如用户已通过谷歌验证，则需要谷歌验证码） |

**登录策略对应key值**

| type | key  | 安全策略描述                     |
| :--- | :--- | :------------------------- |
| 1    | 1    | 只需密码                       |
| 1    | 2    | 密码+Google验证码               |
| 1    | 3    | 密码+异地登录验证（短信/邮件）           |
| 1    | 4    | 密码+Google验证码+异地登录验证（短信/邮件） |

**交易策略对应key值**

| type | key  | 安全策略描述      |
| :--- | :--- | :---------- |
| 2    | 1    | 永不输入二级密码    |
| 2    | 2    | 6小时内免输二级密码  |
| 2    | 3    | 每次交易均验证二级密码 |

**提现策略对应key值**

| type | key  | 安全策略描述                  |
| :--- | :--- | :---------------------- |
| 3    | 1    | 二级密码+短信/邮件验证码           |
| 3    | 2    | 二级密码+Google验证码          |
| 3    | 3    | 二级密码+短信/邮件验证码+Google验证码 |

**返回结果**

```
	{
		"resMsg": {
			"code": 1000,
			"message": "success"
		} 
	}
```

### 5.3 `doSetRemindConfig` 设置提醒配置

 **请求参数**

| 参数名  | 类型      | 是否必须 | 描述    |
| :--- | :------ | :--- | :---- |
| type | Integer | 是    | 提醒类型  |
| key  | Integer | 是    | 提醒设置值 |

**type提醒类型**

| type | 描述及key值                      |
| :--- | :--------------------------- |
| 1    | 是否开启网页登录APP提醒<br/>0：否，1：是    |
| 2    | 是否开启充值/提现APP推送提醒<br/>0：否，1：是 |
| 3    | 是否开启人民币充值/提现短信提醒<br/>0：否，1：是 |

**返回结果**

```
	{
		"resMsg": {
			"code": 1000,
			"message": "success"
		} 
	}
```

### 5.4 `getGoogleSecret` 获取 Google 密钥

**返回结果**

| 参数名    | 类型     | 是否必须 | 示例   | 描述   |
| :----- | :----- | :--- | :--- | :--- |
| secret | String | 是    |      | 密钥   |


**返回示例**

```
	{
		"resMsg": {
			"code": 1000,
			"message": "success"
		},
		datas: {
			secret : "CZSQT7UM3BXQPTKN"
		}   
	}
```

### 5.5 `getGoogleQrcode` 获取 Google密钥二维码

**请求参数**

| 参数名    | 类型     | 是否必须 | 示例   | 描述   |
| :----- | :----- | :--- | :--- | :--- |
| secret | String | 是    |      | 密钥   |


**返回示例**

>- < img src='/getGoogleQrcode?secret=CZSQT7UM3BXQPTKN ' >

### 5.6 `doSetGoogleAuth`开启/关闭/修改Google验证

修改Google验证需要人工审核。

**请求参数**

| 参数名          | 类型     | 是否必须 | 描述                 |
| :----------- | :----- | :--- | :----------------- |
| type         | String | 是    | 操作类型 0 关闭 1 开启 2修改 |
| googleSecret | String | 否    | 开启/修改的时候需要         |
| googleCode   | String | 是    | 开启/修改/关闭的时候需要      |
| dynamicCode  | String | 是    | 动态验证码              |

 **返回示例**

```
	{
		"resMsg": {
			"code": 1000,
			"message": "success"
		}
	}
```

### 5.7 `doSetUserPwd` 修改登录/二级密码

二级密码修改后24小时内不可用于提现操作。

**请求参数**

| 参数名         | 类型      | 是否必须 | 描述              |
| :---------- | :------ | :--- | :-------------- |
| type        | Integer | 是    | 1 登录密码 2 二级密码   |
| oldPassword | String  | 是    | 旧密码             |
| newPassword | String  | 是    | 新密码             |
| dynamicCode | String  | 是    | 动态验证码           |
| googleCode  | String  | 否    | Google 验证码（若开启） |

**返回示例**

```
	{
		"resMsg": {
			"code": 1000,
			"message": "success"
		}
	}
```

### 5.8 `doAuthMobile` 首次认证手机

**描述**

适用于使用邮箱注册的用户。

**请求参数**

| 参数名         | 类型     | 是否必须 | 描述              |
| :---------- | :----- | :--- | :-------------- |
| countryCode | String | 是    | 手机区号码           |
| mobile      | String | 是    | 手机号码            |
| mobileCode  | String | 是    | 短信验证码           |
| emailCode   | String | 是    | 邮件验证码           |
| safePwd     | String | 是    | 二级密码          |
| googleCode  | String | 否    | Google 验证码（若开启） |


**返回示例**

```
	{
		"resMsg": {
			"code": 1000,
			"message": "success"
		}
	}
```

### 5.9 `doModifyMobile` 修改手机

**描述**

必须完成邮箱认证后才能进行修改手机操作，提交修改申请后通过审核生效。

| 策略        | 描述                                       |
| :-------- | :--------------------------------------- |
| 1.使用原手机修改 | 所需参数：<br/>二级密码 + **原手机的验证码** + 新手机的验证码 + Google验证码（若开启） |
| 2.遗失旧手机修改 | 所需参数：<br/>二级密码 + **邮箱验证码** + 新手机的验证码 + Google验证码（若开启） |

 **请求参数**

| 参数名           | 类型     | 是否必须 | 描述              |
| :------------ | :----- | :--- | :-------------- |
| countryCode   | String | 是    | 新手机区号码          |
| mobile        | String | 是    | 新手机号码           |
| newMobileCode | String | 是    | 新手机短信验证码        |
| oldMobileCode | String | 否    | 原手机短信验证码        |
| emailCode     | String | 否    | 邮件验证码           |
| safePwd       | String | 是    | 二级密码          |
| googleCode    | String | 否    | Google 验证码（若开启） |

 **返回示例**

```
	{
		"resMsg": {
			"code": 1000,
			"message": "success"
		}
	}
```


### 5.10 `doAuthEmail` 认证邮箱

**描述**

适用于使用手机注册的用户，不发送邮箱认证链接，只发送邮箱验证码。

**请求参数**

| 参数名        | 类型     | 是否必须 | 描述              |
| :--------- | :----- | :--- | :-------------- |
| email      | String | 是    | 邮箱地址            |
| emailCode  | String | 是    | 邮箱验证码           |
| mobileCode | String | 是    | 短信验证码           |
| safePwd    | String | 是    | 二级密码          |
| googleCode | String | 否    | Google 验证码（若开启） |


### 5.11 `doSetMailAddress`设置/修改邮寄地址

**请求参数**

| 参数名     | 类型     | 是否必须 | 描述    |
| :------ | :----- | :--- | :---- |
| name    | String | 是    | 收件人   |
| mobile  | String | 是    | 收件人电话 |
| zipCode | String | 是    | 邮政编码  |
| adress  | String | 是    | 收件地址  |


### 5.12 `doPersonSimpleAuth` 个人初级实名认证

**请求参数**

| 参数名          | 类型     | 是否必须 | 描述                           |
| :----------- | :----- | :--- | :--------------------------- |
| areaInfo     | String | 是    | 证件所属区域ID，1：大陆，2：港澳，3：台湾，4：海外 |
| conuntryId   | String | 是    | 国家ID                         |
| conuntryCode | String | 是    | 国家区号代码                       |
| realName     | String | 是    | 姓名                           |
| cardId       | String | 是    | 证件号                          |


### 5.13 `doPersonDepthAuth` 个人高级实名认证

 **请求参数**

| 参数名        | 类型     | 是否必须 | 描述                |
| :--------- | :----- | :--- | :---------------- |
| loadImg    | String | 是    | 手持证件照 url         |
| frontalImg | String | 是    | 证件照正面 url         |
| backImg    | String | 是    | 证件照背面 url         |
| addressImg | String | 否    | 住址证明图片（非大陆用户） url |
| bankId     | String | 是    | 银行ID              |
| bankCard   | String | 是    | 银行卡号              |
| bankTel    | String | 是    | 银行预留手机号           |


### 5.14 `doCompanySimpleAuth`企业初级实名认证

**请求参数**

| 参数名              | 类型     | 是否必须 | 描述     |
| :--------------- | :----- | :--- | :----- |
| realName         | String | 是    | 企业名称   |
| legalName        | String | 是    | 企业法人   |
| registerNo       | String | 是    | 企业注册号  |
| organizationCode | String | 是    | 组织机构代码 |
| registerDate     | String | 是    | 注册日期   |
| registerAddr     | String | 是    | 注册地址   |


### 5.15 `doCompanyDepthAuth`企业高级实名认证

**请求参数**

| 参数名                           | 类型     | 是否必须 | 描述             |
| :---------------------------- | :----- | :--- | :------------- |
| businessLicenseImg            | String | 是    | 营业执照照片 url     |
| taxRegistrationCertificateImg | String | 是    | 税务登记证照片 url    |
| organizationCodeImg           | String | 是    | 组织机构代码证照片 url  |
| frontalImg                    | String | 是    | 法人身份证正面照片 url  |
| backImg                       | String | 是    | 法人身份证背面照片 url  |
| linkerFrontalImg              | String | 是    | 联系人身份证正面照片 url |
| linkerBackImg                 | String | 是    | 联系人身份证背面照片 url |



### 5.16 `getAuthStatus` 获取实名认证信息

**个人实名认证——返回结果**

| 参数名          | 类型     | 是否必须 | 示例        | 描述                                       |
| :----------- | :----- | :--- | :-------- | :--------------------------------------- |
| **系统信息**     |        |      |           |                                          |
| realAuthType | int    | 是    | 1         | 0：未选择，1：个人认证，2：企业认证                      |
| status       | String | 是    |           | 0:初级认证-未提交  1: 初级认证-待审核 <br> 2:初级认证-不通过  3:初级认证-通过 <br>4:高级认证-未提交 5:高级认证-待审核 <br> 6:高级认证-不通过  7:高级认证-通过 |
| detailStatus | []     | 是    | [0,1,0,1] | 状态数组：-1未设置  0不通过 1通过<br>数组下标：0基本资料 1证件照片 2银行卡信息 3住址证明 |
| failReason   | String | 否    |           | 实名认证驳回说明                                 |
| fileBasePath | String | 否    |           | 文件基础路径，将图片名称拼接到此路径后面组成完整的显示路径            |
| **初级信息**     |        |      |           |                                          |
| areaInfo     | String | 是    |           | 证件所属区域ID，1：大陆，2：港澳，3：台湾，4：海外             |
| conuntryId   | String | 是    |           | 国家ID                                     |
| conuntryCode | String | 是    |           | 国家区号代码                                   |
| realName     | String | 是    |           | 姓名                                       |
| cardId       | String | 是    |           | 证件号                                      |
| **高级信息**     |        |      |           |                                          |
| loadImg      | String | 是    |           | 手持证件照 url                                |
| frontalImg   | String | 是    |           | 证件照正面 url                                |
| backImg      | String | 是    |           | 证件照背面 url                                |
| addressImg   | String | 否    |           | 住址证明图片（非大陆用户） url                        |
| bankId       | String | 是    |           | 银行ID                                     |
| bankCard     | String | 是    |           | 银行卡号                                     |
| bankTel      | String | 是    |           | 银行预留手机号                                  |

**企业实名认证——返回结果**

| 参数名                           | 类型     | 是否必须 | 示例            | 描述                                       |
| :---------------------------- | :----- | :--- | :------------ | :--------------------------------------- |
| **系统信息**                      |        |      |               |                                          |
| realAuthType                  | int    | 是    | 2             | 0：未选择，1：个人认证，2：企业认证                      |
| status                        | String | 是    |               | 0:初级认证-未提交  1: 初级认证-待审核 <br> 2:初级认证-不通过  3:初级认证-通过 <br>4:高级认证-未提交 5:高级认证-待审核 <br> 6:高级认证-不通过  7:高级认证-通过 |
| detailStatus                  | []     | 是    | [0,1,0,1,0,1] | 状态数组：-1未设置  0不通过 1通过<br>数组下标：0基本资料 1营业执照 2税务登记证 3组织机构代码证  4法人身份证   5联系人身份证 |
| failReason                    | String | 否    |               | 实名认证驳回说明                                 |
| fileBasePath                  | String | 否    |               | 文件基础路径，将图片名称拼接到此路径后面组成完整的显示路径            |
| **初级信息**                      |        |      |               |                                          |
| realName                      | String | 是    |               | 企业名称                                     |
| legalPersonName               | String | 是    |               | 企业法人                                     |
| enterpriseRegisterNo          | String | 是    |               | 企业法注册号                                   |
| organizationCode              | String | 是    |               | 组织机构代码                                   |
| enterpriseRegisterDate        | String | 是    |               | 注册日期                                     |
| enterpriseRegisterAddr        | String | 是    |               | 注册地址                                     |
| **高级信息**                      |        |      |               |                                          |
| businessLicenseImg            | String | 是    |               | 营业执照照片 url                               |
| taxRegistrationCertificateImg | String | 是    |               | 税务登记证照片 url                              |
| organizationCodeImg           | String | 是    |               | 组织机构代码证照片 url                            |
| frontalImg                    | String | 是    |               | 法人身份证正面照片 url                            |
| backImg                       | String | 是    |               | 法人身份证背面照片 url                            |
| linkerFrontalImg              | String | 是    |               | 联系人身份证正面照片 url                           |
| linkerBackImg                 | String | 是    |               | 联系人身份证背面照片 url                           |

**返回示例**

```
	{
		"resMsg": {
			"code": 1000,
			"message": "success"
		},
		"datas" {
			……
		}
	}
```

### 5.17 `doApiConfig` 开启/关闭 API 状态，绑定/修改 IP

**请求参数**

| 参数名         | 类型     | 是否必须 | 描述                       |
| :---------- | :----- | :--- | :----------------------- |
| type        | int    | 是    | 操作类型：0关闭API，1开启API，2绑定IP |
| bindIp      | String | 否    | 绑定IP，使用半角英文逗号分隔          |
| dynamicCode | String | 是    | 动态验证码                    |

**返回示例**

```
	{
		"resMsg": {
			"code": 1000,
			"message": "success"
		}
	}
```

### 5.18 `doApiCreateKey` 生成 API 密钥

**请求参数**

| 参数名         | 类型     | 是否必须 | 描述    |
| :---------- | :----- | :--- | :---- |
| dynamicCode | String | 是    | 动态验证码 |

- **返回结果**
| 参数名       | 类型     | 是否必须 | 描述               |
| :-------- | :----- | :--- | :--------------- |
| accessKey | String | 是    | API访问密钥          |
| secretKey | String | 是    | API私有密钥（仅本次返回显示） |

- **返回示例**

```
	{
		"resMsg": {
			"code": 1000,
			"message": "success"
		},
		"datas": {
			assessKey: '6b95595c-1eb0-432c-a7f1-1c2fedc9ec13',
			secretKey: 'd4da7771-fba4-404d-b652-7f34c589c169'
		}
	}
```

### 5.19 `getApiKey`获取 API 密钥

**请求参数**

**返回结果**

| 参数名       | 类型     | 是否必须 | 描述      |
| :-------- | :----- | :--- | :------ |
| accessKey | String | 是    | API访问密钥 |

- **返回示例**

```
	{
		"resMsg": {
			"code": 1000,
			"message": "success"
		},
		"datas": {
			assessKey: 6b95595c-1eb0-432c-a7f1-1c2fedc9ec13
		}
	}
```