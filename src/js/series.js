export default class series {
    constructor(options, data) {
        this._data = data;
        this._options = options;
        this.children = options.children.length > 0 ? options.children : [{
            type: 'bar',
            itemStyle: {
                normal: {
                    color: function (params) {
                        var colorList = [
                            'red', 'white', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red'
                        ];
                        return colorList[params.dataIndex];
                    }
                }
            }
        }];
        this.$init();
    }

    $init() {
        // console.log(this);
        this.$data();
        this.$color();
    }
    $columns() {
        return this._data[0].columns.map(v => v.text);
    }
    $color() {
        let index = this._data[0].columns.indexOf(this.symbol_column);
        index = index > -1 ? index : 2;
        let _colors = this._data[0].rows.map(v => v[index] == 0 ? this._options.main_color : this._options.symbol_color);
        this._colors = _colors;
        this.children[0].itemStyle.normal.color = function (params) {
            return _colors[params.dataIndex];
        }
    }
    $data() {
        let index = this._data[0].columns.indexOf(this.column);
        index = index > -1 ? index : 1;
        // console.log(index);
        this.children[0].data = this._data[0].rows.map(v => v[index]);
    }

    print(toString) {
        // console.log(this);
        if (toString) {
            return JSON.stringify(this.children);
        }
        return this.children;
    }
}