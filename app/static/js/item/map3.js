$(function () {
	/*************** 词云图 **************/
	//初始化echarts实例
	var brandPriceMap = echarts.init(document.getElementById("brandPriceMap"));	
	var aj_MapOpt = {
		title: {
			text: "AJ",
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
			shape: 'triangle', //circle cardioid diamond triangle-forward triangle
			left: 0,
			right: 0,
			top: 0,
			right: 0,
			width: '100%',
			height: '100%',
			gridSize: 2, //值越大，word间的距离越大，单位像素
			sizeRange: [20, 50], //word的字体大小区间，单位像素
			rotationRange: [0, 0], //word的可旋转角度区间		
			data: [{
				name: '150-450',
				value: 3000,
				textStyle: {
					normal: {
						color: '#00CDE7'					
					},
					emphasis: {
						fontSize:"60"
					}
				}
			}, {
				name: '450-1000',
				value: 2181,
				textStyle: {
					normal: {
						color: '#2692DC'
					},
					emphasis: {
						fontSize:"60"
					}
				}
			}, {
				name: '30-150',
				value: 2500,
				textStyle: {
					normal: {
						color: '#5577CF'
					},
					emphasis: {
						fontSize:"60"
					}
				}
			}, {
				name: '1000-2000',
				value: 2467,
				textStyle: {
					normal: {
						color: '#DE7'
					},
					emphasis: {
						fontSize:"60"
					}
				}
			}, {
				name: '2000以上',
				value: 2244,
				textStyle: {
					normal: {
						color: '#FFCDE7'
					},
					emphasis: {
						fontSize:"60"
					}
				}
			}]
		}],
	};
	var lining_MapOpt = {
		title: {
			text: "李宁",
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
			shape: 'triangle', //circle cardioid diamond triangle-forward triangle
			left: 0,
			right: 0,
			top: 0,
			right: 0,
			width: '100%',
			height: '100%',
			gridSize: 2, //值越大，word间的距离越大，单位像素
			sizeRange: [20, 50], //word的字体大小区间，单位像素
			rotationRange: [0, 0], //word的可旋转角度区间		
			data: [{
				name: '150-450',
				value: 3000,
				textStyle: {
					normal: {
						color: '#00CDE7'					
					},
					emphasis: {
						fontSize:"60"
					}
				}
			}, {
				name: '450-1000',
				value: 2181,
				textStyle: {
					normal: {
						color: '#2692DC'
					},
					emphasis: {
						fontSize:"60"
					}
				}
			}, {
				name: '30-150',
				value: 2500,
				textStyle: {
					normal: {
						color: '#5577CF'
					},
					emphasis: {
						fontSize:"60"
					}
				}
			}, {
				name: '1000-2000',
				value: 2467,
				textStyle: {
					normal: {
						color: '#DE7'
					},
					emphasis: {
						fontSize:"60"
					}
				}
			}, {
				name: '2000以上',
				value: 2244,
				textStyle: {
					normal: {
						color: '#FFCDE7'
					},
					emphasis: {
						fontSize:"60"
					}
				}
			}]
		}],
	};
	var tebu_MapOpt = {
		title: {
			text: "特步",
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
			shape: 'triangle', //circle cardioid diamond triangle-forward triangle
			left: 0,
			right: 0,
			top: 0,
			right: 0,
			width: '100%',
			height: '100%',
			gridSize: 2, //值越大，word间的距离越大，单位像素
			sizeRange: [20, 50], //word的字体大小区间，单位像素
			rotationRange: [0, 0], //word的可旋转角度区间		
			data: [{
				name: '150-450',
				value: 3000,
				textStyle: {
					normal: {
						color: '#00CDE7'					
					},
					emphasis: {
						fontSize:"60"
					}
				}
			}, {
				name: '450-1000',
				value: 2181,
				textStyle: {
					normal: {
						color: '#2692DC'
					},
					emphasis: {
						fontSize:"60"
					}
				}
			}, {
				name: '30-150',
				value: 2500,
				textStyle: {
					normal: {
						color: '#5577CF'
					},
					emphasis: {
						fontSize:"60"
					}
				}
			}, {
				name: '1000-2000',
				value: 2467,
				textStyle: {
					normal: {
						color: '#DE7'
					},
					emphasis: {
						fontSize:"60"
					}
				}
			}, {
				name: '2000以上',
				value: 2244,
				textStyle: {
					normal: {
						color: '#FFCDE7'
					},
					emphasis: {
						fontSize:"60"
					}
				}
			}]
		}],
	};
	var adi_MapOpt = {
		title: {
			text: "阿迪达斯",
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
			shape: 'triangle', //circle cardioid diamond triangle-forward triangle
			left: 0,
			right: 0,
			top: 0,
			right: 0,
			width: '100%',
			height: '100%',
			gridSize: 2, //值越大，word间的距离越大，单位像素
			sizeRange: [20, 50], //word的字体大小区间，单位像素
			rotationRange: [0, 0], //word的可旋转角度区间		
			data: [{
				name: '150-450',
				value: 3000,
				textStyle: {
					normal: {
						color: '#00CDE7'					
					},
					emphasis: {
						fontSize:"60"
					}
				}
			}, {
				name: '450-1000',
				value: 2181,
				textStyle: {
					normal: {
						color: '#2692DC'
					},
					emphasis: {
						fontSize:"60"
					}
				}
			}, {
				name: '30-150',
				value: 2500,
				textStyle: {
					normal: {
						color: '#5577CF'
					},
					emphasis: {
						fontSize:"60"
					}
				}
			}, {
				name: '1000-2000',
				value: 2467,
				textStyle: {
					normal: {
						color: '#DE7'
					},
					emphasis: {
						fontSize:"60"
					}
				}
			}, {
				name: '2000以上',
				value: 2244,
				textStyle: {
					normal: {
						color: '#FFCDE7'
					},
					emphasis: {
						fontSize:"60"
					}
				}
			}]
		}],
	};
	brandPriceMap.setOption(aj_MapOpt);
	/********** 浏览器窗口改变时，重置报表大小 ****************/
	window.onresize = function () {
		provinceMap.resize();
	}

	$("#brandSelector").change(function () {
		switch ($(this).val()) {
			case "AJ":
				brandPriceMap.setOption(aj_MapOpt);
				break;
			case "李宁":
				brandPriceMap.setOption(lining_MapOpt);
				break;
			case "特步":
				brandPriceMap.setOption(tebu_MapOpt);
				break;
			case "阿迪达斯":
				brandPriceMap.setOption(adi_MapOpt);
				break;
		}
	});

});