define(['vue', 'text!./template.html', 'css!./style.css'], function (Vue, template, style) {
    return Vue.component('country-code', {
        template: template,
        props: [
            'selected'
        ],
        data: function () {
            return {
                currentCountry: {
                    code: '+86',
                    name: '中国',
                    des: 'China'
                },
                countries: [],
                isOpen: false
            }
        },
        methods: {
            // 获取国家列表
            getCountries: function () {
                var _this = this;
                Methods.ajax({
                    type: "GET",
                    // url: DOMAIN_MAIN + API_PREFIX + 'getCountry',
                    url: DOMAIN_DEV + '/exchange/controller/admin/config/countrycontroller/' + 'getcountrylist',
                    success: function (res) {
                        var resMsg = res.resMsg;
                        // if (resMsg.code === 1000) {
                            _this.countries = res.datas;
                            //按照CODE排序
                            _this.countries.sort(function (x, y) {
                                return parseFloat(x.code) - parseFloat(y.code);
                            });
                        }
                    // }
                })
            // }).done(function (res) {
            //             var resMsg = res.resMsg;
            //             if (resMsg.code === 1000) {
            //                 _this.countries = res.datas.country;
            //                 //按照CODE排序
            //                 _this.countries.sort(function (x,y) {
            //                     return parseFloat(x.code) - parseFloat(y.code);
            //                 });
            //             }
            //         });
            },
            handleSelected: function (country) {
                this.currentCountry = country;
                this.selected(country);
                this.isOpen = false;
            },
            handleClickOutside: function (e) {
                var el = this.$refs.country;
                if (!el.contains(e.target)) {
                    this.isOpen = false;
                }
            },
            dropdownToggle: function () {
                this.isOpen = !this.isOpen;
            }
        },
        mounted: function () {
            this.getCountries();
            document.addEventListener('click', this.handleClickOutside, true);
        },
        beforeDestroy: function() {
            document.removeEventListener('click', this.handleClickOutside, true)
        }
    });
})
