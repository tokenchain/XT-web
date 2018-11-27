(function (a, h, c, b, f, g) {
    a["UdeskApiObject"] = f;
    a[f] = a[f] || function () {
        (a[f].d = a[f].d || []).push(arguments)
    };
    g = h.createElement(c);
    g.async = 1;
    g.charset = "utf-8";
    g.src = b;
    c = h.getElementsByTagName(c)[0];
    c.parentNode.insertBefore(g, c)
})(window, document, "script", "//assets-cli.udesk.cn/im_client/js/udeskApi.js", "ud");
var udeskPath = 'https://xt.udesk.cn/im_client/'
ud({
    "code": "2jgf16i7",
    "link": {
        cn: udeskPath + '?web_plugin_id=57038',
        en: udeskPath + '?web_plugin_id=59496&language=en-us',
        kr: '',
        jp: '',
        hk: ''
    } [getCookie('wlan')]
});