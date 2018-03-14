<html lang="en"><head>
    <meta charset="UTF-8">
    <title></title>
<style id="system" type="text/css">h1,h2,h3,h4,h5,h6,p,blockquote {    margin: 0;    padding: 0;}body {    font-family: "Helvetica Neue", Helvetica, "Hiragino Sans GB", Arial, sans-serif;    font-size: 13px;    line-height: 18px;    color: #737373;    margin: 10px 13px 10px 13px;}a {    color: #0069d6;}a:hover {    color: #0050a3;    text-decoration: none;}a img {    border: none;}p {    margin-bottom: 9px;}h1,h2,h3,h4,h5,h6 {    color: #404040;    line-height: 36px;}h1 {    margin-bottom: 18px;    font-size: 30px;}h2 {    font-size: 24px;}h3 {    font-size: 18px;}h4 {    font-size: 16px;}h5 {    font-size: 14px;}h6 {    font-size: 13px;}hr {    margin: 0 0 19px;    border: 0;    border-bottom: 1px solid #ccc;}blockquote {    padding: 13px 13px 21px 15px;    margin-bottom: 18px;    font-family:georgia,serif;    font-style: italic;}blockquote:before {    content:"C";    font-size:40px;    margin-left:-10px;    font-family:georgia,serif;    color:#eee;}blockquote p {    font-size: 14px;    font-weight: 300;    line-height: 18px;    margin-bottom: 0;    font-style: italic;}code, pre {    font-family: Monaco, Andale Mono, Courier New, monospace;}code {    background-color: #fee9cc;    color: rgba(0, 0, 0, 0.75);    padding: 1px 3px;    font-size: 12px;    -webkit-border-radius: 3px;    -moz-border-radius: 3px;    border-radius: 3px;}pre {    display: block;    padding: 14px;    margin: 0 0 18px;    line-height: 16px;    font-size: 11px;    border: 1px solid #d9d9d9;    white-space: pre-wrap;    word-wrap: break-word;}pre code {    background-color: #fff;    color:#737373;    font-size: 11px;    padding: 0;}@media screen and (min-width: 768px) {    body {        width: 748px;        margin:10px auto;    }}</style><style id="custom" type="text/css"></style></head>
<body marginheight="0"><p><strong>发布广告</strong>

</p>
<p>POST <a href="http://192.168.5.103:8011/api/web/V1_0/releaseAd">http://192.168.5.103:8011/api/web/V1_0/releaseAd</a>

</p>
<ul>
<li><strong>market:</strong>            市场qc_cny或者usdt_cny</li>
<li><strong>type:</strong>            交易类型 2---买， 1----卖</li>
<li><strong>amount:</strong>            交易数量</li>
<li><strong>saleType:</strong>            2---溢价， 1----固定价格</li>
<li><strong>timeLimit:</strong>            时间限制</li>
<li><strong>minAmount:</strong>            最小交易价格</li>
<li><strong>maxAmount:</strong>            最大交易价格</li>
<li><strong>payType:</strong>            支付类型 1----微信， 2---支付宝， 3------银行卡</li>
<li><strong>fixedPrice:</strong>            价格</li>
<li><strong>memo:</strong>                留言</li>
</ul>
<p>返回

</p>
<pre><code class="lang-json">{
    "datas": "",
    "resMsg": {
        "code": 1001,
        "method": "registerMerchant",
        "message": ""
    }
}</code></pre>
<p><strong>修改广告状态</strong>

</p>
<p>POST <a href="http://192.168.5.103:8011/api/web/V1_0/adStatus">http://192.168.5.103:8011/api/web/V1_0/adStatus</a>

</p>
<ul>
<li><strong>adId:</strong>            订单编号</li>
<li><strong>status:</strong>            交易状态</li>
</ul>
<p>返回

</p>
<pre><code class="lang-json">{
    "datas": "",
    "resMsg": {
        "code": 1001,
        "method": "registerMerchant",
        "message": ""
    }
}</code></pre>
<p><strong>广告</strong>

</p>
<p>POST <a href="http://192.168.5.103:8011/api/web/V1_0/AdInfo">http://192.168.5.103:8011/api/web/V1_0/AdInfo</a>

</p>
<ul>
<li><strong>type:</strong>                类型。1--卖。2---买</li>
<li><strong>isOwn:</strong>               是否是自己的广告。 1--自己的   2不是自己的的</li>
<li><strong>market:</strong></li>
<li><strong>pageSize</strong>            每页数量</li>
<li><strong>page</strong>                  页码</li>
</ul>
<pre><code class="lang-json">{
    "datas": {
        "Ad": [
            {
                "minAmount": "5.00000000",
                "country": "中国",
                "amount": "68.00000000",
                "floatPrice": null,
                "saleType": 1,
                "memo": null,
                "type": 1,
                "fixedPrice": "100.00000000",
                "timeLimit": 30,
                "market": null,
                "payType": "1,2",
                "isTop": 0,
                "id": 16,
                "maxAmount": "10.00000000",
                "user": {
                    "regTime": 1507477620300,
                    "realAuth": 1,
                    "averageTime": null,
                    "mobileAuth": 2,
                    "name": "18718436458",
                    "authSeller": 0,
                    "online": 0,
                    "language": "中文",
                    "id": 176,
                    "avatar": "u002.jpg",
                    "emailAuth": 2,
                    "tradeTotal": 0
                },
                "status": 0
            }
        ]
    },
    "resMsg": {
        "code": 1000,
        "method": "AdInfo",
        "message": "SUCCESS"
    }
}</code></pre>
<p><strong>用户信息</strong>

</p>
<p>POST <a href="http://192.168.5.103:8011/api/web/V1_0/userInfo">http://192.168.5.103:8011/api/web/V1_0/userInfo</a>

</p>
<ul>
<li><strong>userId:</strong>            用户编号</li>
</ul>
<pre><code class="lang-josn">"datas": {
        "regTime": 1507477620300,
        "realAuth": 1,
        "averageTime": null,
        "mobileAuth": 2,
        "name": "18718436458",
        "authSeller": 0,
        "online": 0,
        "language": "中文",
        "id": 176,
        "avatar": "u002.jpg",
        "emailAuth": 2,
        "tradeTotal": 0
    },
    "resMsg": {
        "code": 1000,
        "method": "userInfo",
        "message": "SUCCESS"
    }
}</code></pre>
<p><strong>支付对象</strong>

