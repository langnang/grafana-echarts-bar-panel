'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, yAxis;

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

            yAxis = function () {
                function yAxis(options, data) {
                    _classCallCheck(this, yAxis);

                    this.type = options.type || 'value';
                    this.column = options.column || '';
                    this.splitLine = {
                        lineStyle: {
                            type: "solid",
                            opacity: 0.3
                        }
                    };
                    this._data = data;
                    this.$init();
                }

                _createClass(yAxis, [{
                    key: '$init',
                    value: function $init() {
                        console.log(this);
                        // this.$data();
                    }
                }, {
                    key: '$column',
                    value: function $column() {}
                }, {
                    key: '$data',
                    value: function $data() {
                        var index = this._data[0].columns.indexOf(this.column);
                        index = index > -1 ? index : 1;
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

                return yAxis;
            }();

            _export('default', yAxis);
        }
    };
});
//# sourceMappingURL=yAxis.js.map
