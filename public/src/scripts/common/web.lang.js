// EXX Language Pack
//通配符 [$1],[$2],[$3]...
//通配符用于语言中的变量，使用过程中替换，支持无限个变量
//加载语言包 EXX.L("key","arguments[0]",""arguments[1]",""arguments[2]",""arguments[3]"...)
//实例：EXX.L("你好");
//实例：EXX.L("你好","变量1","变量2","变量3","变量n");
//动态增加语言包（不推荐使用，建议增加到语言包方便管理）
//实例：EXX.addLan("key",{"cn":"中文","en":"english","kr":"韩文"...})
//本语言包主要用于前端脚本
//避免覆盖相同命名空间
if (typeof EXX != "object") {
    var EXX = {};
}
EXX.pack = {
    "确定": {
        "cn": "确定",
        "en": "OK"
    },
    "取消": {
        "cn": "取消",
        "en": "Cancel"
    },
    "提交": {
        "cn": "提交",
        "en": "Submit"
    },
    "关闭": {
        "cn": "关闭",
        "en": "Close"
    },
    "请输入您的二级密码": {
        "cn": "请输入您的二级密码",
        "en": "Please input your transaction password."
    },
    "短信验证码": {
        "cn": "短信验证码",
        "en": "SMS Verification Code"
    },
    "语音验证码": {
        "cn": "语音验证码",
        "en": "Voice Verification Code"
    },
    "您已关闭手机验证": {
        "cn": "您已关闭手机验证，暂不能关闭谷歌验证",
        "en": "You can not close Google verification at present  because your phone verification is closed"
    },
    "您已关闭谷歌验证": {
        "cn": "您已关闭谷歌验证，暂不能关闭手机验证",
        "en": "You can not close the phone verification because your Google verification is closed "
    },
    "该项为必填": {
        "cn": "该项为必填",
        "en": "This option is required"
    },
    "请选择一个项目": {
        "cn": "请选择一个项目",
        "en": "Please select an option"
    },
    "该选项为必选": {
        "cn": "该选项为必选",
        "en": "This option is required"
    },
    "日期范围不可空白": {
        "cn": "日期范围不可空白",
        "en": "Date Range cannot be null"
    },
    "日期范围": {
        "cn": "日期范围",
        "en": "Date Range"
    },
    "时间范围": {
        "cn": "时间范围",
        "en": "Time Range"
    },
    "无效的": {
        "cn": "无效的",
        "en": "Invalid "
    },
    "最多": {
        "cn": "最多 [XX] 个字符",
        "en": "At most [XX] characters "
    },
    "最少": {
        "cn": "最少 [XX] 个字符",
        "en": "At least [XX] characters"
    },
    "个字符": {
        "cn": "个字符",
        "en": " Characters"
    },
    "至少填写其中一项": {
        "cn": "至少填写其中一项",
        "en": "Fill in at least one of them"
    },
    "最大值为": {
        "cn": "最大值为 [XX]",
        "en": "Maximum is [XX] "
    },
    "最小值为": {
        "cn": "最小值为 [XX]",
        "en": "Minimum is [XX]"
    },
    "日期需在": {
        "cn": "日期需在",
        "en": "Date should be "
    },
    "之前": {
        "cn": "之前",
        "en": " before"
    },
    "之后": {
        "cn": "之后",
        "en": " after"
    },
    "最多选择": {
        "cn": "最多选择",
        "en": "Choose at most "
    },
    "最少选择": {
        "cn": "最少选择",
        "en": "Choose at least "
    },
    "个项目": {
        "cn": "个项目",
        "en": " options"
    },
    "两次输入的密码不一致": {
        "cn": "两次输入的密码不一致",
        "en": "The two passwords differ."
    },
    "无效的信用卡号码": {
        "cn": "无效的信用卡号码",
        "en": "Invalid credit card number"
    },
    "无效的电话号码": {
        "cn": "无效的电话号码",
        "en": "Invalid phone number"
    },
    "无效的邮件地址": {
        "cn": "无效的邮件地址",
        "en": "Invalid email address"
    },
    "无效的整数": {
        "cn": "无效的整数",
        "en": "Invalid integer"
    },
    "无效的数值": {
        "cn": "无效的数值",
        "en": "Invalid number"
    },
    "无效的日期": {
        "cn": "无效的日期，格式必需为 YYYY-MM-DD",
        "en": "Invalid date,the format should be YYYY - MM - DD"
    },
    "无效的IP地址": {
        "cn": "无效的IP地址",
        "en": "Invalid IP address"
    },
    "无效的网址": {
        "cn": "无效的网址",
        "en": "Invalid website"
    },
    "只能填写数字": {
        "cn": "只能填写数字",
        "en": "Fill in numbers only"
    },
    "只能填写英文字母": {
        "cn": "只能填写英文字母",
        "en": "Fill in English letters only"
    },
    "只能填写数字与英文字母": {
        "cn": "只能填写数字与英文字母",
        "en": "Fill in numbers and English letters only"
    },
    "无效的日期或时间格式": {
        "cn": "无效的日期或时间格式",
        "en": "Invalid date or time format"
    },
    "可接受的格式：": {
        "cn": "可接受的格式：",
        "en": "The acceptable format: "
    },
    "只能填写中文汉字": {
        "cn": "只能填写中文汉字",
        "en": "Fill in Chinese characters only"
    },
    "无效的身份证号码": {
        "cn": "无效的身份证号码",
        "en": "Invalid ID number"
    },
    "无效的邮政编码": {
        "cn": "无效的邮政编码",
        "en": "Invalid postcode"
    },
    "无效的QQ号码": {
        "cn": "无效的QQ号码",
        "en": "Invalid QQ number"
    },
    "请输入正确的金额": {
        "cn": "请输入正确的金额",
        "en": "Please input the correct amount"
    },
    "请输入正确数量的比特币": {
        "cn": "请输入正确数量的比特币",
        "en": "Please input the correct Bitcoin amount"
    },
    "请输入正确数量的莱特币": {
        "cn": "请输入正确数量的莱特币",
        "en": "Please  input the correct Litecoin amount"
    },
    "请输入小数点后两位": {
        "cn": "请输入小数点后两位",
        "en": "Please input two digits after the decimal point"
    },
    "请输入正确利率": {
        "cn": "请输入正确利率",
        "en": "Please input the correct rate"
    },
    "最小单位为0.01%": {
        "cn": "最小单位为0.01%",
        "en": "The least unit  of 0.01%"
    },
    "请输入正确的比特币地址": {
        "cn": "请输入正确的比特币地址",
        "en": "Please input the correct Bitcoin address"
    },
    "请输入正确的莱特币地址": {
        "cn": "请输入正确的莱特币地址",
        "en": "Please input the correct Litecoin address"
    },
    "只能包含非法字符": {
        "cn": "只能包含非法字符",
        "en": "Only contains an illegal character"
    },
    "只能是纯数字": {
        "cn": "只能是纯数字",
        "en": "Pure numbers only"
    },
    "只能是纯字母": {
        "cn": "只能是纯字母",
        "en": "Pure Letters only"
    },
    "只能是纯符号": {
        "cn": "只能是纯符号",
        "en": "Pure Symbol only"
    },
    "只能为同一字符": {
        "cn": "只能为同一字符",
        "en": "Must be the same Character"
    },
    "当前字段长度": {
        "cn": "当前字段长度",
        "en": " The current field length"
    },
    "个字符": {
        "cn": "个字符",
        "en": "characters"
    },
    "如果长时间没有进入": {
        "cn": "如果长时间没有进入，<a onclick='$('.bk-animationload').delay(300).fadeOut('slow');' role='button'>请点击这里</a>.",
        "en": "If long time not sign in, Please click <a onclick='$('.bk-animationload').delay(300).fadeOut('slow');' role='button>click here</a>."
    },
    "通用未登录提示": {
        "cn": "<div class='bk-norecord'><p><i class='bk-ico info'></i>您还没有登录，请 <a style='color:#de211d; margin:0 5px;' href='/user/login'>登录</a> 或 <a style='color:#3dc18e; margin:0 5px;' href='/user/register'>注册</a> 后再尝试。</p></div>",
        "en": "<div class='bk-norecord'><p><i class='bk-ico info'></i>You have not sign in yet,please <a style='color:#de211d; margin:0 5px;' href='/user/login'>Login</a> or <a  style='color:#3dc18e; margin:0 5px;' href='/user/register'>Sign Up</a> and try again.</p></div>",
    },
    "通用没有任何记录": {
        "cn": "<div class='bk-norecord'><p><i class='bk-ico info'></i>暂时没有相关记录。</p></div>",
        "en": "<div class='bk-norecord'><p><i class='bk-ico info'></i>No record.</p></div>",
    },
    "手机号码有误！": {
        "cn": "手机号码有误！",
        "en": "Wrong phone number!"
    },
    "请输入您的手机号码": {
        "cn": "请输入您的手机号码",
        "en": "Please input your phone number"
    },
    "请输入您的手机号码或者邮箱": {
        "cn": "请输入您的手机号码或者邮箱",
        "en": "Please input your phone number or email address"
    },
    "请输入图形验证码，4位字符": {
        "cn": "请输入图形验证码，4位字符",
        "en": "Please input graphics verification code,4 characters"
    },
    "密码输入有误，请重新输入。": {
        "cn": "密码输入有误，请重新输入。",
        "en": "Wrong password,please try again."
    },
    "请输入您收到的验证码，六位数字！": {
        "cn": "请输入您收到的验证码，六位数字！",
        "en": "Please input SMS verification code,6 digits!"
    },
    "两次输入的密码不一致，请重新输入。": {
        "cn": "两次输入的密码不一致，请重新输入。",
        "en": "The two passwords differ, please try again."
    },
    "登录失败": {
        "cn": "登录失败",
        "en": "Logon fails."
    },
    "注册失败": {
        "cn": "注册失败",
        "en": "Sign up fails."
    },
    "请拖动页面到最底下进行转让!": {
        "cn": "请拖动页面到最底下进行转让!",
        "en": "Drag the page to the bottom to transfer!"
    },
    "ajax未登录返回": {
        "cn": "<div class='bk-norecord'><p>您还没有登录，请 <a href='/login'>登录</a> 或 <a href='/register'>注册</a> 后再尝试。</p></div>",
        "en": "<div class='bk-norecord'><p>You are not sign in, please <a href='/login'>sign in</a> or <a href='/register'>sign up</a>.</p></div>"
    },
    "请正确输入购买金额。": {
        "cn": "请正确输入购买金额。",
        "en": "please input correct amount."
    },
    "购买金额必须是1的整数倍": {
        "cn": "购买金额必须是1的整数倍",
        "en": "Purchase amount must be integers"
    },
    "请正确输入二级密码。": {
        "cn": "请正确输入二级密码。",
        "en": "Please input the correct transaction password."
    },
    "请正确输入购买金额，最少": {
        "cn": "请正确输入购买金额，最少",
        "en": "Purchase amount should be greater than"
    },
    "请正确输入购买金额，最高可购买": {
        "cn": "请正确输入购买金额，最高可购买",
        "en": "Purchase amount should be lower than"
    },
    "确定要还款吗？": {
        "cn": "确定要还款吗？",
        "en": "Sure to repay?"
    },
    "请选择需要还款的记录!": {
        "cn": "请选择需要还款的记录!",
        "en": "Please choose the records that need to repay!"
    },
    "您要确定为所选的记录还款吗？": {
        "cn": "您要确定为所选的记录还款吗？",
        "en": "Sure to repay for the records you choosed?"
    },
    "系统检测到您未登录，请先<a href='/user/log'>登录</a>": {
        "cn": "系统检测到您未登录，请先<a href='/user/log'>登录</a>",
        "en": "you havn't sign in,please click to <a href='/user/log'>sign in</a>"
    },
    "号码归属地": {
        "cn": "号码归属地",
        "en": "Phone Number Attribution"
    },
    "国家/地区": {
        "cn": "国家/地区",
        "en": "Country/Region"
    },
    "建议由6-16位字母、数字和特殊符号组成，不能是纯数字或字母": {
        "cn": "建议由6-16位字母、数字和特殊符号组成，不能是纯数字或字母",
        "en": "Suggest password is made up of 6-16 letters,numbers and special symbols,can not be pure numbers or letters"
    },
    "早上好": {
        "cn": "早上好",
        "en": "Good morning"
    },
    "上午好": {
        "cn": "上午好",
        "en": "Good morning"
    },
    "中午好": {
        "cn": "中午好",
        "en": "Good afternoon"
    },
    "下午好": {
        "cn": "下午好",
        "en": "Good afternoon"
    },
    "晚上好": {
        "cn": "晚上好",
        "en": "Good evening"
    },
    "请上传": {
        "cn": "请上传",
        "en": "Please upload"
    },
    "请确认您的上传是否为图片": {
        "cn": "请确认您的上传是否为图片",
        "en": "Please ensure that is a photo file"
    },
    "图片上传中，请稍后提交...": {
        "cn": "图片上传中，请稍后提交...",
        "en": "Photo uploading,please submit later..."
    },
    "上传完成": {
        "cn": "上传完成",
        "en": "Upload success"
    },
    "上传失败": {
        "cn": "上传失败",
        "en": "Upload fail"
    },
    "退出登陆": {
        "cn": "退出登陆",
        "en": "Logout"
    },
    "用户登陆": {
        "cn": "用户登陆",
        "en": "Sign In"
    },
    "星期一": {
        "cn": "星期一",
        "en": "Monday"
    },
    "星期二": {
        "cn": "星期二",
        "en": "Tuesday"
    },
    "星期三": {
        "cn": "星期三",
        "en": "Wednesday"
    },
    "星期四": {
        "cn": "星期四",
        "en": "Thursday"
    },
    "星期五": {
        "cn": "星期五",
        "en": "Friday"
    },
    "星期六": {
        "cn": "星期六",
        "en": "Saturday"
    },
    "星期日": {
        "cn": "星期日",
        "en": "Sunday"
    },
    "Mon": {
        "cn": "一",
        "en": "Mon"
    },
    "Tue": {
        "cn": "二",
        "en": "Tue"
    },
    "Wed": {
        "cn": "三",
        "en": "Wed"
    },
    "Thu": {
        "cn": "四",
        "en": "Thu"
    },
    "Fri": {
        "cn": "五",
        "en": "Fri"
    },
    "Sat": {
        "cn": "六",
        "en": "Sat"
    },
    "Sun": {
        "cn": "日",
        "en": "Sun"
    },
    "Mo": {
        "cn": "一",
        "en": "Mo"
    },
    "Tu": {
        "cn": "二",
        "en": "Tu"
    },
    "We": {
        "cn": "三",
        "en": "We"
    },
    "Th": {
        "cn": "四",
        "en": "Th"
    },
    "Fr": {
        "cn": "五",
        "en": "Fr"
    },
    "Sa": {
        "cn": "六",
        "en": "Sa"
    },
    "Su": {
        "cn": "日",
        "en": "Su"
    },
    "一月": {
        "cn": "一月",
        "en": "January"
    },
    "二月": {
        "cn": "二月",
        "en": "February"
    },
    "三月": {
        "cn": "三月",
        "en": "March"
    },
    "四月": {
        "cn": "四月",
        "en": "April"
    },
    "五月": {
        "cn": "五月",
        "en": "May"
    },
    "六月": {
        "cn": "六月",
        "en": "June"
    },
    "七月": {
        "cn": "七月",
        "en": "July"
    },
    "八月": {
        "cn": "八月",
        "en": "August"
    },
    "九月": {
        "cn": "九月",
        "en": "September"
    },
    "十月": {
        "cn": "十月",
        "en": "October"
    },
    "十一": {
        "cn": "十一",
        "en": "November"
    },
    "十二": {
        "cn": "十二",
        "en": "December"
    },
    "Jan": {
        "cn": "一月",
        "en": "Jan"
    },
    "Feb": {
        "cn": "二月",
        "en": "Feb"
    },
    "Mar": {
        "cn": "三月",
        "en": "Mar"
    },
    "Apr": {
        "cn": "四月",
        "en": "Apr"
    },
    "May": {
        "cn": "五月",
        "en": "May"
    },
    "Jun": {
        "cn": "六月",
        "en": "Jun"
    },
    "Jul": {
        "cn": "七月",
        "en": "Jul"
    },
    "Aug": {
        "cn": "八月",
        "en": "Aug"
    },
    "Sep": {
        "cn": "九月",
        "en": "Sep"
    },
    "Oct": {
        "cn": "十月",
        "en": "Oct"
    },
    "Nov": {
        "cn": "十一",
        "en": "Nov"
    },
    "Dec": {
        "cn": "十二",
        "en": "Dec"
    },
    "您输入的数据有误，请重新输入！": {
        "cn": "您输入的数据有误，请重新输入！",
        "en": "The input data is wrong, please input again! "
    },
    "您的可用额度不足，请重新输入！": {
        "cn": "您的可用额度不足[$1]，请重新输入！",
        "en": "Your available balance less than [$1] , please input again!"
    },
    "中山分公司": {
        "cn": "中山分公司",
        "en": "ZhongShan Branch"
    },
    "地址：广东省中山市紫马奔腾3座903,905": {
        "cn": "地址：广东省中山市紫马奔腾3座903,905",
        "en": "Address:Room 903,905 Zi Ma Ben Teng Unit 3,No.2,Zhongshan 5th road, East district, Zhongshan, Guangdong province"
    },
    "深圳分公司": {
        "cn": "深圳分公司",
        "en": "ShenZhen Branch"
    },
    "太原分公司": {
        "cn": "太原分公司",
        "en": "TaiYuan Branch"
    },
    "济南分公司": {
        "cn": "济南分公司",
        "en": "JiNan Branch"
    },
    "内蒙古分公司": {
        "cn": "内蒙古分公司",
        "en": " Inner Mongolia Branch"
    },
    "成都分公司": {
        "cn": "成都分公司",
        "en": "ChengDu Branch"
    },
    "您的总资产折合": {
        "cn": "您的总资产折合",
        "en": "Assets Details"
    },
    "确定要取消此笔转让吗？": {
        "cn": "确定要取消此笔转让吗？",
        "en": "Are you sure to cancel this item?"
    },
    "确定要使用新地址吗？": {
        "cn": "确定要使用新地址吗？",
        "en": "Make sure to use new address?"
    },
    "可用资产": {
        "cn": "可用资产",
        "en": "Available Assets"
    },
    "资产折合": {
        "cn": "资产折合",
        "en": "Total Assets"
    },
    "最小购买": {
        "cn": "最小购买",
        "en": "At least"
    },
    "最大购买": {
        "cn": "最大购买",
        "en": "At most"
    },
    "可用": {
        "cn": "可用",
        "en": "Available"
    },
    "活期": {
        "cn": "活期",
        "en": "Interest Bearing Account"
    },
    "冻结": {
        "cn": "冻结",
        "en": "Frozen"
    },
    "其它": {
        "cn": "其它",
        "en": "Other"
    },
    "确定要隐藏当前[BTC]提现账户吗": {
        "cn": "确定要隐藏当前[BTC]提现账户吗",
        "en": "Make sure to hide the current [BTC] withdraw account?"
    },
    "确定要隐藏当前[LTC]提现账户吗": {
        "cn": "确定要隐藏当前[LTC]提现账户吗",
        "en": "Make sure to hide the current [LTC] withdraw account?"
    },
    "确定要删除当前[BTC]提现账户吗": {
        "cn": "确定要删除当前[BTC]提现账户吗",
        "en": "Make sure to delete the current [BTC] withdraw account?"
    },
    "确定要删除当前[LTC]提现账户吗": {
        "cn": "确定要删除当前[LTC]提现账户吗",
        "en": "Make sure to delete the current [LTC] withdraw account?"
    },
    "请将二维码对准摄像头正中央": {
        "cn": "请将二维码对准摄像头正中央",
        "en": "Please put the QR code on the central of the camera"
    },
    "两个尺寸必须大于0": {
        "cn": "两个尺寸必须大于0",
        "en": "Both dimensions must be greater than 0"
    },
    "不能对非方阵调用getDimension()方法": {
        "cn": "不能对非方阵调用getDimension()方法",
        "en": "Can't call getDimension() on a non-square matrix"
    },
    "左右前必须负的": {
        "cn": "左右前必须负的",
        "en": "Left and top must be nonnegative"
    },
    "高度和宽度至少为1": {
        "cn": "高度和宽度至少为1",
        "en": "Height and width must be at least 1"
    },
    "该地区必须适合在矩阵": {
        "cn": "该地区必须适合在矩阵",
        "en": "The region must fit inside the matrix"
    },
    "跨域图像阅读在你的浏览器不支持!将其保存到你的电脑然后拖拽文件!": {
        "cn": "跨域图像阅读在你的浏览器不支持!将其保存到你的电脑然后拖拽文件!",
        "en": "Cross domain image reading not supported in your browser! Save it to your computer then drag and drop the file!"
    },
    "解读二维码错误": {
        "cn": "解读二维码错误",
        "en": "Error decoding QR Code"
    },
    "请您允许使用摄像头": {
        "cn": "请您允许使用摄像头",
        "en": "Please authorize EXX to use your camera"
    },
    "二维码扫描": {
        "cn": "二维码扫描",
        "en": "QR code scanning"
    },
    "活动已结束，奖励已发放": {
        "cn": "活动已结束，奖励已发放",
        "en": "Activity was finished and the rewards has been issued."
    },
    "密码不能为空，请输入密码。": {
        "cn": "密码不能为空，请输入密码。",
        "en": "Password should not be null,please fill in."
    },
    "请您允许使用摄像头": {
        "cn": "请您允许使用摄像头",
        "en": "Please authorize EXX to use your camera."
    },
    "网站公告": {
        "cn": "网站公告",
        "en": "EXX Declaration"
    },
    "更多": {
        "cn": "更多",
        "en": "More"
    },
    "全部标记已读": {
        "cn": "全部标记已读",
        "en": "Mark all as read"
    },
    "合并深度到n": {
        "cn": "合并深度到[$1]",
        "en": "Combine depth to [$1]"
    },
    "更改档位到n": {
        "cn": "更改档位到[$1]",
        "en": "Change stall to [$1]"
    },
    "买单价格高于市场价n%": {
        "cn": "你输入的买单价格 [$1] 高于市场价 [$2] 的 [$3] %，是否还要委托交易？",
        "en": "You buy price [$1] is greater than market price [$2] [$3]%,whether to continue entrusting trade？"
    },
    "卖单价格低于市场价n%": {
        "cn": "你输入的卖单价格 [$1] 低于市场价 [$2] 的 [$3]%，是否还要委托交易？",
        "en": "You sell price [$1] is lower than market price [$2] [$3]%,whether to continue entrusting trade？"
    },
    "请输入正确的价格": {
        "cn": "请输入正确的价格，最多[$1]位小数，且不能为空。",
        "en": "Please input correct price，which contains at most [$1] decimals,and should not be empty."
    },
    "请输入正确的数量": {
        "cn": "请输入正确的数量，最多[$1]位小数，且不能为空。",
        "en": "Please input correct volume，which contains at most [$1] decimals,and should not be empty."
    },
    "您的可用资金不足，请核实后再提交。": {
        "cn": "您的可用资金不足[$1] [$2]，请核实后再提交。",
        "en": "您的可用资金不足[$1] [$2]，请核实后再提交。"
    },
    "您的可卖数量不足，请核实后再提交。": {
        "cn": "您的可卖数量不足[$1] [$2]，请核实后再提交。",
        "en": "您的可卖数量不足[$1] [$2]，请核实后再提交。"
    },
    "成功取消n条委托！": {
        "cn": "成功取消[$1]条委托！",
        "en": "成功取消[$1]条委托！"
    },
    "最高价m应该大于最低价n！": {
        "cn": "最高价[$1]应该大于最低价[$2]！",
        "en": "最高价[$1]应该大于最低价[$2]！"
    },
    "根据您的价格最多可购买n，请修改价格或数量。": {
        "cn": "根据您的价格最多可购买[$1][$2]，请修改价格或数量。",
        "en": "You price at most can buy [$1][$2]，please change your price or amount."
    },
    "追高计划买单的触发价应高于当前卖一价m，请重设价格。": {
        "cn": "追高计划买单的触发价应高于当前卖一价[$1]，请重设价格。",
        "en": "The entrust trigger price of the Profit Trigger Buy Order should greater than Sell1 price[[$1],please set again."
    },
    "止损计划卖单的触发价应低于当前买一价m，请重设价格。": {
        "cn": "止损计划卖单的触发价应低于当前买一价[$1]，请重设价格。",
        "en": "The entrust trigger price of the Stop-Loss Sell Order should lower than Buy1 price[$1],please set again."
    },
    "批量分散买入的最高限定价格m应高于最低限定价格n，请重设价格。": {
        "cn": "批量分散买入的最高限定价格[$1]应高于最低限定价格[$2]，请重设价格。",
        "en": "The minimum price of Buy In Bulk With Different Price[$1]should greater than the minimum limited price[$2],please set again."
    },
    "批量分散卖出的最低限定价格m应低于最高限定价格n，请重设价格。": {
        "cn": "批量分散卖出的最低限定价格[$1]应低于最高限定价格[$2]，请重设价格。",
        "en": "The minimum price of Sell In Bulk With Different Price[$1]should lower than the maximum limited price[$2],please set again."
    },
    "成功批量委托m笔，一共na，总金额va": {
        "cn": "成功批量委托[$1]笔，一共[$2] [$3]，总金额[$4] [$5]。",
        "en": "Successful entrust [$1]trade by batch，total[$2] [$3]，total sum[$4] [$5]。"
    },
    "温馨提示：您可以临时关闭交易二级密码。": {
        "cn": "温馨提示：您可以临时<a role='button' id='closeSafePwd'>关闭交易二级密码</a>。",
        "en": "Reminder：You can  temporarily <a role='button' id='closeSafePwd'>close transaction password</a>."
    },
    "请先登录后再进行交易": {
        "cn": "请先登录后再进行交易",
        "en": "Please sign in and trade!"
    },
    "请先登录!": {
        "cn": "请先登录!",
        "en": "Please sign in!"
    },
    "请输入合法的手机号码": {
        "cn": "请输入合法的手机号码",
        "en": "Please input a valid phone number"
    },
    "止损计划卖出": {
        "cn": "止损计划卖出",
        "en": " Plans to Sell"
    },
    "批量分散卖出": {
        "cn": "批量分散卖出",
        "en": "Batch Sell"
    },
    "立即卖出": {
        "cn": "立即卖出",
        "en": "Sell"
    },
    "立即买入": {
        "cn": "立即买入",
        "en": "Buy"
    },
    "追高计划买入": {
        "cn": "追高计划买入",
        "en": "Plans to Buy"
    },
    "批量分散买入": {
        "cn": "批量分散买入",
        "en": "Batch Buy"
    },
    "确定取消该充值申请吗？": {
        "cn": "确定取消该充值申请吗？",
        "en": "Sure to cancel the item?"
    },
    "操作成功!": {
        "cn": "操作成功!",
        "en": "Success!"
    },
    "您确定要开启交易二级密码吗？": {
        "cn": "您确定要开启交易二级密码吗？",
        "en": "Sure to open the transaction password?"
    },
    "n秒后重试": {
        "cn": "[$1]秒后重试",
        "en": "waiting [$1]s"
    },
    "用户名最少6位字符，请重新输入": {
        "cn": "用户名最少6位字符，请重新输入",
        "en": "Username should not be less than 6 digit,please input again"
    },
    "登录密码最少6位字符，请重新输入": {
        "cn": "登录密码最少6位字符，请重新输入",
        "en": "The login password should not be less than 6 digits,please input again"
    },
    "图形验证码最少4位字符，请重新输入": {
        "cn": "图形验证码最少4位字符，请重新输入",
        "en": "at least 4 digits required,please input again"
    },
    "邮箱格式错误，请重新输入": {
        "cn": "邮箱格式错误，请重新输入",
        "en": "Your email is Wrong format,please input again"
    },
    "手机号码格式错误，请重新输入": {
        "cn": "手机号码格式错误，请重新输入",
        "en": "Your phone number is Wrong format,please input again"
    },
    "两次密码输入不一致，请重新输入": {
        "cn": "两次密码输入不一致，请重新输入",
        "en": "The two password is not the same,please input again"
    },
    "请先获取短信验证码": {
        "cn": "请先获取短信验证码",
        "en": "click to send a SMS code first"
    },
    "短信验证码最少6位字符，请重新输入": {
        "cn": "短信验证码最少6位字符，请重新输入",
        "en": "at least 6 codes required for the SMS code,please input again"
    },
    "我已阅读并同意<<用户服务协议>>": {
        "cn": "我已阅读并同意<a href='/help/service' target='_blank' style='color: white;'><<用户服务协议>></a>",
        "en": "I have read and agree to the <a href='/help/service' target='_blank' style='color: white;'>《Service Agreement》</a>"
    },
    "成功清除cookies记录": {
        "cn": "成功清除cookies记录",
        "en": "clear cookies successfully"
    },
    "点击获取": {
        "cn": "点击获取",
        "en": "click to send"
    },
    "请输入您的二级密码：": {
        "cn": "请输入您的二级密码：",
        "en": "Please enter your transaction password:"
    },
    "忘记二级密码": {
        "cn": "忘记二级密码",
        "en": "Forget transaction password"
    },
    "温馨提示：您可以在安全中心重新开启交易二级密码。": {
        "cn": "温馨提示：您可以在安全中心重新开启交易二级密码。",
        "en": "Tips:You can open your transaction password in security center."
    },
    "请您同意<<融资融币业务用户使用协议>>": {
        "cn": "请您同意<a href='/u/rule' target='_blank' style='color: white;'><<融资融币业务用户使用协议>></a>",
        "en": "Please read and agree to the <a href='/u/rule' target='_blank' style='color: white;'>《Margin Trading Service Agreement》</a>"
    },
    "买B": {
        "cn": "买",
        "en": "Bid"
    },
    "卖S": {
        "cn": "卖",
        "en": "Ask"
    },
    "借入": {
        "cn": "借入",
        "en": "Debt"
    },
    "借出": {
        "cn": "借出",
        "en": "Lended"
    },
    "全部取消": {
        "cn": "全部取消",
        "en": "Cancel All"
    },
    "取消买单": {
        "cn": "取消买单",
        "en": "Cancel Buy"
    },
    "取消卖单": {
        "cn": "取消卖单",
        "en": "Cancel Sell"
    },
    "限定单价高于：": {
        "cn": "限定单价高于：",
        "en": "Price higher than:"
    },
    "限定单价低于：": {
        "cn": "限定单价低于：",
        "en": "Price lower than:"
    },
    "可不填写": {
        "cn": "可不填写",
        "en": "Optional"
    },
    "没有需要取消的相关委托": {
        "cn": "没有需要取消的相关委托",
        "en": "No orders to cancel!"
    },
    "系统忙碌，请稍候！": {
        "cn": "系统忙碌，请稍候！",
        "en": "System busying,please wait!"
    },
    "您未进行手机认证，请先进行手机认证": {
        "cn": "您未进行手机认证，请先进行手机认证<a href='/u/auth/mobile'>点击认证>></a>",
        "en": "您未进行手机认证，请先进行手机认证<a href='/u/auth/mobile'>点击认证>></a>"
    },
    "支付宝转账充值": {
        "cn": "支付宝转账充值",
        "en": "Alipay Transfer"
    },
    "请严格按照以下信息使用支付宝转账": {
        "cn": "<span>温馨提示：</span>请严格按照以下信息使用支付宝转账。",
        "en": "<span>Kindly Remind:</span>Please use Alipay to transfer by following the information below."
    },
    "收款方": {
        "cn": "收 款 方",
        "en": "Receiver"
    },
    "收款帐号": {
        "cn": "收款帐号",
        "en": "Receiver Account"
    },
    "付款方": {
        "cn": "付 款 方",
        "en": "Alipay Name"
    },
    "付款帐号": {
        "cn": "付款帐号",
        "en": "Alipay Account"
    },
    "汇款金额": {
        "cn": "汇款金额",
        "en": "Transfer Amount"
    },
    "扫码支付": {
        "cn": "扫码支付",
        "en": "Scan QR code to transfer"
    },
    "周启荣": {
        "cn": "周启荣",
        "en": "QiRongZhou"
    },
    "批量委托失败！": {
        "cn": "批量委托失败！",
        "en": "Batch entrusted failed!"
    },
    "您有未完成的提交申请，请等待后重试": {
        "cn": "您有未完成的提交申请，请等待后重试",
        "en": "You have applications which have not be finished,please wait and try again!"
    },
    "二级密码不能少于6位数，也不能为空。": {
        "cn": "二级密码不能少于6位数，也不能为空。",
        "en": "The transaction password should not be neither empty nor less than 6 digits."
    },
    "确定取消当前委托？": {
        "cn": "确定取消当前委托？",
        "en": "Are you sure to cancel the current entrust order?"
    },
    "您有未完成的请求，请等待后重试": {
        "cn": "您有未完成的请求，请等待后重试",
        "en": "You have applications which have not be finished,please wait and try again!"
    },
    "待成交": {
        "cn": "待成交",
        "en": "Wait for a deal"
    },
    "计划中": {
        "cn": "计划中",
        "en": "Planning"
    },
    "已取消": {
        "cn": "已取消",
        "en": "canceled"
    },
    "已完成": {
        "cn": "已完成",
        "en": "Completed"
    },
    "您当前IP与登录IP不一致，请输入二级密码验证。": {
        "cn": "您当前IP与登录IP不一致，请输入二级密码验证。",
        "en": "Your current IP do not agree with the login IP, please input funds security password authentication."
    },
    "恭喜您获得10元现金奖励，登记手机mn": {
        "cn": "<span class='text-primary ft18 mb15 mt15'>[$1] [$2]</span><br/>恭喜您获得10元现金奖励，请下载交易网APP用当前手机号码注册领取。",
        "en": ""
    },
    "您的操作过于频繁，请等待m秒后再试！": {
        "cn": "您的操作过于频繁，请等待 [$1] 秒后再试！",
        "en": ""
    },
    "本机": {
        "cn": "本机",
        "en": "local"
    },
    "请在新打开的网上银行页面中完成充值": {
        "cn": "请在新打开的网上银行页面中完成充值",
        "en": "Please recharge in the page for u"
    },
    "已完成网银充值": {
        "cn": "已完成网银充值",
        "en": "finished?"
    },
    "返回重新选择银行": {
        "cn": "返回重新选择银行",
        "en": "Choose bank again"
    },
    "请输入正确的充值金额，最少充值￥100。": {
        "cn": "请输入正确的充值金额，最少充值￥100。",
        "en": "at least 100 RMB"
    },
    "请确认您的充值金额": {
        "cn": "请确认您的充值金额：",
        "en": "confirm your recharge amount"
    },
    "请输入上方充值金额": {
        "cn": "请输入上方充值金额",
        "en": "input the recharge amount above"
    },
    "为了加快到账速度，请严格按照以上金额充值(包含小数位)": {
        "cn": "为了加快到账速度，请严格按照以上金额充值(包含小数位)",
        "en": "For fast to our account,please recharge as the number above(contains the fraction)"
    },
    "永久关闭": {
        "cn": "永久关闭",
        "en": "close permanently"
    },
    "关闭6小时": {
        "cn": "关闭6小时",
        "en": "close for 6 hours"
    },
    "忘记二级密码": {
        "cn": "忘记二级密码",
        "en": "Forgot Password?"
    },
    "请输入您的二级密码": {
        "cn": "请输入您的二级密码",
        "en": "Please input your security password"
    },
    "密码8~20位字符，且为字母、数字、符号等任意2种以上组合。": {
        "cn": "密码8~20位字符，且为字母、数字、符号等任意2种以上组合。",
        "en": "consist of 8-20 digitals,which should be letters,digital,symbols or both of them"
    },
    "请您同意交易网用户服务协议": {
        "cn": "请您阅读并同意<<交易网用户服务协议>>",
        "en": "Please read and agree to the 《CHBTC Service Agreement》"
    },
    "请输入正确的邮箱或者手机号码": {
        "cn": "请输入正确的邮箱或者手机号码",
        "en": "Please enter the correct E-mail or cell phone number."
    },
    "请您登录后再进行操作": {
        "cn": "请您登录后再进行操作",
        "en": "Please log in again after operation."
    },
    "请输入用户名": {
        "cn": "请输入用户名",
        "en": "Please input your userName."
    },
    "邮箱找回登录密码成功提示": {
        "cn": "新密码已经发送至您的注册邮箱，请<a href='[$1]' target='_blank'>登录邮箱</a>激活新密码！",
        "en": "The new password has been sent to your registered email, please <a href='[$1]' target='_blank'>log in email</a> to activate the new password!"
    },
    "您已开启买入交易的一键杠杆服务，请注意平仓风险！": {
        "cn": "您已开启买入交易的一键杠杆服务，请注意平仓风险！",
        "en": "You have to open onekey lever, please pay attention to unwind the risk!"
    },
    "您已开启卖出交易的一键杠杆服务，请注意平仓风险！": {
        "cn": "您已开启卖出交易的一键杠杆服务，请注意平仓风险！",
        "en": "You have to open onekey lever, please pay attention to unwind the risk!"
    },
    "网页": {
        "cn": "网页",
        "en": "Web"
    },
    "手机APP": {
        "cn": "手机APP",
        "en": "APP"
    },
    "等待委托": {
        "cn": "等待委托",
        "en": "Waiting"
    },
    "已取消": {
        "cn": "已取消",
        "en": "Canceled"
    },
    "已委托": {
        "cn": "已委托",
        "en": "Entrusted"
    },
    "网页端登录": {
        "cn": "网页端登录",
        "en": "Browser"
    },
    "app端登录": {
        "cn": "app端登录",
        "en": "Mobile Device"
    },
    "一直开启": {
        "cn": "一直开启",
        "en": "Stay \"on\""
    },
    "温馨提示：您可以在此处设置是否启用交易二级密码。": {
        "cn": "温馨提示：您可以在此处设置是否启用交易二级密码。",
        "en": "Note:You can choose whether to set a transaction password here."
    },
    "请输入二级密码": {
        "cn": "请输入二级密码",
        "en": "Please enter transaction password."
    },
    "买": {
        "cn": "买",
        "en": "Buy"
    },
    "卖": {
        "cn": "Sell",
        "en": ""
    },
    "localStorage功能无法正常使用，请检查浏览器设置。": {
        "cn": "您的Web浏览器不支持本地存储设置，某些设置可能无法保存或某些功能可能无法正常工作。在Safari中，最常见的原因是使用了“无痕模式”，若要正常访问请关闭无痕模式。",
        "en": "Your web browser does not support storing settings locally. In Safari, the most common cause of this is using \"Private Browsing Mode\". Some settings may not save or some features may not work properly for you."
    },
    "第n页": {
        "cn": "第[$1]页",
        "en": "Page [$1]",
        "jp": "",
        "kr": ""
    },
    "为了您的账户安全，请输入图形验证码": {
        "cn": "为了您的账户安全，请输入图形验证码",
        "en": "Please enter the CAPTCHA"
    },
    "操作成功": {
        "cn": "操作成功",
        "en": "Success"
    },
    "内部错误": {
        "cn": "内部错误",
        "en": "Internal Error"
    },
    "授权失效，需要重新登录": {
        "cn": "授权失效，需要重新登录",
        "en": "Authorization invalid, please sign in again."
    },
    "账户已过期，请重新登录": {
        "cn": "账户已过期，请重新登录",
        "en": "Account expired, please sign in again"
    },
    "网络确认": {
        "cn": "网络确认",
        "en": "Confirmation"
    },
    "确认成功": {
        "cn": "确认成功",
        "en": "Success",
        "jp": "成功を確認する",
        "kr": "확인 성공"
    },
    "成功": {
        "cn": "成功",
        "en": "Success"
    },
    "失败": {
        "cn": "失败",
        "en": "Fail"
    },
    "一般错误提示": {
        "cn": "一般错误提示",
        "en": "General Error"
    },
    "资金二级密码已锁定": {
        "cn": "资金二级密码已锁定",
        "en": "Secondary Transaction Password Locked",
        "jp": "",
        "kr": ""
    },
    "资金二级密码错误": {
        "cn": "资金二级密码错误",
        "en": "Secondary Transaction Password Error",
        "jp": "",
        "kr": ""
    },
    "实名认证等待审核或审核不通过": {
        "cn": "实名认证等待审核或审核不通过",
        "en": "The real-name verification is pending approval or unapproved.",
        "jp": "",
        "kr": ""
    },
    "修改后的密码不能和原密码一致": {
        "cn": "修改后的密码不能和原密码一致",
        "en": "The new password cannot be same as the last password.",
        "jp": "",
        "kr": ""
    },
    "登录密码错误": {
        "cn": "登录密码错误",
        "en": "Wrong Login Password",
        "jp": "",
        "kr": ""
    },
    "找不到市场": {
        "cn": "找不到市场",
        "en": "Cannot find the selected market",
        "jp": "",
        "kr": ""
    },
    "本次操作需要您先进行实名认证": {
        "cn": "本次操作需要您先进行实名认证",
        "en": "This operation requires you proceed real-name verification.",
        "jp": "",
        "kr": ""
    },
    "本次提现需要您填写资金二级密码": {
        "cn": "本次提现需要您填写资金二级密码",
        "en": "This operation requires you enter secondary transaction password.",
        "jp": "This operation requires you enter secondary transaction password.",
        "kr": "This operation requires you enter secondary transaction password."
    },
    "本次操作需要同时验证您的资金二级密码和短信验证码": {
        "cn": "本次操作需要同时验证您的资金二级密码和短信验证码",
        "en": "This operation requires you enter secondary transaction password and SMS code.",
        "jp": "",
        "kr": ""
    },
    "本次操作需要您google验证，请输入移动设备上生成的验证码": {
        "cn": "本次操作需要您google验证，请输入移动设备上生成的验证码",
        "en": "This operation requires Google verification, please enter Google verification code.",
        "jp": "",
        "kr": ""
    },
    "本次提现需要您指纹验证": {
        "cn": "本次提现需要您指纹验证",
        "en": "This operation requires fingerprint verification.",
        "jp": "",
        "kr": ""
    },
    "本次登录为异地登录，需要您短信验证": {
        "cn": "本次登录为异地登录，需要您短信验证",
        "en": "The account is logged in from a new IP, please enter SMS code.",
        "jp": "",
        "kr": ""
    },
    "你已开启谷歌登录验证，本次登录需要您的谷歌验证码": {
        "cn": "你已开启谷歌登录验证，本次登录需要您的谷歌验证码",
        "en": "You have enable Google verification for account login, please enter Google verification code.",
        "jp": "",
        "kr": ""
    },
    "未知操作类型!": {
        "cn": "未知操作类型!",
        "en": "Unknown operation type!",
        "jp": "",
        "kr": ""
    },
    "你已同时开启谷歌&短信登录验证，本次登录需要您填写谷歌和短信验证码": {
        "cn": "你已同时开启谷歌&短信登录验证，本次登录需要您填写谷歌和短信验证码",
        "en": "",
        "jp": "",
        "kr": ""
    },
    "You have enable Google verification and phone numebr verification for account login, please enter Google verification code and SMS code.": {
        "cn": "You have enable Google verification and phone numebr verification for account login, please enter Google verification code and SMS code.",
        "en": "",
        "jp": "",
        "kr": ""
    },
    "您的谷歌验证修改申请正在审核中，请等待审核通过!": {
        "cn": "您的谷歌验证修改申请正在审核中，请等待审核通过!",
        "en": "Your request for modifying Google authenticator is pending process, please wait for approval.",
        "jp": "",
        "kr": ""
    },
    "本次操作需要同时验证您的资金二级密码和谷歌验证码": {
        "cn": "本次操作需要同时验证您的资金二级密码和谷歌验证码",
        "en": "This operation requires you enter secondary transaction password and Google verification code.",
        "jp": "",
        "kr": ""
    },
    "您没有进行手机认证和Google认证，暂时不能进行充值/提现业务，为了您的账号安全，请进行手机认证或Google认证。": {
        "cn": "您没有进行手机认证和Google认证，暂时不能进行充值/提现业务，为了您的账号安全，请进行手机认证或Google认证。",
        "en": "Please activate phone authentication or Google authentication to proceed with deposit.",
        "jp": "",
        "kr": ""
    },
    "动态验证码错误，请重新获取": {
        "cn": "动态验证码错误，请重新获取",
        "en": "Dynamic verification code error, please acquired again.",
        "jp": "",
        "kr": ""
    },
    "邮箱注册的用户账号未激活，需要激活后才能登录": {
        "cn": "邮箱注册的用户账号未激活，需要激活后才能登录",
        "en": "Please activate the account in your mailbox before login.",
        "jp": "",
        "kr": ""
    },
    "您未设置二级密码，请设置二级密码后重试": {
        "cn": "您未设置二级密码，请设置二级密码后重试",
        "en": "You have not set secondary transaction password, please set one and then try again",
        "jp": "",
        "kr": ""
    },
    "出错了，链接已失效": {
        "cn": "出错了，链接已失效",
        "en": "The link has expired",
        "jp": "",
        "kr": ""
    },
    "本次登录需要验证": {
        "cn": "本次登录需要验证",
        "en": "Account login requires verification.",
        "jp": "",
        "kr": ""
    },
    "登录密码已锁定": {
        "cn": "登录密码已锁定",
        "en": "Login Password Locked",
        "jp": "",
        "kr": ""
    },
    "图形验证码错误，请重新获取": {
        "cn": "图形验证码错误，请重新获取",
        "en": "CAPTCHA error, please acquired again",
        "jp": "",
        "kr": ""
    },
    "Google证码错误，请重新获取": {
        "cn": "Google证码错误，请重新获取",
        "en": "Google verification code error, please acquired again",
        "jp": "",
        "kr": ""
    },
    "您的地址请求频繁，请一小时后重试": {
        "cn": "您的地址请求频繁，请一小时后重试",
        "en": "Your IP address request frequently, please try again 1 hour later.",
        "jp": "",
        "kr": ""
    },
    "网络异常，刷新重试": {
        "cn": "网络异常，刷新重试",
        "en": "Network error, please refresh your screen and try again",
        "jp": "",
        "kr": ""
    },
    "您于%%已经提交了申请，我们会尽快为您审核": {
        "cn": "您于%%已经提交了申请，我们会尽快为您审核",
        "en": "You have already submitted the request at %%, we will review it as soon as possible",
        "jp": "",
        "kr": ""
    },
    "网络异常，请稍后重试": {
        "cn": "网络异常，请稍后重试",
        "en": "Network anomaly, please try again later",
        "jp": "",
        "kr": ""
    },
    "此操作需要验证手机或邮箱，请认证后重试": {
        "cn": "此操作需要验证手机或邮箱，请认证后重试",
        "en": "Please verify your phone number or mailbox",
        "jp": "",
        "kr": ""
    },
    "人民币账户余额不足": {
        "cn": "人民币账户余额不足",
        "en": "Insufficient CNY Balance",
        "jp": "",
        "kr": ""
    },
    "比特币账户余额不足": {
        "cn": "比特币账户余额不足",
        "en": "Insufficient BTC Balance",
        "jp": "",
        "kr": ""
    },
    "莱特币账户余额不足": {
        "cn": "莱特币账户余额不足",
        "en": "Insufficient LTC Balance",
        "jp": "",
        "kr": ""
    },
    "挂单没有找到": {
        "cn": "挂单没有找到",
        "en": "Not found order",
        "jp": "",
        "kr": ""
    },
    "无效的金额": {
        "cn": "无效的金额",
        "en": "Invalid amount",
        "jp": "",
        "kr": ""
    },
    "无效的数量": {
        "cn": "无效的数量",
        "en": "Invalid amount",
        "jp": "",
        "kr": ""
    },
    "用户不存在": {
        "cn": "用户不存在",
        "en": "Users does not exist",
        "jp": "",
        "kr": ""
    },
    "无效的参数": {
        "cn": "无效的参数",
        "en": "Invalid parameter",
        "jp": "",
        "kr": ""
    },
    "无效的IP或与绑定的IP不一致": {
        "cn": "无效的IP或与绑定的IP不一致",
        "en": "Invalid IP address or it is not the bound IP",
        "jp": "",
        "kr": ""
    },
    "请求时间已失效": {
        "cn": "请求时间已失效",
        "en": "Invalid IP request time",
        "jp": "",
        "kr": ""
    },
    "API接口被锁定或未启用": {
        "cn": "API接口被锁定或未启用",
        "en": "API interface locked or not enabled",
        "jp": "",
        "kr": ""
    },
    "请求过于频繁": {
        "cn": "请求过于频繁",
        "en": "Request too frequently",
        "jp": "",
        "kr": ""
    },
    "汇率接口异常": {
        "cn": "汇率接口异常",
        "en": "The rate interface anomaly",
        "jp": "",
        "kr": ""
    },
    "用户交易已被锁定，当前不能进行交易": {
        "cn": "用户交易已被锁定，当前不能进行交易",
        "en": "The trading has been locked, it cannot not trade currently",
        "jp": "",
        "kr": ""
    },
    "该用户不是您的子账户，不允许操作": {
        "cn": "该用户不是您的子账户，不允许操作",
        "en": "This is not your sub-account, you can't operate it.",
        "jp": "",
        "kr": ""
    },
    "无效市场或与开启杠杆市场不一致": {
        "cn": "无效市场或与开启杠杆市场不一致",
        "en": "Invalid market or it is not consistent with the opened margin market.",
        "jp": "",
        "kr": ""
    },
    "请选择合法的平仓风险控制类型": {
        "cn": "请选择合法的平仓风险控制类型",
        "en": "Please select the legal type of liquidation risk control",
        "jp": "",
        "kr": ""
    },
    "最低投资默认值未设置": {
        "cn": "最低投资默认值未设置",
        "en": "Hasn't set the minimum investment amount",
        "jp": "",
        "kr": ""
    },
    "您的最低投资金额太小": {
        "cn": "您的最低投资金额太小",
        "en": "The minimum investment amount is too small.",
        "jp": "",
        "kr": ""
    },
    "借入者不能进行投资": {
        "cn": "借入者不能进行投资",
        "en": "The borrower cannot offer lending",
        "jp": "",
        "kr": ""
    },
    "余额不足，发布投资失败": {
        "cn": "余额不足，发布投资失败",
        "en": "Insufficient balance, fail to offer lending",
        "jp": "",
        "kr": ""
    },
    "投资总额已达上限，剩余可投资额度不足": {
        "cn": "投资总额已达上限，剩余可投资额度不足",
        "en": "The total amount of investment has reached the limit, the remaining amount is insufficient.",
        "jp": "",
        "kr": ""
    },
    "费率设置超出范围": {
        "cn": "费率设置超出范围",
        "en": "The setting of interest rate is out of scope",
        "jp": "",
        "kr": ""
    },
    "借贷增长利率不正确": {
        "cn": "借贷增长利率不正确",
        "en": "The borrowing interest rates of growth is incorrect.",
        "jp": "",
        "kr": ""
    },
    "余额不足，发布投资失败": {
        "cn": "余额不足，发布投资失败",
        "en": "Insufficient balance, fail to offer lending",
        "jp": "",
        "kr": ""
    },
    "该借款不存在": {
        "cn": "该借款不存在",
        "en": "The borrowing is not exist",
        "jp": "",
        "kr": ""
    },
    "借款不能取消": {
        "cn": "借款不能取消",
        "en": "Cannot cancel the borrowing",
        "jp": "",
        "kr": ""
    },
    "借贷增长利率不正确": {
        "cn": "借贷增长利率不正确",
        "en": "The borrowing interest rates of growth is incorrect.",
        "jp": "",
        "kr": ""
    },
    "余额不足，发布投资失败": {
        "cn": "余额不足，发布投资失败",
        "en": "Insufficient balance, fail to offer lending",
        "jp": "",
        "kr": ""
    },
    "您已提交过申请，不能重复提交": {
        "cn": "您已提交过申请，不能重复提交",
        "en": "You have submit the request, please do not resubmit.",
        "jp": "",
        "kr": ""
    },
    "请至少选择一种投资币种": {
        "cn": "请至少选择一种投资币种",
        "en": "Please select at least one currency",
        "jp": "",
        "kr": ""
    },
    "请填写正确的姓名": {
        "cn": "请填写正确的姓名",
        "en": "Please enter the correct nam",
        "jp": "",
        "kr": ""
    },
    "请填写正确的手机号": {
        "cn": "请填写正确的手机号",
        "en": "Please enter the correct phone number",
        "jp": "",
        "kr": ""
    },
    "子账号不能放贷": {
        "cn": "子账号不能放贷",
        "en": "The sub-account cannot offer lending",
        "jp": "",
        "kr": ""
    },
    "还款金额不能小于最小还款金额": {
        "cn": "还款金额不能小于最小还款金额",
        "en": "The repayment amount cannot less than the minimum amount",
        "jp": "",
        "kr": ""
    },
    "部分还款之后剩余还款金额不能小于": {
        "cn": "部分还款之后剩余还款金额不能小于",
        "en": "The repayment amount cannot less than %% after part repayment.",
        "jp": "",
        "kr": ""
    },
    "还款金额不能大于可还款的金额": {
        "cn": "还款金额不能大于可还款的金额",
        "en": "The repayment amount cannot larger than the available amount.",
        "jp": "",
        "kr": ""
    },
    "%% 是我们商业合作伙伴用户，可使用原密码直接登录": {
        "cn": "%% 是我们商业合作伙伴用户，可使用原密码直接登录",
        "en": "%% is the member of our business partner, you can use the original password to login",
        "jp": "",
        "kr": ""
    },
    "您当前使用的APP版本授权已失效，请及时升级到最新版本。": {
        "cn": "您当前使用的APP版本授权已失效，请及时升级到最新版本。",
        "en": "Your APP version is expired, please upgrade to the latest version.",
        "jp": "",
        "kr": ""
    },
    "您当前使用的APP版本过低，请升级到最新版本。": {
        "cn": "您当前使用的APP版本过低，请升级到最新版本。",
        "en": "Old APP version detected, please update your APP to the latest version.",
        "jp": "",
        "kr": ""
    },
    "贷款额度已到上限": {
        "cn": "贷款额度已到上限",
        "en": "The lending amount has reached the limit",
        "jp": "",
        "kr": ""
    },
    "请获取邮件验证码。": {
        "cn": "请获取邮件验证码。",
        "en": "Please acquire Email verification code."
    },
    "用户已注册": {
        "cn": "用户已注册",
        "en": "Account already exists."
    },
    "图形验证码错误，请重新获取": {
        "cn": "图形验证码错误，请重新获取",
        "en": "Wrong captcha, please acquire again."
    },
    "短信验证码已发送到您的手机，10分钟内有效": {
        "cn": "短信验证码已发送到您的手机，10分钟内有效",
        "en": "SMS authentication code has been sent to your phone, valid for 10 minutes",
        "jp": "メールは、あなたの携帯電話、10分以内に有効に送信されています。",
        "kr": "문자 발송 인증 코드 이미 연결하려면 핸드폰, 10분 내에 유효하다"
    },
    "密码错误，您还有5次机会。": {
        "cn": "密码错误，您还有5次机会。",
        "en": "Wrong password, you have 5 chances to enter the correct one."
    },
    "密码错误，您还有4次机会。": {
        "cn": "密码错误，您还有4次机会。",
        "en": "Wrong password, you have 4 chances to enter the correct one."
    },
    "密码错误，您还有3次机会。": {
        "cn": "密码错误，您还有3次机会。",
        "en": "Wrong password, you have 3 chances to enter the correct one."
    },
    "密码错误，您还有2次机会。": {
        "cn": "密码错误，您还有2次机会。",
        "en": "Wrong password, you have 2 chances to enter the correct one."
    },
    "密码错误，您还有1次机会。": {
        "cn": "密码错误，您还有1次机会。",
        "en": "Wrong password, you have 1 chance to enter the correct one."
    },
    "密码错误，您还有0次机会。": {
        "cn": "密码错误，账号已被锁定。",
        "en": "Wrong password, the account has been locked, please contact online service for help."
    },
    "资金二级密码已锁定": {
        "cn": "资金二级密码已锁定",
        "en": "Secondary Transaction Password Locked",
        "jp": "Secondary Transaction Password Locked",
        "kr": "Secondary Transaction Password Locked"
    },
    "资金二级密码错误": {
        "cn": "资金二级密码错误",
        "en": "Secondary Transaction Password Error",
        "jp": "Secondary Transaction Password Error",
        "kr": "Secondary Transaction Password Error"
    },
    "实名认证等待审核或审核不通过": {
        "cn": "实名认证等待审核或审核不通过",
        "en": "The real-name verification is pending approval or unapproval",
        "jp": "The real-name verification is pending approval or unapproval",
        "kr": "The real-name verification is pending approval or unapproval"
    },
    "修改后的密码不能和原密码一致": {
        "cn": "修改后的密码不能和原密码一致",
        "en": "The real-name verification is pending approval or unapproval",
        "jp": "The real-name verification is pending approval or unapproval",
        "kr": "The real-name verification is pending approval or unapproval"
    },
    "您输入的用户名和密码不匹配，请核实后重新输入": {
        "cn": "您输入的用户名和密码不匹配，请核实后重新输入",
        "en": "The password is not match with the account, please check and re-enter.",
        "jp": "入力のユーザ名とパスワードが一緻、確認後再入力して下さい",
        "kr": "입력한 사용자 이름과 암호가 일치하지 확인한 후 다시 시도해 주십시오."
    },
    "您输入密码错误次数过多，已被锁定24小时，若有疑问请联系客服。": {
        "cn": "您输入密码错误次数过多，已被锁定24小时，若有疑问请联系客服。",
        "en": "The account has been locked as you enter too many wrong password, please contact online service for help."
    },
    "请选择划账对象": {
        "cn": "请选择划账对象",
        "en": "Please select the account"
    },
    "请不要惜字如金!": {
        "cn": "请不要惜字如金!",
        "en": "Please do not cherish words such as gold."
    },
    "请输入一个有效的电话号码！": {
        "cn": "请输入一个有效的电话号码！",
        "en": "Please enter a correct phone number."
    },
    "修改成功": {
        "cn": "修改成功",
        "en": "Success"
    },
    "验证码已发送到您的邮箱，请登录邮箱查看，10分钟内有效。": {
        "cn": "验证码已发送到您的邮箱，请登录邮箱查看，10分钟内有效。",
        "en": "The verification code has been sent to your mailbox, it is valid for 10 minutes."
    },
    "设置成功": {
        "cn": " 设置成功",
        "en": "Success"
    },
    "没有委托任务": {
        "cn": "没有委托任务",
        "en": "No commission task"
    },
    "未知的处理异常": {
        "cn": "未知的处理异常",
        "en": " Unknown processing abnormal"
    },
    "委托提交成功": {
        "cn": "委托提交成功",
        "en": "Success"
    },
    "委托失败-未知的委托类型": {
        "cn": "委托失败-未知的委托类型",
        "en": "Commission failure - unknown commission type"
    },
    "委托失败-参数错误": {
        "cn": "委托失败-参数错误",
        "en": "Commission failure - parameter error"
    },
    "委托失败-还有卖比特币委托已经达到您本次购买的报价": {
        "cn": "委托失败-还有卖比特币委托已经达到您本次购买的报价",
        "en": "Commission failure - there is Bitcoin sell order has reached this quotation"
    },
    "委托失败-还有买比特币委托已经达到您本次卖出的报价": {
        "cn": "委托失败-还有买比特币委托已经达到您本次卖出的报价",
        "en": "Commission failure - there is Bitcoin buy order has reached this quotation"
    },
    "委托失败-没有足够的资金": {
        "cn": "委托失败-没有足够的资金",
        "en": "Commission failure - insufficient funds"
    },
    "委托失败-未捕获的系统异常": {
        "cn": "委托失败-未捕获的系统异常",
        "en": "Commission failure -  uncaught exception"
    },
    "委托失败-价格太高、暂不支持": {
        "cn": "委托失败-价格太高、暂不支持",
        "en": "the price is too high, not support now"
    },
    "委托失败-重复提交": {
        "cn": "委托失败-重复提交",
        "en": "Commission failure - repeated submit"
    },
    "委托失败-btq暂停购买": {
        "cn": "委托失败-btq暂停购买",
        "en": "Commission failure - suspend buying btq"
    },
    "委托失败-成交金额小于系统规定金额": {
        "cn": "委托失败-成交金额小于系统规定金额",
        "en": "public/src/scripts/common/web.lang.js:1827"
    },
    "委托失败-当前市场的币种已经在其他市场开启杠杆，已开启杠杆的资金不允许在其他市场交易": {
        "cn": "委托失败-当前市场的币种已经在其他市场开启杠杆，已开启杠杆的资金不允许在其他市场交易",
        "en": "Commission failure - the currency in the current market has enable margin trading on the other market, it is not allow to trade on multiple market."
    },
    "委托失败-杠杆交易借入失败": {
        "cn": "委托失败-杠杆交易借入失败",
        "en": "Commission failure - margin trading borrowing failure"
    },
    "委托取消单个提交成功": {
        "cn": "委托取消单个提交成功",
        "en": "Commission cancel single submit successfully"
    },
    "委托取消单个失败-没有可以取消的委托": {
        "cn": "委托取消单个失败-没有可以取消的委托",
        "en": "Commission cancel single submit failure - No commission can be cancel"
    },
    "委托取消单个失败-已经提交过取消请求": {
        "cn": "委托取消单个失败-已经提交过取消请求",
        "en": "Commission cancel single submit failure - have submitted cancel request"
    },
    "委托取消单个失败-取消程序": {
        "cn": "委托取消单个失败-取消程序",
        "en": "Commission failure - cancel procedure"
    },
    "委托取消区间订单失败-区间没有可以取消的委托": {
        "cn": "委托取消区间订单失败-区间没有可以取消的委托",
        "en": "Commission cancel range orders failure - No commission can be cancel"
    },
    "委托取消区间订单失败-区间价格可能颠倒导致错误": {
        "cn": "委托取消区间订单失败-区间价格可能颠倒导致错误",
        "en": "Commission cancel range orders failure - range price may invert thereby cause error"
    },
    "委托取消区间订单失败-事物处理失败": {
        "cn": "委托取消区间订单失败-事物处理失败",
        "en": "Commission cancel range orders failure - process failure"
    },
    "处理委托成功": {
        "cn": "处理委托成功",
        "en": "Success"
    },
    "处理委托成功-没有成交": {
        "cn": "处理委托成功-没有成交",
        "en": "Process commission successfully - No trading completed"
    },
    "处理委托失败-未知的委托类型": {
        "cn": "处理委托失败-未知的委托类型",
        "en": "Process commission failure - unknown commission type"
    },
    "处理委托失败-事物处理失败": {
        "cn": "处理委托失败-事物处理失败",
        "en": "Process commission failure - process failure"
    },
    "处理取消委托成功": {
        "cn": "处理取消委托成功",
        "en": "Process cancel commission successfully"
    },
    "处理取消委托失败-没有目标委托": {
        "cn": "处理取消委托失败-没有目标委托",
        "en": "Process commission failure - no objective commission"
    },
    "处理取消委托失败-已经成功委托": {
        "cn": "处理取消委托失败-已经成功委托",
        "en": "Process commission failure - the commission is successfully"
    },
    "处理取消委托失败-事物处理失败": {
        "cn": "处理取消委托失败-事物处理失败",
        "en": "Process commission failure - process failure"
    },
    "委托频繁": {
        "cn": "委托频繁",
        "en": "Commission frequently"
    },
    "系统繁忙，请稍后再试": {
        "cn": "系统繁忙，请稍后再试",
        "en": "System is busy, please try again later"
    },
    "获取信息失败": {
        "cn": "获取信息失败",
        "en": "Fail to acquire information"
    },
    "暂未开放自由交易": {
        "cn": "暂未开放自由交易",
        "en": "Free trade is not available now."
    },
    "买入价格不得高于预售价格": {
        "cn": "买入价格不得高于预售价格",
        "en": "Buy price cannot larger than presale price"
    },
    "请输入动态验证码": {
        "cn": "请输入动态验证码",
        "en": "Please enter dynamic code"
    },
    "谷歌验证码输入有误，您还有5次机会": {
        "cn": "谷歌验证码输入有误，您还有5次机会",
        "en": "Wrong Google verification code, you have 5 chances to enter the correct one."
    },
    "谷歌验证码输入有误，您还有4次机会": {
        "cn": "谷歌验证码输入有误，您还有4次机会",
        "en": "Wrong Google verification code, you have 4 chances to enter the correct one."
    },
    "谷歌验证码输入有误，您还有3次机会": {
        "cn": "谷歌验证码输入有误，您还有3次机会",
        "en": "Wrong Google verification code, you have 3 chances to enter the correct one."
    },
    "谷歌验证码输入有误，您还有2次机会": {
        "cn": "谷歌验证码输入有误，您还有2次机会",
        "en": "Wrong Google verification code, you have 2 chances to enter the correct one."
    },
    "谷歌验证码输入有误，您还有1次机会": {
        "cn": "谷歌验证码输入有误，您还有1次机会",
        "en": "Wrong Google verification code, you have 1 chance to enter the correct one."
    },
    "修改用户币种信息成功": {
        "cn": "修改用户币种信息成功",
        "en": "Change currency information successfully"
    },
    "隐藏成功。": {
        "cn": "隐藏成功。",
        "en": "Hide successfully."
    },
    "置顶成功": {
        "cn": "置顶成功",
        "en": "Stick successfully."
    },
    "显示成功。": {
        "cn": "显示成功。",
        "en": "Display successfully."
    },
    "真实账户不能添加虚拟币种": {
        "cn": "真实账户不能添加虚拟币种",
        "en": "The real account cannot add simulated currency."
    },
    "等待处理": {
        "cn": "等待处理",
        "en": "Waiting Process"
    },
    "提交成功！": {
        "cn": "提交成功！",
        "en": "Submit success!"
    },
    "您输入的密码不匹配，请核实后重新输入。": {
        "cn": "您输入的密码不匹配，请核实后重新输入。",
        "en": "Wrong Password."
    },
    "买入数量最少a，最多b": {
        "cn": "买入数量最少[$1]，最多[$2]",
        "en": "Min amount [$1], Max amount [$2]"
    },
    "卖出数量最少a，最多b": {
        "cn": "卖出数量最少[$1]，最多[$2]",
        "en": "Min amount [$1], Max amount [$2]"
    },
    "可用a余额不足b": {
        "cn": "可用[$1]余额不足[$2]",
        "en": ""
    },
    "最小交易额不能少于x": {
        "cn": "最小交易额不能少于[$1]",
        "en": "Min trade amount [$1]"
    },
    "最大交易额不能大于x": {
        "cn": "最大交易额不能大于[$1]",
        "en": "Max trade amount [$1]"
    },
    "由于法币精度问题，成交金额只能保留x位小数": {
        "cn": "由于法币精度问题，成交金额只能保留[$1]位小数",
        "en": "Because the currency precision problem, transactions can keep [$1] decimal"
    },
    "您现有的x数量不足": {
        "cn": "您现有的[$1]数量不足",
        "en": "insufficient balance [$1]",
    },
    "固定价格不能少于x": {
        "cn": "固定价格不能少于[$1]",
        "en": "Fixed price can not be less than [$1]"
    },
    "请求超时，请稍后重试": {
        "cn": "",
        "en": "Request timeout, please try again later",
        "jp": "タイムアウトを後にしてください、リトライ",
        "kr": "요청, 좀 이따 다시 시도"
    },
    '本次登录需要滑动验证': {
        cn: '本次登录需要滑动验证',
        en: 'Account login requires slide verification',
        jp: '',
        kr: ''
    },
    "success !": {
        "cn": "操作成功!",
        "en": "success !"
    },
    "1": {
        "cn": "操作成功!",
        "en": "success !",
        jp: '',
        kr: ''
    },
    "999": {
        "cn": "验签不通过!",
        "en": "sign is invalid!",
        jp: '',
        kr: ''
    },
    "1000": {
        "cn": "请刷新界面或检查网络",
        "en": "Please refresh or check the network interface"
    },
    /**
     *  作者:Seven
     *  时间:2018/8/17 16:35
     *  Email:csz.seven@gmail.com
     *  描述:错误码更新
     */
    "2000": {
        "cn": "参数错误",
        "en": "parameter error",
        jp: '',
        kr: ''
    },
    "2001": {
        "cn": "委托价格类型为空",
        "en": "entrust price range type null",
        jp: '',
        kr: ''
    },
    "2002": {
        "cn": "委托类型错误",
        "en": "rangeType [ 0,1]  error",
        jp: '',
        kr: ''
    },
    "2003": {
        "cn": "委托价格异常",
        "en": "entrust price abnormal",
        jp: '',
        kr: ''
    },
    "2004": {
        "cn": "市场ID不能为空",
        "en": "market id null",
        jp: '',
        kr: ''
    },
    "2005": {
        "cn": "用户ID不能为空",
        "en": "user id null",
        jp: '',
        kr: ''
    },
    "2006": {
        "cn": "站点ID不能为空",
        "en": "webId null",
        jp: '',
        kr: ''
    },
    "2007": {
        "cn": "webId配置有误",
        "en": "webId not in service",
        jp: '',
        kr: ''
    },
    "2008": {
        "cn": "买卖类型不能为空",
        "en": "type[ buy :type=1 or sell: type=1]  null",
        jp: '',
        kr: ''
    },
    "2009": {
        "cn": "买卖类型错误",
        "en": "type[ buy :type=1 or sell: type=1]  error",
        jp: '',
        kr: ''
    },
    "2010": {
        "cn": "区间委托最高价或最低价异常",
        "en": "rangeHighPrice or rangeLowPrice invalid",
        jp: '',
        kr: ''
    },
    "2011": {
        "cn": "撮合引擎没配置该市场",
        "en": "this market not in service",
        jp: '',
        kr: ''
    },
    "2012": {
        "cn": "委托信息不存在或系统还未为处理",
        "en": "entrust not exists or not deal with system",
        jp: '',
        kr: ''
    },
    "2013": {
        "cn": "资金解冻失败",
        "en": "unfreezeFund fail",
        jp: '',
        kr: ''
    },
    "2014": {
        "cn": "缓存中无该该委托单",
        "en": "entrust not exists in cache",
        jp: '',
        kr: ''
    },
    "2015": {
        "cn": "委托单已取消或数据库中不存在",
        "en": "entrust already canceled or not exists in database",
        jp: '',
        kr: ''
    },
    "2016": {
        "cn": "分页inde，pageSize参数有误",
        "en": "paging:index or pageSize invalid",
        jp: '',
        kr: ''
    },
    "2017": {
        "cn": "交易货币量为空",
        "en": "entrust amount null",
        jp: '',
        kr: ''
    },
    "2018": {
        "cn": "交易货币量异常",
        "en": "entrust amount abnormal",
        jp: '',
        kr: ''
    },
    "2019": {
        "cn": "委托单ID不能为空",
        "en": "entrustId null",
        jp: '',
        kr: ''
    },
    "2020": {
        "cn": "委托类型不能为空",
        "en": "entrustType null",
        jp: '',
        kr: ''
    },
    "2021": {
        "cn": "委托类型错误",
        "en": "entrustType [ 0,1]  error",
        jp: '',
        kr: ''
    },
    "2022": {
        "cn": "交易货币量小于最小值",
        "en": "entrust amount low min limit",
        jp: '',
        kr: ''
    },
    "2023": {
        "cn": "委托正在处理",
        "en": "entrust still on dealing, cancel it later",
        jp: '',
        kr: ''
    },
    "2024": {
        "cn": "价格过大或过小",
        "en": "entrust price too big or too small",
        jp: '',
        kr: ''
    },
    "2999": {
        "cn": "内部错误",
        "en": "system error",
        jp: '',
        kr: ''
    },
    "6000": {
        "cn": "参数缺失",
        "en": "",
        "jp": "",
        "kr": ""
    },
    '6001': {
        cn: '一般错误提示',
        en: 'General Error',
        jp: '',
        kr: ''
    },
    '6002': {
        cn: '授权失效，需要重新登录',
        en: 'Authorization invalid, please sign in again.',
        jp: '',
        kr: ''
    },
    '6003': {
        cn: '资金二级密码已锁定',
        en: 'Secondary Transaction Password Locked',
        jp: '',
        kr: ''
    },
    '6004': {
        cn: '修改后的密码不能和原密码一致',
        en: 'The new password could not be equals to the old one',
        jp: '',
        kr: ''
    },
    '6005': {
        cn: '登录密码错误',
        en: 'Login password mistake!',
        jp: '',
        kr: ''
    },
    '6010': {
        cn: '找不到市场',
        en: 'Cannot find the selected market',
        jp: '',
        kr: ''
    },
    '6011': {
        cn: '你已开启谷歌登录验证，本次登录需要您的谷歌验证码',
        en: 'You have enable Google verification for account login, please enter Google verification code.',
        jp: '',
        kr: ''
    },
    '6012': {
        cn: '未知操作类型!',
        en: 'Unknown operation type!',
        jp: '',
        kr: ''
    },
    '6013': {
        cn: '您没有进行手机认证和Google认证，暂时不能进行充值/提现业务，为了您的账号安全，请进行手机认证或Google认证。',
        en: 'Please activate phone authentication or Google authentication to proceed with deposit. ',
        jp: '',
        kr: ''
    },
    '6014': {
        cn: '短信验证码错误，请重新获取',
        en: 'SMS verification code error, please acquired again',
        jp: '',
        kr: ''
    },
    '6015': {
        cn: '本次登录需要输入图形验证吗',
        en: 'Account login requires to enter image verification code.',
        jp: '',
        kr: ''
    },
    '6016': {
        cn: '图形验证码错误，请重新获取',
        en: 'The graphical verification code error, please acquired again',
        jp: '',
        kr: ''
    },
    '6017': {
        cn: '登录密码已锁定',
        en: 'Login Password Locked',
        jp: '',
        kr: ''
    },
    '6019': {
        cn: '您的地址请求频繁，请一小时后重试',
        en: 'Your IP address request frequently, please try again 1 hour later.',
        jp: '',
        kr: ''
    },
    '6020': {
        cn: '网络异常，请稍后重试',
        en: 'Network anomaly, please try again later',
        jp: '',
        kr: ''
    },
    '6021': {
        cn: '账户异常',
        en: 'Abnormal account, limited currency operation',
        jp: '',
        kr: ''
    },
    '6022': {
        cn: '请输入正确的用户名密码',
        en: 'Please input right userName and right password',
        jp: '',
        kr: ''
    },
    '6023': {
        cn: '请输入正确的手机或邮箱',
        en: 'Please input correct phone or email',
        jp: '',
        kr: ''
    },
    '6024': {
        cn: '请输入正确的手机号码',
        en: 'Please input correct phone',
        jp: '',
        kr: ''
    },
    '6025': {
        cn: '请输入正确的邮箱',
        en: 'Please input correct email',
        jp: '',
        kr: ''
    },
    '6026': {
        cn: '请输入您的登录密码',
        en: 'Please input your password',
        jp: '',
        kr: ''
    },
    '6027': {
        cn: '用户名已经存在',
        en: 'userName exists',
        jp: '',
        kr: ''
    },
    '6028': {
        cn: '请输入验证码',
        en: 'please input verifycode',
        jp: '',
        kr: ''
    },
    '6029': {
        cn: '请输入正确的动态验证码',
        en: 'please input correct dynamic code',
        jp: '',
        kr: ''
    },
    '6030': {
        cn: '请输入正确的图形验证码',
        en: 'please input correct img code',
        jp: '',
        kr: ''
    },
    '6031': {
        cn: '您还没有进行邮箱认证',
        en: 'please verify your email',
        jp: '',
        kr: ''
    },
    '6032': {
        cn: '请输入正确的邮箱验证码',
        en: 'please input correct email code',
        jp: '',
        kr: ''
    },
    '6033': {
        cn: '请输入正确的谷歌验证码',
        en: 'please input correct google code',
        jp: '',
        kr: ''
    },
    '6034': {
        cn: '您已经提交了申请，我们会尽快为您审核',
        en: 'you have submit apply,we will audit it',
        jp: '',
        kr: ''
    },
    '6035': {
        cn: '您的账号已经认证了手机，请勿重复操作',
        en: 'you have verify the phone,please don\'t repeat operation',
        jp: '',
        kr: ''
    },
    '6036': {
        cn: '本次操作需要验证您的谷歌验证码',
        en: 'This operation requires you enter Google verification code',
        jp: '',
        kr: ''
    },
    '6037': {
        cn: '你已开启短信登录验证，本次登录需要您的短信验证码',
        en: 'You have enable SMS verification for account login, please enter SMS verification code.',
        jp: '',
        kr: ''
    },
    '6038': {
        cn: '你已开启邮箱登录验证，本次登录需要您的邮箱验证码',
        en: 'You have enable Email verification for account login, please enter Email verification code.',
        jp: '',
        kr: ''
    },
    '6039': {
        cn: '邮箱验证码错误，请重新获取',
        en: 'email verification code error, please acquired again',
        jp: '',
        kr: ''
    },
    '6040': {
        cn: '该账户已冻结，暂时不能操作',
        en: 'The account has been frozen and can not be operated for the time being',
        jp: '',
        kr: ''
    },
    '6041': {
        cn: '该账户不是主账户，暂时不能操作',
        en: 'The account is not the main account and can not be operated for the time being',
        jp: '',
        kr: ''
    },
    '6042': {
        cn: '修改账户（头像，昵称）失败',
        en: 'Revision of account (head image, nickname) failure',
        jp: '',
        kr: ''
    },
    '6043': {
        cn: '用户已经被列入登录黑名单不能进行登录',
        en: 'The user has been listed on the login blacklist and cannot log in',
        jp: '',
        kr: ''
    },
    '6044': {
        cn: '这个市场已经收藏，不能重复操作',
        en: 'add a repetition user market',
        jp: '',
        kr: ''
    },
    '6045': {
        cn: '用户还没有收藏这个市场，无法操作',
        en: 'user has not collect this market yet',
        jp: '',
        kr: ''
    },
    '6046': {
        cn: '推荐人不存在',
        en: 'The referrer is not exists',
        jp: '',
        kr: ''
    },
    '6047': {
        cn: '原密码错误',
        en: 'old password mistake!',
        jp: '',
        kr: ''
    },
    '6048': {
        cn: '邮箱已经存在',
        en: 'email exists!',
        jp: '',
        kr: ''
    },
    '6049': {
        cn: '手机已经存在',
        en: 'phone exists!',
        jp: '',
        kr: ''
    },
    '6050': {
        cn: '用户没有权限',
        en: 'sorry,you have no limits',
        jp: '',
        kr: ''
    },
    '6051': {
        cn: '该菜单不存在',
        en: 'The menu is not exists',
        jp: '',
        kr: ''
    },
    '6052': {
        cn: '该菜单不是叶子节点菜单',
        en: 'The menu is not leaf menu',
        jp: '',
        kr: ''
    },
    '6053': {
        cn: '该api不存在',
        en: 'The api is not exists',
        jp: '',
        kr: ''
    },
    '6054': {
        cn: '该角色不存在',
        en: 'The role is not exists',
        jp: '',
        kr: ''
    },
    '6055': {
        cn: '该角色名已经存在',
        en: 'The role name is exists',
        jp: '',
        kr: ''
    },
    '6056': {
        cn: '父菜单不存在',
        en: 'The parent menu is not exists',
        jp: '',
        kr: ''
    },
    '6057': {
        cn: '修改角色失败',
        en: 'Failed to modify role',
        jp: '',
        kr: ''
    },
    '6058': {
        cn: '删除角色失败',
        en: 'Failed to delete the role',
        jp: '',
        kr: ''
    },
    '6061': {
        cn: '你已开启谷歌，邮箱登录验证，本次登录需要您的谷歌，邮箱验证码',
        en: 'You have enable Google,Email verification for account login, please enter Google,Email verification code.',
        jp: '',
        kr: ''
    },
    '6062': {
        cn: '你已开启谷歌，短信登录验证，本次登录需要您的谷歌，短信验证码',
        en: 'You have enable Google,SMS verification for account login, please enter Google,SMS verification code.',
        jp: '',
        kr: ''
    },
    '6063': {
        cn: '你已开启邮箱，短信登录验证，本次登录需要您的邮箱，短信验证码',
        en: 'You have enable Email,SMS verification for account login, please enter Email,SMS verification code.',
        jp: '',
        kr: ''
    },
    '6064': {
        cn: '你已开启谷歌，邮箱，短信登录验证，本次登录需要您的谷歌，邮箱，短信验证码',
        en: 'You have enable Google,Email,SMS verification for account login, please enter  Google,Email,SMS verification code.',
        jp: '',
        kr: ''
    },
    "6065": {
        "cn": "你已开启谷歌，异地登录验证，请输入谷歌验证码和邮箱/短信验证码",
        "en": "You have enable Google,Offsite + verification for account login, please enter  Google,Email/SMS verification code",
        "jp": "",
        "kr": ""
    },
    "6066": {
        "cn": "你已开启异地登录验证，本次登录需要您的短信/邮箱验证码",
        "en": "You have enable Offsite verification for account login, please enter email/sms verification code",
        "jp": "",
        "kr": ""
    },
    "6067": {
        "cn": "设置的验证类型的值不正确",
        "en": "the verify type value error",
        "jp": "",
        "kr": ""
    },
    "6068": {
        "cn": "你已开启资金密码+短信/邮箱验证码+Google验证码，本次登录需要您的短信/邮箱验证码,Google验证码",
        "en": "You have enable securityPassword and sms/email and google verification for account login, please enter email/sms and google verification code",
        "jp": "",
        "kr": ""
    },
    "6069": {
        "cn": "你尚未开启谷歌验证",
        "en": "You not yet open google auth",
        "jp": "",
        "kr": ""
    },
    '6070': {
        cn: '管理用户登录必须先打开谷歌登录验证',
        en: 'As an admin user you have to enable Google verification for account login!',
        jp: '',
        kr: ''
    },
    "6071": {
        "cn": "参数不合法",
        "en": "Invalid param",
        "jp": "",
        "kr": ""
    },
    "6072": {
        "cn": "该用户已经实名认证",
        "en": "The user has already been real name identified",
        "jp": "",
        "kr": ""
    },
    "6073": {
        "cn": "该用户已经实银行认证",
        "en": "The user has already been bank identified",
        "jp": "",
        "kr": ""
    },
    "6074": {
        "cn": "该用户未实名认证",
        "en": "The user is not identified",
        "jp": "",
        "kr": ""
    },
    "6075": {
        "cn": "该用户未银行认证",
        "en": "This user has not bank identified",
        "jp": "",
        "kr": ""
    },
    "6076": {
        "cn": "安全密码错误，请重新输入",
        "en": "Security password error, please enter again",
        "jp": "",
        "kr": ""
    },
    "6077": {
        "cn": "请输入安全密码",
        "en": "please input Security password",
        "jp": "",
        "kr": ""
    },
    "6078": {
        "cn": "您尚未设置资金密码",
        "en": "please set Security password first",
        "jp": "",
        "kr": ""
    },
    "6079": {
        "cn": "您还未完善登录密码，请先完善!",
        "en": "You have not perfected your login password, please improve it first.",
        jp: '',
        kr: ''
    },
    '6095': {
        cn: '用户不存在',
        en: 'Users does not exist',
        jp: '',
        kr: ''
    },
    '6096': {
        cn: '无效的参数',
        en: 'Invalid parameter',
        jp: '',
        kr: ''
    },
    '6097': {
        cn: '请求过于频繁',
        en: 'Request too frequently',
        jp: '',
        kr: ''
    },
    '6098': {
        cn: '用户已经被列入交易黑名单不能进行交易',
        en: 'The user has been listed on the transaction blacklist and cannot transaction',
        jp: '',
        kr: ''
    },
    '6099': {
        cn: '审核用户更变信息失败',
        en: 'Auditing the failure of users to change information',
        jp: '',
        kr: ''
    },
    '6100': {
        cn: '1分钟只能操作1次，稍后再试',
        en: ' 1 minute only 1 operation time, try again later!',
        jp: '',
        kr: ''
    },
    '6102': {
        cn: '验证码发送成功，10分钟内有效!',
        en: 'Verification code sent successfully, valid for 10 minutes!',
        jp: '',
        kr: ''
    },
    '6103': {
        cn: '还未开启登录验证，不能关闭！',
        en: 'Has not been open login authentication and cannot be closed!',
        jp: '',
        kr: ''
    },
    '6104': {
        cn: '您已经了二次登录验证',
        en: 'You have  the  secondary login authentication!',
        jp: '',
        kr: ''
    },
    '6105': {
        cn: '您已经进行过此操作了，不需要重新操作！',
        en: 'You have already done this operation, do not need to operate!',
        jp: '',
        kr: ''
    },
    '6106': {
        cn: 'Google密钥为空！',
        en: 'Google Secret is empty!',
        jp: '',
        kr: ''
    },
    '6107': {
        cn: '您已开启登录Google验证',
        en: 'You have open the login Google authentication, cannot be directly closed Google certification!',
        jp: '',
        kr: ''
    },
    '6108': {
        cn: 'Google认证正在审核，不能关闭！',
        en: 'Google certification is reviewing, can\'t close!',
        jp: '',
        kr: ''
    },
    '6109': {
        cn: '您没有进行手机认证不能关闭Google验证！',
        en: 'You don\'t have to mobile phone authentication, Google cannot be shut down!',
        jp: '',
        kr: ''
    },
    '6110': {
        cn: 'Google认证正在审核，不能开启！',
        en: 'Google certification is reviewing, can\'t open it!',
        jp: '',
        kr: ''
    },
    '6111': {
        cn: '您已经进行过谷歌认证！',
        en: 'You have been Google certification!',
        jp: '',
        kr: ''
    },
    '6112': {
        cn: '您的账号已经认证了邮箱: ，请勿重复操作！',
        en: 'Your account has been certification mailbox , please do not repeat operation!',
        jp: '',
        kr: ''
    },
    '6113': {
        cn: '短信验证码输入有误，请重新输入！',
        en: 'Message authentication code input is wrong, please input again!',
        jp: '',
        kr: ''
    },
    '6114': {
        cn: '提币地址为空！',
        en: 'Please select a currency address!',
        jp: '',
        kr: ''
    },
    '6115': {
        cn: '提交提币申请失败！',
        en: 'Submit a withdrawal application failure!',
        jp: '',
        kr: ''
    },
    '6116': {
        cn: '添加提币地址失败！',
        en: 'Add the withdrawal address failure!',
        jp: '',
        kr: ''
    },
    '6117': {
        cn: '没有选择要取消的提现记录！',
        en: 'Have no choice to cancel the withdrawal record!',
        jp: '',
        kr: ''
    },
    '6118': {
        cn: '取消提现失败！',
        en: 'Cancel the withdrawal failure!',
        jp: '',
        kr: ''
    },
    '6119': {
        cn: '此条记录不能取消提现！',
        en: 'This record cannot cancel withdrawal!',
        jp: '',
        kr: ''
    },
    '6120': {
        cn: '取消提现',
        en: 'Cancel the withdrawal!',
        jp: '',
        kr: ''
    },
    '6121': {
        cn: '未找到记录！',
        en: 'Record was not found!',
        jp: '',
        kr: ''
    },
    '6122': {
        cn: '此条提现申请已经被取消或禁用！',
        en: 'This withdrawal application has been cancelled or disabled!',
        jp: '',
        kr: ''
    },
    '6123': {
        cn: '此条提现记录已经审核通过或审核不通过！',
        en: 'This withdrawal record has not been through audit through or audit!',
        jp: '',
        kr: ''
    },
    '6124': {
        cn: '审核失败！',
        en: 'Audit failure!',
        jp: '',
        kr: ''
    },
    '6125': {
        cn: '无效的货币类型！',
        en: 'An invalid currency type!',
        jp: '',
        kr: ''
    },
    '6126': {
        cn: '审核通过',
        en: 'Audit Approve!',
        jp: '',
        kr: ''
    },
    '6127': {
        cn: '验证码发送成功，10分钟内有效!',
        en: 'Verification code sent successfully, valid for 10 minutes!',
        jp: '',
        kr: ''
    },
    '6128': {
        cn: '验证码已超时，请重新获取!',
        en: ' authentication code already timeout, please get it again!',
        jp: '',
        kr: ''
    },
    '6129': {
        cn: '审核不通过！',
        en: 'Audit not through!',
        jp: '',
        kr: ''
    },
    '6130': {
        cn: '没有选取币种！',
        en: 'No selection of currency, Please try again!',
        jp: '',
        kr: ''
    },
    '6131': {
        cn: '应用不存在！',
        en: 'APP is not exist!',
        jp: '',
        kr: ''
    },
    '6132': {
        cn: '今天已经发送超过限制，请明天再重试！',
        en: 'Today has sent more than , please try again tomorrow!',
        jp: '',
        kr: ''
    },
    '6133': {
        cn: '提现地址不合法！',
        en: 'Withdrawal address is illegal!',
        jp: '',
        kr: ''
    },
    '6135': {
        cn: '此账号未认证邮箱，不能进行重置密码操作！',
        en: 'This account is not certified mail, password reset operations can not be performed!',
        jp: '',
        kr: ''
    },
    '6136': {
        cn: '邮件发送失败，未重置密码操作！',
        en: 'Sending a message fails, the password is not reset!',
        jp: '',
        kr: ''
    },
    '6137': {
        cn: '该条记录已经存在，无需重复添加！',
        en: 'Which record already exists, do not need to repeat!',
        jp: '',
        kr: ''
    },
    '6138': {
        cn: '您还没有进行Google认证，请认证后再操作！',
        en: 'You don\'t have to Google certification, please again after operation!',
        jp: '',
        kr: ''
    },
    "6139": {
        "cn": "请刷新页面重试",
        "en": "Please refresh the page and try again",
        "jp": "",
        "kr": ""
    },
    "6140": {
        "cn": "未认证手机或邮箱",
        "en": "Unauthorized cell phone or email"
    },
    "6141": {
        "cn": "发送验证码失败，请重新获取",
        "en": "Send verification code fails, please get it again"
    },
    '6150': {
        cn: '单次提现超出限额',
        en: 'Single withdrawal exceeds the limit',
        jp: '',
        kr: ''
    },
    '6151': {
        cn: '当天提现超出限额',
        en: 'The current withdrawal exceeds the limit',
        jp: '',
        kr: ''
    },
    '6152': {
        cn: '提现超出用户限额',
        en: 'Cash withdrawal exceeds user limit',
        jp: '',
        kr: ''
    },
    '6153': {
        cn: '资金不足',
        en: 'Insufficient funds',
        jp: '',
        kr: ''
    },
    "6205": {
        "cn": "返回的storeSeq不一致",
        "en": "inconsistent message id",
        "jp": "",
        "kr": ""
    },
    "6206": {
        "cn": "法币提现失败",
        "en": "Fiat money withdrawal failure",
        "jp": "",
        "kr": ""
    },
    "6999": {
        "cn": "拒绝访问",
        "en": "access forbidden",
        "jp": "",
        "kr": ""
    },
    "7000": {
        "cn": "服务限流超出",
        "en": "out of server rate limit",
        "jp": "",
        "kr": ""
    },
    "7001": {
        "cn": "当前ip一分钟内访问次数超出上限",
        "en": "current ip address visit counts out of limit",
        "jp": "",
        "kr": ""
    },
    "7002": {
        "cn": "服务熔断",
        "en": "CircuitBreaker fallback",
        "jp": "",
        "kr": ""
    },
    "7003": {
        "cn": "系统繁忙",
        "en": "server is busy",
        "jp": "",
        "kr": ""
    },
    "7004": {
        "cn": "地址错误",
        "en": "path error",
        "jp": "",
        "kr": ""
    },
    "7050": {
        "cn": "该币种不存在",
        "en": "not exists",
        "jp": "",
        "kr": ""
    },
    "7015": {
        "cn": "用户没有实名认证或者没有高级实名认证",
        "en": "User does not have advanced certification",
        "jp": "",
        "kr": ""
    },
    "7016": {
        "cn": "交易数量大于单笔交易总量",
        "en": "This transaction exceeds the single transaction amount",
        "jp": "",
        "kr": ""
    },
    "7017": {
        "cn": "交易数量大于总交易量",
        "en": "The total number of transactions is greater than the maximum",
        "jp": "",
        "kr": ""
    },
    "7011": {
        "cn": "交易密码不同",
        "en": "Different fund passwords",
        "jp": "",
        "kr": ""
    },
    "7040": {
        "cn": "交易密码不存在",
        "en": "Security password not exists",
        "jp": "",
        "kr": ""
    },
    "10012": {
        "cn": "未知异常",
        "en": "unknown error",
        "jp": "",
        "kr": ""
    },
    "共n页": {
        "cn": "共[$1]页",
        "en": "Total of [$1] Pages",
        "jp": "",
        "kr": ""
    },
    "已高级实名认证，认证姓名：n": {
        "cn": "已高级实名认证，认证姓名：[$1]",
        "en": "Advanced Real Name Certification,certification name: [$1]",
        "jp": "",
        "kr": ""
    },
    "在activityStartTime ～ activityEndTime期间，注册并完成实名认证可以获得10 XT，邀请好友注册XT平台账户并在规定时间内完成实名认证，可以再得2 XT奖励！": {
        "cn": "在[$1] ～ [$2]期间，注册并完成实名认证可以获得10 XT，邀请好友注册XT平台账户并在规定时间内完成实名认证，可以再得2 XT奖励！",
        "en": "During [$1] ~ [$2], you can get 10 XT by registering and completing the real-name verification. Invite your friends to sign up for the XT platform account and complete the real-name verification within the specified time, you can get 2 XT!",
        "jp": "",
        "kr": ""
    },
    "卖方付款时限为orderOutTime分钟": {
        "cn": "卖方付款时限为[$1]分钟",
        "en": "卖方付款时限为[$1]分钟",
        "jp": "",
        "kr": ""
    },
    "": {
        "cn": "",
        "en": "",
        "jp": "",
        "kr": ""
    }
};
//简繁体对照字库2552个字符
EXX.JTPYStr = '万与丑专业丛东丝丢两严丧个丬丰临为丽举么义乌乐乔习乡书买乱争于亏云亘亚产亩亲亵亸亿仅从仑仓仪们价众优伙会伛伞伟传伤伥伦伧伪伫体余佣佥侠侣侥侦侧侨侩侪侬俣俦俨俩俪俭债倾偬偻偾偿傥傧储傩儿兑兖党兰关兴兹养兽冁内冈册写军农冢冯冲决况冻净凄凉凌减凑凛几凤凫凭凯击凼凿刍划刘则刚创删别刬刭刽刿剀剂剐剑剥剧劝办务劢动励劲劳势勋勐勚匀匦匮区医华协单卖卢卤卧卫却卺厂厅历厉压厌厍厕厢厣厦厨厩厮县参叆叇双发变叙叠叶号叹叽吁后吓吕吗吣吨听启吴呒呓呕呖呗员呙呛呜咏咔咙咛咝咤咴咸哌响哑哒哓哔哕哗哙哜哝哟唛唝唠唡唢唣唤唿啧啬啭啮啰啴啸喷喽喾嗫呵嗳嘘嘤嘱噜噼嚣嚯团园囱围囵国图圆圣圹场坂坏块坚坛坜坝坞坟坠垄垅垆垒垦垧垩垫垭垯垱垲垴埘埙埚埝埯堑堕塆墙壮声壳壶壸处备复够头夸夹夺奁奂奋奖奥妆妇妈妩妪妫姗姜娄娅娆娇娈娱娲娴婳婴婵婶媪嫒嫔嫱嬷孙学孪宁宝实宠审宪宫宽宾寝对寻导寿将尔尘尧尴尸尽层屃屉届属屡屦屿岁岂岖岗岘岙岚岛岭岳岽岿峃峄峡峣峤峥峦崂崃崄崭嵘嵚嵛嵝嵴巅巩巯币帅师帏帐帘帜带帧帮帱帻帼幂幞干并广庄庆庐庑库应庙庞废庼廪开异弃张弥弪弯弹强归当录彟彦彻径徕御忆忏忧忾怀态怂怃怄怅怆怜总怼怿恋恳恶恸恹恺恻恼恽悦悫悬悭悯惊惧惨惩惫惬惭惮惯愍愠愤愦愿慑慭憷懑懒懔戆戋戏戗战戬户扎扑扦执扩扪扫扬扰抚抛抟抠抡抢护报担拟拢拣拥拦拧拨择挂挚挛挜挝挞挟挠挡挢挣挤挥挦捞损捡换捣据捻掳掴掷掸掺掼揸揽揿搀搁搂搅携摄摅摆摇摈摊撄撑撵撷撸撺擞攒敌敛数斋斓斗斩断无旧时旷旸昙昼昽显晋晒晓晔晕晖暂暧札术朴机杀杂权条来杨杩杰极构枞枢枣枥枧枨枪枫枭柜柠柽栀栅标栈栉栊栋栌栎栏树栖样栾桊桠桡桢档桤桥桦桧桨桩梦梼梾检棂椁椟椠椤椭楼榄榇榈榉槚槛槟槠横樯樱橥橱橹橼檐檩欢欤欧歼殁殇残殒殓殚殡殴毁毂毕毙毡毵氇气氢氩氲汇汉污汤汹沓沟没沣沤沥沦沧沨沩沪沵泞泪泶泷泸泺泻泼泽泾洁洒洼浃浅浆浇浈浉浊测浍济浏浐浑浒浓浔浕涂涌涛涝涞涟涠涡涢涣涤润涧涨涩淀渊渌渍渎渐渑渔渖渗温游湾湿溃溅溆溇滗滚滞滟滠满滢滤滥滦滨滩滪漤潆潇潋潍潜潴澜濑濒灏灭灯灵灾灿炀炉炖炜炝点炼炽烁烂烃烛烟烦烧烨烩烫烬热焕焖焘煅煳熘爱爷牍牦牵牺犊犟状犷犸犹狈狍狝狞独狭狮狯狰狱狲猃猎猕猡猪猫猬献獭玑玙玚玛玮环现玱玺珉珏珐珑珰珲琎琏琐琼瑶瑷璇璎瓒瓮瓯电画畅畲畴疖疗疟疠疡疬疮疯疱疴痈痉痒痖痨痪痫痴瘅瘆瘗瘘瘪瘫瘾瘿癞癣癫癯皑皱皲盏盐监盖盗盘眍眦眬着睁睐睑瞒瞩矫矶矾矿砀码砖砗砚砜砺砻砾础硁硅硕硖硗硙硚确硷碍碛碜碱碹磙礼祎祢祯祷祸禀禄禅离秃秆种积称秽秾稆税稣稳穑穷窃窍窑窜窝窥窦窭竖竞笃笋笔笕笺笼笾筑筚筛筜筝筹签简箓箦箧箨箩箪箫篑篓篮篱簖籁籴类籼粜粝粤粪粮糁糇紧絷纟纠纡红纣纤纥约级纨纩纪纫纬纭纮纯纰纱纲纳纴纵纶纷纸纹纺纻纼纽纾线绀绁绂练组绅细织终绉绊绋绌绍绎经绐绑绒结绔绕绖绗绘给绚绛络绝绞统绠绡绢绣绤绥绦继绨绩绪绫绬续绮绯绰绱绲绳维绵绶绷绸绹绺绻综绽绾绿缀缁缂缃缄缅缆缇缈缉缊缋缌缍缎缏缐缑缒缓缔缕编缗缘缙缚缛缜缝缞缟缠缡缢缣缤缥缦缧缨缩缪缫缬缭缮缯缰缱缲缳缴缵罂网罗罚罢罴羁羟羡翘翙翚耢耧耸耻聂聋职聍联聩聪肃肠肤肷肾肿胀胁胆胜胧胨胪胫胶脉脍脏脐脑脓脔脚脱脶脸腊腌腘腭腻腼腽腾膑臜舆舣舰舱舻艰艳艹艺节芈芗芜芦苁苇苈苋苌苍苎苏苘苹茎茏茑茔茕茧荆荐荙荚荛荜荞荟荠荡荣荤荥荦荧荨荩荪荫荬荭荮药莅莜莱莲莳莴莶获莸莹莺莼萚萝萤营萦萧萨葱蒇蒉蒋蒌蓝蓟蓠蓣蓥蓦蔷蔹蔺蔼蕲蕴薮藁藓虏虑虚虫虬虮虽虾虿蚀蚁蚂蚕蚝蚬蛊蛎蛏蛮蛰蛱蛲蛳蛴蜕蜗蜡蝇蝈蝉蝎蝼蝾螀螨蟏衅衔补衬衮袄袅袆袜袭袯装裆裈裢裣裤裥褛褴襁襕见观觃规觅视觇览觉觊觋觌觍觎觏觐觑觞触觯詟誉誊讠计订讣认讥讦讧讨让讪讫训议讯记讱讲讳讴讵讶讷许讹论讻讼讽设访诀证诂诃评诅识诇诈诉诊诋诌词诎诏诐译诒诓诔试诖诗诘诙诚诛诜话诞诟诠诡询诣诤该详诧诨诩诪诫诬语诮误诰诱诲诳说诵诶请诸诹诺读诼诽课诿谀谁谂调谄谅谆谇谈谊谋谌谍谎谏谐谑谒谓谔谕谖谗谘谙谚谛谜谝谞谟谠谡谢谣谤谥谦谧谨谩谪谫谬谭谮谯谰谱谲谳谴谵谶谷豮贝贞负贠贡财责贤败账货质贩贪贫贬购贮贯贰贱贲贳贴贵贶贷贸费贺贻贼贽贾贿赀赁赂赃资赅赆赇赈赉赊赋赌赍赎赏赐赑赒赓赔赕赖赗赘赙赚赛赜赝赞赟赠赡赢赣赪赵赶趋趱趸跃跄跖跞践跶跷跸跹跻踊踌踪踬踯蹑蹒蹰蹿躏躜躯车轧轨轩轪轫转轭轮软轰轱轲轳轴轵轶轷轸轹轺轻轼载轾轿辀辁辂较辄辅辆辇辈辉辊辋辌辍辎辏辐辑辒输辔辕辖辗辘辙辚辞辩辫边辽达迁过迈运还这进远违连迟迩迳迹适选逊递逦逻遗遥邓邝邬邮邹邺邻郁郄郏郐郑郓郦郧郸酝酦酱酽酾酿释里鉅鉴銮錾钆钇针钉钊钋钌钍钎钏钐钑钒钓钔钕钖钗钘钙钚钛钝钞钟钠钡钢钣钤钥钦钧钨钩钪钫钬钭钮钯钰钱钲钳钴钵钶钷钸钹钺钻钼钽钾钿铀铁铂铃铄铅铆铈铉铊铋铍铎铏铐铑铒铕铗铘铙铚铛铜铝铞铟铠铡铢铣铤铥铦铧铨铪铫铬铭铮铯铰铱铲铳铴铵银铷铸铹铺铻铼铽链铿销锁锂锃锄锅锆锇锈锉锊锋锌锍锎锏锐锑锒锓锔锕锖锗错锚锜锞锟锠锡锢锣锤锥锦锨锩锫锬锭键锯锰锱锲锳锴锵锶锷锸锹锺锻锼锽锾锿镀镁镂镃镆镇镈镉镊镌镍镎镏镐镑镒镕镖镗镙镚镛镜镝镞镟镠镡镢镣镤镥镦镧镨镩镪镫镬镭镮镯镰镱镲镳镴镶长门闩闪闫闬闭问闯闰闱闲闳间闵闶闷闸闹闺闻闼闽闾闿阀阁阂阃阄阅阆阇阈阉阊阋阌阍阎阏阐阑阒阓阔阕阖阗阘阙阚阛队阳阴阵阶际陆陇陈陉陕陧陨险随隐隶隽难雏雠雳雾霁霉霭靓静靥鞑鞒鞯鞴韦韧韨韩韪韫韬韵页顶顷顸项顺须顼顽顾顿颀颁颂颃预颅领颇颈颉颊颋颌颍颎颏颐频颒颓颔颕颖颗题颙颚颛颜额颞颟颠颡颢颣颤颥颦颧风飏飐飑飒飓飔飕飖飗飘飙飚飞飨餍饤饥饦饧饨饩饪饫饬饭饮饯饰饱饲饳饴饵饶饷饸饹饺饻饼饽饾饿馀馁馂馃馄馅馆馇馈馉馊馋馌馍馎馏馐馑馒馓馔馕马驭驮驯驰驱驲驳驴驵驶驷驸驹驺驻驼驽驾驿骀骁骂骃骄骅骆骇骈骉骊骋验骍骎骏骐骑骒骓骔骕骖骗骘骙骚骛骜骝骞骟骠骡骢骣骤骥骦骧髅髋髌鬓魇魉鱼鱽鱾鱿鲀鲁鲂鲄鲅鲆鲇鲈鲉鲊鲋鲌鲍鲎鲏鲐鲑鲒鲓鲔鲕鲖鲗鲘鲙鲚鲛鲜鲝鲞鲟鲠鲡鲢鲣鲤鲥鲦鲧鲨鲩鲪鲫鲬鲭鲮鲯鲰鲱鲲鲳鲴鲵鲶鲷鲸鲹鲺鲻鲼鲽鲾鲿鳀鳁鳂鳃鳄鳅鳆鳇鳈鳉鳊鳋鳌鳍鳎鳏鳐鳑鳒鳓鳔鳕鳖鳗鳘鳙鳛鳜鳝鳞鳟鳠鳡鳢鳣鸟鸠鸡鸢鸣鸤鸥鸦鸧鸨鸩鸪鸫鸬鸭鸮鸯鸰鸱鸲鸳鸴鸵鸶鸷鸸鸹鸺鸻鸼鸽鸾鸿鹀鹁鹂鹃鹄鹅鹆鹇鹈鹉鹊鹋鹌鹍鹎鹏鹐鹑鹒鹓鹔鹕鹖鹗鹘鹚鹛鹜鹝鹞鹟鹠鹡鹢鹣鹤鹥鹦鹧鹨鹩鹪鹫鹬鹭鹯鹰鹱鹲鹳鹴鹾麦麸黄黉黡黩黪黾鼋鼌鼍鼗鼹齄齐齑齿龀龁龂龃龄龅龆龇龈龉龊龋龌龙龚龛龟志制咨只里系范松没尝尝闹面准钟别闲干尽脏';
EXX.FTPYStr = '萬與醜專業叢東絲丟兩嚴喪個爿豐臨為麗舉麼義烏樂喬習鄉書買亂爭於虧雲亙亞產畝親褻嚲億僅從侖倉儀們價眾優夥會傴傘偉傳傷倀倫傖偽佇體餘傭僉俠侶僥偵側僑儈儕儂俁儔儼倆儷儉債傾傯僂僨償儻儐儲儺兒兌兗黨蘭關興茲養獸囅內岡冊寫軍農塚馮衝決況凍淨淒涼淩減湊凜幾鳳鳧憑凱擊氹鑿芻劃劉則剛創刪別剗剄劊劌剴劑剮劍剝劇勸辦務勱動勵勁勞勢勳猛勩勻匭匱區醫華協單賣盧鹵臥衛卻巹廠廳曆厲壓厭厙廁廂厴廈廚廄廝縣參靉靆雙發變敘疊葉號歎嘰籲後嚇呂嗎唚噸聽啟吳嘸囈嘔嚦唄員咼嗆嗚詠哢嚨嚀噝吒噅鹹呱響啞噠嘵嗶噦嘩噲嚌噥喲嘜嗊嘮啢嗩唕喚呼嘖嗇囀齧囉嘽嘯噴嘍嚳囁嗬噯噓嚶囑嚕劈囂謔團園囪圍圇國圖圓聖壙場阪壞塊堅壇壢壩塢墳墜壟壟壚壘墾坰堊墊埡墶壋塏堖塒塤堝墊垵塹墮壪牆壯聲殼壺壼處備複夠頭誇夾奪奩奐奮獎奧妝婦媽嫵嫗媯姍薑婁婭嬈嬌孌娛媧嫻嫿嬰嬋嬸媼嬡嬪嬙嬤孫學孿寧寶實寵審憲宮寬賓寢對尋導壽將爾塵堯尷屍盡層屭屜屆屬屢屨嶼歲豈嶇崗峴嶴嵐島嶺嶽崠巋嶨嶧峽嶢嶠崢巒嶗崍嶮嶄嶸嶔崳嶁脊巔鞏巰幣帥師幃帳簾幟帶幀幫幬幘幗冪襆幹並廣莊慶廬廡庫應廟龐廢廎廩開異棄張彌弳彎彈強歸當錄彠彥徹徑徠禦憶懺憂愾懷態慫憮慪悵愴憐總懟懌戀懇惡慟懨愷惻惱惲悅愨懸慳憫驚懼慘懲憊愜慚憚慣湣慍憤憒願懾憖怵懣懶懍戇戔戲戧戰戩戶紮撲扡執擴捫掃揚擾撫拋摶摳掄搶護報擔擬攏揀擁攔擰撥擇掛摯攣掗撾撻挾撓擋撟掙擠揮撏撈損撿換搗據撚擄摑擲撣摻摜摣攬撳攙擱摟攪攜攝攄擺搖擯攤攖撐攆擷擼攛擻攢敵斂數齋斕鬥斬斷無舊時曠暘曇晝曨顯晉曬曉曄暈暉暫曖劄術樸機殺雜權條來楊榪傑極構樅樞棗櫪梘棖槍楓梟櫃檸檉梔柵標棧櫛櫳棟櫨櫟欄樹棲樣欒棬椏橈楨檔榿橋樺檜槳樁夢檮棶檢欞槨櫝槧欏橢樓欖櫬櫚櫸檟檻檳櫧橫檣櫻櫫櫥櫓櫞簷檁歡歟歐殲歿殤殘殞殮殫殯毆毀轂畢斃氈毿氌氣氫氬氳彙漢汙湯洶遝溝沒灃漚瀝淪滄渢溈滬濔濘淚澩瀧瀘濼瀉潑澤涇潔灑窪浹淺漿澆湞溮濁測澮濟瀏滻渾滸濃潯濜塗湧濤澇淶漣潿渦溳渙滌潤澗漲澀澱淵淥漬瀆漸澠漁瀋滲溫遊灣濕潰濺漵漊潷滾滯灩灄滿瀅濾濫灤濱灘澦濫瀠瀟瀲濰潛瀦瀾瀨瀕灝滅燈靈災燦煬爐燉煒熗點煉熾爍爛烴燭煙煩燒燁燴燙燼熱煥燜燾煆糊溜愛爺牘犛牽犧犢強狀獷獁猶狽麅獮獰獨狹獅獪猙獄猻獫獵獼玀豬貓蝟獻獺璣璵瑒瑪瑋環現瑲璽瑉玨琺瓏璫琿璡璉瑣瓊瑤璦璿瓔瓚甕甌電畫暢佘疇癤療瘧癘瘍鬁瘡瘋皰屙癰痙癢瘂癆瘓癇癡癉瘮瘞瘺癟癱癮癭癩癬癲臒皚皺皸盞鹽監蓋盜盤瞘眥矓著睜睞瞼瞞矚矯磯礬礦碭碼磚硨硯碸礪礱礫礎硜矽碩硤磽磑礄確鹼礙磧磣堿镟滾禮禕禰禎禱禍稟祿禪離禿稈種積稱穢穠穭稅穌穩穡窮竊竅窯竄窩窺竇窶豎競篤筍筆筧箋籠籩築篳篩簹箏籌簽簡籙簀篋籜籮簞簫簣簍籃籬籪籟糴類秈糶糲粵糞糧糝餱緊縶糸糾紆紅紂纖紇約級紈纊紀紉緯紜紘純紕紗綱納紝縱綸紛紙紋紡紵紖紐紓線紺絏紱練組紳細織終縐絆紼絀紹繹經紿綁絨結絝繞絰絎繪給絢絳絡絕絞統綆綃絹繡綌綏絛繼綈績緒綾緓續綺緋綽緔緄繩維綿綬繃綢綯綹綣綜綻綰綠綴緇緙緗緘緬纜緹緲緝縕繢緦綞緞緶線緱縋緩締縷編緡緣縉縛縟縝縫縗縞纏縭縊縑繽縹縵縲纓縮繆繅纈繚繕繒韁繾繰繯繳纘罌網羅罰罷羆羈羥羨翹翽翬耮耬聳恥聶聾職聹聯聵聰肅腸膚膁腎腫脹脅膽勝朧腖臚脛膠脈膾髒臍腦膿臠腳脫腡臉臘醃膕齶膩靦膃騰臏臢輿艤艦艙艫艱豔艸藝節羋薌蕪蘆蓯葦藶莧萇蒼苧蘇檾蘋莖蘢蔦塋煢繭荊薦薘莢蕘蓽蕎薈薺蕩榮葷滎犖熒蕁藎蓀蔭蕒葒葤藥蒞蓧萊蓮蒔萵薟獲蕕瑩鶯蓴蘀蘿螢營縈蕭薩蔥蕆蕢蔣蔞藍薊蘺蕷鎣驀薔蘞藺藹蘄蘊藪槁蘚虜慮虛蟲虯蟣雖蝦蠆蝕蟻螞蠶蠔蜆蠱蠣蟶蠻蟄蛺蟯螄蠐蛻蝸蠟蠅蟈蟬蠍螻蠑螿蟎蠨釁銜補襯袞襖嫋褘襪襲襏裝襠褌褳襝褲襇褸襤繈襴見觀覎規覓視覘覽覺覬覡覿覥覦覯覲覷觴觸觶讋譽謄訁計訂訃認譏訐訌討讓訕訖訓議訊記訒講諱謳詎訝訥許訛論訩訟諷設訪訣證詁訶評詛識詗詐訴診詆謅詞詘詔詖譯詒誆誄試詿詩詰詼誠誅詵話誕詬詮詭詢詣諍該詳詫諢詡譸誡誣語誚誤誥誘誨誑說誦誒請諸諏諾讀諑誹課諉諛誰諗調諂諒諄誶談誼謀諶諜謊諫諧謔謁謂諤諭諼讒諮諳諺諦謎諞諝謨讜謖謝謠謗諡謙謐謹謾謫譾謬譚譖譙讕譜譎讞譴譫讖穀豶貝貞負貟貢財責賢敗賬貨質販貪貧貶購貯貫貳賤賁貰貼貴貺貸貿費賀貽賊贄賈賄貲賃賂贓資賅贐賕賑賚賒賦賭齎贖賞賜贔賙賡賠賧賴賵贅賻賺賽賾贗讚贇贈贍贏贛赬趙趕趨趲躉躍蹌蹠躒踐躂蹺蹕躚躋踴躊蹤躓躑躡蹣躕躥躪躦軀車軋軌軒軑軔轉軛輪軟轟軲軻轤軸軹軼軤軫轢軺輕軾載輊轎輈輇輅較輒輔輛輦輩輝輥輞輬輟輜輳輻輯轀輸轡轅轄輾轆轍轔辭辯辮邊遼達遷過邁運還這進遠違連遲邇逕跡適選遜遞邐邏遺遙鄧鄺鄔郵鄒鄴鄰鬱郤郟鄶鄭鄆酈鄖鄲醞醱醬釅釃釀釋裏钜鑒鑾鏨釓釔針釘釗釙釕釷釺釧釤鈒釩釣鍆釹鍚釵鈃鈣鈈鈦鈍鈔鍾鈉鋇鋼鈑鈐鑰欽鈞鎢鉤鈧鈁鈥鈄鈕鈀鈺錢鉦鉗鈷缽鈳鉕鈽鈸鉞鑽鉬鉭鉀鈿鈾鐵鉑鈴鑠鉛鉚鈰鉉鉈鉍鈹鐸鉶銬銠鉺銪鋏鋣鐃銍鐺銅鋁銱銦鎧鍘銖銑鋌銩銛鏵銓鉿銚鉻銘錚銫鉸銥鏟銃鐋銨銀銣鑄鐒鋪鋙錸鋱鏈鏗銷鎖鋰鋥鋤鍋鋯鋨鏽銼鋝鋒鋅鋶鐦鐧銳銻鋃鋟鋦錒錆鍺錯錨錡錁錕錩錫錮鑼錘錐錦鍁錈錇錟錠鍵鋸錳錙鍥鍈鍇鏘鍶鍔鍤鍬鍾鍛鎪鍠鍰鎄鍍鎂鏤鎡鏌鎮鎛鎘鑷鐫鎳鎿鎦鎬鎊鎰鎔鏢鏜鏍鏰鏞鏡鏑鏃鏇鏐鐔钁鐐鏷鑥鐓鑭鐠鑹鏹鐙鑊鐳鐶鐲鐮鐿鑔鑣鑞鑲長門閂閃閆閈閉問闖閏闈閑閎間閔閌悶閘鬧閨聞闥閩閭闓閥閣閡閫鬮閱閬闍閾閹閶鬩閿閽閻閼闡闌闃闠闊闋闔闐闒闕闞闤隊陽陰陣階際陸隴陳陘陝隉隕險隨隱隸雋難雛讎靂霧霽黴靄靚靜靨韃鞽韉韝韋韌韍韓韙韞韜韻頁頂頃頇項順須頊頑顧頓頎頒頌頏預顱領頗頸頡頰頲頜潁熲頦頤頻頮頹頷頴穎顆題顒顎顓顏額顳顢顛顙顥纇顫顬顰顴風颺颭颮颯颶颸颼颻飀飄飆飆飛饗饜飣饑飥餳飩餼飪飫飭飯飲餞飾飽飼飿飴餌饒餉餄餎餃餏餅餑餖餓餘餒餕餜餛餡館餷饋餶餿饞饁饃餺餾饈饉饅饊饌饢馬馭馱馴馳驅馹駁驢駔駛駟駙駒騶駐駝駑駕驛駘驍罵駰驕驊駱駭駢驫驪騁驗騂駸駿騏騎騍騅騌驌驂騙騭騤騷騖驁騮騫騸驃騾驄驏驟驥驦驤髏髖髕鬢魘魎魚魛魢魷魨魯魴魺鮁鮃鯰鱸鮋鮓鮒鮊鮑鱟鮍鮐鮭鮚鮳鮪鮞鮦鰂鮜鱠鱭鮫鮮鮺鯗鱘鯁鱺鰱鰹鯉鰣鰷鯀鯊鯇鮶鯽鯒鯖鯪鯕鯫鯡鯤鯧鯝鯢鯰鯛鯨鯵鯴鯔鱝鰈鰏鱨鯷鰮鰃鰓鱷鰍鰒鰉鰁鱂鯿鰠鼇鰭鰨鰥鰩鰟鰜鰳鰾鱈鱉鰻鰵鱅鰼鱖鱔鱗鱒鱯鱤鱧鱣鳥鳩雞鳶鳴鳲鷗鴉鶬鴇鴆鴣鶇鸕鴨鴞鴦鴒鴟鴝鴛鴬鴕鷥鷙鴯鴰鵂鴴鵃鴿鸞鴻鵐鵓鸝鵑鵠鵝鵒鷳鵜鵡鵲鶓鵪鶤鵯鵬鵮鶉鶊鵷鷫鶘鶡鶚鶻鶿鶥鶩鷊鷂鶲鶹鶺鷁鶼鶴鷖鸚鷓鷚鷯鷦鷲鷸鷺鸇鷹鸌鸏鸛鸘鹺麥麩黃黌黶黷黲黽黿鼂鼉鞀鼴齇齊齏齒齔齕齗齟齡齙齠齜齦齬齪齲齷龍龔龕龜誌製谘隻裡係範鬆冇嚐嘗鬨麵準鐘彆閒乾儘臟';