</p>
<p>POST <a href="http://192.168.5.103:8011/api/web/V1_0/payment">http://192.168.5.103:8011/api/web/V1_0/payment</a>

</p>
<ul>
<li><strong>userId:</strong>            用户编号</li>
</ul>
<pre><code class="lang-json">{
    "datas": {
        "bank": {
            "bank": "11111113",
            "name": "xmm2",
            "branch": "11111113",
            "account": "11111113"
        },
        "weixin": {
            "qrcode": "1111111",
            "name": "xmm",
            "account": "1111111"
        },
        "alipay": {
            "qrcode": "11111112",
            "name": "xmm1",
            "account": "11111112"
        }
    },
    "resMsg": {
        "code": 1000,
        "method": "payment",
        "message": "SUCCESS"
    }
}</code></pre>
<p><strong>订单</strong>

</p>
<p>POST <a href="http://192.168.5.103:8011/api/web/V1_0/orderInfo">http://192.168.5.103:8011/api/web/V1_0/orderInfo</a>


</p>
<pre><code class="lang-json">{
    "datas": {
        "order": [
            {
                "amount": "8.00000000",
                "ad": {
                    "minAmount": "5.00000000",
                    "country": "中国",
                    "amount": "68.00000000",
                    "floatPrice": null,
                    "saleType": 1,
                    "memo": null,
                    "type": 1,
                    "fixedPrice": "100.00000000",
                    "timeLimit": 30,
                    "market": null,
                    "payType": "1,2",
                    "isTop": 0,
                    "id": 16,
                    "maxAmount": "10.00000000",
                    "user": {
                        "regTime": 1507477620300,
                        "realAuth": 1,
                        "averageTime": null,
                        "mobileAuth": 2,
                        "name": "18718436458",
                        "authSeller": 0,
                        "online": 0,
                        "language": "中文",
                        "id": 176,
                        "avatar": "u002.jpg",
                        "emailAuth": 2,
                        "tradeTotal": 0
                    },
                    "status": 0
                },
                "payTime": null,
                "memo": null,
                "type": 1,
                "createTime": 1514623335000,
                "price": "100.00000000",
                "startTime": null,
                "payment": {
                    "bank": {
                        "bank": "11111113",
                        "name": "xmm2",
                        "branch": "11111113",
                        "account": "11111113"
                    },
                    "weixin": {
                        "qrcode": "1111111",
                        "name": "xmm",
                        "account": "1111111"
                    },
                    "alipay": {
                        "qrcode": "11111112",
                        "name": "xmm1",
                        "account": "11111112"
                    }
                },
                "id": 22,
                "endTime": null,
                "user": {
                    "regTime": 1508748701683,
                    "realAuth": 1,
                    "averageTime": null,
                    "mobileAuth": 2,
                    "name": "13812345678",
                    "authSeller": 0,
                    "online": 0,
                    "language": "中文",
                    "id": 348,
                    "avatar": "u011.jpg",
                    "emailAuth": 2,
                    "tradeTotal": 0
                },
                "status": 0
            }
        ]
    },
    "resMsg": {
        "code": 1000,
        "method": "orderInfo",
        "message": "SUCCESS"
    }
}</code></pre>
<p><strong>修改订单状态</strong>

</p>
<p>POST <a href="http://192.168.5.103:8011/api/web/V1_0/orderStatus">http://192.168.5.103:8011/api/web/V1_0/orderStatus</a>

</p>
<ul>
<li><strong>orderId:</strong>            订单编号</li>
<li><strong>status:</strong>            交易状态     0---接单中。1--交易中 3----交易申诉 4----订单确认</li>
</ul>
<p>返回

</p>
<pre><code class="lang-json">{
    "datas": "",
    "resMsg": {
        "code": 1001,
        "method": "registerMerchant",
        "message": ""
    }
}</code></pre>
<p><strong>生成订单</strong>

</p>
<p>POST <a href="http://192.168.5.103:8011/api/web/V1_0/order">http://192.168.5.103:8011/api/web/V1_0/order</a>

</p>
<ul>
<li><strong>adId:</strong>            广告id</li>
<li><strong>amount:</strong>            数量</li>
<li><strong>price:</strong>            交易金额</li>
</ul>
<p>返回

</p>
<pre><code class="lang-json">{
    "datas": "",
    "resMsg": {
        "code": 1000,
        "method": "order",
        "message": "申请交易成功"
    }
}</code></pre>
<p><strong>交保证金</strong>

</p>
<p>POST <a href="http://192.168.5.103:8011/api/web/V1_0/getBail">http://192.168.5.103:8011/api/web/V1_0/getBail</a>

</p>
<ul>
<li><strong>amount:</strong>            数量</li>
<li><strong>market:</strong>            qc_cny</li>
</ul>
<p>返回
</p>
<pre><code class="lang-json">{
    "datas": "",
    "resMsg": {
        "code": 1000,
        "method": "order",
        "message": "申请交易成功"
    }
}</code></pre>
<p>Edit By <a href="http://mahua.jser.me">MaHua</a></p>
</body></html>