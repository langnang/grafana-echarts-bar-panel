export default class xAxis {
    constructor(options, data) {
        this.show = options.show || true;
        this.type = options.type || 'category';
        this.format = options.format || 'YYYY--MM-DD';
        this.column = options.column || '';
        this.splitLine = {
            show: true,
            lineStyle: {
                type: "solid",
                opacity: 0.3
            }
        }
        this.axisLabel = {
            formatter: function (value) {
                return value.split("").join("\n");
            }
        }
        this.data = options.data || [];
        this._data = data;
        this._options = options;
        this.$init();
    }
    $init() {
        console.log(this);
        this.$data();
    }
    $column() { }
    $data() {
        let index = this._data[0].columns.indexOf(this.column);
        index = index > -1 ? index : 0;
        console.log(index);
        this.data = this._data[0].rows.map(v => v[index]);
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