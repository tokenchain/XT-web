define(['vue', 'text!./template.html', 'css!./style.css'], function (Vue, template, style){
  return Vue.component('dropdown', {
    template: template,
    props: {
      selected: {
        type: Function,
        default: function (item) {
          console.log(item);
        }
      },
      placeholder: {
        type: String,
        default: '请选择……'
      },
      list: {
        type: Array,
        default: function () {
          var list = [];
          return list
        }
      }
    },
    data: function () {
      return {
        currentItem: false,
        isOpen: false
      }
    },
    methods: {
      handleSelected: function (item) {
        this.currentItem = item;
        this.selected(item);
        this.isOpen = false;
      },
      handleClickOutside: function (e) {
        var el = this.$refs.dropdown;
        if (!el.contains(e.target)) {
          this.isOpen = false;
        }
      },
      dropdownToggle: function () {
        this.isOpen = !this.isOpen;
      }
    },
    mounted: function () {
      document.addEventListener('click', this.handleClickOutside, true);
    },
    beforeDestroy() {
      document.removeEventListener('click', this.handleClickOutside, true)
    },
  });
})
