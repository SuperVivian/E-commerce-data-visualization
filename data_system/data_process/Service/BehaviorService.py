from DAO.BehaviorDao import BehaviorDao
import numpy as np
import json

class BehaviorService:

    def __init__(self):
        print("<<<<<<<<<<<<<<<<<<<<<<<<<正在进行BehaviorService的初始化<<<<<<<<<<<<<<<<<")
        self.behaviordao = BehaviorDao()


    """
    函数：每天用户的操作量，
    数据结果：{"20190610": {"buy": 282, "cart": 1260, "clk": 12815, "collect": 495}, "20190611":
    """
    #TODO:统计每天的用户数
    #
    def  getAllUserAmountByDateService(self):
        ans ={}
        try:
            for i in np.arange(11):
                d = 20190610 + i
                result = ()
                myresult = self.behaviordao.sql_getAllUserAmountByDate(d)
                for t in myresult:
                    result += t
                #print(result)
                dict = {}
                sum = 0
                for j in np.arange(len(result) / 2):
                    dict[result[int(j * 2)]] = result[int(j * 2 + 1)]
                    sum += result[int(j * 2 + 1)]
                dict["sum"] = sum
                ans[int(d)] = dict
            json_str = json.dumps(ans)
            #print("josn :" + json_str)

        except Exception as e:
            print(e)
            print("Service getAllUserAmountByDateService有问题")
            return ""
        return json_str

    """
    函数：计算每天的活跃人数
    数据结果：{"20190610": 244, "20190611": 233, "20190612": 268}
    """
    def  getAllActiveUserAmountByDateService(self,activate_p = 10):
        result = ()
        try:
            myresult = self.behaviordao.sql_getAllActiveUserAmountByDate(activate_p)
            for t in myresult:
                result += t
            #print(result)
            dict = {}
            for i in np.arange(len(result) / 2):
                dict[result[int(i * 2)]] = result[int(i * 2 + 1)]
            json_str = json.dumps(dict)  # 此时是string的类型，如果 需要变成json，k =json.loads(json_str)
            #print("JSON 对象：", json_str)
        except Exception as e:
            print(e)
            return ""
        return json_str


    """
    函数：实现json的格式化
    """
    def newgetTopNBigCateService(self,myresult):
        result = {}
        try:
            temp = ()
            for t in myresult:
                temp += t
            for k in np.arange(len(temp) / 2):
                result[temp[int (k * 2)]] = temp[int(k * 2 + 1)]
            json_str = json.dumps(result)
            #print(json_str)
        except Exception as e:
            print(e)
            print("newgetTopNBigCateService 有问题")
            return ""
        return result

    """
       函数：实现json的格式化
       """

    def newgetRatioService(self, myresult):
        result = {}
        try:
            temp = ()
            for t in myresult:
                temp += t
            sum = 0
            for t in np.arange(len(temp) / 2):
                sum +=temp[int(t * 2 + 1)]
            for k in np.arange(len(temp) / 2):
                result[temp[int(k * 2)]] = temp[int(k * 2 + 1)] / sum
            json_str = json.dumps(result)
            # print(json_str)
        except Exception as e:
            print(e)
            print("newgetRatioService 有问题")
            return ""
        return result

    """
    函数：实现购买量json样式
    """
    def newgetTopNBigCate1Service(self,n = 10):
        ans = {}
        try:
            for i in np.arange(11):
                d = 20190610 + i
                myresult = self.behaviordao.sql_newgetTopNBigCate1(n=n,d = d)
                ans[int(d)] = self.newgetTopNBigCateService(myresult)
            json_str = json.dumps(ans)
            #print(json_str)
        except Exception as e:
            print(e)
            print("newgetTopNBigCate1Service 有问题")
            return ""
        return json_str

    """
        函数：实现点击量json样式
    """
    def newgetTopNBigCate2Service(self, n=10):
        ans = {}
        try:
            for i in np.arange(11):
                d = 20190610 + i
                myresult = self.behaviordao.sql_newgetTopNBigCate2(n=n, d=d)
                ans[int(d)] = self.newgetTopNBigCateService(myresult)
            json_str = json.dumps(ans)
            #print(json_str)
        except Exception as e:
            print(e)
            print("newgetTopNBigCate2Service 有问题")
            return ""
        return json_str

    """
            函数：实现购物车量json样式
    """

    def newgetTopNBigCate3Service(self, n=10):
        ans = {}
        try:
            for i in np.arange(11):
                d = 20190610 + i
                myresult = self.behaviordao.sql_newgetTopNBigCate3(n=n, d=d)
                ans[int(d)] = self.newgetTopNBigCateService(myresult)
            json_str = json.dumps(ans)
            #print(json_str)
        except Exception as e:
            print(e)
            print("newgetTopNBigCate3Service 有问题")
            return ""
        return json_str


    """
               函数：实现收藏量json样式
    """
    def newgetTopNBigCate4Service(self, n=10):
        ans = {}
        try:
            for i in np.arange(11):
                d = 20190610 + i
                myresult = self.behaviordao.sql_newgetTopNBigCate4(n=n, d=d)
                ans[int(d)] = self.newgetTopNBigCateService(myresult)
            json_str = json.dumps(ans)
            #print(json_str)
        except Exception as e:
            print(e)
            print("newgetTopNBigCate3Service 有问题")
            return ""
        return json_str

    #TODO：转化率的问题

    """
               函数：每天用户的行为数
    """
    def getBehaviorAmountByDateService(self):
        ans = {}
        try:
            for i in np.arange(11):
                d = 20190610 + i
                myresult = self.behaviordao.sql_getBehaviorAmountByDate(d=d)
                ans[int(d)] = self.newgetTopNBigCateService(myresult)
            json_str = json.dumps(ans)
            #print(json_str)
        except Exception as e:
            print(e)
            print("newgetTopNBigCate3Service 有问题")
            return ""
        return json_str


    """
    函数：计算每天用户的行为转化率
    """
    def getBehaviorRatioByDateService(self):
        ans = {}
        try:
            for i in np.arange(11):
                d = 20190610 + i
                myresult = self.behaviordao.sql_getBehaviorRatioByDate(d=d)
                ans[int(d)] = self.newgetRatioService(myresult)
            json_str = json.dumps(ans)
            #print(json_str)
        except Exception as e:
            print(e)
            print("getBehaviorRatioByDateService 有问题")
            return ""
        return json_str


    """
        函数：计算总的转化率
    """

    def getAllBehaviorRatioService(self):
        try:
            myresult = self.behaviordao.sql_getAllBehaviorRatio()
            ans = self.newgetRatioService(myresult)
            json_str = json.dumps(ans)
            #print(json_str)
        except Exception as e:
            print(e)
            print("getAllBehaviorRatioService 有问题")
            return ""
        return json_str


    """
    函数：计算各年龄的商品偏爱
    """

    def getTopBigCateByAgeRangeService(self,n = 10):
        ans = {}
        try:
            b_types = ["17", "24", "29", "34", "39", "44", "49", "54", "59", "60"]
            for i in b_types:
                myresult = self.behaviordao.sql_getTopBigCateByAgeRange(n= n,age = i)
                ans[int(i)] = self.newgetTopNBigCateService(myresult)
            json_str = json.dumps(ans)
            #print(json_str)
        except Exception as e:
            print(e)
            print("newgetTopNBigCate3Service 有问题")
            return ""
        return json_str

    """
    函数：获取某个商品大类的某个品牌的各个价格区间的销量
    """
    def getTopPriceRangeByBigCateBrandService(self,bigCate="%%",brand = "%%"):
        try:
            myresult = self.behaviordao.sql_getTopPriceRangeByBigCateBrand(bigCate=bigCate,brand = brand)
            ans = self.newgetTopNBigCateService(myresult)
            json_str = json.dumps(ans)
            #print(json_str)
        except Exception as e:
            print(e)
            print("getAllBehaviorRatioService 有问题")
            return ""
        return json_str


    """
    函数：获取收入等级人们的消费价格的比例
    """
    def getConsumePriceRatioByIncomeLevelService(self):
        ans = {}
        try:
            b_types = np.arange(10)
            for i in b_types:
                myresult = self.behaviordao.sql_getConsumePriceRatioByIncomeLevel(incomeLevel=i)
                ans[int(i)] = self.newgetTopNBigCateService(myresult)
            json_str = json.dumps(ans)
            #print(json_str)
        except Exception as e:
            print(e)
            print("newgetTopNBigCate3Service 有问题")
            return ""
        return json_str

    #TODO: def getTopNSaleBigCateInfoService(n, bigCate):













# be = BehaviorService()
# print(be.getAllUserAmountByDateService())