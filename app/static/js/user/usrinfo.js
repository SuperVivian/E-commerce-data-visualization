$(function() {
    //年龄
    const ageChart = echarts.init(document.getElementById("ageChart"), "shine");
    ageoption = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function(parms) {
                var marker = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#2948FF;"></span>';
                var str = marker + "" + parms[0].data.name + "</br>" +
                "占比：" + (parms[0].data.value*100).toFixed(2) + "%";
                return str;

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
                formatter:'{value}',
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
            data:[],
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
                    color:"#fff",
                    align: 'center',
                    formatter: function(parms) {
                        return (parms.data.value*100).toFixed(2) + "%";}
                }
            }
        }]
    };
    ageChart.setOption(ageoption);
    $.ajax({
        url: "/static/data/user-age.json",
        dataType: "json"
    }).done(function() {
        $("#ageChart").addClass("chart-done");
    }).done(function(data) {
        //console.log('Data: ', data);
        const name = [];
        const value=[];
        for (let i in data) {
            name.push(data[i].name);
            value.push(data[i].value);
        }
        ageChart.setOption({
            xAxis:[{
                data:name     
                }]
            ,
            series: [{
                data:data
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
            formatter: function(parms) {
                var str = parms.marker + "" + parms.data.name + "</br>" +
                    "占比：" + (parms.data.value*100).toFixed(2) + "%";
                return str;
            }
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
                    borderColor: 'rgb(128,128,128,0)',
                    shadowBlur: 3,
                    shadowColor: 'rgba(142, 152, 241, 0.6)',

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
        url: "/static/data/user-career.json",
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
                var str = parms.marker + "" + parms.data.name + "</br>" +
                parms.data.label+"</br>"+
                    "占比：" + parms.percent + "%";
                return str;
            }
        },
        legend: {
            orient: 'vertical',
            left: '70%',
            // align: 'left',
            align: 'middle',
            top: 'middle',
            textStyle: {
                color: '#8C8C8C'
            },
            height: 150,
            itemWidth: 10,
            itemHeight: 10
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
                        return parms.data.name
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
             itemStyle: {
                shadowBlur: 5,
                shadowColor: 'rgba(142, 152, 241, 0.6)'
            },
            data: []
        }],
        color: ["#283c86","#005daf", "#1E92DF","#1CB5E0","#00ecfa", "#0CDDB1", "#77F2FF","#82ffc2"]
    };
    eduChart.setOption(eduoption);
    $.ajax({
        url: "/static/data/user-education.json",
        dataType: "json"
    }).done(function() {
        $("#eduChart").addClass("chart-done");
    }).done(function(data) {
       // console.log('Data: ', data);
        const name = [];
        const value=[];
        for (let i in data) {
            name.push(data[i].name);
            value.push(data[i].num);
        }
        eduChart.setOption({
            series: [{
                data: data
            }]
        });
    }).fail(function(jqXHR) {
        console.log("Ajax Fail: ", jqXHR.status, jqXHR.statusText);
    });




    //收入
    const incChart = echarts.init(document.getElementById("incChart"), "shine");
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
                var str = parms.marker + "" + parms.data.name + "</br>" +
                 parms.data.label+"</br>"+
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
                        return parms.data.name
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
             itemStyle: {
                shadowBlur: 5,
                shadowColor: 'rgba(142, 152, 241, 0.6)'
            },
            data: []
        }],
        color: ["#283c86","#005daf", "#1E92DF","#1CB5E0","#00ecfa", "#0CDDB1", "#77F2FF","#82ffc2"]
    };
    incChart.setOption(incoption);
    $.ajax({
        url: "/static/data/user-income.json",
        dataType: "json"
    }).done(function() {
        $("#incChart").addClass("chart-done");
    }).done(function(data) {
       // console.log('Data: ', data);
        const name = [];
        const value=[];
        for (let i in data) {
            name.push(data[i].name);
            value.push(data[i].num);
        }
        incChart.setOption({
            series: [{
                data: data
            }]
        });
    }).fail(function(jqXHR) {
        console.log("Ajax Fail: ", jqXHR.status, jqXHR.statusText);
    });

});