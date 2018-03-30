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
    wsUrl: 'ws://192.168.4.89:28080' + '/websocket',
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
    //处理返回数据的方法
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
        var _this = this ;
        console.log('websocket init success.')
        //处理消息队列的定时器
        // _this.sendMsgInterval = setInterval(function () {
        //     _this.sendMessage();
        // },1000);
        _this.sendMessageParam();
    };

    //发送消息参数到服务端
    ExxWebSocket.sendMessageParam = function (event) {
        var _this = this;
        //发送K线参数
        var klineParam = {
            dataType: EXX.appTradePro.klineData,
            dataSize: 100,
            action: "ADD"
        };
        _this.websocket.send(JSON.stringify(klineParam));

        //发送委托盘口参数
        var entrustParam = {
            dataType: EXX.appTradePro.entrustData,
            dataSize: 1,
            action: "ADD"
        };
        _this.websocket.send(JSON.stringify(entrustParam));

        //发送交易参数
        var tradeParam = {
            dataType: EXX.appTradePro.tradeData,
            dataSize: 1,
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

        var _this = this;
        // _this.unBinary(datas, function (json) {
        //     //console.log(json);
        //     _this.dealMessage(json);
        // })
        var dataHead = datas.data[0][0];
        var type; //1 K线，2 委托盘口，3 交易记录
        if (dataHead == 'K') {
            type = 1;
        } else if (dataHead == 'AE') {
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

            var result = transData(data);

            win.updateKlineData(result);
        } else if (type == 2) {
            var result = transDish(data.data);
            // var result = {"asks":[[0.001941,9.72],[0.001970,0],[0.001981,1.31],[0.001994,11.10],[0.002029,0],[0.002239,33.10],[0.002249,10.54],[0.002715,0],[0.002851,5.00],[0.002950,29.30],[0.002987,6.10],[0.003007,1.60],[0.004313,4.22]],"currentPrice":0.001922,"bids":[[0.001264,1.90],[0.001266,4.90],[0.001267,0],[0.001276,4.20],[0.001856,0],[0.001858,0],[0.001859,1.17],[0.001861,4.38],[0.001881,15.30]],"channel":"qtumbtc_cny_depth"};

            EXX.appTradePro.mixDishArray(result);
        } else if (type == 3) {
            // console.log('进入type3')
            var result =  transTradeData(data.data)
            // EXX.appTradePro.doDealRecord(getTempLastTrans());
            // console.log(result)
            EXX.appTradePro.doDealRecord(result);
        }
    }

function getTempLastTrans(){
    return {
        "dataType":"lastTrades",
        "no":274717,
        "data":[
            {"amount":1.37,"price":15.35,"tid":25679134,"type":"sell","date":1522264039,"trade_type":"ask"}
            ,{"amount":1.81,"price":15.35,"tid":25679421,"type":"sell","date":1522264186,"trade_type":"ask"},{"amount":7.59,"price":15.37,"tid":25679471,"type":"sell","date":1522264206,"trade_type":"ask"},{"amount":4.49,"price":15.36,"tid":25679523,"type":"sell","date":1522264227,"trade_type":"ask"},{"amount":2.88,"price":15.33,"tid":25679546,"type":"sell","date":1522264234,"trade_type":"ask"},{"amount":2.28,"price":15.38,"tid":25679547,"type":"sell","date":1522264235,"trade_type":"ask"},{"amount":2.52,"price":15.34,"tid":25679548,"type":"sell","date":1522264235,"trade_type":"ask"},{"amount":1.64,"price":15.33,"tid":25679549,"type":"sell","date":1522264235,"trade_type":"ask"},{"amount":14.5,"price":15.38,"tid":25679580,"type":"sell","date":1522264251,"trade_type":"ask"},{"amount":2.87,"price":15.34,"tid":25679809,"type":"sell","date":1522264334,"trade_type":"ask"},{"amount":7.83,"price":15.34,"tid":25679894,"type":"sell","date":1522264370,"trade_type":"ask"},{"amount":0.62,"price":15.38,"tid":25679928,"type":"sell","date":1522264387,"trade_type":"ask"},{"amount":0.69,"price":15.36,"tid":25680001,"type":"sell","date":1522264413,"trade_type":"ask"},{"amount":0.86,"price":15.33,"tid":25680060,"type":"sell","date":1522264441,"trade_type":"ask"},{"amount":0.7,"price":15.34,"tid":25680270,"type":"sell","date":1522264538,"trade_type":"ask"},{"amount":12.4,"price":15.37,"tid":25680412,"type":"sell","date":1522264580,"trade_type":"ask"},{"amount":3.96,"price":15.37,"tid":25680494,"type":"sell","date":1522264607,"trade_type":"ask"},{"amount":7.22,"price":15.37,"tid":25680533,"type":"sell","date":1522264617,"trade_type":"ask"},{"amount":3.43,"price":15.38,"tid":25680637,"type":"sell","date":1522264644,"trade_type":"ask"},{"amount":11.64,"price":15.38,"tid":25680826,"type":"sell","date":1522264733,"trade_type":"ask"},{"amount":5.13,"price":15.37,"tid":25680964,"type":"sell","date":1522264782,"trade_type":"ask"},{"amount":10.98,"price":15.33,"tid":25681038,"type":"sell","date":1522264807,"trade_type":"ask"},{"amount":4.23,"price":15.38,"tid":25681073,"type":"sell","date":1522264825,"trade_type":"ask"},{"amount":0.82,"price":15.37,"tid":25681098,"type":"sell","date":1522264841,"trade_type":"ask"},{"amount":18.49,"price":15.33,"tid":25681187,"type":"sell","date":1522264879,"trade_type":"ask"},{"amount":3.52,"price":15.36,"tid":25681203,"type":"sell","date":1522264887,"trade_type":"ask"},{"amount":3.25,"price":15.37,"tid":25681405,"type":"sell","date":1522264963,"trade_type":"ask"},{"amount":15.67,"price":15.36,"tid":25681436,"type":"sell","date":1522264975,"trade_type":"ask"},{"amount":7.3,"price":15.35,"tid":25681592,"type":"sell","date":1522265031,"trade_type":"ask"},{"amount":1.06,"price":15.34,"tid":25681600,"type":"sell","date":1522265036,"trade_type":"ask"},{"amount":4.2,"price":15.33,"tid":25681635,"type":"sell","date":1522265071,"trade_type":"ask"},{"amount":0.84,"price":15.37,"tid":25681636,"type":"sell","date":1522265099,"trade_type":"ask"},{"amount":0.83,"price":15.35,"tid":25681637,"type":"sell","date":1522265122,"trade_type":"ask"},{"amount":1.65,"price":15.34,"tid":25681639,"type":"sell","date":1522265152,"trade_type":"ask"},{"amount":15.65,"price":15.38,"tid":25681700,"type":"sell","date":1522265173,"trade_type":"ask"},{"amount":13.46,"price":15.35,"tid":25681725,"type":"sell","date":1522265183,"trade_type":"ask"},{"amount":1.21,"price":15.34,"tid":25681784,"type":"sell","date":1522265207,"trade_type":"ask"},{"amount":2.86,"price":15.37,"tid":25681893,"type":"sell","date":1522265256,"trade_type":"ask"},{"amount":5.02,"price":15.34,"tid":25681930,"type":"sell","date":1522265285,"trade_type":"ask"},{"amount":0.63,"price":15.35,"tid":25681931,"type":"sell","date":1522265304,"trade_type":"ask"},{"amount":2.86,"price":15.38,"tid":25681963,"type":"sell","date":1522265326,"trade_type":"ask"},{"amount":0.77,"price":15.36,"tid":25682002,"type":"sell","date":1522265344,"trade_type":"ask"},{"amount":0.97,"price":15.36,"tid":25682224,"type":"sell","date":1522265478,"trade_type":"ask"},{"amount":0.06,"price":15.33,"tid":25682341,"type":"sell","date":1522265498,"trade_type":"ask"},{"amount":8.76,"price":15.33,"tid":25682628,"type":"sell","date":1522265594,"trade_type":"ask"},{"amount":0.23,"price":15.36,"tid":25682727,"type":"sell","date":1522265646,"trade_type":"ask"},{"amount":0.03,"price":15.36,"tid":25682815,"type":"sell","date":1522265682,"trade_type":"ask"},{"amount":1.56,"price":15.38,"tid":25682876,"type":"sell","date":1522265738,"trade_type":"ask"},{"amount":2.54,"price":15.35,"tid":25683011,"type":"sell","date":1522265783,"trade_type":"ask"},{"amount":15.16,"price":15.36,"tid":25683299,"type":"sell","date":1522265869,"trade_type":"ask"}]
        ,"channel":"qtumusdt_cny_lasttrades"};
}

    function transDish(oldData) {
        // console.log(oldData)
        var ifr = document.getElementById('marketFrame');
        var win = ifr.window || ifr.contentWindow;
        var result = {};
        result.channel = EXX.appTradePro.currentMarket + "_" + EXX.appTradePro.assistCoin + "_kline_" + win.GLOBAL_VAR.time_type;
        result.asks = [];
        result.bids = [];

        for (var i = 0; i < oldData.length; i++){
            // console.log(oldData[i])
            // result.asks.concat(oldData[i][4].asks);
            // result.bids.concat(oldData[i][5].bids);
            result.asks = oldData[i][4].asks;
            result.bids = oldData[i][5].bids;
            result.currentPrice = oldData[i][4].asks[0][0]; //当前价格 字段暂无
        }
        // for(var i in oldData){
        //     // [数据类型, 市场ID, 时间戳, 币种信息, 买卖类型, 价格, 量]
        //     console.log(oldData[i])
        //     result.asks.concat(oldData[i][4].asks);
        //     result.bids.concat(oldData[i][5].bids);
        //     result.currentPrice = oldData[i][4].asks[0][0]; //当前价格 字段暂无
        // }


        console.log(result)
        return result;
    }

    function transData(oldData) {
        var ifr = document.getElementById('marketFrame');
        var win = ifr.window || ifr.contentWindow;

        var result = {};
        // result.channel = '4_cny_kline_1day';
        // result.channel = kline.symbol.replace('_', '') + "_" + (kline.money || kline.symbol.split('_')[1]) + "_kline_" + GLOBAL_VAR.time_type;
        result.channel = EXX.appTradePro.currentMarket + "_" + EXX.appTradePro.assistCoin + "_kline_" + win.GLOBAL_VAR.time_type;
        result.isSuc = true;
        result.des = '';
        result.datas = {};
        result.datas.data = [];

        //时间戳, 开盘数据, 最高价, 最低价, 收盘价, 成交量

        //数据类型, 市场ID, 币种信息, 时间戳, 开盘数据, 最高价, 最低价, 收盘价, 成交量, 涨跌幅度, 美元汇率, K线周期, 是否经过转换

        oldData.data.forEach(function (item, index) {
            var tmpdata = [];
            tmpdata[0] = parseFloat(item[3]);
            tmpdata[1] = parseFloat(item[4]);
            tmpdata[2] = parseFloat(item[5]);
            tmpdata[3] = parseFloat(item[6]);
            tmpdata[4] = parseFloat(item[7]);
            tmpdata[5] = parseFloat(item[8]);

            result.datas.data[index] = tmpdata;
        });

        // oldData.data.forEach(function (item, index) {
        //
        //     var radom = parseInt(10*Math.random());
        //
        //     var tmpdata = [];
        //     tmpdata[0] = parseFloat(item[3]);
        //     tmpdata[1] = parseFloat(item[4]) + radom;
        //     tmpdata[2] = parseFloat(item[5]) + radom;
        //     tmpdata[3] = 0 -item[6] + radom;
        //     tmpdata[4] = parseFloat(item[7]) + radom;
        //     tmpdata[5] = parseFloat(item[8]) +radom*100;
        //
        //     result.datas.data[index] = tmpdata;
        // });

        // result.datas.data = getTemp();
        return result;
    }

function transTradeData(oldData) {
    var result = {};
    result.dataType="lastTrades";
    result.no = oldData[1][2];
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

    // function getTemp(){
    //     return [[1521665100000,19.475,19.475,19.42,19.428,371.9],[1521666000000,19.439,19.503,19.438,19.503,473.97],[1521666960000,19.515,19.577,19.515,19.567,349.43],[1521667800000,19.572,19.595,19.529,19.541,392.3],[1521668700000,19.539,19.539,19.511,19.536,461.01],[1521669660000,19.513,19.53,19.492,19.524,456.4],[1521670500000,19.53,19.53,19.494,19.494,394.3],[1521671400000,19.489,19.489,19.341,19.341,267.77],[1521672300000,19.352,19.36,19.074,19.074,531.84],[1521673200000,19.066,19.066,18.851,18.918,224.03],[1521674100000,18.927,18.989,18.831,18.968,411.21],[1521675000000,18.941,19.329,18.901,19.329,246.23],[1521675900000,19.329,19.526,19.302,19.508,359.27],[1521676800000,19.63,19.784,19.63,19.777,318.49],[1521677700000,19.782,19.853,19.782,19.853,372.63],[1521678600000,19.866,19.955,19.866,19.955,335.62],[1521679500000,19.944,20.073,19.905,20.07,378.6],[1521680400000,20.07,20.091,19.887,19.903,287.05],[1521681300000,19.893,19.939,19.893,19.933,222.41],[1521682260000,19.897,19.995,19.84,19.967,612.75],[1521683100000,19.895,20.016,19.858,19.983,219.81],[1521684000000,19.946,20.1,19.927,20.1,337.24],[1521684900000,20.091,20.108,20.023,20.103,188.45],[1521685800000,20.067,20.127,20.04,20.067,522.29],[1521686700000,20.067,20.375,20.016,20.049,170.96],[1521687600000,20.183,20.201,20.008,20.132,366.73],[1521688500000,20.104,20.182,20.049,20.091,453.57],[1521689400000,20.052,20.108,19.77,19.861,384.48],[1521690300000,19.843,19.843,19.721,19.835,443.16],[1521691200000,19.776,19.854,19.662,19.662,317.3],[1521692100000,19.665,19.697,19.627,19.633,278.23],[1521693000000,19.633,19.633,19.593,19.593,525.78],[1521693900000,19.605,19.653,19.605,19.653,394.26],[1521694800000,19.65,19.681,19.65,19.673,450.64],[1521695700000,19.673,19.689,19.658,19.668,209.65],[1521696600000,19.67,19.674,19.65,19.65,410.64],[1521697500000,19.65,19.65,19.598,19.617,584.08],[1521698400000,19.617,19.653,19.602,19.641,318.46],[1521699300000,19.65,19.652,19.598,19.612,376.21],[1521700200000,19.603,19.631,19.603,19.626,442.38],[1521701100000,19.626,19.63,19.598,19.604,390.06],[1521702000000,19.601,19.617,19.587,19.61,281.07],[1521702960000,19.597,19.597,19.298,19.343,349.81],[1521703860000,19.346,19.396,19.316,19.316,214.19],[1521704700000,19.352,19.431,19.352,19.416,444.22],[1521705600000,19.437,19.448,19.228,19.283,203.62],[1521706500000,19.388,19.435,19.263,19.362,214.6],[1521707400000,19.359,19.483,19.359,19.383,378.71],[1521708300000,19.465,19.479,19.355,19.361,487.79],[1521709200000,19.426,19.545,19.426,19.489,270.15],[1521710100000,19.491,19.491,19.179,19.179,384.94],[1521711000000,19.186,19.186,18.963,18.967,532.0],[1521711900000,18.943,19.042,18.927,19.036,172.93],[1521712800000,19.045,19.045,18.803,18.811,276.44],[1521713760000,18.788,18.788,18.518,18.518,329.0],[1521714600000,18.491,18.707,18.486,18.706,605.16],[1521715500000,18.725,18.794,18.663,18.744,341.12],[1521716400000,18.758,18.784,18.74,18.74,341.28],[1521717300000,18.713,18.713,18.644,18.694,528.06],[1521718200000,18.694,18.729,18.677,18.68,557.76],[1521719100000,18.701,18.713,18.5,18.595,370.63],[1521720000000,18.491,18.54,18.367,18.497,506.06],[1521720900000,18.497,18.574,18.497,18.574,415.47],[1521721860000,18.675,18.738,18.611,18.733,445.57],[1521722880000,18.752,18.848,18.742,18.808,140.19],[1521723600000,18.8,18.8,18.741,18.782,454.24],[1521724500000,18.789,18.797,18.753,18.756,281.71],[1521725400000,18.748,18.78,18.744,18.762,425.24],[1521726300000,18.741,18.741,18.447,18.471,362.06],[1521727380000,18.514,18.522,18.314,18.314,276.11],[1521728100000,18.298,18.361,18.159,18.202,381.92],[1521729120000,18.321,18.321,18.091,18.199,264.29],[1521729900000,18.104,18.231,17.942,18.045,436.87],[1521730800000,18.046,18.185,17.943,17.985,342.57],[1521731700000,17.984,18.24,17.984,18.24,290.41],[1521732600000,18.227,18.279,18.201,18.227,479.05],[1521733500000,18.227,18.296,18.21,18.296,704.56],[1521734400000,18.299,18.59,18.299,18.569,291.01],[1521735360000,18.557,18.573,18.546,18.573,474.31],[1521736200000,18.573,18.573,18.447,18.465,523.39],[1521737100000,18.497,18.498,18.446,18.447,431.8],[1521738000000,18.454,18.478,18.448,18.448,209.08],[1521738900000,18.431,18.58,18.42,18.58,369.49],[1521739800000,18.571,18.584,18.552,18.584,421.27],[1521740700000,18.573,18.696,18.573,18.69,371.67],[1521741600000,18.69,18.707,18.68,18.68,452.41],[1521742500000,18.68,18.695,18.623,18.665,498.87],[1521743520000,18.667,18.667,18.628,18.645,292.06],[1521744300000,18.638,18.665,18.625,18.665,346.02],[1521745200000,18.662,18.703,18.647,18.678,484.42],[1521746100000,18.687,18.713,18.67,18.686,433.83],[1521747000000,18.668,18.677,18.504,18.526,401.99],[1521747900000,18.538,18.566,18.503,18.566,483.82],[1521748800000,18.558,18.566,18.504,18.512,411.07],[1521749700000,18.504,18.53,18.492,18.512,464.64],[1521750600000,18.51,18.558,18.51,18.547,329.52],[1521751500000,18.54,18.562,18.536,18.554,292.22],[1521752400000,18.545,18.545,18.43,18.439,532.06],[1521753300000,18.439,18.57,18.43,18.57,582.98],[1521754200000,18.574,18.6,18.567,18.59,435.91],[1521755100000,18.585,18.587,18.365,18.526,404.22],[1521756000000,18.537,18.67,18.406,18.653,458.6],[1521756900000,18.601,19.201,18.582,19.02,479.65],[1521757800000,19.102,19.822,19.102,19.748,609.16],[1521758700000,19.757,19.779,19.436,19.505,714.56],[1521759660000,19.498,19.642,19.454,19.642,402.64],[1521760560000,19.587,19.662,19.55,19.55,444.77],[1521761400000,19.605,19.605,19.441,19.441,381.14],[1521762360000,19.415,19.458,19.408,19.458,487.61],[1521763200000,19.471,19.471,19.385,19.392,292.7],[1521764100000,19.414,19.414,19.247,19.258,497.11],[1521765060000,19.259,19.259,19.161,19.199,179.02],[1521765900000,19.11,19.2,19.1,19.152,274.65],[1521766800000,19.045,19.045,18.849,18.886,417.68],[1521767700000,18.896,18.896,18.818,18.818,377.23],[1521768600000,18.763,18.836,18.763,18.816,461.29],[1521769500000,18.816,18.852,18.814,18.839,445.46],[1521770400000,18.82,18.841,18.718,18.718,461.71],[1521771300000,18.718,18.718,18.114,18.116,473.51],[1521772200000,18.119,18.197,18.069,18.13,449.75],[1521773100000,18.115,18.25,18.066,18.248,352.9],[1521774120000,18.256,18.256,18.181,18.186,349.75],[1521774900000,18.186,18.191,18.001,18.105,246.96],[1521775800000,18.1,18.324,18.07,18.274,561.78],[1521776700000,18.291,18.315,18.221,18.253,289.03],[1521777600000,18.288,18.398,18.248,18.394,194.38],[1521778500000,18.377,18.433,18.321,18.342,375.64],[1521779460000,18.371,18.39,18.315,18.346,394.24],[1521780300000,18.287,18.348,18.24,18.263,411.77],[1521781200000,18.261,18.289,18.218,18.28,235.18],[1521782100000,18.305,18.305,18.186,18.214,355.91],[1521783000000,18.197,18.276,18.147,18.268,501.08],[1521783900000,18.173,18.267,18.129,18.219,388.84],[1521784800000,18.239,18.432,18.239,18.392,380.75],[1521785700000,18.366,18.366,18.133,18.285,221.06],[1521786600000,18.248,18.339,18.124,18.125,403.16],[1521787560000,18.191,18.262,17.941,18.207,315.15],[1521788400000,18.165,18.319,18.148,18.28,411.57],[1521789300000,18.238,18.318,18.121,18.271,328.13],[1521790260000,18.141,18.305,18.122,18.214,390.99],[1521791100000,18.214,18.293,18.026,18.039,129.12],[1521792000000,18.04,18.216,18.04,18.216,355.51],[1521792960000,18.213,18.267,18.206,18.256,305.64],[1521793800000,18.252,18.252,18.179,18.204,324.98],[1521794820000,18.247,18.253,18.186,18.186,335.36],[1521795600000,18.181,18.187,18.152,18.162,422.82],[1521796500000,18.19,18.263,18.164,18.263,291.25],[1521797460000,18.265,18.265,18.209,18.212,346.54],[1521798300000,18.212,18.284,18.208,18.252,674.15],[1521799200000,18.234,18.262,18.167,18.18,432.41],[1521800100000,18.164,18.164,18.088,18.153,416.73],[1521801000000,18.127,18.189,18.127,18.178,470.91],[1521801900000,18.197,18.212,18.167,18.195,463.54],[1521802800000,18.221,18.221,17.979,18.021,224.01],[1521803700000,18.014,18.184,18.014,18.107,689.17],[1521804600000,18.161,18.186,18.068,18.106,352.41],[1521805500000,18.141,18.231,18.102,18.21,363.02],[1521806400000,18.227,18.239,18.179,18.182,340.6],[1521807300000,18.172,18.232,18.056,18.1,252.32],[1521808200000,18.04,18.126,18.01,18.028,354.23],[1521809160000,17.989,18.004,17.818,17.856,757.53],[1521810000000,17.824,17.911,17.817,17.901,238.13],[1521810900000,17.88,17.953,17.831,17.88,320.03],[1521811800000,17.905,17.933,17.79,17.832,489.69],[1521812700000,17.841,17.956,17.775,17.882,289.73],[1521813660000,17.962,18.098,17.909,18.043,198.56],[1521814500000,18.074,18.134,18.015,18.124,368.1],[1521815400000,18.131,18.344,18.087,18.344,430.51],[1521816300000,18.292,18.506,18.292,18.506,241.45],[1521817200000,18.508,18.695,18.499,18.695,451.74],[1521818160000,18.688,18.688,18.559,18.578,376.56],[1521819000000,18.596,18.623,18.396,18.422,415.73],[1521819900000,18.552,18.587,18.421,18.558,408.78],[1521820800000,18.576,18.663,18.435,18.56,449.2],[1521821700000,18.503,18.557,18.414,18.454,467.55],[1521822600000,18.542,18.542,18.376,18.519,434.6],[1521823500000,18.51,18.565,18.394,18.518,311.79],[1521824400000,18.509,18.531,18.308,18.308,560.62],[1521825360000,18.395,18.499,18.267,18.361,337.38],[1521826320000,18.331,18.461,18.313,18.313,277.13],[1521827160000,18.361,18.413,18.207,18.209,354.46],[1521828000000,18.209,18.254,18.177,18.254,347.22],[1521828900000,18.354,18.381,18.309,18.327,382.82],[1521829800000,18.327,18.339,18.22,18.243,437.4],[1521830760000,18.162,18.206,18.12,18.206,418.49],[1521831600000,18.199,18.221,18.164,18.164,492.03],[1521832500000,18.164,18.207,18.164,18.185,163.53],[1521833400000,18.182,18.223,18.176,18.196,376.8],[1521834300000,18.208,18.233,18.185,18.221,179.78],[1521835200000,18.218,18.218,18.131,18.164,502.3],[1521836100000,18.155,18.184,18.117,18.117,410.11],[1521837000000,18.113,18.166,18.113,18.164,570.49],[1521837900000,18.164,18.197,18.157,18.187,549.0],[1521838860000,18.202,18.227,18.188,18.19,170.29],[1521839700000,18.198,18.242,18.198,18.229,485.66],[1521840600000,18.227,18.255,18.217,18.222,287.02],[1521841500000,18.214,18.252,18.214,18.252,333.76],[1521842400000,18.26,18.32,18.26,18.273,599.12],[1521843300000,18.271,18.322,18.188,18.189,612.63],[1521844200000,18.274,18.306,18.176,18.302,237.35],[1521845100000,18.237,18.333,18.23,18.321,297.91],[1521846000000,18.306,18.34,18.217,18.242,354.51],[1521846900000,18.335,18.434,18.257,18.257,572.83],[1521847800000,18.315,18.391,17.963,18.391,507.32]];
    // }

    //初始化
    // ExxWebSocket.init();


