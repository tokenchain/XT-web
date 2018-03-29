(function($) {
    /***
     * 兼容jquery 1.9
     */
    $.browser = {};
    $.browser.mozilla = /firefox/.test(navigator.userAgent.toLowerCase());
    $.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
    $.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
    $.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());


    $.fn.ajaxSubmit = function(options) {
        if (typeof options == 'function')
            options = { success: options };

        options = $.extend({
            url:  this.attr('action') || window.location,
            type: this.attr('method') || 'GET'
        }, options || {});

        var a = this.formToArray(options.semantic);

        // give pre-submit callback an opportunity to abort the submit
        if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) return this;

        // fire vetoable 'validate' event
        var veto = {};
        $.event.trigger('form.submit.validate', [a, this, options, veto]);
        if (veto.veto)
            return this;

        var q = $.param(a);//.replace(/%20/g,'+');

        if (options.type.toUpperCase() == 'GET') {
            options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
            options.data = null;  // data is null for 'get'
        }
        else
            options.data = q; // data is the query string for 'post'

        var $form = this, callbacks = [];
        if (options.resetForm) callbacks.push(function() { $form.resetForm(); });
        if (options.clearForm) callbacks.push(function() { $form.clearForm(); });

        // perform a load on the target only if dataType is not provided
        if (!options.dataType && options.target) {
            var oldSuccess = options.success;// || function(){};
            callbacks.push(function(data) {
                $(options.target).attr("innerHTML", data).evalScripts().each(oldSuccess, arguments);
            });
        }
        else if (options.success)
            callbacks.push(options.success);

        options.success = function(data, status) {
            for (var i=0, max=callbacks.length; i < max; i++)
                callbacks[i](data, status, $form);
        };

        // are there files to upload?
        var files = $('input:file', this).fieldValue();
        var found = false;
        for (var j=0; j < files.length; j++)
            if (files[j])
                found = true;

        if (options.iframe || found) // options.iframe allows user to force iframe mode
            fileUpload();
        else
            $.ajax(options);

        // fire 'notify' event
        $.event.trigger('form.submit.notify', [this, options]);
        return this;

        // private function for handling file uploads (hat tip to YAHOO!)
        function fileUpload() {
            var form = $form[0];
            var opts = $.extend({}, $.ajaxSettings, options);

            var id = 'jqFormIO' + $.fn.ajaxSubmit.counter++;
            var $io = $('<iframe  id="' + id + '" name="' + id + '" />');
            var io = $io[0];
            var op8 = $.browser.opera && window.opera.version() < 9;
            //if ($.browser.msie || op8)
            //io.src = 'javascript:false;document.write("");';

            $io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });
            var xhr = { // mock object
                responseText: null,
                responseXML: null,
                status: 0,
                statusText: 'n/a',
                getAllResponseHeaders: function() {},
                getResponseHeader: function() {},
                setRequestHeader: function() {}
            };

            var g = opts.global;
            // trigger ajax global events so that activity/block indicators work like normal
            if (g && ! $.active++) $.event.trigger("ajaxStart");
            if (g) $.event.trigger("ajaxSend", [xhr, opts]);
            var cbInvoked = 0;
            var timedOut = 0;
            // take a breath so that pending repaints get some cpu time before the upload starts
            setTimeout(function() {
                document.domain = options.domain;
                $io.appendTo('body');

                // jQuery's event binding doesn't work for iframe events in IE
                io.attachEvent ? io.attachEvent('onload', cb) : io.addEventListener('load', cb, false);

                if(html5() && xhr.upload){
                    xhr.upload.addEventListener("progress", process, false);
                }
                // make sure form attrs are set
                var encAttr = form.encoding ? 'encoding' : 'enctype';
                var t = $form.attr('target');
                $form.attr({
                    target:   id,
                    method:  'POST',
                    encAttr: 'multipart/form-data',
                    action:   opts.url
                });
                // support timout
                if (opts.timeout)
                    setTimeout(function() { timedOut = true; cb(); }, opts.timeout);
                form.submit();
                $form.attr('target', t); // reset target
            }, 10);

            function process(){
                alert(0);
            }

            function html5() {
                if (typeof(Worker) !== "undefined") {
                    return true;
                }else {
                    return false;
                }
            }

            function cb() {
                if (cbInvoked++) return;
                io.detachEvent ? io.detachEvent('onload', cb) : io.removeEventListener('load', cb, false);
                var ok = true;
                try {
                    if (timedOut) throw 'timeout';
                    var data, doc;
                    doc = io.contentWindow ? io.contentWindow.document : io.contentDocument ? io.contentDocument : io.document;
                    xhr.responseText = doc.body ? doc.body.innerHTML : null;
                    xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;

                    if (opts.dataType == 'json' || opts.dataType == 'script') {
                        var ta = doc.getElementsByTagName('textarea')[0];
                        data = ta ? ta.value : xhr.responseText;
                        if (opts.dataType == 'json')
                            eval("data = " + data);
                        else
                            $.globalEval(data);
                    }
                    else if (opts.dataType == 'xml') {
                        data = xhr.responseXML;
                        if (!data && xhr.responseText != null)
                            data = toXml(xhr.responseText);
                    }
                    else {
                        data = xhr.responseText;
                    }
                }catch(e){
                    ok = false;
                    //$.handleError(opts, xhr, 'error', e);
                    alert("catch error:"+e.toString());
                }

                // ordering of these callbacks/triggers is odd, but that's how $.ajax does it
                if (ok) {
                    opts.success(data, 'success');
                    if (g) $.event.trigger("ajaxSuccess", [xhr, opts]);
                }
                if (g) $.event.trigger("ajaxComplete", [xhr, opts]);
                if (g && ! --$.active) $.event.trigger("ajaxStop");
                if (opts.complete) opts.complete(xhr, ok ? 'success' : 'error');

                // clean up
                setTimeout(function() {
                    $io.remove();
                    xhr.responseXML = null;
                }, 100);
            };

            function toXml(s, doc) {
                if (window.ActiveXObject) {
                    doc = new ActiveXObject('Microsoft.XMLDOM');
                    doc.async = 'false';
                    doc.loadXML(s);
                }
                else
                    doc = (new DOMParser()).parseFromString(s, 'text/xml');
                return (doc && doc.documentElement && doc.documentElement.tagName != 'parsererror') ? doc : null;
            };
        };
    };
    $.fn.ajaxSubmit.counter = 0; // used to create unique iframe ids


    $.fn.ajaxForm = function(options) {
        return this.ajaxFormUnbind().submit(submitHandler).each(function() {
            // store options in hash
            this.formPluginId = $.fn.ajaxForm.counter++;
            $.fn.ajaxForm.optionHash[this.formPluginId] = options;
            $(":submit,input:image", this).click(clickHandler);
        });
    };

    $.fn.ajaxForm.counter = 1;
    $.fn.ajaxForm.optionHash = {};

    function clickHandler(e) {
        var $form = this.form;
        $form.clk = this;
        if (this.type == 'image') {
            if (e.offsetX != undefined) {
                $form.clk_x = e.offsetX;
                $form.clk_y = e.offsetY;
            } else if (typeof $.fn.offset == 'function') { // try to use dimensions plugin
                var offset = $(this).offset();
                $form.clk_x = e.pageX - offset.left;
                $form.clk_y = e.pageY - offset.top;
            } else {
                $form.clk_x = e.pageX - this.offsetLeft;
                $form.clk_y = e.pageY - this.offsetTop;
            }
        }
        // clear form vars
        setTimeout(function() { $form.clk = $form.clk_x = $form.clk_y = null; }, 10);
    };

    function submitHandler() {
        // retrieve options from hash
        var id = this.formPluginId;
        var options = $.fn.ajaxForm.optionHash[id];
        $(this).ajaxSubmit(options);
        return false;
    };

    /**
     * ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
     *
     * @name   ajaxFormUnbind
     * @return jQuery
     * @cat    Plugins/Form
     * @type   jQuery
     */
    $.fn.ajaxFormUnbind = function() {
        this.unbind('submit', submitHandler);
        return this.each(function() {
            $(":submit,input:image", this).unbind('click', clickHandler);
        });

    };

    $.fn.formToArray = function(semantic) {
        var a = [];
        if (this.length == 0) return a;

        var form = this[0];
        var els = semantic ? form.getElementsByTagName('*') : form.elements;
        if (!els) return a;
        for(var i=0, max=els.length; i < max; i++) {
            var el = els[i];
            var n = el.name;
            if (!n) continue;

            if (semantic && form.clk && el.type == "image") {
                // handle image inputs on the fly when semantic == true
                if(!el.disabled && form.clk == el)
                    a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
                continue;
            }

            var v = $.fieldValue(el, true);
            if (v && v.constructor == Array) {
                for(var j=0, jmax=v.length; j < jmax; j++)
                    a.push({name: n, value: v[j]});
            }
            else if (v !== null && typeof v != 'undefined')
                a.push({name: n, value: v});
        }

        if (!semantic && form.clk) {
            // input type=='image' are not found in elements array! handle them here
            var inputs = form.getElementsByTagName("input");
            for(var i=0, max=inputs.length; i < max; i++) {
                var input = inputs[i];
                var n = input.name;
                if(n && !input.disabled && input.type == "image" && form.clk == input)
                    a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
            }
        }
        return a;
    };

    $.fn.formSerialize = function(semantic) {
        //hand off to jQuery.param for proper encoding
        return $.param(this.formToArray(semantic));
    };

    $.fn.fieldSerialize = function(successful) {
        var a = [];
        this.each(function() {
            var n = this.name;
            if (!n) return;
            var v = $.fieldValue(this, successful);
            if (v && v.constructor == Array) {
                for (var i=0,max=v.length; i < max; i++)
                    a.push({name: n, value: v[i]});
            }
            else if (v !== null && typeof v != 'undefined')
                a.push({name: this.name, value: v});
        });
        //hand off to jQuery.param for proper encoding
        return $.param(a);
    };

    $.fn.fieldValue = function(successful) {
        for (var val=[], i=0, max=this.length; i < max; i++) {
            var el = this[i];
            var v = $.fieldValue(el, successful);
            if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length))
                continue;
            v.constructor == Array ? $.merge(val, v) : val.push(v);
        }
        return val;
    };

    $.fieldValue = function(el, successful) {
        var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
        if (typeof successful == 'undefined') successful = true;

        if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
                (t == 'checkbox' || t == 'radio') && !el.checked ||
                (t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
                tag == 'select' && el.selectedIndex == -1))
            return null;

        if (tag == 'select') {
            var index = el.selectedIndex;
            if (index < 0) return null;
            var a = [], ops = el.options;
            var one = (t == 'select-one');
            var max = (one ? index+1 : ops.length);
            for(var i=(one ? index : 0); i < max; i++) {
                var op = ops[i];
                if (op.selected) {
                    // extra pain for IE...
                    var v = $.browser.msie && !(op.attributes['value'].specified) ? op.text : op.value;
                    if (one) return v;
                    a.push(v);
                }
            }
            return a;
        }
        return el.value;
    };

    $.fn.clearForm = function() {
        return this.each(function() {
            $('input,select,textarea', this).clearFields();
        });
    };

    $.fn.clearFields = $.fn.clearInputs = function() {
        return this.each(function() {
            var t = this.type, tag = this.tagName.toLowerCase();
            if (t == 'text' || t == 'password' || tag == 'textarea')
                this.value = '';
            else if (t == 'checkbox' || t == 'radio')
                this.checked = false;
            else if (tag == 'select')
                this.selectedIndex = -1;
        });
    };

    $.fn.resetForm = function() {
        return this.each(function() {
            // guard against an input with the name of 'reset'
            // note that IE reports the reset function as an 'object'
            if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType))
                this.reset();
        });
    };

})(jQuery);

