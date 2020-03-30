
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

        let predict_incomeNum = [];
        let buy_countNum = [];
        let active_degreeNum = [];
        let buy_extra_countNum = [];
        let price_meanNum = [];

        $.ajax({
            url: "../static/data/userSort.json",
            dataType: "json"
        }).done(function(data) {
            data = eval(data);
            for(let i in data){
                predict_incomeNum.push(Number((data[i].predict_income)));
                buy_countNum.push(Number((data[i].buy_count)));
                buy_extra_countNum.push(Number((data[i].buy_extra_count)));
                active_degreeNum.push(Number((data[i].active_degree)));
                price_meanNum.push(Number((data[i].price_mean)));
            }



        const rGraph = echarts.init(document.getElementById("rGraph"));
        const rOpt = {
            title: {
                // text: '用户类别',
                textStyle: {
                    color: '#fff',
                    fontSize: 12
                },
                top:'bottom',

            },
            tooltip: {

            },
            legend: [
                {
                  x:'center',
                  y:'85%',
                  data:['品质生活型', '品牌导向型', '犹豫不决型'],
                  textStyle: {
                    color: '#fff'
                    },
                },
                {
                  x:'center',
                  y:'93%',
                  data:['奢侈享受型','理性消费型','知足常乐型'],
                  textStyle: {
                    color: '#fff'
                    },
                }
            ],
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
                    { name: '收入', max: 5 },
                    { name: '活跃度', max: 5 },
                    { name: '购买量', max: 5 },
                    { name: '加购量', max: 5 },
                    { name: '购买均价', max: 5 },

                ],
                radius:92,//调整雷达图面积
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
                        value:[predict_incomeNum[0],active_degreeNum[0],buy_countNum[0],buy_extra_countNum[0],price_meanNum[0]],
                        name: '品质生活型',
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
                        value:[predict_incomeNum[1],active_degreeNum[1],buy_countNum[1],buy_extra_countNum[1],price_meanNum[1]],
                        name: '品牌导向型',
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
                        value:[predict_incomeNum[2],active_degreeNum[2],buy_countNum[2],buy_extra_countNum[2],price_meanNum[2]],
                        name: '犹豫不决型',
                        itemStyle: {
                            normal:{
                                color: '#F269F8',
                                lineStyle: {
                                    width: 1,
                                    color: '#F269F8',
                                },
                            },
                        },
                    },
                    {
                        value:[predict_incomeNum[3],active_degreeNum[3],buy_countNum[3],buy_extra_countNum[3],price_meanNum[3]],
                        name: '奢侈享受型',
                        itemStyle: {
                            normal:{
                                color: '#99D44D',
                                lineStyle: {
                                    width: 1,
                                    color: '#99D44D',
                                },
                            },
                        },
                    },
                    {
                        value:[predict_incomeNum[4],active_degreeNum[4],buy_countNum[4],buy_extra_countNum[4],price_meanNum[4]],
                        name: '理性消费型',
                        itemStyle: {
                            normal:{
                                color: '#DDBC00',
                                lineStyle: {
                                    width: 1,
                                    color: '#DDBC00',
                                },
                            },
                        },
                    },
                    {
                        value:[predict_incomeNum[5],active_degreeNum[5],buy_countNum[5],buy_extra_countNum[5],price_meanNum[5]],
                        name: '知足常乐型',
                        itemStyle: {
                            normal:{
                                color: '#F490B2',
                                lineStyle: {
                                    width: 1,
                                    color: '#F490B2',
                                },
                            },
                        },
                    }
                ],

            }]
        };
        rGraph.setOption(rOpt);


        }).fail(function(jqXHR, textStatus) {
            console.log("Ajax Error: ", textStatus);
        });





        /*        左下          */
        
        let clkNum = [];
        let collectNum = [];
        let cartNum = [];
        let buyNum = [];

        $.ajax({
            url: "../static/data/dailyOpreation.json",
            dataType: "json"
        }).done(function(data) {
            data = eval(data);
            for(let i in data){
                clkNum.push(Number((data[i].clk)));
                collectNum.push(Number((data[i].collect)));
                cartNum.push(Number((data[i].cart)));
                buyNum.push(Number((data[i].buy)));
            }

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
                    type: 'shadow',
                    // type:'cross',
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
                    // type:'log',
                    name: '数量',
                    min: 0,
                    max: 4400000,
                    interval: 2200000,
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
                    // data: [636282, 646576, 656092, 738137, 697101, 891366, 1084594, 876661, 1037942, 644361, 629065],
                    data:clkNum,
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
                    data: collectNum,
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
                    data: cartNum,
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
                    data: buyNum,
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
        lcGraph.on('legendselectchanged',function (obj) {
            if (obj.name === '点击'){
                if(obj.selected['点击'] === false && obj.selected['加入购物车']===true){
                    lcOpt.yAxis[0].max=600000;
                    lcOpt.yAxis[0].interval=300000;
                    lcGraph.setOption(lcOpt);
                }else if(obj.selected['点击'] === true){
                    lcOpt.yAxis[0].max=4400000;
                    lcOpt.yAxis[0].interval=2200000;
                    lcGraph.setOption(lcOpt);
                }
            }else if(obj.name === '加入购物车'){
                if(obj.selected['点击'] === false && obj.selected['加入购物车']===false){
                    lcOpt.yAxis[0].max=400000;
                    lcOpt.yAxis[0].interval=200000;
                    lcGraph.setOption(lcOpt);
                }else if(obj.selected['点击'] === false && obj.selected['加入购物车']===true){
                    lcOpt.yAxis[0].max=600000;
                    lcOpt.yAxis[0].interval=300000;
                    lcGraph.setOption(lcOpt);
                }
            }
        })
        }).fail(function(jqXHR, textStatus) {
            console.log("Ajax Error: ", textStatus);
        });





        /*        右下        */
        const lrGraph = echarts.init(document.getElementById("lrGraph"));

        var hours = ['1', '2', '3', '4', '5', '6',
            '7', '8', '9','10','11',
            '12','13', '14', '15', '16', '17', '18',
            '19', '20', '21','22','23',
            '24','25', '26', '27', '28', '29', '30',
            '31', '32', '33','34','35',
            '36','37', '38', '39', '40', '41', '42',
            '43', '44', '45','46','47'];
    var days = ['知足常乐型','理性消费型','奢侈享受型','犹豫不决型','品牌导向型','品质生活型'];
    //地图配置项
    const lrGraph_opt = {
          tooltip: {
                position: 'top'
            },
            animation: false,
            grid: {
                height: '70%',
                width:'88%',
                top: '10%',
                left:'12%'
            },
            xAxis: {
                axisLine: {
                    lineStyle: {
                        color: '#fff',
                        },
                },
                type: 'category',
                data: hours,
                splitArea: {
                    show: true
                }
            },
            yAxis: {
                type: 'category',
                data: days,
                splitArea: {
                    show: true
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff',
                        },
                },
            },
            visualMap: {
                splitNumber: 3,
                color: ['#d94e5d','#eac736','#50a3ba'],
                min: 0,
                max: 10,
                calculable: false,
                orient: 'horizontal',
                left: 'center',
                bottom: '0%',
                textStyle:{
                    color:'#fff'
                }
            },
            series: [
            {
                name: 'Punch Card',
                type: 'heatmap',
                label: {
                    show: true
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 1)'
                    }
                }
            }]
    };
    //渲染报表
    lrGraph.setOption(lrGraph_opt);
    //加载json数据
    $.ajax({
        url: "/static/data/item/recommend.json",
        dataType: "json"
    })
    .done(function (data) {
        console.log('Data: ', data);
        data = data.map(function (item) {
            return [item[1], item[0], item[2] || '-'];
        });
        lrGraph.setOption({
            series:[{data: data}],
        });
    }).fail(function (jqXHR) {
        console.log("Ajax Fail: ", jqXHR.status, jqXHR.statusText);
    });


        window.onresize = function() {
            rGraph.resize();
            lcGraph.resize();
            lrGraph.resize();
        }



    });


        $.ajax({
            url: "../static/data/dailyOpreation.json",
            dataType: "json"
        }).done(function(data) {
            for(let i in data){
                let elem_li = document.createElement('li');
                elem_li.innerHTML = data[i].clk;
                document.getElementById('changeNumber1').appendChild(elem_li);
            }
        }).done(function(data) {
            for(let i in data){
                let elem_li = document.createElement('li');
                elem_li.innerHTML = data[i].collect;
                document.getElementById('changeNumber2').appendChild(elem_li);
            }
        }).done(function(data) {
            for(let i in data){
                let elem_li = document.createElement('li');
                elem_li.innerHTML = data[i].cart;
                document.getElementById('changeNumber3').appendChild(elem_li);
            }
        }).done(function(data) {
            for(let i in data){
                let elem_li = document.createElement('li');
                elem_li.innerHTML = data[i].buy;
                document.getElementById('changeNumber4').appendChild(elem_li);
            }
        }).fail(function(jqXHR, textStatus) {
            console.log("Ajax Error: ", textStatus);
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


    let conversionNum = [];
    $.ajax({
            url: "../static/data/commodityConversion.json",
            dataType: "json"
        }).done(function(data) {
            for(let i in data){
                let res = 0;
                res = parseFloat((Number(data[i])*100).toFixed(2));
                conversionNum.push(res);
            }
            document.getElementById('conversion1').innerHTML = conversionNum[0]+'%';
            document.getElementById('conversion2').innerHTML = conversionNum[1]+'%';
            document.getElementById('conversion3').innerHTML = conversionNum[2]+'%';
            document.getElementById('conversion4').innerHTML = conversionNum[3]+'%';
            document.getElementById('conversion5').innerHTML = conversionNum[4]+'%';
        }).fail(function(jqXHR, textStatus) {
            console.log("Ajax Error: ", textStatus);
        });








