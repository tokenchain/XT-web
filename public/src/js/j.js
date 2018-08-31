/**
 *
 * @authors Your Name (you@example.org)
 * @date    2017-04-24 15:54:00
 * @version $Id$
 */

var $, $s;
$ = $s = function(selector, context) {
    return new $s.fn.init(selector, context);
};
$s.fn = $s.prototype;
$s.fn.init = function(selector, context) {
    var nodeList = [];
    if(typeof(selector) == 'string') {
        nodeList = (context || document).querySelectorAll(selector);
    } else if(selector instanceof Node) {
        nodeList[0] = selector;
    } else if(selector instanceof NodeList || selector instanceof Array) {
        nodeList = selector;
    }
    this.length = nodeList.length;
    for(var i = 0; i < this.length; i += 1) {
        this[i] = nodeList[i];
    }
    return this;
};
$s.fn.init.prototype = $s.fn;


(function(){
    //$外界接口函数
    function $(param){
        return new init(param);
    }
    // 初始化面向对象  --构造函数
    function init(param){
        this.exe(param);

    }
    init.prototype = {
        constructor : init,
        // 调用
        exe : function(param){
            var type = (typeof param).toLowerCase();
            if(type === "string"){ //选择器
                if(/^<[^><]+>/.test(param)){  //$(<div>)
                    var Dom = document.createElement("div");
                    Dom.innerHTML = param;
                    this.length = Dom.children.length;
                    for(var i=0;i<this.length;i++){ //可能多个节点
                        this[i] = Dom.children[i];
                    };
                }else{
                    var Doms = document.querySelectorAll(param);
                    this.length = Doms.length;
                    //遍历获取的js对象 给 实例化对象的下标下
                    for(var i=0;i<Doms.length;i++){
                        this[i] = Doms[i];
                    };
                }
            }else if(type === "function"){//函数
                window.onload = param;
            }else if(type === "object"){//对象
                // 通过nodeType识别 js对象(节点)是单个还是多个,  querySelectorAll  (querySelector ducument this window)
                if(param.nodeType || param === window){ //单个
                    this.length = 1;
                    this[0] = param;  //$(this)[0]
                }else{  //集合的情况
                    this.length = param.length;
                    for(var i=0;i<param.length;i++){
                        this[i] = param[i];
                    };
                }
            };
            this.bindEvent(["click","mouseenter","mouseleave","mouseover","mouseout","load","dblclick","focus","blur","mousedown","mouseup","mousemove","change","keydown","keyup","mousewheel","scroll"]);
        },

        // each()遍历方法
        each : function(fn){
            for(var i=0;i<this.length;i++){
                fn.call(this[i],i);  //this指向  改变遍历的每个对象
            }
        },
        get : function(i){
            return this[i];
        },
        eq : function(i){
            // js=>jQ
            return $(this[i]);
        },
        css : function(){
            var param = arguments;  //不定参
            if(param.length === 2){ //("color","red")
                this.each(function(){
                    this.style[param[0]] = param[1];
                })
                // 没each
                // for(var i=0;i<this.length;i++){
                //     this[i].style[param[0]] = param[1];
                // }
            }else{
                var param1 = param[0];
                if(typeof param1 === "string"){  //获取样式的情况 css("color")
                    var obj = this[0]; //只能获取第一个
                    var val = obj.currentStyle?obj.currentStyle[param1]:getComputedStyle(obj)[param1];
                    // val = Number()?parseInt(val):val;
                    if(typeof val.substring(0,1) === "number"){
                        val = parseFloat(val);
                    }else{
                        if(val.substring(0,1) === "0"){   //考虑参数是0px. 会走false
                            val = parseFloat(val);
                        }
                    }
                    // console.log(val);
                    return val;
                }else if(typeof param1 === "object"){  //css({})
                    // 多个样式设置
                    this.each(function(){
                        for(var key in param1){
                            this.style[key] = param1[key];
                        }
                    })
                }
            }
            return this;
        },
        // attr
        attr : function(){
            var param = arguments;  //不定参
            if(param.length === 2){ //("id","red")
                this.each(function(){
                    this.setAttribute(param[0],param[1]);
                });
            }else{
                var param1 = param[0];
                if(typeof param1 === "string"){  //获取属性的情况 attr("color")
                    var obj = this[0]; //只能获取第一个
                    return obj.getAttribute(param1);
                }else if(typeof param1 === "object"){  //attr({title:"name", class: "on"})
                    // 多个样式设置
                    this.each(function(){
                        for(var key in param1){
                            this.setAttribute(key,param1[key]);
                        };
                    });
                }
            }
            return this;
        },

        //removeAttr
        removeAttr : function(param){
            this.each(function(){
                this.removeAttribute(param);
            });
            return this;
        },

        //`s
        addClass : function(param){
            // var arrClass =  param.split(" ");
            this.each(function(){
                var allClass = this.className +" "+param;
                arrClass = allClass.split(" ");
                arrClass = arrClass.filter(function(value,index,arr){
                    return arr.indexOf(value) == index;
                });
                this.className = arrClass.join(" ");
            });
            return this;
        },

        // removeClass
        removeClass : function(param){
            this.each(function(){
                var arrClass = this.className.split(" ");
                var arrParam = param.split(" ");
                for(var i=0;i<arrParam.length;i++){
                    var index = arrClass.indexOf(arrParam[i]);
                    if(index !== -1){
                        arrClass.splice(index,1);
                    };
                }
                this.className = arrClass.join(" ");
            });
            return this;
        },
        // toggeleClass
        toggleClass : function(param){
            this.each(function(){
                var arrClass = this.className.split(" ");
                var arrParam = param.split(" ");
                for(var i=0;i<arrParam.length;i++){
                    var index = arrClass.indexOf(arrParam[i]);
                    if(index !== -1){
                        arrClass.splice(index,1);
                    }else{
                        arrClass.push(arrParam[i]);
                    }
                }
                this.className = arrClass.join(" ");
            });
            return this;
        },

        html : function(param){
            if(typeof param !== "undefined"){ //判断是否有参数
                this.each(function(){
                    this.innerHTML = param;
                });
            }else{
                return this[0].innerHTML;
            }
            return this;
        },

        text : function(param){
            if(typeof param !== "undefined"){
                this.each(function(){
                    this.innerText = param;
                });
            }else{
                return this[0].innerText;
            }
        },

        val : function(param){
            if(typeof param !== "undefined"){
                this.each(function(){
                    this.value = param;
                });
            }else{
                return this[0].value;
            }
        },
        offset : function(param){
            var json = {left:0,top:0},obj = this[0];
            if(typeof param !== "undefined"){
                this[0].style.left = param.left;
                this[0].style.top = param.top;
            }else{
                // 无参数
                while(obj){
                    json.left += obj.offsetLeft;   //!!! +=
                    json.top += obj.offsetTop;
                    obj = obj.offsetParent;
                };
                json.left -= this.srcollLeft();
                json.top -= this.srcollTop();
                return json;
            };
            return this;
        },
        position : function(param){
            var json = {left:0,top:0};
            if(typeof param !== "undefined"){
                this[0].style.top = param.top;
                this[0].style.left = param.left;
            }else{
                json.left = this[0].offsetLeft;
                json.top = this[0].offsetTop;
                return json;
            }
            return this;
        },
        srcollTop : function(param){
            if(typeof param !== "undefined"){
                if(document.documentElement.srcollTop){
                    document.documentElement.srcollTop = param +"px";
                }else{
                    document.body.scrollTop = param + "px";
                }
            }else{
                var scroll = document.documentElement.scrollTop || document.body.scrollTop;
                return scroll;
            };
            return this;

        },
        srcollLeft : function(param){
            if(typeof param !== "undefined"){
                if(document.documentElement.srcollLeft){
                    document.documentElement.srcollLeft = param +"px";
                }else{
                    document.body.scrollLeft = param + "px";
                }
            }else{
                var scroll = document.documentElement.scrollLeft || document.body.scrollLeft;
                return scroll;
            };
            return this;
        },
        height : function(param){
            if(typeof param !== "undefined"){
                this.css("height",param+"px");
            }else{
                return this.eq(0).css("height");
            };
            return this;
        },
        width : function(param){
            if(typeof param !== "undefined"){
                this.css("width",param+"px");
            }else{
                return this.eq(0).css("width");
            };
            return this;
        },
        innerHeight : function(param){
            return this[0].clientHeight;
        },
        innerWidth : function(param){
            return this[0].clientWidth;
        },
        outerHeight : function(param){
            return this[0].offsetHeight;
        },
        outerWidth : function(param){
            return this[0].offsetWidth;
        },
        append : function(param){
            if(typeof param === "string"){
                if(/^<[^><]+>/.test(param)){
                    // 元素节点<div>
                    this.append($(param));  //$("<div></div>")
                }else{
                    // 文本节点""
                    var Dom = document.createTextNode(param);
                    this[0].appendChild(Dom);
                }
            }else if( typeof param === "object"){
                // jQ对象
                // 判断jq     append($("p"))   选择p 元素.  [0][1][2]
                if(param.constructor === init){
                    // this[0].appendChild(param[i]);
                    // 遍历 !!如果选择了多个元素.
                    // 节点添加之后就消失了,所以只有一个被添加.
                    // console.log(param);  节点复制一份.
                    for(var i=0;i<this.length;i++){
                        for(var j=0;j<param.length;j++){
                            if(i == this.length-1){  //当是选择器最后一份,直接操作节点
                                var temp = param[j];
                            }else{
                                var temp = param[j].cloneNode(true);
                            }
                            this[i].appendChild(temp);
                        };
                    }

                }else{
                    // js对象     append(节点))
                    this.append($(param));  //转换为jQ对象.再调用上面的.
                }
            }
            return this;
        },
        prepend : function(param){
            if(typeof param === "string"){
                if(/^<[^><]+>/.test(param)){
                    // 元素节点<div>
                    this.prepend($(param));  //$("<div></div>")
                }else{
                    // 文本节点""
                    var Dom = document.createTextNode(param);
                    this[0].insertBefore(Dom,this[0].children[0]);
                }
            }else if( typeof param === "object"){
                // jQ对象
                // 判断jq     append($("p"))   选择p 元素.  [0][1][2]
                if(param.constructor === init){
                    // this[0].appendChild(param[i]);
                    // 遍历 !!如果选择了多个元素.
                    // 节点添加之后就消失了,所以只有一个被添加.
                    // console.log(param);  节点复制一份.
                    for(var i=0;i<this.length;i++){
                        for(var j=0;j<param.length;j++){
                            if(i == this.length-1){  //当是选择器最后一份,直接操作节点
                                var temp = param[j];
                            }else{
                                var temp = param[j].cloneNode(true);
                            }
                            this[i].insertBefore(temp,this[i].children[0]);
                        };
                    }

                }else{
                    // js对象     append(节点))
                    this.prepend($(param));  //转换为jQ对象.再调用上面的.
                }
            }
            return this;
        },
        wrap : function(param){ //给人加上爸爸
            // 先转换为JS对象
            var type = typeof param;
            if(type === "string"){
                if(/^<[^><]+>/.test(param)){
                    param = $(param)[0]
                };
            }else if(type === "object"){
                if(param.constructor == init){
                    param = param[0];
                }else if(!param.nodeType && param.length){//如果是多个节点
                    param = param[0];
                }
            }else if(type === "function"){
                //
            }
            var thisParent = this[0].parentNode;
            if(thisParent !== param){  //如果自身有this. 排除自己insertBefore自己.
                thisParent.insertBefore(param,this[0]);
            };
            this.each(function(){
                param.appendChild(this);
            });

            return this;
        },
        unwrap : function(){
            this.each(function(){
                var parent = this.parentNode; //爸爸
                var siblings = parent.children; //兄弟
                var grandpa = parent.parentNode;  //爷爷
                for(var i=siblings.length-1;i>=0;i--){ //从后面取出
                    grandpa.insertBefore(siblings[siblings.length-1-i],parent);  //顺序不能变.
                }
                grandpa.removeChild(parent);
            })
            return this;
        },
        empty : function(){
            this.each(function(){
                this.innerHTML = "";
            })
            return this;
        },
        remove : function(param){
            if(typeof param !== "undefined"){ //判断是否有参数
                // 选择器
                this.each(function(){
                    if(this.parentNode){
                        var Dom = this.parentNode.querySelectorAll(param);
                        $(Dom).remove();
                    }
                })

            }else{
                this.each(function(){
                    this.parentNode.removeChild(this);
                });
            }
            return this;
        },
        children : function(param){
            var arr = [];
            if(typeof param === "string"){
                // 选择器
                this.each(function(){
                    var Doms = this.querySelectorAll(param);
                    for(var i=0;i<Doms.length;i++){
                        if(Doms[i].parentNode == this){ //只选择儿子
                            arr.push(Doms[i]);
                        }
                    }
                })


            }else{
                this.each(function(){
                    // var Doms = this.children;
                    // for(var i=0;i<Doms.length;i++){
                    //
                    //     arr.push(Doms[i]);
                    //
                    // }
                    arr = [].slice.call(this.children);
                })
            }
            return $(arr);  //输出JQ对象
        },
        find : function(){
            var arr = [];
            if(typeof param === "string"){
                // 选择器
                this.each(function(){
                    var Doms = this.querySelectorAll(param);
                    for(var i=0;i<Doms.length;i++){
                        // if(Doms[i].parentNode == this){ //只选择儿子
                        arr.push(Doms[i]);
                        // }
                    }
                })
            }
            return $(arr);
        },
        siblings : function(param){
            var arr = [];
            if(typeof param === "string"){
                // 选择器
                this.each(function(){
                    var Doms = this.parentNode.querySelectorAll(param);
                    for(var i=0;i<Doms.length;i++){
                        if(Doms[i]!== this && Doms[i].parentNode === this.parentNode){  //兄弟且不是自己.
                            arr.push(Doms[i]);
                        }
                    }
                })
            }else{
                this.each(function(){
                    arr = [].slice.call(this.parentNode.children);
                    // 过滤掉自己;
                    // var This = this;
                    // arr = arr.filter(function(dom){
                    //     return dom !== This; //函数内部
                    // });
                    arr.splice(arr.indexOf(this),1);
                })
            }
            return $(arr);  //输出JQ对象
        },
        hasClass : function(param){
            var bool = false;
            // 可能多个className
            var arr = param.split(" ");
            for(var i=0;i<arr.length;i++){
                if(new RegExp(arr[i]).test(this[0].className)){
                    bool = true;
                }else{
                    bool = false;
                    break;
                }
            };
            return bool;
        },
        on : function (eName, eFn) {
            if (eName === 'mousewheel'){  //滚轮事件
                this.each(function () {
                    // 解绑的时候用的  ,储存函数
                    if (this[eName + 'FLY']) {
                        this[eName + 'FLY'].push(eFn);
                    } else {
                        this[eName + 'FLY'] = [eFn];
                    }
                    document.onmousewheel===null?this.onmousewheel=eFn:this.addEventListener('DOMMouseScroll',eFn);
                });
            }else{
                this.each(function () {
                    // 解绑的时候用的
                    if (this[eName + 'FLY']) {
                        this[eName + 'FLY'].push(eFn);
                    } else {
                        this[eName + 'FLY'] = [eFn];
                    }
                    if (document.addEventListener) {
                        this.addEventListener(eName, eFn);
                    } else {
                        this.attachEvent('on' + eName, eFn);
                    }
                });
            }
            return this;
        },

        off : function (eName) {
            this.each(function () {
                if (this[eName + 'FLY']) {
                    for (var i = 0; i < this[eName + 'FLY'].length; i++) {
                        if (document.removeEventListener) {
                            this.removeEventListener(eName, this[eName + 'FLY'][i]);
                        } else {
                            this.detachEvent('on' + eName, this[eName + 'FLY'][i]);
                        }
                    }
                    if(eName === 'mousewheel'){
                        this.onmousewheel = null;
                    }
                }
            });
            return this;
        },

        hover : function () {
            var huamei = arguments; //彩蛋 華魅
            if (huamei.length) {
                if (huamei.length === 1) {
                    huamei[1] = huamei[0]
                }
                this.on('mouseenter', huamei[0]);
                this.on('mouseleave', huamei[1]);
            }
            return this;
        },
        bindEvent : function(eventArr){
            // click : function (huamei) { //彩蛋 華魅
            //     return this.on('click', huamei);
            // }
            for(var i=0;i<eventArr.length;i++){
                var eventName = eventArr[i];
                (function(This,event){   //闭包  保留eventName
                    init.prototype[event] = function(fn){
                        // console.log(event);  //找到了eventName
                        return this.on(event,fn);
                    }.bind(This);
                })(this,eventName);
            };
        },
        animate : function(target,speed,callBack){  //匀速版
            if(typeof target === "object"){
                // 先判断  传来的参数.
                var time = (typeof speed === "number")?speed:300,//默认300ms
                    callback = (typeof speed === "function")?speed:callBack,  //回调函数
                    sTime = new Date();
                this.each(function(){
                    // 初始值  目标值  变化值
                    var start = {},change = {};
                    for(var attr in target){
                        start[attr] = $(this).css(attr);
                        change[attr] = parseInt(target[attr]) - start[attr];
                    };
                    // 动画.requestAnimationFrame()
                    (function Fn(){
                        var nTime = new Date(),proportion = (nTime - sTime)/time;
                        // 判断  attr 是否是 opacity zIndex;  unit单位
                        if(proportion >=1)proportion=1;   //变为整数.
                        for(var attr in change){
                            var unit = "px";
                            if(attr == "opacity" || attr == "zIndex"){
                                unit = "";
                            }
                            this.style[attr] = start[attr] + change[attr]*proportion + unit;
                        }
                        if(proportion === 1){
                            callback&&callback.call(this);
                        }else{
                            requestAnimationFrame(Fn.bind(this));//每次调用改变this指向.
                        }
                    }.bind(this))()
                })
            }
        },
        show : function(){
            var param = arguments;
            if(param.length === 0){
                this.each(function(){
                    if($(this).css("display") === "none"){
                        console.log(1);
                        this.style.display = "block";
                    }
                })
            }else{
                var time ,
                    callBack;
                time = typeof param[0] === "number"?param[0]:300;//默认;
                callBack = typeof param[0] === "function"?param[0]:param[1];
                this.each(function(){
                    // 初始
                    if($(this).css("display") === "none"){
                        var sWidth,
                            sHeight;
                        this.style.display = 'block';
                        sWidth = this.clientWidth;
                        sHeight = this.clientHeight;
                        this.style.width = '0';
                        this.style.height = '0';
                        this.style.opacity = 0;
                        $(this).animate({
                            width : sWidth,
                            height : sHeight,
                            opacity : 1
                        },time,callBack);
                    }
                })
            }
            return this;
        },
        hide : function(){
            var param = arguments;
            if(param.length === 0 ){
                this.each(function(){
                    if($(this).css("display") !== "none"){
                        this.style.display = "none";
                    }
                })
            }else{
                var time ,callBack;
                time = typeof param[0] === "number"?param[0]:300;//默认;
                callBack = typeof param[0] === "function"?param[0]:param[1];
                this.each(function(){
                    // 初始
                    if($(this).css("display") !== "none"){

                        $(this).animate({
                            "width": 0,
                            "height": 0,
                            "opacity": 0
                        },time,function(){
                            this.style.display = "none";
                            callBack&&callBack.call(this);
                        });
                    }
                })
            }
            return this;
        },
        toggle : function(){
            var param = arguments;
            this.each(function(){
                if($(this).css("display") !== "none"){
                    $(this).hide.apply($(this),param); //this指向是jq对象
                }else{
                    $(this).show.apply($(this),param);
                }
            });
            return this;
        },
        fadeIn : function(){
            var param = arguments;
            var time ,
                callBack;
            time = typeof param[0] === "number"?param[0]:300;//默认;
            callBack = typeof param[0] === "function"?param[0]:param[1];
            this.each(function(){
                // 初始
                if($(this).css("display") === "none"){
                    this.style.opacity = 0;
                    this.style.display = "block";
                    $(this).animate({
                        opacity : 1
                    },time,callBack);
                }
            })
            return this;
        },
        fadeOut : function(){
            var param = arguments;
            var time ,
                callBack;
            time = typeof param[0] === "number"?param[0]:300;//默认;
            callBack = typeof param[0] === "function"?param[0]:param[1];
            this.each(function(){
                // 初始
                if($(this).css("display") !== "none"){
                    $(this).animate({
                        opacity : 0
                    },time,function(){
                        this.style.display = "block";
                        callBack && callBack.call(this);
                    });
                }
            })
            return this;
        },
        fadeToggle : function(){
            var param = arguments;
            this.each(function(){
                if($(this).css("display") !== "none"){
                    $(this).fadeOut.apply($(this),param); //this指向是jq对象
                }else{
                    $(this).fadeIn.apply($(this),param);
                }
            });
            return this;
        },
        slideUp : function(){
            var param = arguments;
            var time ,
                callBack;
            time = typeof param[0] === "number"?param[0]:300;//默认;
            callBack = typeof param[0] === "function"?param[0]:param[1];
            this.each(function(){
                // 初始
                if($(this).css("display") !== "none"){
                    this.style.overflow = "hidden";
                    $(this).animate({
                        height : 0
                    },time,function(){
                        this.style.display = "block";
                        callBack && callBack.call(this);
                    });
                }
            })
            return this;
        },

        slideDown : function(){
            var param = arguments;
            var time ,
                callBack;
            time = typeof param[0] === "number"?param[0]:300;//默认;
            callBack = typeof param[0] === "function"?param[0]:param[1];
            this.each(function(){
                // 初始
                if($(this).css("display") === "none"){
                    var sHeight = 0;
                    this.style.display = 'block';
                    sHeight = this.clientHeight;
                    this.style.overflow = 'hidden';
                    this.style.height = '0';
                    $(this).animate({
                        height : sHeight+"px"
                    },time,callBack);
                }
            })
            return this;
        },
        slideToggle : function(){
            var param = arguments;
            this.each(function(){
                if($(this).css("display") !== "none"){
                    $(this).slideUp.apply($(this),param);
                }else{
                    $(this).slideDown.apply($(this),param);
                }
            });
            return this;
        },
        ajax:function(options) {
            function empty() {}

            function obj2Url(obj) {
                var arr = [];
                for(var i in obj) {
                    arr.push(encodeURI(i) + '=' + encodeURI(obj[i]));
                }
                return arr.join('&').replace(/%20/g, '+');
            }
            var opt = {
                url: '', //请求地址
                sync: true, //true，异步 | false　同步，会锁死浏览器，并且open方法会报浏览器警告
                method: 'GET', //提交方法
                data: null, //提交数据
                dataType: 'json', //返回数据类型
                username: null, //账号
                password: null, //密码
                success: empty, //成功返回回调
                error: empty, //错误信息回调
                timeout: 10000 //请求超时ms
            };
            Object.assign(opt, options); //直接合并对象,opt已有属性将会被options替换
            var abortTimeout = null;
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if(xhr.readyState == 4) {
                    xhr.onreadystatechange = empty;
                    clearTimeout(abortTimeout);
                    if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                        var result = xhr.responseText;
                        try {
                            if(opt.dataType == 'json') {
                                result = result.replace(' ', '') == '' ? null : JSON.parse(result);
                            }
                        } catch(e) {
                            opt.error(e, xhr);
                            xhr.abort();
                        }
                        opt.success(result, xhr);
                    } else if(0 == xhr.status) {
                        opt.error("跨域请求失败", xhr);
                    } else {
                        opt.error(xhr.statusText, xhr);
                    }
                }
            };
            var data = opt.data ? obj2Url(opt.data) : opt.data;
            opt.method = opt.method.toUpperCase();
            if(opt.method == 'GET') {
                opt.url += (opt.url.indexOf('?') == -1 ? '?' : '&') + data;
            }
            xhr.open(opt.method, opt.url, opt.sync, opt.username, opt.password);
            if(opt.method == 'POST') {
                xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            }
            if(opt.timeout > 0) {
                abortTimeout = setTimeout(function() {
                    xhr.onreadystatechange = empty;
                    xhr.abort();
                    opt.error('网络请求超时', xhr);
                }, opt.timeout);
            }
            xhr.send(data);
        }
    }

    window.$ = $;
})();




