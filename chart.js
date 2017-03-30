myChart.on('legendselectchanged', function(params) {
    
    var legendObject = params.selected; // create variable from the selected: { object }
// console.log(legendObject) // {name: boolean-value, name: boolean-value}
    // console.log(Object.values(legendObject)); // log to the console boolean values out of the key: value pair 

    var value1 = (Object.values(legendObject)[0]); // assign the boolean value in index[0] to value1

    var value2 = (Object.values(legendObject)[1]); // assign the boolean value in index[1] to value2
// create a new option object to pass into myChart.setOption()
    var option2 = { 
        yAxis: [{
            //show: value1,
            axisLabel: {
                show: value1  // set axisLabel[0] visability to true | false base on value1
            }
        }, {
            //show: value2,
            axisLabel: {
                show: value2 // set axisLabel[1] visability to true | false base on value2
            }

        }]
    };
    myChart.setOption(option2);  // pass new option object into myCharts

    
    // console.log(params.name)
})
