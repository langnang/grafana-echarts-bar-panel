export default class xAxis {
    constructor(options, data) {
        this.type = options.type || 'category';
        this.format = options.format || 'YYYY--MM-DD';
        this.column = options.column || '';
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
        let index = this._data[0].columns.indexOf(this.column);
        index = index > -1 ? index : 0;
        this.data = this._data[0].rows.map(v => v[index]);
    }
    $formatter() {
        console.log(this._options.formatter);
        if (this._options.formatter == 'horizontal') {
            this.axisLabel.formatter = function (v) { return v; };
        } else if (this._options.formatter == 'vertical') {
            this.axisLabel.formatter = function (v) { return v.split("").join("\n"); };
        }
        console.log(this.axisLabel.formatter);
    }
    $type() { }
    $format() { }
    print(toString) {
        console.log(this);
        if (toString) {
            return JSON.stringify(this);
        }
        return this;
    }
}