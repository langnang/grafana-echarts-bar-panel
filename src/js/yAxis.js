export default class yAxis {
    constructor(options, data) {
        this.column = options.column || '';
        this._data = data;
        this.$init();
    }
    $init() {
        // console.log(this);
        // this.$data();
    }
    $column() { }
    $data() {
        let index = this._data[0].columns.indexOf(this.column);
        index = index > -1 ? index : 1;
        // console.log(index);
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