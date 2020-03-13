$(function () {

	/******************* 饼图 ******************/
	//初始化echarts实例
	var cityMap = echarts.init(document.getElementById("cityMap"));
	var highIncomeOpt = {
		title: {
			text: "高收入",
			left: 'center',
			top: 20,
			textStyle: {
				color: '#fff'
			}
		},

		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},

		visualMap: {
			show: false,
			min: 80,
			max: 600,
			inRange: {
				colorLightness: [0, 1]
			}
		},
		series: [{
			name:  "高收入",
			type: 'pie',
			radius: '55%',
			center: ['50%', '50%'],
			data: [{
					value: 335,
					name: '0-0.5k'
				},
				{
					value: 310,
					name: '0.5k-1k'
				},
				{
					value: 274,
					name: '1k-5k'
				},
				{
					value: 235,
					name: '5k-8k'
				},
				{
					value: 400,
					name: '8k-1w'
				}
			].sort(function (a, b) {
				return a.value - b.value;
			}),
			roseType: 'radius',
			label: {
				normal: {
					textStyle: {
						color: '#fff'
					}
				}
			},
			labelLine: {
				normal: {
					lineStyle: {
						color: '#fff'
					},
					smooth: 0.2,
					length: 10,
					length2: 20
				}
			},
			itemStyle: {
				normal: {
					color: '#2692DC',
					shadowBlur: 200,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			},

			animationType: 'scale',
			animationEasing: 'elasticOut',
			animationDelay: function (idx) {
				return Math.random() * 200;
			}
		}]
	};
	var lowIncomeOpt = {
		title: {
			text: "低收入",
			left: 'center',
			top: 20,
			textStyle: {
				color: '#fff'
			}
		},

		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},

		visualMap: {
			show: false,
			min: 80,
			max: 600,
			inRange: {
				colorLightness: [0, 1]
			}
		},
		series: [{
			name:  "低收入",
			type: 'pie',
			radius: '55%',
			center: ['50%', '50%'],
			data: [{
					value: 335,
					name: '0-0.5k'
				},
				{
					value: 200,
					name: '0.5k-1k'
				},
				{
					value: 450,
					name: '1k-5k'
				},
				{
					value: 235,
					name: '5k-8k'
				},
				{
					value: 300,
					name: '8k-1w'
				}
			].sort(function (a, b) {
				return a.value - b.value;
			}),
			roseType: 'radius',
			label: {
				normal: {
					textStyle: {
						color: '#fff'
					}
				}
			},
			labelLine: {
				normal: {
					lineStyle: {
						color: '#fff'
					},
					smooth: 0.2,
					length: 10,
					length2: 20
				}
			},
			itemStyle: {
				normal: {
					color: '#2692DC',
					shadowBlur: 200,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			},

			animationType: 'scale',
			animationEasing: 'elasticOut',
			animationDelay: function (idx) {
				return Math.random() * 200;
			}
		}]
	};
	var mediumIncomeOpt = {
		title: {
			text: "中收入",
			left: 'center',
			top: 20,
			textStyle: {
				color: '#fff'
			}
		},

		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},

		visualMap: {
			show: false,
			min: 80,
			max: 600,
			inRange: {
				colorLightness: [0, 1]
			}
		},
		series: [{
			name: "中收入",
			type: 'pie',
			radius: '55%',
			center: ['50%', '50%'],
			data: [{
					value: 460,
					name: '0-0.5k'
				},
				{
					value: 310,
					name: '0.5k-1k'
				},
				{
					value: 274,
					name: '1k-5k'
				},
				{
					value: 180,
					name: '5k-8k'
				},
				{
					value: 50,
					name: '8k-1w'
				}
			].sort(function (a, b) {
				return a.value - b.value;
			}),
			roseType: 'radius',
			label: {
				normal: {
					textStyle: {
						color: '#fff'
					}
				}
			},
			labelLine: {
				normal: {
					lineStyle: {
						color: '#fff'
					},
					smooth: 0.2,
					length: 10,
					length2: 20
				}
			},
			itemStyle: {
				normal: {
					color: '#2692DC',
					shadowBlur: 200,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			},

			animationType: 'scale',
			animationEasing: 'elasticOut',
			animationDelay: function (idx) {
				return Math.random() * 200;
			}
		}]
	};
	cityMap.setOption(highIncomeOpt);

	$("#incomeSelector").change(function () {
		console.log();
		switch ($(this).val()) {
			case "highIncome":				
				cityMap.setOption(highIncomeOpt);
				break;
			case "lowIncome":				
				cityMap.setOption(lowIncomeOpt);
				break;
			case "mediunmIncome":				
				cityMap.setOption(mediumIncomeOpt);
				break;
		}
	});

	/********** 浏览器窗口改变时，重置报表大小 ****************/
	window.onresize = function () {
		cityMap.resize();
	}

});



