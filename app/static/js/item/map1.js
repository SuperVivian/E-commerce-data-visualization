$(function () {
    //获取当天日期
    (function () {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const day = now.getDate();
        $("#nowDate").html(year + "年" + month + "月" + day + "日");
    })();

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
            bottom: 60,
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
                position: 'left'
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