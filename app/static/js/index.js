
    $(function() {

        //获取当天日期
        (function() {
            const now = new Date();
            const year = now.getFullYear();
            const month = now.getMonth() + 1;
            const day = now.getDate();
            $("#nowDate").html(year + "年" + month + "月" + day + "日");
        })();






        /*      右上        */
        const rGraph = echarts.init(document.getElementById("rGraph"));
        const rOpt = {
            title: {
                // text: '用户类别',
                textStyle: {
                    color: '#fff',
                    fontSize: 12
                },
                top:'bottom'

            },
            tooltip: {

            },
            legend: {
                data: ['品质生活者', '月光剁手族', '精明实用者'],
                textStyle: {
                    color: '#fff'
                },
                top:'bottom',

            },
            radar: {
                shape: 'circle',
                splitNumber: 4,
                name: {
                    textStyle: {
                        color: '#fff',
                        borderRadius: 3,

                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#103467',
                        width:1.5,
                        },
                },
                indicator: [
                    { name: '收入', max: 6500 },
                    { name: '阶级', max: 16000 },
                    { name: '购买量', max: 30000 },
                    { name: '购买单价', max: 38000 },
                    { name: '教育水平', max: 52000 }
                ],
                splitArea : {
                show : false,
                areaStyle : {
                    color: 'rgba(255,0,0,0)', // 图表背景的颜色
                    },
                },
                splitLine : {
                    show : true,
                    lineStyle : {
                        width : 1.5,
                        color : '#103467', // 设置网格的颜色
                    },
                },
            },
            series: [{
                name: '用户类别',
                top:'bottom',
                type: 'radar',
                symbol:'circle',
                symbolSize:8,
                areaStyle: {
                    normal: {
                        color:'transparent',
                        width:1,
                        opacity:0.2

                    },


                },
                data: [{
                        value: [4300, 10000, 28000, 35000, 50000, 19000],
                        name: '品质生活者',
                        itemStyle: {
                            normal:{
                                color: '#14A7FF',
                                lineStyle: {
                                    color: '#14A7FF',
                                },
                            },
                        },
                    },
                    {
                        value: [5000, 14000, 28000, 31000, 42000, 21000],
                        name: '月光剁手族',
                        itemStyle: {
                            normal:{
                                color: '#826EFB',
                                lineStyle: {
                                    width: 1,
                                    color: '#826EFB',
                                },
                            },
                        },
                    },
                    {
                        value: [5000, 12000, 24000, 26000, 30000, 25000],
                        name: '精明实用者',
                        itemStyle: {
                            normal:{
                                color: '#F269F8',
                                lineStyle: {
                                    width: 1,
                                    color: '#F269F8',
                                },
                            },
                        },
                    }
                ],

            }]
        };
        rGraph.setOption(rOpt);



        /*        左下          */
        const lcGraph = echarts.init(document.getElementById("lcGraph"));
        const lcOpt = {
            title: {
                // text: '                            用户每天行为变化',
                textStyle: {
                    color: '#fff',
                    fontSize: 14,

                },
                top:'bottom'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#fff'
                    }
                }
            },
            toolbox: {
                feature: {
                    dataView: { show: false, readOnly: false },
                    magicType: { show: false, type: ['line', 'bar'] },
                    restore: { show: false },
                    saveAsImage: { show: false }
                }
            },
            legend: {
                data: ['点击', '收藏', '加入购物车', '购买'],
                textStyle: {
                    color: '#fff'
                },
                top:'bottom'
            },
            xAxis: [{
                type: 'category',
                data: ['6-10', '6-11', '6-12', '6-13', '6-14', '6-15', '6-16', '6-17', '6-18', '6-19', '6-20'],
                axisPointer: {
                    type: 'shadow'
                },
                textStyle: {
                    color: '#fff'
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff',
                        },
                },
            }],
            yAxis: [{
                    type: 'value',
                    name: '数量',
                    min: 0,
                    max: 1100000,
                    interval: 400000,
                    axisLabel: {
                        formatter: '{value} '
                    },
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#fff',
                            },
                    },
                },
                {
                    type: 'value',
                    name: '百分比',
                    min: 0,
                    max: 100,
                    interval: 50,
                    axisLabel: {
                        formatter: '{value} %'
                    },
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                    lineStyle: {
                        color: '#fff',
                        },
                },
                }
            ],
            series: [{
                    name: '点击',
                    type: 'bar',
                    data: [636282, 646576, 656092, 738137, 697101, 891366, 1084594, 876661, 1037942, 644361, 629065],
                    itemStyle:{
                        emphasis:{
                            barBorderRadius: 7
                        },
                        normal:{
                            barBorderRadius: 7,
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,		//0010从左至右渐变，0001从上至下渐变
                                [
                                      {offset: 0, color: '#61dbe8'},
                                      {offset: 1, color: '#0785de'}
                                ]
                            )
                        }
                    }
                },
                {
                    name: '收藏',
                    type: 'bar',
                    data: [22046, 21553, 21459, 24105, 21925, 28696, 29445, 25458, 27625, 20647, 20445],
                    itemStyle:{
                        emphasis:{
                            barBorderRadius: 7
                        },
                        normal:{
                            barBorderRadius: 7,
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,		//0010从左至右渐变，0001从上至下渐变
                                [
                                      {offset: 0, color: '#F5cF0D'},
                                      {offset: 1, color: '#fa9203'}
                                ]
                            )
                        }
                    }
                },
                {
                    name: '加入购物车',
                    type: 'bar',
                    data: [58829, 59921, 61734, 72209, 68420, 97355, 135711, 100733, 128266, 61264, 61720],
                    itemStyle:{
                        emphasis:{
                            barBorderRadius: 7
                        },
                        normal:{
                            barBorderRadius: 7,
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,		//0010从左至右渐变，0001从上至下渐变
                                [
                                      {offset: 0, color: 'rgb(14,102,179)'},
                                      {offset: 1, color: 'rgb(51,36,169)'}
                                ]
                            )
                        }
                    }
                },
                {
                    name: '购买',
                    type: 'bar',
                    // yAxisIndex: 1,
                    data: [15757, 16051, 16765, 12241, 10602, 9674, 79593, 32242, 61809, 17220, 19303],
                    itemStyle:{
                        emphasis:{
                            barBorderRadius: 7
                        },
                        normal:{
                            barBorderRadius: 7,
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,		//0010从左至右渐变，0001从上至下渐变
                                [
                                      {offset: 0, color: '#ff9717'},
                                      {offset: 1, color: '#ff4518'}
                                ]
                            )
                        }
                    }
                }
            ],
            textStyle: {
                color: '#fff'
            }
        };
        lcGraph.setOption(lcOpt);



        /*        右下        */
        const lrGraph = echarts.init(document.getElementById("lrGraph"));


        let data = [
            [
                [0, 1, 160000000, '品质生活者', '电子'],
                [0, 2, 20000000, '月光剁手族', '电子'],
                [0, 3, 40000000, '精明实用者', '电子']
            ],
            [
                [1, 1, 10000000, '品质生活者', '百货'],
                [1, 2, 30000000, '月光剁手族', '百货'],
                [1, 3, 160000000, '精明实用者', '百货']
            ],
            [
                [2, 1, 60000000, '品质生活者', '美妆'],
                [2, 2, 110000000, '月光剁手族', '美妆'],
                [2, 3, 30000000, '精明实用者', '美妆']
            ],
            [
                [3, 1, 50000000, '品质生活者', '衣服'],
                [3, 2, 120000000, '月光剁手族', '衣服'],
                [3, 3, 30000000, '精明实用者', '衣服']
            ],
            [
                [4, 1, 20000000, '品质生活者', '食物'],
                [4, 2, 110000000, '月光剁手族', '食物'],
                [4, 3, 70000000, '精明实用者', '食物']
            ]

        ];

        const lrOpt = {

            title: {
                text: '        商品分类',
                textStyle: {
                    color: '#fff',
                    fontSize: 14,

                },
                top:'bottom'
            },
            legend: {
                right: 10,
                data: ['电子', '百货', '美妆', '衣服', '食物'],
                textStyle: {
                    color: '#fff'
                },
                top:'bottom'
            },
            xAxis: {
                show: false,
                splitLine: {

                    lineStyle: {
                        type: 'dashed'
                    }
                }
            },
            yAxis: {
                show: false,
                splitLine: {
                    show: false,
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                scale: true
            },
            series: [{
                    name: '电子',
                    data: data[0],
                    type: 'scatter',
                    symbolSize: function(data) {
                        return Math.sqrt(data[2]) / 5e2;
                    },
                    label: {
                        emphasis: {
                            show: true,
                            formatter: function(param) {
                                return param.data[3];
                            },
                            position: 'top'
                        },
                        textStyle:{
                            color:'#fff',
                        },
                    },
                    itemStyle: {
                        normal: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(120, 36, 50, 0.5)',
                            shadowOffsetY: 5,
                            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                                offset: 0,
                                color: 'rgb(251, 118, 123)'
                            }, {
                                offset: 1,
                                color: 'rgb(204, 46, 72)'
                            }])
                        }
                    }
                }, {
                    name: '百货',
                    data: data[1],
                    type: 'scatter',
                    symbolSize: function(data) {
                        return Math.sqrt(data[2]) / 5e2;
                    },
                    label: {
                        emphasis: {
                            show: true,
                            formatter: function(param) {
                                return param.data[3];
                            },
                            position: 'top',
                            textStyle:{
                            color:'#fff',
                            },
                        }
                    },
                    itemStyle: {
                        normal: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(25, 100, 150, 0.5)',
                            shadowOffsetY: 5,
                            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                                offset: 0,
                                color: 'rgb(129, 227, 238)'
                            }, {
                                offset: 1,
                                color: 'rgb(25, 183, 207)'
                            }])
                        }
                    }
                },
                {
                    name: '美妆',
                    data: data[2],
                    type: 'scatter',
                    symbolSize: function(data) {
                        return Math.sqrt(data[2]) / 5e2;
                    },
                    label: {
                        emphasis: {
                            show: true,
                            formatter: function(param) {
                                return param.data[3];
                            },
                            position: 'top',
                            textStyle:{
                            color:'#fff',
                            },
                        }
                    },
                    itemStyle: {
                        normal: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(25, 100, 150, 0.5)',
                            shadowOffsetY: 5,
                            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                                offset: 0,
                                color: '#F269F8'
                            }, {
                                offset: 1,
                                color: '#D55EE0'
                            }])
                        }
                    }
                },
                {
                    name: '衣服',
                    data: data[3],
                    type: 'scatter',
                    symbolSize: function(data) {
                        return Math.sqrt(data[2]) / 5e2;
                    },
                    label: {
                        emphasis: {
                            show: true,
                            formatter: function(param) {
                                return param.data[3];
                            },
                            position: 'top',
                            textStyle:{
                            color:'#fff',
                            },
                        }
                    },
                    itemStyle: {
                        normal: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(25, 100, 150, 0.5)',
                            shadowOffsetY: 5,
                            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                                offset: 0,
                                color: '#8773FF'
                            }, {
                                offset: 1,
                                color: '#7867EA'
                            }])
                        }
                    }
                },
                {
                    name: '食物',
                    data: data[4],
                    type: 'scatter',
                    symbolSize: function(data) {
                        return Math.sqrt(data[2]) / 5e2;
                    },
                    label: {
                        emphasis: {
                            show: true,
                            formatter: function(param) {
                                return param.data[3];
                            },
                            position: 'top',
                            textStyle:{
                            color:'#fff',
                            },
                        }
                    },
                    itemStyle: {
                        normal: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(25, 100, 150, 0.5)',
                            shadowOffsetY: 5,
                            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                                offset: 0,
                                color: '#DDBC00'
                            }, {
                                offset: 1,
                                color: '#FFDC3D'
                            }])
                        }
                    }
                }
            ]
        };
        lrGraph.setOption(lrOpt);


        window.onresize = function() {
            rGraph.resize();
            lcGraph.resize();
            lrGraph.resize();
        }



    });

    function changeText() {
        let changeNumber1 = document.getElementById("changeNumber1");
        changeNumber1.appendChild(changeNumber1.firstChild);
        let changeNumber2 = document.getElementById("changeNumber2");
        changeNumber2.appendChild(changeNumber2.firstChild);
        let changeNumber3 = document.getElementById("changeNumber3");
        changeNumber3.appendChild(changeNumber3.firstChild);
        let changeNumber4 = document.getElementById("changeNumber4");
        changeNumber4.appendChild(changeNumber4.firstChild);
        }
        setInterval("changeText()", 1000);




