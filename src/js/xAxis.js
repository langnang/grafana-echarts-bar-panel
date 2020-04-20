export default class xAxis {
    constructor(options, data) {
        this.type = options.type || 'category';
        this.format = options.format || 'YYYY--MM-DD';
        this.column = options.column || '';
        this.show = options.show || true;
        this.splitLine = options.splitLine || {
            show: true,
            lineStyle: {
                type: "solid",
                opacity: 0.3
            }
        };
        this.data = [];
        this.axisLabel = {};
        this._data = data;
        this._options = options;
        this.$init();
    }
    $init() {
        this.$formatter();
        this.$data();
    }
    $column() { }
    $data() {
        let index = this._data[0].columns.map(v => v.text).indexOf(this.column);
        index = index > -1 ? index : 0;
        // console.log(this.column);
        // console.log(this._data[0].columns.map(v => v.text));
        // console.log(index);
        this.data = this._data[0].rows.map(v => v[index]);
        // console.log(this.data);
    }
    $formatter() {
        // console.log(this._options.formatter);
        if (this._options.formatter == 'horizontal') {
            this.axisLabel.formatter = function (v) { return v; };
        } else if (this._options.formatter == 'vertical') {
            this.axisLabel.formatter = function (v) { return v.split("").join("\n"); };
        }
        // console.log(this.axisLabel.formatter);
    }
    $type() { }
    $format() { }
    print(toString) {
        // console.log(this);
        if (toString) {
            return JSON.stringify(this);
        }
        return this;
    }
}