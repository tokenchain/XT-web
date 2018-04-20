require.config({
    waitSeconds: 20,
    baseUrl: '/lib',
    urlArgs: 'ver=' + VERSION,
    paths: {
        'vue': ENV == 'w' ? 'vue/dist/vue' : 'vue/dist/vue.min',
        // 'vue': 'vue/dist/vue',
        //'jquery': 'jquery/dist/jquery.min',
        'text': 'requirejs/text',
        'css': 'requirejs/css',
        'clipboadrd': 'others/clipboard.min',
        'md5': 'others/md5.min',
        'common': '../src/scripts/common',
        'components': '../src/scripts/components',
        // 2018年04月13日->二维码生成
        'qrcode': ENV == 'w' ? 'qrcode/build/qrcode' : 'qrcode/build/qrcode',
    },
    shim: {
        'others/cryptico.min': {},
        'others/encrypt': {},
        'others/wow': {},
        'others/exporting': {
            deps: ['others/highstock']
        },
        'others/highcharts': {
            exports: "Highcharts"
        },
        'others/highstock': {
            exports: "Highstock"
        }
    }
});
//require(['pace'], function(pace){
// pace.start({
//   ajax: false
// })
//});
/*
* 检测IE浏览器版本
* */
function IEVersion() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion == 7) {
            return 7;
        } else if (fIEVersion == 8) {
            return 8;
        } else if (fIEVersion == 9) {
            return 9;
        } else if (fIEVersion == 10) {
            return 10;
        } else {
            return 6;//IE版本<=7
        }
    } else if (isEdge) {
        return 98;//edge
    } else if (isIE11) {
        return 11; //IE11
    } else {
        return 99;//不是ie浏览器
    }
}

/*IE11以下不支持*/
if (IEVersion() < 11) {
    top.location.href = '/sorry'
}

/*
* 合并盘口排序使用hashMap类
* 将数组转换为对象进行合并排序
* */
function hashMap() {
    this.keys = new Array();
    this.data = new Array();
    //添加键值对
    this.put = function (key, value) {
        if (this.data[key] == null) {
            //如键不存在则身【键】数组添加键名
            this.keys.push(key);
        }
        this.data[key] = value;
        //给键赋值
        this.keys.sort(this.sortNumber);

    };
    this.sortNumber = function (a, b) {
        return a - b
    };
    this.removeByValue = function (arr, val) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == val) {
                arr.splice(i, 1);
                break;
            }
        }
        this.keys.sort(this.sortNumber);
    };
    //获取键对应的值
    this.get = function (key) {
        return this.data[key];
    };
    //去除键值，(去除键数据中的键名及对应的值)
    this.remove = function (key) {
        this.removeByValue(this.keys, key);
        this.data[key] = null;
    };
    //判断键值元素是否为空
    this.isEmpty = function () {
        return this.keys.length == 0;
    };
    //获取键值元素大小
    this.size = function () {
        return this.keys.length;
    };
    //遍历Map,执行处理函数. 回调函数 function(key,value,index){..}
    this.each = function (fn) {
        if (typeof fn != 'function') {
            return;
        }
        var len = this.keys.length;
        for (var i = 0; i < len; i++) {
            var k = this.keys[i];
            fn(k, this.data[k], i);
        }
    };
    //获取键值数组,返回键值对象{key,value}的数组
    this.entrys = function () {
        var len = this.keys.length;
        var entrys = new Array(len);
        for (var i = 0; i < len; i++) {
            entrys[i] = {
                key: this.keys[i],
                value: this.data[i]
            };
        }
        return entrys;
    };
}

