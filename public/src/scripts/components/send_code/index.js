/**
 *作者: GongQi
 *时间: 2018/5/24
 *功能: 废弃
 */
define(['vue', 'common/juabox', 'common/methods'], function (Vue, JuaBox, Methods) {
    return Vue.component('send-code', {
        template: `<a href="javascript:;" v-on:click="sendCode" class="code-num" :class="['', '', {disabled: isTimeout}]"><span v-if="isTimeout">{{timeout}}秒</span><span v-else>获取验证码</span></a>`,

        props: {
            // 验证码类型
            codeType: {
                type: Number,
                default: 1
            },
            userType: {
                type: Number,
                default: 1
            },
            countryCode: {
                type: String,
                default: '+86',
            },
            safePwd: {
                type: String,
                default: '',
            },
            cardId: {
                type: String,
                default: '',
            },
            userName: {
                type: String,
                default: ''
            }
        },
        data: function () {
            return {
                timeout: 0,
                text: "<%= LANG('测试') %>"
            }
        },
        computed: {
            isTimeout: function () {
                return this.timeout > 0;
            }
        },
        methods: {
            countDown: function () {
                var seconds = this.timeout = 60;
                var _this = this;

                function tick() {
                    seconds--;
                    _this.timeout = seconds;
                    if (seconds > 0) {
                        setTimeout(tick, 1000);
                    }
                }

                tick();
            },
            sendCode: function () {
                var _this = this;
                var data = {
                    codeType: this.codeType,
                    userName: this.userName,
                    countryCode: this.countryCode,
                    safePwd: this.safePwd,
                    cardId: this.cardId
                }
                if (this.timeout > 0) {
                    return;
                } else if (this.userName.length < 8) {
                    JuaBox.sure("请输入正确的用户名")
                } else {
                    Methods.ajax({
                        url: DOMAIN_MAIN + API_PREFIX + 'sendcode',
                        data: data,
                        success: function (res) {
                            var resMsg = res.resMsg;
                            if (resMsg.code === 1000) {
                                _this.countDown();
                                window.localStorage.setItem(ENV + 'dynamicCode', res.datas.dynamicCode);
                            }
                            JuaBox.sure(EXX.L(resMsg.message));
                        }
                    });
                }
            }
        },
        mounted: function () {
        }
    });
})
