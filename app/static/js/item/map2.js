$(function () {
    // /***************** 雷达图 ******************/
    //初始化echarts实例
    const age_like_item = echarts.init(document.getElementById("age_like_item"));

    //地图配置项
    const age_like_item_opt = {
        color: ['#F490B2', '#4086F2', '#7867EA'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            y: '85%',
            x: 'center',
            data: ['0-24岁', '25-39岁', '40-60岁'],
            textStyle: {
                color: '#fff'
            }
        },
        radar: [
            {
                shape:'circle',
                splitNumber:4,
                splitArea : {
                show : false,
                areaStyle : {
                    color: 'transparent', // 图表背景的颜色
                    },
                },
                splitLine : {
                    show : true,
                    lineStyle : {
                        width : 2,
                        color : '#103467', // 设置网格的颜色
                    },
                },
                name: {
                    textStyle: {
                        color: '#fff',
                        borderRadius: 3,
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#103467',
                        },
                },
                center: ['16.5%', '40%'],
                radius: 60,
            },
            {
                shape:'circle',
                splitNumber:4,
                splitArea : {
                show : false,
                areaStyle : {
                    color: 'transparent', // 图表背景的颜色
                    },
                },
                splitLine : {
                    show : true,
                    lineStyle : {
                        width : 2,
                        color : '#103467', // 设置网格的颜色
                    },
                },
                name: {
                    textStyle: {
                        color: '#fff',
                        borderRadius: 3,
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#103467',
                        },
                },
                radius: 60,
                center: ['50%', '40%'],

            },
            {
                shape:'circle',
                splitNumber:4,
                splitArea : {
                show : false,
                areaStyle : {
                    color: 'transparent', // 图表背景的颜色
                    },
                },
                splitLine : {
                    show : true,
                    lineStyle : {
                        width : 2,
                        color : '#103467', // 设置网格的颜色
                    },
                },
                name: {
                    textStyle: {
                        color: '#fff',
                        borderRadius: 3,
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#103467',
                        },
                },
                center: ['83.5%', '40%'],
                radius: 60
            }
        ],
        series:
        [
            {
                type: 'radar',
                symbol:'circle',
                symbolSize:8,
                tooltip: {
                    trigger: 'item'
                },
                areaStyle: {
                    normal: {
                        color:'transparent',
                        width:1,
                        opacity:0.2

                    },
                },
            },
            {
                type: 'radar',
                symbol:'circle',
                symbolSize:8,
                tooltip: {
                    trigger: 'item'
                },
                areaStyle: {
                    normal: {
                        color:'transparent',
                        width:1,
                        opacity:0.2
                    },
                },
                radarIndex: 1
            },
            {
                type: 'radar',
                symbol:'circle',
                symbolSize:8,
                radarIndex: 2,
                tooltip: {
                    trigger: 'item'
                },
                areaStyle: {
                    normal: {
                        color:'transparent',
                        width:1,
                        opacity:0.2

                    },
                }
            }
        ]
    };
    //渲染报表
    age_like_item.setOption(age_like_item_opt);
    //加载json数据
    $.ajax({
        url: "/static/data/item/age_like_item.json",
        dataType: "json"
    })
    .done(function (data) {
        console.log('Data: ', data);
        age_like_item.setOption({
            legend: {
                data:data.legend_data
            },
            radar:[
                {indicator: data._0_24.indicator_data},
                {indicator: data._25_39.indicator_data},
                {indicator: data._40_60.indicator_data}
            ],
            series:[
                {data: data._0_24.series_data},
                {data: data._25_39.series_data},
                {data: data._40_60.series_data}
            ],
        });
    }).fail(function (jqXHR) {
        console.log("Ajax Fail: ", jqXHR.status, jqXHR.statusText);
    });
    /********** 浏览器窗口改变时，重置报表大小 ****************/
    window.onresize = function () {
        age_like_item.resize();
    }
});