/*EXX推送实例*/
//var ExxWebSocket = new webSocketClass(DOMAIN_WSS);
var ExxWebSocket = {
    //推送接口
    // wsUrl: DOMAIN_SOCKET + '/websocket',
    // wsUrl: 'ws://192.168.4.137:28080' + '/websocket',
    wsUrl: WEBSOCKET + '/websocket',
    //推送状态变量
    openWebSocket: false,
    //是否开启盘口增量更新（仅推送方式支持）
    openDishUpdata: true,
    //是否开启压缩
    isZip: false,
    //是否开启二进制
    isBinary: false,
    //消息定时器
    sendMsgInterval: null,
    //频道管理器
    channelManage: null
};
//初始化WebSocket
ExxWebSocket.init = function () {
    if (top.location.pathname.indexOf('/trade') == -1 && top.location.pathname.indexOf('/trading') == -1) {
        //屏蔽不需要的WS请求
        return false;
    }
    var _this = this;
    //清空频道管理器
    _this.channelManage = {};
    //清除消息定时器
    window.clearInterval(_this.sendMsgInterval);
    //建立握手
    if ('WebSocket' in window) {
        _this.websocket = new WebSocket(_this.wsUrl);
    } else if ('MozWebSocket' in window) {
        _this.websocket = new MozWebSocket(_this.wsUrl);
    } else {
        _this.openWebSocket = false;
        console.log('Your browser does not support websocket.')
        return false;
    }
    _this.websocket.onopen = function (event) {
        _this.openWebSocket = true;
        _this.onOpen && _this.onOpen(event);

        //离开或者刷新当前页面时
        window.onbeforeunload = function () {
            _this.websocket && _this.websocket.close();
        }
    };
    //消息处理
    _this.websocket.onmessage = function (event) {
        _this.onMessage && _this.onMessage(event);
    };

    _this.websocket.onerror = function (event) {
        _this.openWebSocket = false;
        _this.onError && _this.onError(event);
    };
    _this.websocket.onclose = function (event) {
        _this.openWebSocket = false;
        _this.onClose && _this.onClose(event);
        console.log('websocket closed.')
    };
}
//处理二进制数据
ExxWebSocket.unBinary = function (datas, callback) {
    var doCallback = function (result) {
        //直接处理为json对象
        if (result.indexOf("(") != 0) {
            result = eval("(" + result + ")");
        } else {
            result = eval(result);
        }
        if (typeof callback == 'function') {
            return callback(result);
        } else {
            return result;
        }
    }
    if (datas instanceof Blob) {
        var reader = new FileReader();
        reader.readAsText(datas);
        reader.onloadend = function (evt) {
            if (evt.target.readyState == FileReader.DONE) {
                doCallback(evt.target.result);
            } else {
                doCallback(datas);
            }
        }
    } else {
        doCallback(datas);
    }
}

//发送消息队列
ExxWebSocket.sendMessage = function () {
    var _this = this;
    // console.log(_this.websocket.readyState, _this.websocket.OPEN, _this.openWebSocket)

    for (var key in _this.channelManage) {
        var channel = _this.channelManage[key];
        //如果消息不为空且未发送过的频道才推送
        if (channel.message != "" && !channel.sended) {
            //加入自定义参数
            channel.message.isZip = _this.isZip;
            channel.message.binary = _this.isBinary;
            //发送消息
            _this.websocket.send(JSON.stringify(channel.message));
            //console.log('send message succses ' + JSON.stringify(channel.message));
            //标识为已处理
            channel.sended = true;
        }
    }
    if (!_this.openWebSocket) {
        console.log('reconnect websocke.', _this.openWebSocket)
        _this.init();
    }
}
ExxWebSocket.onOpen = function (event) {
    var _this = this;
    console.log('websocket init success.')

    _this.sendMessageParam();
};

//发送消息参数到服务端
ExxWebSocket.sendMessageParam = function (event) {
    var _this = this;
    //发送K线参数
    var klineParam = {
        dataType: EXX.appTradePro.klineData,
        dataSize: 1000, //如需修改，还要改时间显示周期切换那里
        action: "ADD"
    };
    _this.websocket.send(JSON.stringify(klineParam));

    //发送委托盘口参数
    var entrustParam = {
        dataType: EXX.appTradePro.entrustData,
        dataSize: 50,
        action: "ADD"
    };
    _this.websocket.send(JSON.stringify(entrustParam));

    //发送交易参数
    var tradeParam = {
        dataType: EXX.appTradePro.tradeData,
        dataSize: 20,
        action: "ADD"
    };
    _this.websocket.send(JSON.stringify(tradeParam));

    if (!_this.openWebSocket) {
        console.log('reconnect websocke.', _this.openWebSocket)
        _this.init();
    }
}

