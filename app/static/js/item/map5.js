$(function () {
	/******************* 柱状图 ******************/
	//初始化echarts实例
	var colors = ['#F490B2', '#DE7', '#4086F2', '#7867EA', ];
	const item_top = echarts.init(document.getElementById("item_top"));
	const item_top_opt = {
		color: colors,
		grid: {
			right: '5%',
			left: '10%',
			bottom:'15%'
		},
		title: {
			left: 'center',
			top: 0,
			textStyle: {
				color: '#fff'
			}
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
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
			}
		}],
		yAxis: [{
			type: 'value',
			position: 'left',
			offset: 0,
			splitLine: {
				show: false
			},
			axisLabel: {
				formatter: '{value}'
			}
		}],
		series: [
		{
			type: 'bar',
			itemStyle: {
				emphasis: {
					barBorderRadius: 7
				},
				normal: {
					barBorderRadius: 7
				}
			}
		}
		]
	};
	item_top.setOption(item_top_opt);
	//加载json数据
	$.ajax({
			url: "/static/data/item/item_top.json",
			dataType: "json"
		})
		.done(function (data) {
			console.log('item_top : ', data);
			item_top.setOption({
				title: {
					text: data.buy.name
				},
				xAxis: [{
					data: data.buy.category
				}],
				yAxis: [{
					min: data.buy.value[9],
					max: data.buy.value[0],
					name: data.buy.name,
					axisLine: {
						lineStyle: {
							color: colors[0]
						}
					}
				}],
				series: [
				{
					name: data.buy.name,
					data: data.buy.value,
					color: colors[0]
				}
				]
			});
		}).fail(function (jqXHR) {
			console.log("Ajax Fail: ", jqXHR.status, jqXHR.statusText);
		});
	$("#itemSelector").change(function () {
		item_top.setOption(item_top_opt);
		switch ($(this).val()) {
			case "buy":
				$.ajax({
						url: "/static/data/item/item_top.json",
						dataType: "json"
					})
					.done(function (data) {
						console.log('item_top : ', data);
						item_top.setOption({
							title: {
								text: data.buy.name
							},
							xAxis: [{
								data: data.buy.category
							}],
							yAxis: [{
								min: data.buy.value[9],
								max: data.buy.value[0],
								name: data.buy.name,
								axisLine: {
									lineStyle: {
										color: colors[0]
									}
								}
							}],
							series: [{
								name: data.buy.name,
								data: data.buy.value,
								color: colors[0]
							}]
						});
					}).fail(function (jqXHR) {
						console.log("Ajax Fail: ", jqXHR.status, jqXHR.statusText);
					});
				break;
			case "click":
				$.ajax({
						url: "/static/data/item/item_top.json",
						dataType: "json"
					})
					.done(function (data) {
						console.log('item_top : ', data);
						item_top.setOption({
							title: {
								text: data.click.name
							},
							xAxis: [{
								data: data.click.category
							}],
							yAxis: [{
								min: data.click.value[9],
								max: data.click.value[0],
								name: data.click.name,
								axisLine: {
									lineStyle: {
										color: colors[1]
									}
								}
							}],
							series: [{
								name: data.click.name,
								data: data.click.value,
								color: colors[1]
							}]
						});
					}).fail(function (jqXHR) {
						console.log("Ajax Fail: ", jqXHR.status, jqXHR.statusText);
					});
				break;
			case "cart":
				$.ajax({
						url: "/static/data/item/item_top.json",
						dataType: "json"
					})
					.done(function (data) {
						console.log('item_top : ', data);
						item_top.setOption({
							title: {
								text: data.cart.name
							},
							xAxis: [{
								data: data.cart.category
							}],
							yAxis: [{
								min: data.cart.value[9],
								max: data.cart.value[0],
								name: data.cart.name,
								axisLine: {
									lineStyle: {
										color: colors[2]
									}
								}
							}],
							series: [{
								name: data.cart.name,
								data: data.cart.value,
								color: colors[2]
							}]
						});
					}).fail(function (jqXHR) {
						console.log("Ajax Fail: ", jqXHR.status, jqXHR.statusText);
					});
				break;
			case "collect":
				$.ajax({
						url: "/static/data/item/item_top.json",
						dataType: "json"
					})
					.done(function (data) {
						console.log('item_top : ', data);
						item_top.setOption({
							title: {
								text: data.collect.name
							},
							xAxis: [{
								data: data.collect.category
							}],
							yAxis: [{
								min: data.collect.value[9],
								max: data.collect.value[0],
								name: data.collect.name,
								axisLine: {
									lineStyle: {
										color: colors[3]
									}
								}
							}],
							series: [{
								name: data.collect.name,
								data: data.collect.value,
								color: colors[3]
							}]
						});
					}).fail(function (jqXHR) {
						console.log("Ajax Fail: ", jqXHR.status, jqXHR.statusText);
					});
				break;
		}
	});

	/********** 浏览器窗口改变时，重置报表大小 ****************/
	window.onresize = function () {
		item_top.resize();
	}
});