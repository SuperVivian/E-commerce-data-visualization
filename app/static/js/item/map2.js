$(function () {
    // /***************** 雷达图 ******************/
    //初始化echarts实例
    const scatterMap = echarts.init(document.getElementById("scatterMap"));

    //地图配置项
    const sactterMapOpt = {
        color: ['#00CDE7', '#2692DC', '#5548CF'],
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
                center: ['20%', '40%'],
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
                center: ['80%', '40%'],
                radius: 60
            }
        ],
        series: [{
                type: 'radar',
                tooltip: {
                    trigger: 'item'
                },
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        }
                    }
                },
                data: [{
                    value: [60, 73, 85, 40, 50, 84, 76, 56, 99],
                    name: '0-25岁'
                }]
            },
            {
                type: 'radar',
                tooltip: {
                    trigger: 'item'
                },
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        }
                    }
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
                radarIndex: 2,
                tooltip: {
                    trigger: 'item'
                },
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        }
                    }
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