ExxWebSocket.onMessage = function (event) {
    //处理收到的数据
    //console.log(event.data);
    var datas;
    try {
        datas = JSON.parse('{"data":' + event.data + '}');
    } catch (e) {
        return false;
    }

    // console.log(datas);

    var _this = this;
    // _this.unBinary(datas, function (json) {
    //     //console.log(json);
    //     _this.dealMessage(json);
    // })

    //如果推送的是单条数据，添加一层数组
    if (typeof datas.data[0] != 'object') {
        var oriData = datas.data;
        datas.data = [];
        datas.data.push(oriData);
    }

    var dataHead = datas.data[0][0];
    var type; //1 K线，2 委托盘口，3 交易记录
    if (dataHead == 'K') {
        type = 1;
    } else if (dataHead == 'AE' || dataHead == 'E') {
        //AE 全量委托，E增量委托
        type = 2;
    } else if (dataHead == 'T') {
        type = 3;
    }

    _this.dealMessageHandle(datas, type);
}

ExxWebSocket.dealMessageHandle = function (data, type) {
    if (type == 1) {
        var ifr = document.getElementById('marketFrame');
        var win = ifr.window || ifr.contentWindow;

        if (!win || !win.kline) {
            return false;
        }

        var result = transKlineData(data.data);

        win.updateKlineData(result);
    } else if (type == 2) {
        var result = transDishData(data.data);

        EXX.appTradePro.mixDishArray(result);
    } else if (type == 3) {
        // console.log('进入type3')
        var result = transTradeData(data.data);
        // EXX.appTradePro.doDealRecord(getTempLastTrans());
        // console.log(result)
        EXX.appTradePro.doDealRecord(result);
    }
}

//格式化K线数据
function transKlineData(oldData) {
    var ifr = document.getElementById('marketFrame');
    var win = ifr.window || ifr.contentWindow;

    var result = {};

    var currentMarket = EXX.appTradePro.currentMarket;
    // result.channel = '4_cny_kline_1day';
    // result.channel = kline.symbol.replace('_', '') + "_" + (kline.money || kline.symbol.split('_')[1]) + "_kline_" + GLOBAL_VAR.time_type;
    result.channel = currentMarket.replace('_', '') + "_" + (win.kline.money || currentMarket.split('_')[1]) + "_kline_" + win.GLOBAL_VAR.time_type;
    result.isSuc = true;
    result.des = '';
    result.datas = {};
    result.datas.data = [];

    //根据时间倒序
    oldData = oldData.reverse();

    //获取当前K线单位
    var unit = Methods.getCookie(ENV + 'kassist');
    // 当地法币
    var localCoin = EXX.appTradePro.localCoin;
    // 当前市场币对美元汇率(当辅助价格接口返回延迟,终止操作)
    var usd_krate;
    if (EXX.appTradePro.assistPrice) {
        usd_krate = EXX.appTradePro.assistPrice.usd[EXX.appTradePro.money];
    } else {
        return false;
    }

    //时间戳, 开盘数据, 最高价, 最低价, 收盘价, 成交量
    //数据类型, 市场ID, 币种信息, 时间戳, 开盘数据, 最高价, 最低价, 收盘价, 成交量, 涨跌幅度, 美元汇率, K线周期, 是否经过转换
    oldData.forEach(function (item, index) {
        var tmpdata = [];
        tmpdata[0] = Methods.math.multiply(parseInt(item[3]), 1000);

        var currRate = 1.0; //默认none 汇率为1
        if (unit == localCoin) {
            // 法币汇率
            currRate = parseFloat(item[10]);
        } else if (unit == 'usd') {
            currRate = usd_krate;
        }

        tmpdata[1] = parseFloat(Methods.math.format(parseFloat(item[4]) * currRate, {precision: 14}));
        tmpdata[2] = parseFloat(Methods.math.format(parseFloat(item[5]) * currRate, {precision: 14}));
        tmpdata[3] = parseFloat(Methods.math.format(parseFloat(item[6]) * currRate, {precision: 14}));
        tmpdata[4] = parseFloat(Methods.math.format(parseFloat(item[7]) * currRate, {precision: 14}));

        tmpdata[5] = parseFloat(item[8]);

        result.datas.data[index] = tmpdata;
    });

    return result;
}

