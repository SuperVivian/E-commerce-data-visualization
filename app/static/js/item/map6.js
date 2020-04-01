$(function () {

	/******************* 玫瑰图 ******************/
	//初始化echarts实例
	var user_type_price = echarts.init(document.getElementById("user_type_price"));
	var user1_opt = {
		title: {
			text: "",
			left: 'center',
			top: 0,
			textStyle: {
				color: '#fff'
			}
		},
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},

		visualMap: {
			show: true,
			type: 'continuous',
			text: ['High', 'Low'],
			textStyle: {
				color: '#fff'
			},
			itemHeight: 300,
			itemWidth: 15,
			calculable: true,
			inverse: true,
			bottom: "5%",
			orient: 'horizontal',
			left: 'center',
			min: 0,
			max: 40000,
			inRange: {
				colorLightness: [0, 1]
			}
		},
		series: [{
			name: "",
			type: 'pie',
			radius: '55%',
			center: ['50%', '50%'],
			data: [],
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
	user_type_price.setOption(user1_opt);
	//加载json数据
	$.ajax({
			url: "/static/data/item/user_type_price.json",
			dataType: "json"
		})
		.done(function (data) {
			console.log('user_type_price : ', data);
			user_type_price.setOption({
				title: {
					text: data.title_text[0]
				},
				visualMap: {
					max: data.user_1.sort(function (a, b) {
						return b.value - a.value;
					})[0].value
				},
				series: [{
					name: data.title_text[0],
					data: data.user_1.sort(function (a, b) {
						return a.value - b.value;
					}),
				}],
			});
		}).fail(function (jqXHR) {
			console.log("Ajax Fail: ", jqXHR.status, jqXHR.statusText);
		});
	$("#incomeSelector").change(function () {
		user_type_price.setOption(user1_opt);
		switch ($(this).val()) {
			case "user1":
				$.ajax({
						url: "/static/data/item/user_type_price.json",
						dataType: "json"
					})
					.done(function (data) {
						console.log('Data: ', data);
						user_type_price.setOption({
							title: {
								text: data.title_text[0]
							},
							visualMap: {
								max: data.user_1.sort(function (a, b) {
									return b.value - a.value;
								})[0].value
							},
							series: [{
								name: data.title_text[0],
								data: data.user_1.sort(function (a, b) {
									return a.value - b.value;
								}),
							}],
						});
					}).fail(function (jqXHR) {
						console.log("Ajax Fail: ", jqXHR.status, jqXHR.statusText);
					});
				break;
			case "user2":
				$.ajax({
						url: "/static/data/item/user_type_price.json",
						dataType: "json"
					})
					.done(function (data) {
						console.log('Data: ', data);
						user_type_price.setOption({
							title: {
								text: data.title_text[1]
							},
							visualMap: {
								max: data.user_2.sort(function (a, b) {
									return b.value - a.value;
								})[0].value
							},
							series: [{
								name: data.title_text[1],
								data: data.user_2.sort(function (a, b) {
									return a.value - b.value;
								}),
							}],
						});
					}).fail(function (jqXHR) {
						console.log("Ajax Fail: ", jqXHR.status, jqXHR.statusText);
					});
				break;
			case "user3":
				$.ajax({
						url: "/static/data/item/user_type_price.json",
						dataType: "json"
					})
					.done(function (data) {
						console.log('Data: ', data);
						user_type_price.setOption({
							title: {
								text: data.title_text[2]
							},
							visualMap: {
								max: data.user_3.sort(function (a, b) {
									return b.value - a.value;
								})[0].value
							},
							series: [{
								name: data.title_text[2],
								data: data.user_3.sort(function (a, b) {
									return a.value - b.value;
								}),
							}],
						});
					}).fail(function (jqXHR) {
						console.log("Ajax Fail: ", jqXHR.status, jqXHR.statusText);
					});
				break;
			case "user4":
				$.ajax({
						url: "/static/data/item/user_type_price.json",
						dataType: "json"
					})
					.done(function (data) {
						console.log('Data: ', data);
						user_type_price.setOption({
							title: {
								text: data.title_text[3]
							},
							visualMap: {
								max: data.user_4.sort(function (a, b) {
									return b.value - a.value;
								})[0].value
							},
							series: [{
								name: data.title_text[3],
								data: data.user_4.sort(function (a, b) {
									return a.value - b.value;
								}),
							}],
						});
					}).fail(function (jqXHR) {
						console.log("Ajax Fail: ", jqXHR.status, jqXHR.statusText);
					});
				break;
			case "user5":
				$.ajax({
						url: "/static/data/item/user_type_price.json",
						dataType: "json"
					})
					.done(function (data) {
						console.log('Data: ', data);
						user_type_price.setOption({
							title: {
								text: data.title_text[4]
							},
							visualMap: {
								max: data.user_5.sort(function (a, b) {
									return b.value - a.value;
								})[0].value
							},
							series: [{
								name: data.title_text[4],
								data: data.user_5.sort(function (a, b) {
									return a.value - b.value;
								}),
							}],
						});
					}).fail(function (jqXHR) {
						console.log("Ajax Fail: ", jqXHR.status, jqXHR.statusText);
					});
				break;
			case "user6":
				$.ajax({
						url: "/static/data/item/user_type_price.json",
						dataType: "json"
					})
					.done(function (data) {
						console.log('Data: ', data);
						user_type_price.setOption({
							title: {
								text: data.title_text[5]
							},
							visualMap: {
								max: data.user_6.sort(function (a, b) {
									return b.value - a.value;
								})[0].value
							},
							series: [{
								name: data.title_text[5],
								data: data.user_6.sort(function (a, b) {
									return a.value - b.value;
								}),
							}],
						});
					}).fail(function (jqXHR) {
						console.log("Ajax Fail: ", jqXHR.status, jqXHR.statusText);
					});
				break;
		}
	});

	/********** 浏览器窗口改变时，重置报表大小 ****************/
	window.onresize = function () {
		user_type_price.resize();
	}

});