# E-commerce-data-visualization
## 电商数据可视化
### 工具
- 数据来源：天池CIKM 2019 EComm AI数据集
- 原型工具：FineBI
- 前端：HTML/CSS/javaScript/ECharts/jQuery
- 数据分析：Pandas/jupyter notebook
- 后端：Flask

### 大屏
- 首页
- 商品页
- 用户页
- 动态路径动画
### 文件目录
- app文件夹是网站,manage.py是网站启动脚本
	- templates里面是html文件
	- static里是js、css、json文件
- data_system文件夹里是数据处理系统和算法文件
	- data_process是面向对象方式的数据处理代码
	- algorithm里是推荐算法、聚类算法的代码 
- docs文件里是计划、需求、设计文档
### 使用说明
（1）使用如下安装命令从Github网站下载本项目：
```shell
git clone https://github.com/SuperVivian/E-commerce-data-visualization.git
```
（2）使用如下命令从requirements.txt安装依赖
```shell
pip install -r requirements.txt
```
（3）使用如下命令运行该项目：
```
python manage.py
```
（4）在浏览器中打开如下网址：
```
http://127.0.0.1:5000/
```

