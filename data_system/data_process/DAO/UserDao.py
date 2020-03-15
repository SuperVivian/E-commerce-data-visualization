from DAO.Mysql_Connect import Mysql_Connect
import configparser



class UserDao:
    """对于user表的sql操作"""
    def __init__(self):
        self.config = configparser.ConfigParser()
        self.config.read("../config.ini")
        self.conf_data = self.config['database']
        self.mysql_connect = Mysql_Connect(host=self.conf_data["host"], user=self.conf_data["user"],
                                           passwd=self.conf_data["passwd"], database=self.conf_data["database"])
        #self.mysql_connect = Mysql_Connect()
        self.mycursor = self.mysql_connect.mycursor
        try:
            self.mycursor.execute("SHOW TABLES")
        except:
            print("数据库连接存在问题")
            return ""
        print("************************数据库连接成功**************************")



    """
    方法：查看用户男女数 
    结果例子：
      ('F', 132363)
      ('M', 31534)
     """
    def sql_getAllGenderRatio(self):

        try:
            self.mycursor.execute("SELECT us.gender,COUNT(*)  FROM USER us  GROUP BY gender")
        except:
            print("数据库查看用户男女数有问题")
            return ""
        # for x in self.mycursor:
        #     print(x)
        return self.mycursor


    """
    方法：各年龄段人数
    结果例子：
        ('>=60', 18)
        ('[18_24]', 85528)
        ('[1_17]', 1844)
    """
    def sql_getAllAgeRatio(self):
        try:
            self.mycursor.execute("SELECT us.age,COUNT(*) FROM USER us GROUP BY age")
        except:
            print("数据库统计年龄分布有问题")
            return ""
        # for x in self.mycursor:
        #     print(x)
        return self.mycursor


    """
       方法：各职业段人数
       结果例子：
           
    """
    # TODO:重新导入mysql,添加教育特征
    def sql_getAllCareerRatio(self):
        try:
            self.mycursor.execute("SELECT us.age,COUNT(*) FROM USER us GROUP BY age")
        except:
            print("数据库统计职业分布有问题")
            return ""
        # for x in self.mycursor:
        #     print(x)
        return self.mycursor

    """
        方法：各教育水平人数
        结果例子：
        ('1_5_10', 85)
        ('1_5_2', 3037)
    """
    def sql_getAllEduRatio(self):
        try:
            self.mycursor.execute("SELECT us.stage,COUNT(*) FROM USER us GROUP BY stage")
        except:
            print("数据库统计教育水平分布有问题")
            return ""
        # for x in self.mycursor:
        #     print(x)
        return self.mycursor

    """
        方法：各收入水平人数
        结果例子：
        (19957.2, 1)
        (20015.3, 1)
         (20039.0, 1)
    """
    def sql_getAllIncomeRatio(self):
        try:
            self.mycursor.execute("SELECT us.income,COUNT(*) FROM USER us GROUP BY income")
        except:
            print("数据库统计收入水平分布有问题")
            return ""
        # k = 0
        # for x in self.mycursor:
        #     k += 1
        #     print(x)#68=4886
        # print(k)
        return self.mycursor

    """
    方法：各地方人数
    结果例子：
       (6, 11109)
       (7, 9501)
    """

    def sql_getAllLocalRatio(self):
        try:
            self.mycursor.execute("select us.province_id,count(*) from user us group by province_id")
        except:
            print("数据库统计各地人数分布有问题")
            return ""
        # for x in self.mycursor:
        #     print(x)
        return self.mycursor





#def sql_getAllGenderRatio(self):
#
# userDao = UserDao()
# # print(userDao.sql_getAllLocalRatio())
# mycursor = userDao.sql_getAllIncomeRatio()
#
# for x in mycursor:
#     print(x)







