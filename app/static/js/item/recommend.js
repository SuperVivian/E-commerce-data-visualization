$(function () {
    // /***************** 推荐结果 ******************/
    //初始化echarts实例
    const lrGraph = echarts.init(document.getElementById("lrGraph"));
    var hours = ['1', '2', '3', '4', '5', '6',
            '7', '8', '9','10','11',
            '12','13', '14', '15', '16', '17', '18',
            '19', '20', '21','22','23',
            '24','25', '26', '27', '28', '29', '30',
            '31', '32', '33','34','35',
            '36','37', '38', '39', '40', '41', '42',
            '43', '44', '45','46','47'];
    var days = ['知足型','理性型','奢侈型','犹豫型','品牌型','品质型'];
    //地图配置项
    const lrGraph_opt = {
          tooltip: {
                position: 'top'
            },
            animation: false,
            grid: {
                height: '70%',
                width:'90%',
                top: '10%'
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
                bottom: '0%'
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
    /********** 浏览器窗口改变时，重置报表大小 ****************/
    window.onresize = function () {
        lrGraph.resize();
    }
});