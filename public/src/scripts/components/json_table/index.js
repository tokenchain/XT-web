/***********
**Vue JSON 数据表格组件
************/
define(['vue', 'text!./template.html'], function (Vue, template){
  return Vue.component('json-table', {
    template: template,
    props: {
      rows: {
        type: Array,
        default: function (item) {
          console.log(item);
        }
      },
      columns: {
        type: Array,
        default: function () {
          return [];
        }
      },
      settings: {
        type: Object,
        default: function () {
          return {}
        }
      },
      onClickCell: {
        type: Function,
        default: function (rowData, columnName) {
        }
      },
      onClickRow: {
        type: Function,
        default: function (rowData) {
        }
      },
      onClickHeader: {
        type: Function,
        default: function (columnName) {
        }
      }
    },
    data: function () {
      return {
        defaultSettings: {
          header: true,
          noRowsMessage: 'No items',
          rowClass: ''
        }
      }
    },
    computed: {
      cols: function () {
        return this.normalizeColumns();
      },
      noRowsMessage: function () {
        return this.getSetting('noRowsMessage');
      }
    },
    methods: {
      getSetting: function (name) {
        var settings = this.settings;
        if(!settings || typeof settings[name] == 'undefined') {
          return this.defaultSettings[name]
        }
        return settings[name]
      },
      getRowClass: function(item) {
        var rowClass = this.getSetting('rowClass');
        if (typeof rowClass == 'function') {
          return rowClass(item);
        } else {
          return rowClass;
        }
      },
      getItemField: function (item, field) {
        return item[field];
      },
      normalizeColumns: function () {
        var cols = this.columns,
            getItemField = this.getItemField,
            items = this.rows,
            rowClass = this.getSetting('rowClass');
        if(!cols){
          if(!items || !items.length) {
            return [];
          }
          return Object.keys(items[0]).map(function(key) {
            return {key: key, label: key, cell: getItemField}
          });
        }

        return cols.map(function(col) {
          var key;
          if(typeof col == 'string') {
            return {
              key: col,
              label: col,
              cell: getItemField
            }
          }

          if(typeof col == 'object') {
            key = col.key || col.label;
            //默认列数据，如果没key参数就用label作为key,没有label参数就用key当作label
            return {
              key: key,
              label: col.label || key,
              cell: col.cell || getItemField
            }
          }
          return {
            key: 'unknown',
            name: 'unknown',
            cell: 'unknown',
          }
        })
      }
    },
    mounted: function () {
    },
    beforeDestroy () {
    },
  });
})
