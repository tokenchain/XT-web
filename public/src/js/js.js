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
$s.fn.each = function(cb_fun, need_ret) {
	var res = [];
	for(var i = 0; i < this.length; i++) {
		res[i] = cb_fun.call(this[i]);
	}
	if(need_ret) {
		if(res.length == 1) {
			res = res[0];
		}
		return res;
	}
	return this;
};
$s.fn.eq = function() {
	var nodeList = [];
	for(var i = 0; i < arguments.length; i++) {
		nodeList[i] = this[arguments[i]];
	}
	return $s(nodeList);
};
$s.fn.first = function() {
	return this.eq(0);
};
$s.fn.last = function() {
	return this.eq(this.length-1);
};
$s.fn.find = function(str) {
	var nodeList = [];
	var res=this.each(function(){
		return this.querySelectorAll(str);
	},1);
	if(res instanceof Array){
		for(var i=0;i<res.length;i++){
			for(var j=0;j<res[i].length;j++){
				nodeList.push(res[i][j]);
			}
		}
	}else{
		nodeList=res;
	}
	return $s(nodeList);
};
$s.fn.parent = function() {
	return $s(this.each(function() {
		return this.parentNode;
	}, 1));
};
$s.fn.hide = function() {
	return this.each(function() {
		this.style.display = "none";
	});
};
$s.fn.show = function() {
	return this.each(function() {
		this.style.display = "";
	});
};
$s.fn.text = function(str) {
	if(str!=undefined) {
		return this.each(function() {
			this.innerText = str;
		});
	} else {
		return this.each(function() {
			return this.innerText;
		}, 1);
	}
};
$s.fn.html = function(str) {
	if(str!=undefined) {
		return this.each(function() {
			this.innerHTML = str;
		});
	} else {
		return this.each(function() {
			return this.innerHTML;
		}, 1);
	}
};
$s.fn.outHtml = function(str) {
	if(str!=undefined) {
		return this.each(function() {
			this.outerHTML = str;
		});
	} else {
		return this.each(function() {
			return this.outerHTML;
		}, 1);
	}
};
$s.fn.val = function(str) {
	if(str!=undefined) {
		return this.each(function() {
			this.value = str;
		});
	} else {
		return this.each(function() {
			return this.value;
		}, 1);
	}
};
$s.fn.css = function(key,value,important) {
	if(value!=undefined){
		return this.each(function() {
			this.style.setProperty(key, value,important);
		});
	}else{
		return this.each(function() {
			return this.style.getPropertyValue(key);
		}, 1);
	}
};
$s.fn.attr = function(key,value) {
	if(value!=undefined) {
		return this.each(function() {
			this.setAttribute(key, value);
		});
	}else{
		return this.each(function() {
			return this.getAttribute(key);
		}, 1);
	}
};
$s.fn.removeAttr = function(key) {
	return this.each(function() {
		this.removeAttribute(key);
	});
};
$s.fn.remove = function() {
	return this.each(function() {
		this.remove();
	});
};
$s.fn.append = function(str) {
	return this.each(function() {
		this.insertAdjacentHTML('beforeend', str);
	});
};
$s.fn.prepend = function(str) {
	return this.each(function() {
		this.insertAdjacentHTML('afterbegin', str);
	});
};
$s.fn.hasClass = function(str) {
	return this.each(function() {
		return this.classList.contains(str);
	}, 1);
};
$s.fn.addClass = function(str) {
	return this.each(function() {
		return this.classList.add(str);
	});
};
$s.fn.removeClass = function(str) {
	return this.each(function() {
		return this.classList.remove(str);
	});
};
function _bindEvent(name,f){
        if (typeof (f) == "function") {//重载，若含有参数就注册事件，无参数就触发事件
            this.each(function() {
                this.addEventListener(name, f);
            });
        } else {
            this.each(function() {
                var event = document.createEvent('HTMLEvents');
                event.initEvent(name, true, true);
                this.dispatchEvent(event);
            });
        }
};
$s.fn.click = function(f){//click改为监听事件，
	if (typeof (f) == "function") {//重载，若含有参数就注册事件，无参数就触发事件
		this.each(function() {
			this.addEventListener("click", f);
		});
	} else {
		this.each(function() {
    		var event = document.createEvent('HTMLEvents');  
    		event.initEvent("click", true, true);  
    		this.dispatchEvent(event);
		});
	}
};

$s.fn.tag = function(tag) {
	var dom = document.createElement(tag);
	this[0] = dom;
	return this;
};
$s.fn.dom = function(str) {
	var dom = document.createElement('p');
	dom.innerHTML = str;
	this[0] = dom.childNodes[0];
	return this;
};
$s.about = function() {
	return "new jquery";
};
$s.ajax = function(options) {
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
};



