$(function () {
	/******************* 柱状图 ******************/
	//初始化echarts实例
	var colors = ['#FFCDE7', '#d14a61', '#5793f3', '#675bba', ];
	const barMap = echarts.init(document.getElementById("barMap"));
	const barMapOpt = {
		color: colors,
		grid: {
			right: '10%',
			left: '10%'

		},
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		legend: {
			data: ['购买量', '点击量', '购物车量', '收藏量'],
			textStyle: {
				color: '#fff'
			},
			y: '5%',
			x: 'center',
		},
		xAxis: [{
			type: 'category',
			axisTick: {
				alignWithLabel: true
			},
			axisLine: {
				lineStyle: {
					color: "#fff",
				}
			},
			data: ['连衣裙', '衬衫', '高跟鞋', '口红', '暖宝宝', '剃须刀', '啤酒', '水杯', '书包', '大衣', ]
		}],
		yAxis: [{
				type: 'value',
				name: '点击量',
				min: 0,
				max: 200,
				position: 'right',
				offset: 0,
				axisLine: {
					lineStyle: {
						color: colors[0]
					}
				},
				splitLine: {
					show: false
				},
				axisLabel: {
					formatter: '{value}'
				}

			},
			{
				type: 'value',
				name: '购买量',
				min: 0,
				max: 200,
				position: 'left',
				axisLine: {
					lineStyle: {
						color: colors[1]
					}
				},
				splitLine: {
					show: false
				},
				axisLabel: {
					formatter: '{value}'
				}
			}
		],
		series: [{
				name: '点击量',
				type: 'bar',
				data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0]
			},
			{
				name: '购买量',
				type: 'line',
				yAxisIndex: 1,
				data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8]
			},
			{
				name: '购物车量',
				type: 'bar',
				yAxisIndex: 1,
				data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8]
			},

			{
				name: '收藏量',
				type: 'bar',
				yAxisIndex: 1,
				data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8]
			}

		]
	};
	barMap.setOption(barMapOpt);
	/********** 浏览器窗口改变时，重置报表大小 ****************/
	window.onresize = function () {
		barMap.resize();
	}
});