$(function () {
	/*************** 词云图 **************/
	//初始化echarts实例
	var brandPriceMap = echarts.init(document.getElementById("brandPriceMap"));
	var rotationRange=[-15,15];
	var top1_MapOpt = {
		title: {
		    text:"",
			left: 'center',
			top: 0,
			textStyle: {
				color: '#fff'
			}
		},
		tooltip: {
			trigger: 'item',
		},
		series: [{
			type: 'wordCloud',
			shape: 'circle', //circle cardioid diamond triangle-forward triangle
			left: 0,
			right: 0,
			top: 10,
			bottom:10,
			right: 0,
			width: '100%',
			height: '100%',
			gridSize: 10, //值越大，word间的距离越大，单位像素
			sizeRange: [20, 50], //word的字体大小区间，单位像素
			rotationRange:rotationRange, //word的可旋转角度区间
			data: []
		}],
	};
	brandPriceMap.setOption(top1_MapOpt);
	//加载json数据
	$.ajax({
			url: "/static/data/item/brand_price.json",
			dataType: "json"
		})
		.done(function (data) {
			console.log('Data: ', data);
			brandPriceMap.setOption({
				title: {
					text: data.title_text[0]
				},
				series: [{
					data: data.top1
				}],
			});
		}).fail(function (jqXHR) {
			console.log("Ajax Fail: ", jqXHR.status, jqXHR.statusText);
		});
    console.log("加载了默认词云图");

		$("#brandSelector").change(function () {
		switch ($(this).val()) {
			case "Top1":
				brandPriceMap.setOption(top1_MapOpt);
				//加载json数据
				$.ajax({
						url: "/static/data/item/brand_price.json",
						dataType: "json"
					})
					.done(function (data) {
						console.log('Data: ', data);
						brandPriceMap.setOption({
							title: {
								text: data.title_text[0]
							},
							series: [{
								data: data.top1
							}],
						});
					}).fail(function (jqXHR) {
						console.log("Ajax Fail: ", jqXHR.status, jqXHR.statusText);
					});
				break;
			case "Top2":
				brandPriceMap.setOption(top1_MapOpt);
				//加载json数据
				$.ajax({
						url: "/static/data/item/brand_price.json",
						dataType: "json"
					})
					.done(function (data) {
						console.log('Data: ', data);
						brandPriceMap.setOption({
							title: {
								text: data.title_text[1]
							},
							series: [{
								data: data.top2
							}],
						});
					}).fail(function (jqXHR) {
						console.log("Ajax Fail: ", jqXHR.status, jqXHR.statusText);
					});
				break;
			case "Top3":
				brandPriceMap.setOption(top1_MapOpt);
				//加载json数据
				$.ajax({
						url: "/static/data/item/brand_price.json",
						dataType: "json"
					})
					.done(function (data) {
						console.log('Data: ', data);
						brandPriceMap.setOption({
							title: {
								text: data.title_text[2]
							},
							series: [{
								data: data.top3
							}],
						});
					}).fail(function (jqXHR) {
						console.log("Ajax Fail: ", jqXHR.status, jqXHR.statusText);
					});
				break;
			case "Top4":
				brandPriceMap.setOption(top1_MapOpt);
				//加载json数据
				$.ajax({
						url: "/static/data/item/brand_price.json",
						dataType: "json"
					})
					.done(function (data) {
						console.log('Data: ', data);
						brandPriceMap.setOption({
							title: {
								text: data.title_text[3]
							},
							series: [{
								data: data.top4
							}],
						});
					}).fail(function (jqXHR) {
						console.log("Ajax Fail: ", jqXHR.status, jqXHR.statusText);
					});
				break;
			case "Top5":
				brandPriceMap.setOption(top1_MapOpt);
				//加载json数据
				$.ajax({
						url: "/static/data/item/brand_price.json",
						dataType: "json"
					})
					.done(function (data) {
						console.log('Data: ', data);
						brandPriceMap.setOption({
							title: {
								text: data.title_text[4]
							},
							series: [{
								data: data.top5
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
		provinceMap.resize();
	}



});