EXX.toFT = function (cc) {
    var str = '',
        ss = EXX.JTPYStr,
        tt = EXX.FTPYStr;
    for (var i = 0; i < cc.length; i++) {
        if (cc.charCodeAt(i) > 10000 && ss.indexOf(cc.charAt(i)) != -1) {
            str += tt.charAt(ss.indexOf(cc.charAt(i)));
        } else {
            str += cc.charAt(i);
        }
    }
    return str;
};
EXX.toJT = function (cc) {
    var str = '',
        ss = EXX.JTPYStr,
        tt = EXX.FTPYStr;
    for (var i = 0; i < cc.length; i++) {
        if (cc.charCodeAt(i) > 10000 && tt.indexOf(cc.charAt(i)) != -1) {
            str += ss.charAt(tt.indexOf(cc.charAt(i)));
        } else {
            str += cc.charAt(i);
        }
    }
    return str;
};
EXX.setCookie = function (name, value, time) {
    var expTime = time || "7d"; //默认7天
    if (expTime.indexOf("s") != -1) {
        expTime = expTime.replace("s", "") * 1000;
    } else if (expTime.indexOf("h") != -1) {
        expTime = expTime.replace("h", "") * 60 * 60 * 1000;
    } else if (expTime.indexOf("d") != -1) {
        expTime = expTime.replace("d", "") * 24 * 60 * 60 * 1000;
    }
    var exp = new Date();
    exp.setTime(exp.getTime() + expTime * 1);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
};
EXX.getCookie = function (name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
    } else {
        return null;
    }
};
EXX.delCookie = function (name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = EXX.getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
};
EXX.addLan = function (key, options) {
    var options = options || {};
    EXX.pack[key] = options;
};
// 旧的错误信息通过错误中文字段配置多语言
EXX.L = function (key) {
    try {
        var result = "";
        var currentLang = LAN; //EXX.getCookie('wlan') || "cn";
        if (currentLang == "hk") {
            result = EXX.toFT(EXX.pack[key]["cn"]);
        } else {
            result = EXX.pack[key][currentLang];
        }
        //若不存在语言包或为空则使用默认的方法
        if (result == "" || result == undefined) return key;
        // 替换要输出的变量
        if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
                result = result.replace(eval('/\\[\\$' + i + '\\]/g'), arguments[i]);
            }
        }
        return result;
    } catch (e) {
        return key;
    }
};
// 新的接口通过错误码配置多语言
EXX.Err = function (res) {
    var code = res.code;
    var message = res.message;

    try {
        var result = "";
        var currentLang = LAN; //EXX.getCookie('wlan') || "cn";
        if (currentLang == "hk") {
            result = EXX.toFT(EXX.pack[code]["cn"]);
        } else {
            result = EXX.pack[code][currentLang];
        }
        //若不存在语言包或为空则使用默认的方法
        if (result == "" || result == undefined) {
            return message;
        }
        // 替换要输出的变量
        if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
                result = result.replace(eval('/\\[\\$' + i + '\\]/g'), arguments[i]);
            }
        }
        return result;
    } catch (e) {
        return message;
    }
};