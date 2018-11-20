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
ud({
    "code": "2jgf16i7",
    "link": {
        cn: '1',
        en: '2',
        kr: '3',
        jp: '4',
        hk: '5'
    } [getCookie('wlan')] == '1' ? "https://xt.udesk.cn/im_client/?web_plugin_id=57038" : "https://xt.udesk.cn/im_client/?web_plugin_id=59496&language=en-us"
    // 中文："https://xt.udesk.cn/im_client/?web_plugin_id=57038"   英文："link": "https://xt.udesk.cn/im_client/?web_plugin_id=59496&language=en-us"
});