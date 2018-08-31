/**
 * 配置市场的法定货币及webId (webId目前由后端sdk配置,前端无需传参)
 * Created by zhao.long on 2018/4/19
 */

module.exports = {
    "cny": {
        // 站点id
        webId: 101,
        // 法币单位
        unit: "CNY",
        // 别名
        alias: "qc",
        // 货币符号
        note: "¥",
        // 精确位
        decimal: 3
    },
    "krw": {
        // 站点id
        webId: 100,
        // 法币单位
        unit: "KRW",
        // 别名
        alias: "krw",
        // 货币符号
        note: "₩",
        // 精确位
        decimal: 3
    },
    "thb": {
        // 站点id
        webId: 99,
        // 法币单位
        unit: "THB",
        // 别名
        alias: "thb",
        // 货币符号
        note: "฿",
        // 精确位
        decimal: 3
    }
}
