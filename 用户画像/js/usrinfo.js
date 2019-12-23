$(function() {
    //年龄
    const ageChart = echarts.init(document.getElementById("ageChart"), "shine");
    ageoption = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            top: '10%',
            right: '5%',
            left: '10%',
            bottom: '20%'
        },
        xAxis: [{
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.12)'
                }
            },
            axisLabel: {
                margin: 10,
                color: '#e2e9ff',
                textStyle: {
                    fontSize: 10
                },
            },
        }],
        yAxis: [{
            axisLabel: {
                formatter: '{value}',
                color: '#e2e9ff',
            },
            axisLine: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.12)'
                }
            }
        }],
        series: [{
            type: 'bar',
            barWidth: '12px',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0,244,255,1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(0,77,167,1)' // 100% 处的颜色
                    }], false),
                    barBorderRadius: [30, 30, 30, 30],
                    shadowColor: 'rgba(0,160,221,1)',
                    shadowBlur: 4,
                }
            },
            label: {
                normal: {
                    show: true,
                    // lineHeight: 0,
                    width: 50,
                    height: 20,
                    backgroundColor: 'rgba(0,160,221,0.1)',
                    borderRadius: 200,
                    position: ['-8', '-20'],
                    distance: 1,
                    formatter: [
                        '    {d|●}',
                        ' {a|{c}}     \n',
                        '    {b|}'
                    ].join(','),
                    rich: {
                        d: {
                            color: '#3CDDCF',
                        },
                        a: {
                            color: '#fff',
                            align: 'center',
                        },
                        b: {
                            width: 1,
                            height: 0, //不显示线
                            borderWidth: 1,
                            borderColor: '#234e6c',
                            align: 'left'
                        },
                    }
                }
            }
        }]
    };
    ageChart.setOption(ageoption);
    $.ajax({
        url: "data/user-age.json",
        dataType: "json"
    }).done(function() {
        $("#ageChart").addClass("chart-done");
    }).done(function(data) {
        //console.log('Data: ', data);
        const name = [];
        const value=[];
        for (let i in data) {
            name.push(data[i].age);
            value.push(data[i].num);
        }
        ageChart.setOption({
            xAxis:[{
                data:name     
                }]
            ,
            series: [{
                name: "年龄分布",
                data: value
            }]
        });
    }).fail(function(jqXHR) {
        console.log("Ajax Fail: ", jqXHR.status, jqXHR.statusText);
    });


    //职业
    const careerChart = echarts.init(document.getElementById("careerChart"), "shine");

    careeroption = {
        title: {
            text: '',
            left: 'center',
            textStyle: {
                color: '#1a1b4e',
                fontStyle: 'normal',
                fontSize: 30
            }

        },
        tooltip: {
            trigger: 'item',
            formatter: "{b}"
        },

        series: [{
            type: 'treemap',
            left: 'center',
            width: '90%',
            height: '100%',
            breadcrumb: {
                show: false
            },
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: "{b}"
                    },
                    borderWidth: 0.2,
                    borderColor: 'rgb(128,128,128,0)'

                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
            label: {
                normal: {
                    fontSize: 12
                }
            }
        }],
        color: ["#283c86","#283c86","#2948FF","#005daf", "#1E92DF","#1CB5E0","#00ecfa", "#0CDDB1", "#77F2FF","#82ffc2"]
    };
    careerChart.setOption(careeroption);
    $.ajax({
        url: "data/user-career.json",
        dataType: "json"
    }).done(function() {
        $("#careerChart").addClass("chart-done");
    }).done(function(data) {
        //console.log('Data: ', data);
        careerChart.setOption({
            series: [{
                data:data
            }]
        });
    }).fail(function(jqXHR) {
        console.log("Ajax Fail: ", jqXHR.status, jqXHR.statusText);
    });



    //教育
    const eduChart = echarts.init(document.getElementById("eduChart"), "shine");
    var m2R2Data = [{
            value: 335,
            legendname: '项目07',
            name: '01',
            itemStyle: {
                color: "#283c86",
                shadowBlur: 5,
                shadowColor: 'rgba(142, 152, 241, 0.6)',
            }
        },
        {
            value: 335,
            legendname: '项目01',
            name: '02',
            itemStyle: {
                color: "#005daf",
                shadowBlur: 5,
                shadowColor: 'rgba(142, 152, 241, 0.6)'
            }
        },
        {
            value: 310,
            legendname: '项目02',
            name: '03',
            itemStyle: {
                color: "#1E92DF",
                shadowBlur: 5,
                shadowColor: 'rgba(142, 152, 241, 0.6)'
            }
        },
        {
            value: 234,
            legendname: '项目03',
            name: '04',
            itemStyle: {
                color: "#1CB5E0",
                shadowBlur: 5,
                shadowColor: 'rgba(142, 152, 241, 0.6)'
            }
        },
        {
            value: 154,
            legendname: '项目04',
            name: '05',
            itemStyle: {
                color: "#00ecfa",
                shadowBlur: 5,
                shadowColor: 'rgba(142, 152, 241, 0.6)'
            }
        },
        {
            value: 335,
            legendname: '项目06',
            name: '06',
            itemStyle: {
                color: "#77F2FF",
                shadowBlur: 5,
                shadowColor: 'rgba(142, 152, 241, 0.6)'
            }
        }
    ];

    eduoption = {
        title: [{
            text: '教育',
            textStyle: {
                fontSize: 12,
                color: "white"
            },
            subtextStyle: {
                fontSize: 12,
                color: 'white'
            },
            textAlign: "center",
            x: '32.5%',
            y: '44%',
        }],
        tooltip: {
            trigger: 'item',
            formatter: function(parms) {
                var str = parms.seriesName + "</br>" +
                    parms.marker + "" + parms.data.legendname + "</br>" +
                    "数量：" + parms.data.value + "</br>" +
                    "占比：" + parms.percent + "%";
                return str;
            }
        },
        legend: {
            orient: 'vertical',
            left: '70%',
            align: 'left',
            top: 'middle',
            textStyle: {
                color: '#8C8C8C'
            },
            height: 200,
            itemWidth: 15,
            itemHeight: 15
        },
        series: [{
            name: '标题',
            type: 'pie',
            center: ['35%', '50%'],
            radius: ['50%', '65%'],
            clockwise: false, //饼图的扇区是否是顺时针排布
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'outter',
                    formatter: function(parms) {
                        return parms.data.legendname
                    }
                }
            },
            labelLine: {
                show: false,
                normal: {
                    length: 5,
                    length2: 3,
                    smooth: false,
                }
            },
            data: m2R2Data
        }]
    };
    eduChart.setOption(eduoption);



    //收入
    const incChart = echarts.init(document.getElementById("incChart"), "shine");
    var incData = [{
            value: 335,
            legendname: '项目07',
            name: '01',
            itemStyle: {
                color: "#283c86",
                shadowBlur: 5,
                shadowColor: 'rgba(142, 152, 241, 0.6)',
            }
        },
        {
            value: 335,
            legendname: '项目01',
            name: '02',
            itemStyle: {
                color: "#005daf",
                shadowBlur: 5,
                shadowColor: 'rgba(142, 152, 241, 0.6)'
            }
        },
        {
            value: 310,
            legendname: '项目02',
            name: '03',
            itemStyle: {
                color: "#1E92DF",
                shadowBlur: 5,
                shadowColor: 'rgba(142, 152, 241, 0.6)'
            }
        },
        {
            value: 234,
            legendname: '项目03',
            name: '04',
            itemStyle: {
                color: "#1CB5E0",
                shadowBlur: 5,
                shadowColor: 'rgba(142, 152, 241, 0.6)'
            }
        },
        {
            value: 154,
            legendname: '项目04',
            name: '05',
            itemStyle: {
                color: "#00ecfa",
                shadowBlur: 5,
                shadowColor: 'rgba(142, 152, 241, 0.6)'
            }
        },
        {
            value: 335,
            legendname: '项目06',
            name: '06',
            itemStyle: {
                color: "#77F2FF",
                shadowBlur: 5,
                shadowColor: 'rgba(142, 152, 241, 0.6)'
            }
        }
    ];

    incoption = {
        title: [{
            text: '收入',
            textStyle: {
                fontSize: 12,
                color: "white"
            },
            subtextStyle: {
                fontSize: 12,
                color: 'white'
            },
            textAlign: "center",
            x: '32.5%',
            y: '44%',
        }],
        tooltip: {
            trigger: 'item',
            formatter: function(parms) {
                var str = parms.seriesName + "</br>" +
                    parms.marker + "" + parms.data.legendname + "</br>" +
                    "数量：" + parms.data.value + "</br>" +
                    "占比：" + parms.percent + "%";
                return str;
            }
        },
        legend: {
            orient: 'vertical',
            left: '70%',
            align: 'left',
            top: 'middle',
            textStyle: {
                color: '#8C8C8C'
            },
            height: 200,
            itemWidth: 15,
            itemHeight: 15
        },
        series: [{
            name: '标题',
            type: 'pie',
            center: ['35%', '50%'],
            radius: ['50%', '65%'],
            clockwise: false, //饼图的扇区是否是顺时针排布
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'outter',
                    formatter: function(parms) {
                        return parms.data.legendname
                    }
                }
            },
            labelLine: {
                show: false,
                normal: {
                    length: 5,
                    length2: 3,
                    smooth: false,
                }
            },
            data: incData
        }]
    };
    incChart.setOption(incoption);
});