//格式化盘口数据
function transDishData(oldData) {
    // console.log(oldData)
    var result = {};
    result.channel = EXX.appTradePro.currentMarket.replace('_', '') + "_" + EXX.appTradePro.assistCoin + "_depth";
    result.asks = [];
    result.bids = [];

    var dataType = oldData[0][0];
    if (dataType == 'AE') {
        for (var i = 0; i < oldData.length; i++) {
            // console.log(oldData[i])
            // result.asks.concat(oldData[i][4].asks);
            // result.bids.concat(oldData[i][5].bids);
            result.asks = oldData[i][4].asks;
            result.bids = oldData[i][5].bids;

            /*if (oldData[i][4].asks.length > 0) {
                result.currentPrice = oldData[i][4].asks[0][0]; //当前价格 该货币当前价格，字段暂无
            } else {
                result.currentPrice = 0;
            }*/
        }
    } else if (dataType == 'E') {
        //增量委托数据
        var entrustType = oldData[0][4]; //买卖类型，BID, ASK
        var entrustData = [];
        entrustData[0] = oldData[0][5]; //价格
        entrustData[1] = oldData[0][6]; //量

        if (entrustType == 'ASK') {
            result.asks.push(entrustData);
        } else if (entrustType == 'BID') {
            result.bids.push(entrustData);
        }
    }

    // for(var i in oldData){
    //     // [数据类型, 市场ID, 时间戳, 币种信息, 买卖类型, 价格, 量]
    //        [数据类型, 市场ID, 币种信息, 时间戳, // asks:(卖价)[ // [价格, 量] // ], // bids(买价)[ // [价格, 量] // ] // ]
    //     console.log(oldData[i])
    //     result.asks.concat(oldData[i][4].asks);
    //     result.bids.concat(oldData[i][5].bids);
    //     result.currentPrice = oldData[i][4].asks[0][0]; //当前价格 字段暂无
    // }


    // console.log(result)
    return result;
}

//格式化交易数据
function transTradeData(oldData) {
    //根据时间倒序
    oldData = oldData.reverse();

    var result = {};
    result.dataType = "lastTrades";
    result.no = parseFloat(oldData[0][2]); // 目前为 时间戳
    result.data = [];
    result.channel = EXX.appTradePro.currentMarket.replace('_', '') + "_" + EXX.appTradePro.assistCoin + "_lasttrades";

    for (var i = 0; i < oldData.length; i++) {
        //      ["T","92","1523601554","ETH_QC","ask","12.00000000","0.9800"]
        //new : [数据类型, 市场ID, 币种信息, 时间戳, 买卖类型, 价格, 量]*
        var trade = {};
        trade.amount = parseFloat(oldData[i][6]); // 金额
        trade.price = parseFloat(oldData[i][5]);  // 价格
        trade.tid = parseFloat(oldData[i][2]); //交易id? 目前为 时间戳
        // trade.tid = oldData[i][3];
        trade.date = parseFloat(oldData[i][2]);   // 日期时间戳

        if (oldData[i][4] == 'ask') {
            trade.trade_type = 'ask';
            trade.type = 'sell';
        } else {
            trade.trade_type = 'bid';
            trade.type = 'buy';
        }
        result.data[i] = trade;
    }

    return result;
}

// 初始化
// ExxWebSocket.init();
