export default function targetsData(data, targets) {
    console.log(data);
    return targets.map((value, index) => {
        console.log(value, index);
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