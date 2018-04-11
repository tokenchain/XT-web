require.config({
  waitSeconds : 20,
  baseUrl: '/lib',
  urlArgs: 'ver=' + VERSION,
  paths: {
    //'vue': ENV == 'w' ? 'vue/dist/vue' : 'vue/dist/vue.min',
    'vue': 'vue/dist/vue',
    //'jquery': 'jquery/dist/jquery.min',
    'text': 'requirejs/text',
    'css': 'requirejs/css',
    'clipboadrd': 'others/clipboard.min',
    'md5': 'others/md5.min',
    'common': '../src/scripts/common',
    'components': '../src/scripts/components'
  },
  shim: {
    'others/cryptico.min': {
    },
    'others/encrypt': {
    },
    'others/wow': {
    },
    'others/exporting': {
      deps : ['others/highstock']
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
    if(isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if(fIEVersion == 7) {
            return 7;
        } else if(fIEVersion == 8) {
            return 8;
        } else if(fIEVersion == 9) {
            return 9;
        } else if(fIEVersion == 10) {
            return 10;
        } else {
            return 6;//IE版本<=7
        }
    } else if(isEdge) {
        return 98;//edge
    } else if(isIE11) {
        return 11; //IE11
    }else{
        return 99;//不是ie浏览器
    }
}
/*IE11以下不支持*/
if(IEVersion() < 11){
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
    this.put = function(key, value) {
        if (this.data[key] == null ) {
            //如键不存在则身【键】数组添加键名
            this.keys.push(key);
        }
        this.data[key] = value;
        //给键赋值
        this.keys.sort(this.sortNumber);

    };
    this.sortNumber = function(a, b){
        return a - b
    };
    this.removeByValue = function(arr, val) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == val) {
                arr.splice(i, 1);
                break;
            }
        }
        this.keys.sort(this.sortNumber);
    };
    //获取键对应的值
    this.get = function(key) {
        return this.data[key];
    };
    //去除键值，(去除键数据中的键名及对应的值)
    this.remove = function(key) {
        this.removeByValue(this.keys, key);
        this.data[key] = null ;
    };
    //判断键值元素是否为空
    this.isEmpty = function() {
        return this.keys.length == 0;
    };
    //获取键值元素大小
    this.size = function() {
        return this.keys.length;
    };
    //遍历Map,执行处理函数. 回调函数 function(key,value,index){..}
    this.each = function(fn) {
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
    this.entrys = function() {
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
    openWebSocket : false,
    //是否开启盘口增量更新（仅推送方式支持）
    openDishUpdata : true,
    //是否开启压缩
    isZip : false,
    //是否开启二进制
    isBinary : false,
    //消息定时器
    sendMsgInterval : null,
    //频道管理器
    channelManage : null
};
    //初始化WebSocket
    ExxWebSocket.init = function () {
        if(top.location.pathname.indexOf('/trade') == -1 && top.location.pathname.indexOf('/trading') == -1) {
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
        _this.websocket.onopen = function(event) {
            _this.openWebSocket = true;
            _this.onOpen && _this.onOpen(event);

            //离开或者刷新当前页面时
            window.onbeforeunload =function() {
                _this.websocket && _this.websocket.close();
            }
        };
        //消息处理
        _this.websocket.onmessage = function(event) {
            _this.onMessage && _this.onMessage(event);
        };

        _this.websocket.onerror = function(event) {
            _this.openWebSocket = false;
            _this.onError && _this.onError(event);
        };
        _this.websocket.onclose = function(event) {
            _this.openWebSocket = false;
            _this.onClose && _this.onClose(event);
        };
    }
    //处理二进制数据
    ExxWebSocket.unBinary = function (datas, callback) {
        var doCallback = function (result) {
            //直接处理为json对象
            if(result.indexOf("(") != 0){
                result = eval("("+result+")");
            }else{
                result = eval(result);
            }
            if(typeof callback == 'function'){
                return callback(result);
            }else{
                return result;
            }
        }
        if (datas instanceof Blob) {
            var reader = new FileReader();
            reader.readAsText(datas);
            reader.onloadend  = function(evt){
                if(evt.target.readyState == FileReader.DONE){
                    doCallback(evt.target.result);
                }else{
                    doCallback(datas);
                }
            }
        } else {
            doCallback(datas);
        }
    }
    //处理返回数据的方法 暂弃用
    ExxWebSocket.dealMessage = function (json, type) {
        var _this = this.channelManage;
        var result = json;
        var channel = result.channel;//推送返回频道处理
        if(!channel){
            channel = result[0].channel;
        }
        /**
         * 反向处理回调方法  回调方法写在调用接口的地方
         * 交易记录键值：dealRecord
         * 盘口数据键值：dishData
         * 委托记录键值：entrustRecord
         * K线数据键值：klineData
         */
        if(channel.indexOf("_cny_lasttrades") != -1){
            //console.log(channel);
            _this['dealRecord'].method && _this['dealRecord'].method(result);
        }
        if(channel.indexOf("_cny_depth") != -1){
            //console.log(channel);
            _this['dishData'].method && _this['dishData'].method(result);
        }
        if(channel.indexOf("_kline_") != -1){
            var ifr = document.getElementById('marketFrame');
            var win = ifr.window || ifr.contentWindow;
            win.updateKlineData(result); // 调用iframe中的a函数
            //console.log(channel);
            //_this['klineData'].method && _this['klineData'].method(result);
        }
    }
    //发送消息队列
    ExxWebSocket.sendMessage = function () {
        var _this = this;
        // console.log(_this.websocket.readyState, _this.websocket.OPEN, _this.openWebSocket)

        for(var key in _this.channelManage){
            var channel = _this.channelManage[key];
            //如果消息不为空且未发送过的频道才推送
            if(channel.message != "" && !channel.sended){
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
        if(!_this.openWebSocket) {
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
            dataSize: 1000,
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

        if(!_this.openWebSocket) {
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
        } catch(e) {
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

            var result = transKlineData(data.data);

            win.updateKlineData(result);
        } else if (type == 2) {
            var result = transDishData(data.data);

            EXX.appTradePro.mixDishArray(result);
        } else if (type == 3) {
            // console.log('进入type3')
            var result =  transTradeData(data.data);
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
        // result.channel = '4_cny_kline_1day';
        // result.channel = kline.symbol.replace('_', '') + "_" + (kline.money || kline.symbol.split('_')[1]) + "_kline_" + GLOBAL_VAR.time_type;
        result.channel = EXX.appTradePro.currentMarket.replace('_', '') + "_" + EXX.appTradePro.assistCoin + "_kline_" + win.GLOBAL_VAR.time_type;
        result.isSuc = true;
        result.des = '';
        result.datas = {};
        result.datas.data = [];

        //根据时间倒序
        oldData = oldData.reverse();

        //时间戳, 开盘数据, 最高价, 最低价, 收盘价, 成交量
        //数据类型, 市场ID, 币种信息, 时间戳, 开盘数据, 最高价, 最低价, 收盘价, 成交量, 涨跌幅度, 美元汇率, K线周期, 是否经过转换

        oldData.forEach(function (item, index) {
            var tmpdata = [];
            tmpdata[0] = parseInt(item[3]) * 1000;
            tmpdata[1] = parseFloat(item[4]);
            tmpdata[2] = parseFloat(item[5]);
            tmpdata[3] = parseFloat(item[6]);
            tmpdata[4] = parseFloat(item[7]);
            tmpdata[5] = parseFloat(item[8]);

            result.datas.data[index] = tmpdata;
        });

        return result;
    }

    //格式化盘口数据
    function transDishData(oldData) {
        // console.log(oldData)
        var ifr = document.getElementById('marketFrame');
        var win = ifr.window || ifr.contentWindow;
        var result = {};
        result.channel = EXX.appTradePro.currentMarket + "_" + EXX.appTradePro.assistCoin + "_kline_" + win.GLOBAL_VAR.time_type;
        result.asks = [];
        result.bids = [];

        var dataType = oldData[0][0];
        if (dataType == 'AE') {
            for (var i = 0; i < oldData.length; i++){
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
        result.dataType="lastTrades";
        result.no = oldData[0][2];
        result.data = [];
        result.channel = "";

        for(var i in oldData){
            //      ["T", "90", "1522317163", "ZB_", "ask", "7.94000000", "8.0200"]
            //new : [数据类型, 市场ID, 币种信息, 时间戳, 买卖类型, 价格, 量]*
            var trade = {};
            trade.amount = oldData[i][6]; // amount
            trade.price = oldData[i][5];  // amount
            trade.tid = oldData[i][3];
            trade.date = oldData[i][2];   // amount

            if(oldData[i][4] =='ask'){
                trade.trade_type = 'ask';
                trade.type = 'sell';
            }else{
                trade.trade_type = 'bid';
                trade.type = 'buy';
            }
            result.data[i] = trade;
        }

        return result;
    }

    // 初始化
    // ExxWebSocket.init();