(function($){
    $.fn.initFileUpload=function(options){
        var myServer = window.location.protocol + "//img1."+document.domain;
        var settings = {
            server : myServer,
            domain : document.domain,
            initShowNum : 2,//初始化显示上传数量
            needAdd : true,//需要添加
            maxNum : 6,
            noUpShowTexts : [],//自定义未上传的显示文本
            upUrl : "/fileaction",//上传 的url
            getServer : function(){
                return this.server + this.upUrl;
            },
            minNum : 0, //至少上传的文件数量
            plan : "goods",
            userType : 1,////上传者的所属类型  1.默认普通网站用户  2.管理员
            isPicFile : false,///是否限制为图片上传 ，true时只能上传图片文件 ， false 时不限
            picExt : ".jpg.jpeg.gif.png.bmp",//"jpg", "bmp", "gif", "png","jpeg"
            savePicSize : false,///图片名称中是否保存图片尺寸
            bgSize : '88x88',
            isAuth : false,
            success:function(param){

            }
        }
        options = $.extend(settings, options);

        var $this = $(this),
            userId = options.userType == 1 ? Methods.getCookie(ENV + 'uid') : Methods.getCookie(ENV + 'uname'),
            baseFileHtm = '<form name="uploadForm" action="'+settings.getServer()+'" enctype="multipart/form-data" method="post" target="uploadTar"><div class="item"><span class="preview"><a></a></span><span class="upload "><input type="hidden" value="'+settings.plan+'" name="plan_task_name"><input type="hidden" value="'+userId+'" name="userId"><input type="hidden" value="'+options.userType+'" name="userType"><input type="hidden" value="'+options.savePicSize+'" name="savePicSize"><input type="hidden" value="'+options.isAuth+'" name="auth"><input type="file" name="_fma.pu._0.ima"></span>'+
                '<input type="hidden" value="" name="fileUrl" class="J_PicUrl"></div></form>';

        $this.append(baseFileHtm);

        upFilesInputs=$this.find("input:file");

        upFilesInputs.each(function(){
            bindChange($(this));
        });

        function bindChange(curFile){
            var previewA=curFile.parents(".upload").prev(".preview").find("a"),
                curForm=curFile.parents("form[target='uploadTar']"),
                name = curFile.val();
            curFile.change(function(){
                if(options.isPicFile){
                    var fileType = curFile.val().substring(curFile.val().lastIndexOf(".") + 1).toLocaleLowerCase();
                    if(options.picExt.indexOf(fileType) < 0){
                        JuaBox.showWrong("请确认您的上传是否为图片");
                        return;
                    }
                }
                previewA.addClass("ajaxing").text("");

                var ops = {
                    domain : settings.domain ,
                    type:"POST",
                    url: settings.getServer(),
                    dataType: 'json',
                    success: function(res) {
                        if(res.isSuc){
                            if(isPic(name)){
                                // 目前是完整的图片加载，当图片越大，加载时间时的空白期便越长，待改进
                                // var bg = res.small;
                                var bg = options.server + "/picauth?file=" + res.fileName;
                                bg = bg.replace("&amp;" , "&");
                                if(settings.bgSize != '88x88'){
                                    bg = bg.replace("88x88" , settings.bgSize);
                                }
                                var protocal = bg.substring(0, bg.indexOf("://"));

                                var srcProtocal = options.server.substring(0, options.server.indexOf("://"));

                                if(protocal != srcProtocal){
                                    bg = bg.replace(protocal, srcProtocal);
                                }
                                previewA.css({background:'url("'+ bg +'&type=1") no-repeat scroll 50% 50% transparent',border:"1px solid #FF8E43",backgroundSize:'contain'});
                            }else{
                                previewA.css({border:"1px solid #FF8E43"}).text("上传完成");
                            }

                            curForm.find("input:hidden[name='fileUrl']").val(res.fileName);

                            options.success(res);
                        }else{
                            previewA.css({background:'#FFFFFF',border:"1px solid #FF0000"}).text("上传失败");
                            JuaBox.showWrong(res.alertInfo);
                        }
                    },
                    error:function(error){
                        alert("lasterror:"+error.toString());
                    }
                };

                curForm.ajaxSubmit(ops);
            });
        }

        function isPic(name){///判断上传文件是否为图片
            var ext = name.substr(name.indexOf("."));
            return options.picExt.indexOf(ext) >= 0;
        }

    };
})(jQuery);
