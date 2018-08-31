/**
 *
 * @authors Your Name (you@example.org)
 * @date    2017-04-24 15:54:00
 * @version $Id$
 */


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
        constructor: init,
        // 调用
        exe: function (param) {
            var type = (typeof param).toLowerCase();
            if (type === "string") { //选择器
                if (/^<[^><]+>/.test(param)) {  //$(<div>)
                    var Dom = document.createElement("div");
                    Dom.innerHTML = param;
                    this.length = Dom.children.length;
                    for (var i = 0; i < this.length; i++) { //可能多个节点
                        this[i] = Dom.children[i];
                    }
                    ;
                } else {
                    var Doms = document.querySelectorAll(param);
                    this.length = Doms.length;
                    //遍历获取的js对象 给 实例化对象的下标下
                    for (var i = 0; i < Doms.length; i++) {
                        this[i] = Doms[i];
                    }
                    ;
                }
            } else if (type === "function") {//函数
                window.onload = param;
            } else if (type === "object") {//对象
                // 通过nodeType识别 js对象(节点)是单个还是多个,  querySelectorAll  (querySelector ducument this window)
                if (param.nodeType || param === window) { //单个
                    this.length = 1;
                    this[0] = param;  //$(this)[0]
                } else {  //集合的情况
                    this.length = param.length;
                    for (var i = 0; i < param.length; i++) {
                        this[i] = param[i];
                    }
                    ;
                }
            }
            ;
            this.bindEvent(["click", "mouseenter", "mouseleave", "mouseover", "mouseout", "load", "dblclick", "focus", "blur", "mousedown", "mouseup", "mousemove", "change", "keydown", "keyup", "mousewheel", "scroll"]);
        },

        // each()遍历方法
        each: function (fn) {
            for (var i = 0; i < this.length; i++) {
                fn.call(this[i], i);  //this指向  改变遍历的每个对象
            }
        },
        get: function (i) {
            return this[i];
        },
        eq: function (i) {
            // js=>jQ
            return $(this[i]);
        },
        css: function () {
            var param = arguments;  //不定参
            if (param.length === 2) { //("color","red")
                this.each(function () {
                    this.style[param[0]] = param[1];
                })
                // 没each
                // for(var i=0;i<this.length;i++){
                //     this[i].style[param[0]] = param[1];
                // }
            } else {
                var param1 = param[0];
                if (typeof param1 === "string") {  //获取样式的情况 css("color")
                    var obj = this[0]; //只能获取第一个
                    var val = obj.currentStyle ? obj.currentStyle[param1] : getComputedStyle(obj)[param1];
                    // val = Number()?parseInt(val):val;
                    if (typeof val.substring(0, 1) === "number") {
                        val = parseFloat(val);
                    } else {
                        if (val.substring(0, 1) === "0") {   //考虑参数是0px. 会走false
                            val = parseFloat(val);
                        }
                    }
                    // console.log(val);
                    return val;
                } else if (typeof param1 === "object") {  //css({})
                    // 多个样式设置
                    this.each(function () {
                        for (var key in param1) {
                            this.style[key] = param1[key];
                        }
                    })
                }
            }
            return this;
        },
        // attr
        attr: function () {
            var param = arguments;  //不定参
            if (param.length === 2) { //("id","red")
                this.each(function () {
                    this.setAttribute(param[0], param[1]);
                });
            } else {
                var param1 = param[0];
                if (typeof param1 === "string") {  //获取属性的情况 attr("color")
                    var obj = this[0]; //只能获取第一个
                    return obj.getAttribute(param1);
                } else if (typeof param1 === "object") {  //attr({title:"name", class: "on"})
                    // 多个样式设置
                    this.each(function () {
                        for (var key in param1) {
                            this.setAttribute(key, param1[key]);
                        }
                        ;
                    });
                }
            }
            return this;
        },

        //removeAttr
        removeAttr: function (param) {
            this.each(function () {
                this.removeAttribute(param);
            });
            return this;
        },

        //`s
        addClass: function (param) {
            // var arrClass =  param.split(" ");
            this.each(function () {
                var allClass = this.className + " " + param;
                arrClass = allClass.split(" ");
                arrClass = arrClass.filter(function (value, index, arr) {
                    return arr.indexOf(value) == index;
                });
                this.className = arrClass.join(" ");
            });
            return this;
        },

        // removeClass
        removeClass: function (param) {
            this.each(function () {
                var arrClass = this.className.split(" ");
                var arrParam = param.split(" ");
                for (var i = 0; i < arrParam.length; i++) {
                    var index = arrClass.indexOf(arrParam[i]);
                    if (index !== -1) {
                        arrClass.splice(index, 1);
                    }
                    ;
                }
                this.className = arrClass.join(" ");
            });
            return this;
        },
        // toggeleClass
        toggleClass: function (param) {
            this.each(function () {
                var arrClass = this.className.split(" ");
                var arrParam = param.split(" ");
                for (var i = 0; i < arrParam.length; i++) {
                    var index = arrClass.indexOf(arrParam[i]);
                    if (index !== -1) {
                        arrClass.splice(index, 1);
                    } else {
                        arrClass.push(arrParam[i]);
                    }
                }
                this.className = arrClass.join(" ");
            });
            return this;
        },

        html: function (param) {
            if (typeof param !== "undefined") { //判断是否有参数
                this.each(function () {
                    this.innerHTML = param;
                });
            } else {
                return this[0].innerHTML;
            }
            return this;
        },

        text: function (param) {
            if (typeof param !== "undefined") {
                this.each(function () {
                    this.innerText = param;
                });
            } else {
                return this[0].innerText;
            }
        },

        val: function (param) {
            if (typeof param !== "undefined") {
                this.each(function () {
                    this.value = param;
                });
            } else {
                return this[0].value;
            }
        },
        offset: function (param) {
            var json = {left: 0, top: 0}, obj = this[0];
            if (typeof param !== "undefined") {
                this[0].style.left = param.left;
                this[0].style.top = param.top;
            } else {
                // 无参数
                while (obj) {
                    json.left += obj.offsetLeft;   //!!! +=
                    json.top += obj.offsetTop;
                    obj = obj.offsetParent;
                }
                ;
                json.left -= this.srcollLeft();
                json.top -= this.srcollTop();
                return json;
            }
            ;
            return this;
        },
        position: function (param) {
            var json = {left: 0, top: 0};
            if (typeof param !== "undefined") {
                this[0].style.top = param.top;
                this[0].style.left = param.left;
            } else {
                json.left = this[0].offsetLeft;
                json.top = this[0].offsetTop;
                return json;
            }
            return this;
        },
        srcollTop: function (param) {
            if (typeof param !== "undefined") {
                if (document.documentElement.srcollTop) {
                    document.documentElement.srcollTop = param + "px";
                } else {
                    document.body.scrollTop = param + "px";
                }
            } else {
                var scroll = document.documentElement.scrollTop || document.body.scrollTop;
                return scroll;
            }
            ;
            return this;

        },
        srcollLeft: function (param) {
            if (typeof param !== "undefined") {
                if (document.documentElement.srcollLeft) {
                    document.documentElement.srcollLeft = param + "px";
                } else {
                    document.body.scrollLeft = param + "px";
                }
            } else {
                var scroll = document.documentElement.scrollLeft || document.body.scrollLeft;
                return scroll;
            }
            ;
            return this;
        },
        height: function (param) {
            if (typeof param !== "undefined") {
                this.css("height", param + "px");
            } else {
                return this.eq(0).css("height");
            }
            ;
            return this;
        },
        width: function (param) {
            if (typeof param !== "undefined") {
                this.css("width", param + "px");
            } else {
                return this.eq(0).css("width");
            }
            ;
            return this;
        },
        innerHeight: function (param) {
            return this[0].clientHeight;
        },
        innerWidth: function (param) {
            return this[0].clientWidth;
        },
        outerHeight: function (param) {
            return this[0].offsetHeight;
        },
        outerWidth: function (param) {
            return this[0].offsetWidth;
        },
        append: function (param) {
            if (typeof param === "string") {
                if (/^<[^><]+>/.test(param)) {
                    // 元素节点<div>
                    this.append($(param));  //$("<div></div>")
                } else {
                    // 文本节点""
                    var Dom = document.createTextNode(param);
                    this[0].appendChild(Dom);
                }
            } else if (typeof param === "object") {
                // jQ对象
                // 判断jq     append($("p"))   选择p 元素.  [0][1][2]
                if (param.constructor === init) {
                    // this[0].appendChild(param[i]);
                    // 遍历 !!如果选择了多个元素.
                    // 节点添加之后就消失了,所以只有一个被添加.
                    // console.log(param);  节点复制一份.
                    for (var i = 0; i < this.length; i++) {
                        for (var j = 0; j < param.length; j++) {
                            if (i == this.length - 1) {  //当是选择器最后一份,直接操作节点
                                var temp = param[j];
                            } else {
                                var temp = param[j].cloneNode(true);
                            }
                            this[i].appendChild(temp);
                        }
                        ;
                    }

                } else {
                    // js对象     append(节点))
                    this.append($(param));  //转换为jQ对象.再调用上面的.
                }
            }
            return this;
        },
        prepend: function (param) {
            if (typeof param === "string") {
                if (/^<[^><]+>/.test(param)) {
                    // 元素节点<div>
                    this.prepend($(param));  //$("<div></div>")
                } else {
                    // 文本节点""
                    var Dom = document.createTextNode(param);
                    this[0].insertBefore(Dom, this[0].children[0]);
                }
            } else if (typeof param === "object") {
                // jQ对象
                // 判断jq     append($("p"))   选择p 元素.  [0][1][2]
                if (param.constructor === init) {
                    // this[0].appendChild(param[i]);
                    // 遍历 !!如果选择了多个元素.
                    // 节点添加之后就消失了,所以只有一个被添加.
                    // console.log(param);  节点复制一份.
                    for (var i = 0; i < this.length; i++) {
                        for (var j = 0; j < param.length; j++) {
                            if (i == this.length - 1) {  //当是选择器最后一份,直接操作节点
                                var temp = param[j];
                            } else {
                                var temp = param[j].cloneNode(true);
                            }
                            this[i].insertBefore(temp, this[i].children[0]);
                        }
                        ;
                    }

                } else {
                    // js对象     append(节点))
                    this.prepend($(param));  //转换为jQ对象.再调用上面的.
                }
            }
            return this;
        },

        empty: function () {
            this.each(function () {
                this.innerHTML = "";
            })
            return this;
        },
        remove: function (param) {
            if (typeof param !== "undefined") { //判断是否有参数
                // 选择器
                this.each(function () {
                    if (this.parentNode) {
                        var Dom = this.parentNode.querySelectorAll(param);
                        $(Dom).remove();
                    }
                })

            } else {
                this.each(function () {
                    this.parentNode.removeChild(this);
                });
            }
            return this;
        },
        children: function (param) {
            var arr = [];
            if (typeof param === "string") {
                // 选择器
                this.each(function () {
                    var Doms = this.querySelectorAll(param);
                    for (var i = 0; i < Doms.length; i++) {
                        if (Doms[i].parentNode == this) { //只选择儿子
                            arr.push(Doms[i]);
                        }
                    }
                })


            } else {
                this.each(function () {
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
        find: function () {
            var arr = [];
            if (typeof param === "string") {
                // 选择器
                this.each(function () {
                    var Doms = this.querySelectorAll(param);
                    for (var i = 0; i < Doms.length; i++) {
                        // if(Doms[i].parentNode == this){ //只选择儿子
                        arr.push(Doms[i]);
                        // }
                    }
                })
            }
            return $(arr);
        },

        hasClass: function (param) {
            var bool = false;
            // 可能多个className
            var arr = param.split(" ");
            for (var i = 0; i < arr.length; i++) {
                if (new RegExp(arr[i]).test(this[0].className)) {
                    bool = true;
                } else {
                    bool = false;
                    break;
                }
            }
            ;
            return bool;
        },
        on: function (eName, eFn) {
            if (eName === 'mousewheel') {  //滚轮事件
                this.each(function () {
                    // 解绑的时候用的  ,储存函数
                    if (this[eName + 'FLY']) {
                        this[eName + 'FLY'].push(eFn);
                    } else {
                        this[eName + 'FLY'] = [eFn];
                    }
                    document.onmousewheel === null ? this.onmousewheel = eFn : this.addEventListener('DOMMouseScroll', eFn);
                });
            } else {
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

        off: function (eName) {
            this.each(function () {
                if (this[eName + 'FLY']) {
                    for (var i = 0; i < this[eName + 'FLY'].length; i++) {
                        if (document.removeEventListener) {
                            this.removeEventListener(eName, this[eName + 'FLY'][i]);
                        } else {
                            this.detachEvent('on' + eName, this[eName + 'FLY'][i]);
                        }
                    }
                    if (eName === 'mousewheel') {
                        this.onmousewheel = null;
                    }
                }
            });
            return this;
        },

        hover: function () {
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
        bindEvent: function (eventArr) {
            // click : function (huamei) { //彩蛋 華魅
            //     return this.on('click', huamei);
            // }
            for (var i = 0; i < eventArr.length; i++) {
                var eventName = eventArr[i];
                (function (This, event) {   //闭包  保留eventName
                    init.prototype[event] = function (fn) {
                        // console.log(event);  //找到了eventName
                        return this.on(event, fn);
                    }.bind(This);
                })(this, eventName);
            }
            ;
        },
        animate: function (target, speed, callBack) {  //匀速版
            if (typeof target === "object") {
                // 先判断  传来的参数.
                var time = (typeof speed === "number") ? speed : 300,//默认300ms
                    callback = (typeof speed === "function") ? speed : callBack,  //回调函数
                    sTime = new Date();
                this.each(function () {
                    // 初始值  目标值  变化值
                    var start = {}, change = {};
                    for (var attr in target) {
                        start[attr] = $(this).css(attr);
                        change[attr] = parseInt(target[attr]) - start[attr];
                    }
                    ;
                    // 动画.requestAnimationFrame()
                    (function Fn() {
                        var nTime = new Date(), proportion = (nTime - sTime) / time;
                        // 判断  attr 是否是 opacity zIndex;  unit单位
                        if (proportion >= 1) proportion = 1;   //变为整数.
                        for (var attr in change) {
                            var unit = "px";
                            if (attr == "opacity" || attr == "zIndex") {
                                unit = "";
                            }
                            this.style[attr] = start[attr] + change[attr] * proportion + unit;
                        }
                        if (proportion === 1) {
                            callback && callback.call(this);
                        } else {
                            requestAnimationFrame(Fn.bind(this));//每次调用改变this指向.
                        }
                    }.bind(this))()
                })
            }
        }
    }

    window.$ = $;
})();

