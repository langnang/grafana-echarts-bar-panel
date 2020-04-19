'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, xAxis;

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

            xAxis = function () {
                function xAxis(options, data) {
                    _classCallCheck(this, xAxis);

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
                    };
                    this.axisLabel = {
                        formatter: function formatter(value) {
                            return value.split("").join("\n");
                        }
                    };
                    this.data = options.data || [];
                    this._data = data;
                    this._options = options;
                    this.$init();
                }

                _createClass(xAxis, [{
                    key: '$init',
                    value: function $init() {
                        console.log(this);
                        this.$data();
                    }
                }, {
                    key: '$column',
                    value: function $column() {}
                }, {
                    key: '$data',
                    value: function $data() {
                        var index = this._data[0].columns.indexOf(this.column);
                        index = index > -1 ? index : 0;
                        console.log(index);
                        this.data = this._data[0].rows.map(function (v) {
                            return v[index];
                        });
                    }
                }, {
                    key: '$show',
                    value: function $show() {}
                }, {
                    key: '$type',
                    value: function $type() {}
                }, {
                    key: '$format',
                    value: function $format() {}
                }, {
                    key: 'print',
                    value: function print(toString) {
                        if (toString) {
                            return JSON.stringify(this);
                        }
                        return this;
                    }
                }]);

                return xAxis;
            }();

            _export('default', xAxis);
        }
    };
});
//# sourceMappingURL=xAxis.js.map
