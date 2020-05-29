"use strict";

System.register([], function (_export, _context) {
    "use strict";

    function targetsData(data, targets) {
        return targets.map(function (value, index) {
            if (!data[index]) {
                return {
                    refId: value.refId,
                    format: value.format,
                    datapoints: [],
                    target: [],
                    columns: [],
                    rows: []
                };
            }
            return {
                refId: value.refId,
                format: value.format,
                datapoints: data[index].datapoints,
                target: data[index].target,
                columns: data[index].columns,
                rows: data[index].rows
            };
        });
    }

    _export("default", targetsData);

    return {
        setters: [],
        execute: function () {}
    };
});
//# sourceMappingURL=targetsData.js.map
