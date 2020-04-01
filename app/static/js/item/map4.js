$(function () {
	//******************* 折线图 ******************/
	//初始化echarts实例
	const user_route = echarts.init(document.getElementById("user_route"));
	//-1：未开始；0：点击；1：收藏；2：加入购物车；3：购买
	data = [
		["06-10", '点击'],
		["06-11", '购买'],
		["06-12", '点击'],
		["06-13", '购物车'],
		["06-14", '点击'],
		["06-15", '点击'],
		["06-16", '点击'],
		["06-17", '点击'],
		["06-18", '点击'],
		["06-19", '点击'],
		["06-20", '收藏']
	];

	var dateList = data.map(function (item) {
		return  item[0];
	});
	var valueList = data.map(function (item) {
		return  item[1];	
	});
	const user_route_opt = {
		color:'#DE7',
		title: [{
			top: '0%',
			left: 'center',
			text: '王女士',
			textStyle: {
				color: "#fff",
				fontSize:"20",
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
			bottom: '10%',
			containLabel: true
		},
		series: [{
			type: 'line',
			showSymbol: true,
			data: valueList
		}]
	};
	user_route.setOption(user_route_opt);

	/********** 浏览器窗口改变时，重置报表大小 ****************/
	window.onresize = function () {
		user_route.resize();
	}
});