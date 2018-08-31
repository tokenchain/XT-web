/***********
**Vue 行内图表组件
************/
define(['vue', 'text!./template.html'], function (Vue, template){
  return Vue.component('inline-chart', {
    template: template,
    props: {
      settings: {
        type: Object,
        default: function () {
          return {}
        }
      },
      type: String,
      data: String
    },
    data: function () {
      return {
        defaultSettings: {
          delimiter: ",",
          fill: "#c6d9fd",
          height: 16,
          min: 0,
          stroke: "#4d89f9",
          strokeWidth: 1,
          width: 32
        }
      }
    },
    computed: {
      fill: function () {
        return this.getSetting('fill');
      },
      stroke: function () {
        return this.getSetting('stroke');
      },
      strokeWidth: function () {
        return this.getSetting('strokeWidth');
      },
      linePoints: function () {
        return this.generateLinePoints();
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
      getValues: function () {
        var data = this.data.split(this.getSetting('delimiter'));
        return data.map(function(value){
          return parseFloat(value);
        });
      },
      generateLinePoints: function () {
        var points = {},
            values = this.getValues(),
            width = this.getSetting('width'),
            strokeWidth = this.getSetting('strokeWidth'),
            height = this.getSetting('height') - strokeWidth;
        if (values.length == 1) values.push(values[0])
        var max = Math.max.apply(Math, this.getSetting('max') == undefined ? values : values.concat(this.getSetting('max'))),
            min = Math.min.apply(Math, this.getSetting('min') == undefined ? values : values.concat(this.getSetting('min'))),
            diff = max - min;
        var xScale = function (input) {
          return input * (width / (values.length - 1));
        }
        var yScale = function (input) {
          var y = height;
          if (diff) {
            y -= ((input - min) / diff) * height;
          }
          return y + strokeWidth / 2;
        }

        var zero = yScale(Math.max(min, 0)),
            coords = [0, zero];
        for (var i = 0; i < values.length; i++) {
          coords.push(
            xScale(i),
            yScale(values[i])
          )
        }
        coords.push(width, zero);

        if (this.getSetting('fill')) {
          points.polygon = coords.join(' ');
        }
        if (this.getSetting('strokeWidth')) {
          points.polyline = coords.slice(2, coords.length -2).join(' ');
        }
        return points;
      }
    },
    mounted: function () {
    }
  });
})