//三个环形

// title: [{
// 	top: '77%',
// 	left: '43%',
// 	text: '高收入',
// 	textStyle: {
// 		color: "#fff",
// 		fontSize:"15"
// 	}
// },
//  {
// 	top: '70%',
// 	left: '47%',
// 	text: '中收入',
// 	textStyle: {
// 		color: "#fff"
// 	}
// }, {
// 	top: '70%',
// 	left: '22%',
// 	text: '低收入',
// 	textStyle: {
// 		color: "#fff"
// 	}
// }
// ],
// legend: {
// 	orient: 'horizontal',
// 	x: 'right',
// 	data: ['0-0.5k', '1k-5k', '0.5k-1k', '5k-8k', '8k-1w'],
// 	textStyle: {
// 		color: "#fff",
// 		fontSize:"10"
// 	}
// },
// series: [
// {
// 		name: '低收入',
// 		type: 'pie',
// 		radius: ["20", "30"],
// 		avoidLabelOverlap: false,
// 		center: ['15%', '50%'],
// 		label: {
// 			normal: {
// 				show: false,
// 				position: 'center'
// 			},
// 			emphasis: {
// 				show: true,
// 				textStyle: {
// 					fontSize: '30',
// 					fontWeight: 'bold'
// 				}
// 			}
// 		},
// 		labelLine: {
// 			normal: {
// 				show: false
// 			}
// 		},
// 		data: [{
// 				value: 335,
// 				name: '0-0.5k'
// 			},
// 			{
// 				value: 310,
// 				name: '1k-5k'
// 			},
// 			{
// 				value: 234,
// 				name: '0.5k-1k'
// 			},
// 			{
// 				value: 135,
// 				name: '5k-8k'
// 			},
// 			{
// 				value: 1548,
// 				name: '8k-1w'
// 			}
// 		]
// 	},
// {
// 	name: '中收入',
// 	type: 'pie',
// 	radius: ["20", "30"],
// 	avoidLabelOverlap: false,
// 	center: ['50%', '50%'],
// 	label: {
// 		normal: {
// 			show: false,
// 			position: 'center'
// 		},
// 		emphasis: {
// 			show: true,
// 			textStyle: {
// 				fontSize: '30',
// 				fontWeight: 'bold'
// 			}
// 		}
// 	},
// 	labelLine: {
// 		normal: {
// 			show: false
// 		}
// 	},
// 	data: [{
// 			value: 335,
// 			name: '0-0.5k'
// 		},
// 		{
// 			value: 310,
// 			name: '1k-5k'
// 		},
// 		{
// 			value: 234,
// 			name: '0.5k-1k'
// 		},
// 		{
// 			value: 135,
// 			name: '5k-8k'
// 		},
// 		{
// 			value: 1548,
// 			name: '8k-1w'
// 		}
// 	]
// },
// 	{
// 		name: '高收入',
// 		type: 'pie',
// 		radius: ["50", "70"],
// 		avoidLabelOverlap: false,
// 		center: ['50%', '50%'],
// 		label: {
// 			normal: {
// 				show: false,
// 				position: 'center'
// 			},
// 			emphasis: {
// 				show: true,
// 				textStyle: {
// 					fontSize: '30',
// 					fontWeight: 'bold'
// 				}
// 			}
// 		},
// 		labelLine: {
// 			normal: {
// 				show: false
// 			}
// 		},
// 		data: [{
// 				value: 335,
// 				name: '0-0.5k'
// 			},
// 			{
// 				value: 310,
// 				name: '1k-5k'
// 			},
// 			{
// 				value: 234,
// 				name: '0.5k-1k'
// 			},
// 			{
// 				value: 135,
// 				name: '5k-8k'
// 			},
// 			{
// 				value: 1548,
// 				name: '8k-1w'
// 			}
// 		]
// 	}
// ]				