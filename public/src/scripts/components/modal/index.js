/**
 * Created by hosanna on 17-5-23.
 * vue 弹窗组件
 */
define(['vue', 'text!./template.html', 'css!./style.css'], function (Vue, template, style){
  return Vue.component('modal', {
    template: template,
    props: {
      isOpen: Boolean
    },
    data: function () {
      return {
        open: this.isOpen
      }
    },
    methods: {
      close: function() {
        this.open = false;
      }
    }
  });

});
