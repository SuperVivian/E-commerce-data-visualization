$(function() {

    var colorArr = [
        ['#4A99FF', '#4BFFFC'],
        ['#FF8C8C', '#FFD4AB'],
        ['#a3e043', '#3D8C27']
    ];

    var value = [
        [4, 4, 3, 2, 4],
        [2, 2, 2, 5, 2],
        [3, 3, 4, 3, 2]
    ];
    var indicator = [

        {
            text: '收入',
            max: 5
        },
        {
            text: '阶级',
            max: 5
        },
        {
            text: '教育',
            max: 5
        },
        {
            text: '购买量',
            max: 5
            //  axisLabel: {show: true, textStyle: {fontSize: 18, color: '#333'}}
        },
        {
            text: '购买单价',
            max: 5
        }
    ];

    for (var i = 0; i < 3; i++) {

        //用户画像
        const usrChart = echarts.init(document.getElementById("usrChart" + (i + 1)), "shine");


        var dataArr = [{
            value: value[i],
            name: "用户属性",
            itemStyle: {
                normal: {
                    lineStyle: {
                        color: '#4A99FF',
                        // shadowColor: '#4A99FF',
                        // shadowBlur: 10,
                    },
                    shadowColor: '#4A99FF',
                    shadowBlur: 10,
                },
            },
            areaStyle: {
                normal: { // 单项区域填充样式
                    color: {
                        type: 'linear',
                        x: 0, //右
                        y: 0, //下
                        x2: 1, //左
                        y2: 1, //上
                        colorStops: [{
                            offset: 0,
                            color: '#4A99FF'
                        }, {
                            offset: 0.5,
                            color: 'rgba(0,0,0,0)'
                        }, {
                            offset: 1,
                            color: '#4A99FF'
                        }],
                        globalCoord: false
                    },
                    opacity: 1 // 区域透明度
                }
            }
        }];
        option = {
            color: colorArr[i],
            radar: {
                shape: 'circle',
                center: ["62%", "50%"],
                radius: "64%",
                name: {
                    textStyle: {
                        color: '#fff',
                        fontSize: 12
                    },
                },
                indicator: indicator,
                splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                    show: true,
                    areaStyle: { // 分隔区域的样式设置。
                        color: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
                    }
                },
                axisLine: { //指向外圈文本的分隔线样式
                    lineStyle: {
                        color: '#153269'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#113865', // 分隔线颜色
                        width: 1, // 分隔线线宽
                    }
                },
            },
            series: [{
                type: 'radar',
                symbolSize: 8,
                // symbol: 'angle',
                data: dataArr
            }]
        };
        usrChart.setOption(option);

    }
});