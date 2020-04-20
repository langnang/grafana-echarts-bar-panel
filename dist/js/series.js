'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, series;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            series = function () {
                function series(options, data) {
                    _classCallCheck(this, series);

                    this._data = data;
                    this._options = options;
                    this.children = options.children.length > 0 ? options.children : [{
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: function color(params) {
                                    var colorList = ['red', 'white', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red'];
                                    return colorList[params.dataIndex];
                                }
                            }
                        }
                    }];
                    this.$init();
                }

                _createClass(series, [{
                    key: '$init',
                    value: function $init() {
                        // console.log(this);
                        this.$data();
                        this.$color();
                    }
                }, {
                    key: '$columns',
                    value: function $columns() {
                        return this._data[0].columns.map(function (v) {
                            return v.text;
                        });
                    }
                }, {
                    key: '$color',
                    value: function $color() {
                        var _this = this;

                        var index = this._data[0].columns.indexOf(this.symbol_column);
                        index = index > -1 ? index : 2;
                        var _colors = this._data[0].rows.map(function (v) {
                            return v[index] == 0 ? _this._options.main_color : _this._options.symbol_color;
                        });
                        this._colors = _colors;
                        this.children[0].itemStyle.normal.color = function (params) {
                            return _colors[params.dataIndex];
                        };
                    }
                }, {
                    key: '$data',
                    value: function $data() {
                        var index = this._data[0].columns.indexOf(this.column);
                        index = index > -1 ? index : 1;
                        // console.log(index);
                        this.children[0].data = this._data[0].rows.map(function (v) {
                            return v[index];
                        });
                    }
                }, {
                    key: 'print',
                    value: function print(toString) {
                        // console.log(this);
                        if (toString) {
                            return JSON.stringify(this.children);
                        }
                        return this.children;
                    }
                }]);

                return series;
            }();

            _export('default', series);
        }
    };
});
//# sourceMappingURL=series.js.map
