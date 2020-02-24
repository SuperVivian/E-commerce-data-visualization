$(function () {
    /******************* 漏斗图 ******************/
    //初始化echarts实例
    const flyMap = echarts.init(document.getElementById("flyMap"));
    var target_data= Server.my_data;
    //报表配置项
    const flyMapOpt = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}%"
        },
        series: [{
            name: '漏斗图',
            type: 'funnel',
            left: '10%',
            top: 20,
            bottom: 60,
            width: '80%',
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            color: ['#00CDE7', '#2692DC', '#2692DC', '#5548CF'],
            label:{
                show: true,
                position: 'inside'
            },
            labelLine: {
                length: 10,
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            },
            data: target_data
        },{
            name: '漏斗图',
            type: 'funnel',
            left: '10%',
            top: 20,
            bottom: 60,
            width: '80%',
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            color: ['#00CDE7', '#2692DC', '#2692DC', '#5548CF'],
            label:{
                show: true,
                position: 'left'
            },
            labelLine: {
                length: 10,
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            },
            data: target_data
        }]
    };
    //渲染报表
    flyMap.setOption(flyMapOpt);

    /********** 浏览器窗口改变时，重置报表大小 ****************/
    window.onresize = function () {
        flyMap.resize();        
    }
});