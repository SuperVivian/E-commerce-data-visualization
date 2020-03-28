from DAO.UserDao import UserDao
import json
import numpy as np

class UserService:


    def __init__(self):
        print("<<<<<<<<<<<<<<<<<<<<<<<正在进行UserService的初始化<<<<<<<<<<<<<<<<<<")
        self.user_dao = UserDao()


    """
    计算：统计结果的占比,可以用来实现，可以对UserDAO的所有函数都实现
    
    """
    def  getRatioService(self,myresult):
        result = ()
        for t in myresult:
            result += t
        #print(result)
        sum = 0
        for i in np.arange(len(result) / 2):
            sum += result[int(i * 2 + 1)]
        try:
            dict = {}
            for i in np.arange(len(result) / 2):
                dict[result[int(i * 2)]] = result[int(i * 2 + 1)] / sum
            json_str = json.dumps(dict)#此时是string的类型，如果 需要变成json，k =json.loads(json_str)
            #print("JSON 对象：", json_str)
        except:
            print("Service: 计算比例有问题")
            return ""
        return json_str


    """
    函数：获取性别比例
    """
    def getAllGenderRatioService(self):
        return self.getRatioService(self.user_dao.sql_getAllGenderRatio())

    """
    函数： 获取年龄比例
    """
    def getAllAgeRatioService(self):
        return self.getRatioService(self.user_dao.sql_getAllAgeRatio())

    """
    函数：获取职业比例
    """
    def getAllCareerRatioService(self):
        return self.getRatioService(self.user_dao.sql_getAllCareerRatio())

    """
    函数：获取教育阶层比例
    """
    def getAllEduRatioService(self):
        return self.getRatioService(self.user_dao.sql_getAllEduRatio())

    """
    函数：获取收入阶层比例
    """
    def getAllIncomeRatioService(self):
        return self.getRatioService(self.user_dao.sql_getAllIncomeRatio())

    """
    函数：获取地区人数比例
    """
    def getAllLocalRatioService(self):
        return self.getRatioService(self.user_dao.sql_getAllLocalRatio())






    """
    函数：获得男女数据，计算比例
    """
    def getAllGenderRatioService2(self):
        mycursor = self.user_dao.sql_getAllGenderRatio()
        result = ()
        for t in mycursor:
            result += t
        # print(result)
        try:
            data = { result[0] : result[1] / (result[3] + result[1]), result[2] : result[3] / (result[3] + result[1])}
            json_str = json.dumps(data)
            #print("JSON 对象：", json_str)
        except:
            print("Service: 获得男女比例 有问题")
            return ""
        return json_str

    """
    函数：获得年龄比例
    """
    def getAllAgeRatioService2(self):
        mycursor = self.user_dao.sql_getAllAgeRatio()
        result = ()
        for t in mycursor:
            result += t
        #print(result)
        sum = 0
        for i in np.arange(len(result) / 2):
            sum += result[int(i * 2 + 1)]
        try:
            dict = {}
            for i in np.arange(len(result) / 2):
                dict[result[int(i * 2)]] = result[int(i * 2 + 1)] / sum
            json_str = json.dumps(dict)
            #print("JSON 对象：", json_str)
        except:
            print("Service: 获得年龄比例有问题")
            return ""
        return json_str

    """
    函数：计算各个教育水平的占比
    结果： {"1": 0.021159630743698785, "1_10": 0.00023185293202438118, "1_2": 0.0276759184121735, 
    """
    def  getAllEduRatioService2(self):
        mycursor = self.user_dao.sql_getAllEduRatio()
        result = ()
        for t in mycursor:
            result += t
        print(result)
        sum = 0
        for i in np.arange(len(result) / 2):
            sum += result[int(i * 2 + 1)]
        try:
            dict = {}
            for i in np.arange(len(result) / 2):
                dict[result[int(i * 2)]] = result[int(i * 2 + 1)] / sum
            json_str = json.dumps(dict)
            print("JSON 对象：", json_str)
        except:
            print("Service: 获得年龄比例有问题")
            return ""
        return json_str








# UserService = UserService()
# # user_dao = UserDao()
# # UserService.getRatioService(user_dao.sql_getAllGenderRatio())
# UserService.getAllLocalRatioService()
# be =  BehaviorDao()
# k = be.getAllBehaviorRatio()
# for t in k:
#     print(t)

