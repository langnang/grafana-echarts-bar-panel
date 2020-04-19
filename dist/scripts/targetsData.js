"use strict";

System.register([], function (_export, _context) {
    "use strict";

    function targetsData(data, targets) {
        console.log(data);
        return targets.map(function (value, index) {
            console.log(value, index);
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
