$(function () {

    /******************* 漏斗图 ******************/
    //初始化echarts实例
    const behavior_ratio = echarts.init(document.getElementById("behavior_ratio"));
    //报表配置项
    const behavior_ratio_opt = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}%"
        },
        series: {
            name: '漏斗图',
            type: 'funnel',
            left: '10%',
            top: 20,
            bottom: 30,
            width: '80%',
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            color: ['#99D44D', '#00D2EB', '#4086F2', '#5548CF'],
            label: {
                show: true,
                position: 'left',
                fontSize:13
            },
            labelLine: {
                length: 10,
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            }
        }
    };
    //渲染报表
    behavior_ratio.setOption(behavior_ratio_opt);
    //加载json数据
    $.ajax({
        url: "/static/data/item/behavior_ratio.json",
        dataType: "json"
    })
    .done(function (data) {
        console.log('Data: ', data);
        behavior_ratio.setOption({
            series: [{
                data: data
            }]
        });
    }).fail(function (jqXHR) {
        console.log("Ajax Fail: ", jqXHR.status, jqXHR.statusText);
    });

    /********** 浏览器窗口改变时，重置报表大小 ****************/
    window.onresize = function () {
        flyMap.resize();
    }
});