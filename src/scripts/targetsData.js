export default function targetsData(data, targets) {
    return targets.map((value, index) => {
        if (!data[index]) {
            return {
                refId: value.refId,
                format: value.format,
                datapoints: [],
                target: [],
                columns: [],
                rows: []
            }
        }
        return {
            refId: value.refId,
            format: value.format,
            datapoints: data[index].datapoints,
            target: data[index].target,
            columns: data[index].columns,
            rows: data[index].rows
        }
    })
}