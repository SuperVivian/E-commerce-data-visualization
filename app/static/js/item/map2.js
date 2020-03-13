$(function () {
    // /***************** 雷达图 ******************/
    //初始化echarts实例
    const scatterMap = echarts.init(document.getElementById("scatterMap"));

    //地图配置项
    const sactterMapOpt = {
        color: ['#F490B2', '#4086F2', '#7867EA'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            y: '78%',
            x: 'center',
            data: ['0-25岁', '25-40岁', '40-60岁'],
            textStyle: {
                color: '#fff'
            }
        },
        radar: [{
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
                indicator: [{
                        text: '电器',
                        max: 100
                    }, {
                        text: '家居',
                        max: 100
                    },
                    {
                        text: '美妆',
                        max: 100
                    },
                    {
                        text: '食品',
                        max: 100
                    },
                    {
                        text: '饰品',
                        max: 100
                    },
                    {
                        text: '学习',
                        max: 100
                    },
                    {
                        text: '运动',
                        max: 100
                    },
                    {
                        text: '衣服',
                        max: 100
                    },
                    {
                        text: '数码',
                        max: 100
                    }
                ],
                center: ['16.5%', '40%'],
                radius: 60,
                // axisLine: {
                //     lineStyle: {
                //         color: '#fff'
                //     }
                // },
                // splitLine: {
                //     lineStyle: {
                //         color: '#fff'
                //     }
                // },
                // splitArea: {
                //     areaStyle: {
                //         color: ['rgba(255, 255, 255,0)']
                //     }
                // },
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
                indicator: [{
                        text: '电器',
                        max: 100
                    },
                    {
                        text: '家居',
                        max: 100
                    },
                    {
                        text: '美妆',
                        max: 100
                    },
                    {
                        text: '食品',
                        max: 100
                    },
                    {
                        text: '饰品',
                        max: 100
                    },
                    {
                        text: '学习',
                        max: 100
                    },
                    {
                        text: '运动',
                        max: 100
                    },
                    {
                        text: '衣服',
                        max: 100
                    },
                    {
                        text: '数码',
                        max: 100
                    }
                ],
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
                indicator: [{
                        text: '电器',
                        max: 100
                    },
                    {
                        text: '家居',
                        max: 100
                    },
                    {
                        text: '美妆',
                        max: 100
                    },
                    {
                        text: '食品',
                        max: 100
                    },
                    {
                        text: '饰品',
                        max: 100
                    },
                    {
                        text: '学习',
                        max: 100
                    },
                    {
                        text: '运动',
                        max: 100
                    },
                    {
                        text: '衣服',
                        max: 100
                    },
                    {
                        text: '数码',
                        max: 100
                    }
                ],
                center: ['83.5%', '40%'],
                radius: 60
            }
        ],
        series: [{
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
                data: [{
                    value: [60, 73, 85, 40, 50, 84, 76, 56, 99],
                    name: '0-25岁'
                }]
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
                radarIndex: 1,
                data: [{
                        value: [85, 67, 34, 95, 95, 78, 45, 32, 97],
                        name: '25-40岁'
                    }

                ]
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


                },
                data: [{
                    name: '40-60岁',
                    value: [87, 34, 47, 58, 77, 66, 45, 32, 35],
                }]
            }
        ]
    };
    //渲染报表
    scatterMap.setOption(sactterMapOpt);
    /********** 浏览器窗口改变时，重置报表大小 ****************/
    window.onresize = function () {
        scatterMap.resize();
    }
});