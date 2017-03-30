myChart.on('legendselectchanged', function(params) {
    // printing data name in console
    var legendObject = params.selected;

    console.log(Object.values(legendObject));

    var value1 = (Object.values(legendObject)[0]);

    var value2 = (Object.values(legendObject)[1]);

    var option2 = {
        yAxis: [{
            //show: value1,
            axisLabel: {
                show: value1
            }
        }, {
            //show: value2,
            axisLabel: {
                show: value2
            }

        }]
    };
    myChart.setOption(option2);

    console.log(legendObject)
    console.log(params.name)
})