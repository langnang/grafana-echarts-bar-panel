export default class yAxis {
    constructor(options, data) {
        this.column = options.column || '';
        this.type = options.type || "value";
        this.unit = options.unit || '';
        this.splitLine = options.splitLine || {
            lineStyle: {
                type: "solid",
                opacity: 0.3
            }
        };
        this.axisLabel = options.axisLabel || {
            formatter: v => `${v}${this.unit}`,
        };
        this._data = data;
        this.$init();
    }
    $init() {
        // console.log(this);
        // this.$data();
        // this.$unit();
    }
    $column() { }
    $data() {
        let index = this._data[0].columns.map(v => v.text).indexOf(this.column);
        index = index > -1 ? index : 1;
        this.data = this._data[0].rows.map(v => v[index]);
    }
    $unit() {
        this.axisLabel.formatter = v => `${v}${this.unit}`;
    }
    $show() { }
    $type() { }
    $format() { }
    print(toString) {
        if (toString) {
            return JSON.stringify(this);
        }
        return this;
    }
}