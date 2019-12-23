$(function () {
	//******************* 折线图 ******************/
	//初始化echarts实例
	const worldMap = echarts.init(document.getElementById("worldMap"));
	data = [
		["06-05", "点击"],
		["06-06", '点击'],
		["06-07", '点击'],
		["06-08", '购物车'],
		["06-09", '点击'],
		["06-10", '点击'],
		["06-11", '点击'],
		["06-12", '点击'],
		["06-13", '点击'],
		["06-14", '点击'],
		["06-15", '收藏'],
		["06-16", '点击'],
		["06-17", '购物车'],
		["06-18", '点击'],
		["06-19", '点击'],
		["06-20", '点击'],
		["06-21", '购买'],
		["06-22", '点击']		
	];

	var dateList = data.map(function (item) {
		return  item[0];
	});
	var valueList = data.map(function (item) {
		return  item[1];	
	});
	const worldMapOpt = {
		color:'#DE7',
		title: [{
			top: '0%',
			left: 'center',
			text: '李女士',
			textStyle: {
				color: "#fff",
				fontSize:"15",				
			}
		}],
		tooltip: {
			trigger: 'axis',
			formatter: '{b0}: {c0}<br />',
			axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		xAxis: [{
			data: dateList,
			axisLine: {
				lineStyle: {
					color: "#fff",
				}
			},
		}],
		yAxis: [{
			type: 'category',
			splitLine: {
				show: true
			},
			axisLine: {
				lineStyle: {
					color: "#fff",
				}
			},
			
		}],
		grid:  {
			left: '0%',
			bottom: '25%',
			containLabel: true
		},
		series: [{
			type: 'line',
			showSymbol: true,
			data: valueList
		}]
	};
	worldMap.setOption(worldMapOpt);

	/********** 浏览器窗口改变时，重置报表大小 ****************/
	window.onresize = function () {
		worldMap.resize();
	}
});