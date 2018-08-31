/**
 * 货币类型配置信息
 * Created by SivenLee on 2017/3/14.
 */
module.exports = {

    "cny" : {
        //中文名称
        name : "人民币",
        //货币符号（没有则用货币单位）
        note : "￥",
        //货币单位
        unit : "CNY",
        //是否显示
        display : true,
        //是否禁用
        disabled : false,
        //最大有效小数位
        maxDecimal : 4,
        //单笔最小提现额度
        minOnePayout : 5,
        //单笔最大提现额度
        maxOnePayout : 200000,
        //单日最大提现额度
        maxDayPayout : 2000000,
        //VIP等级对应的提现费率
        payoutFee : [0.004, 0.003, 0.0025, 0.0020, 0.0015, 0.001],
        //是否开启转账汇款充值功能
        payinByOffline : true,
        //是否开启在线充值功能
        payinByOnline : true,
        //是否开启支付宝充值功能
        payinByAlipay : false,
        //汇款充值费率
        payinFeeByOffline : [0],
        //在线充值费率
        payinFeeByOnline : [0.003],
        //支付宝充值费率
        payinFeeByAlipay : [0],
        //银行卡数量上限
        maxBankcardNumber : 100,
        //支付宝数量上限
        maxAlipayNumber : 100,
        //是否开启借贷
        isLoan : true,
        //最小借贷额度
        minLoanIn : 100,
        //借贷日利率
        loanRate : 0.001
    },
    "btc" : {
        //中文名称
        name : "比特币",
        //货币符号（没有则用货币单位）
        note : "฿",
        //货币单位
        unit : "BTC",
        //是否显示
        display : true,
        //是否禁用
        disable : false,
        //最大有效小数位
        maxDecimal : 8,
        //单笔最小提现额度
        minOnePayout : 0.0001,
        //单笔最大提现额度
        maxOnePayout : 200,
        //单日最大提现额度
        maxDayPayout : 1000,
        //网络手续费
        payoutFee : [0.0001, 0.0002, 0.0003, 0.0004, 0.0005, 0.001],
        //充值到账确认次数
        payinConfirmTimes : 1,
        //提现到账确认次数
        payoutConfirmTimes : 1,
        //提现地址数量上限
        maxBlockNumber : 100,
        //是否开启借贷
        isLoan : true,
        //最小借贷额度
        minLoanIn : 0.1,
        //借贷日利率
        loanRate : 0.001,
        //区块查询网址
        blockUrl : "https://blockchain.info/address/"
    },
    "ltc" : {
        name : "莱特币",
        note : "Ł",
        unit : "LTC",
        display : true,
        disable : false,
        maxDecimal : 8,
        minOnePayout : 0.01,
        maxOnePayout : 5000,
        maxDayPayout : 100000,
        payoutFee : [0.001, 0.002, 0.003, 0.004, 0.005, 0.01],
        payinConfirmTimes : 1,
        payoutConfirmTimes : 1,
        maxBlockNumber : 100,
        isLoan : true,
        minLoanIn : 10,
        loanRate : 0.001,
        blockUrl : "https://blockchain.info/address/"
    },
    "eth" : {
        name : "以太币",
        note : "E",
        unit : "ETH",
        display : true,
        disable : false,
        maxDecimal : 8,
        minOnePayout : 0.01,
        maxOnePayout : 2000,
        maxDayPayout : 10000,
        payoutFee : [0.01],
        payinConfirmTimes : 12,
        payoutConfirmTimes : 36,
        maxBlockNumber : 100,
        isLoan : true,
        minLoanIn : 1,
        loanRate : 0.001,
        blockUrl : "https://etherchain.org/account/"
    },
    "etc" : {
        name : "以太币经典",
        note : "E",
        unit : "ETC",
        display : true,
        disable : false,
        maxDecimal : 8,
        minOnePayout : 0.01,
        maxOnePayout : 20000,
        maxDayPayout : 60000,
        payoutFee : [0.01],
        payinConfirmTimes : 12,
        payoutConfirmTimes : 36,
        maxBlockNumber : 100,
        isLoan : true,
        minLoanIn : 10,
        loanRate : 0.001,
        blockUrl : "http://www.etcchain.com/explorer"
    },
    "btq" : {
        key : "btq",
        name : "比特权",
        note : "Q",
        unit : "BTQ",
        display : false,
        disable : false,
        maxDecimal : 8,
        isLoan : false
    }

}