/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
    var registeredInModuleLoader;
    if (typeof define === 'function' && define.amd) {
        define(factory);
        registeredInModuleLoader = true;
    }
    if (typeof exports === 'object') {
        module.exports = factory();
        registeredInModuleLoader = true;
    }
    if (!registeredInModuleLoader) {
        var OldCookies = window.Cookies;
        var api = window.Cookies = factory();
        api.noConflict = function () {
            window.Cookies = OldCookies;
            return api;
        };
    }
}(function () {
    function extend () {
        var i = 0;
        var result = {};
        for (; i < arguments.length; i++) {
            var attributes = arguments[ i ];
            for (var key in attributes) {
                result[key] = attributes[key];
            }
        }
        return result;
    }

    function decode (s) {
        return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    }

    function init (converter) {
        function api() {}

        function set (key, value, attributes) {
            if (typeof document === 'undefined') {
                return;
            }

            attributes = extend({
                path: '/'
            }, api.defaults, attributes);

            if (typeof attributes.expires === 'number') {
                attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
            }

            // We're using "expires" because "max-age" is not supported by IE
            attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

            try {
                var result = JSON.stringify(value);
                if (/^[\{\[]/.test(result)) {
                    value = result;
                }
            } catch (e) {}

            value = converter.write ?
                converter.write(value, key) :
                encodeURIComponent(String(value))
                    .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

            key = encodeURIComponent(String(key))
                .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                .replace(/[\(\)]/g, escape);

            var stringifiedAttributes = '';
            for (var attributeName in attributes) {
                if (!attributes[attributeName]) {
                    continue;
                }
                stringifiedAttributes += '; ' + attributeName;
                if (attributes[attributeName] === true) {
                    continue;
                }

                // Considers RFC 6265 section 5.2:
                // ...
                // 3.  If the remaining unparsed-attributes contains a %x3B (";")
                //     character:
                // Consume the characters of the unparsed-attributes up to,
                // not including, the first %x3B (";") character.
                // ...
                stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
            }

            return (document.cookie = key + '=' + value + stringifiedAttributes);
        }

        function get (key, json) {
            if (typeof document === 'undefined') {
                return;
            }

            var jar = {};
            // To prevent the for loop in the first place assign an empty array
            // in case there are no cookies at all.
            var cookies = document.cookie ? document.cookie.split('; ') : [];
            var i = 0;

            for (; i < cookies.length; i++) {
                var parts = cookies[i].split('=');
                var cookie = parts.slice(1).join('=');

                if (!json && cookie.charAt(0) === '"') {
                    cookie = cookie.slice(1, -1);
                }

                try {
                    var name = decode(parts[0]);
                    cookie = (converter.read || converter)(cookie, name) ||
                        decode(cookie);

                    if (json) {
                        try {
                            cookie = JSON.parse(cookie);
                        } catch (e) {}
                    }

                    jar[name] = cookie;

                    if (key === name) {
                        break;
                    }
                } catch (e) {}
            }

            return key ? jar[key] : jar;
        }

        api.set = set;
        api.get = function (key) {
            return get(key, false /* read as raw */);
        };
        api.getJSON = function (key) {
            return get(key, true /* read as json */);
        };
        api.remove = function (key, attributes) {
            set(key, '', extend(attributes, {
                expires: -1
            }));
        };

        api.defaults = {};

        api.withConverter = init;

        return api;
    }

    return init(function () {});
}));
