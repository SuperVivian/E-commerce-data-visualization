import numpy as np
from DAO.Mysql_Connect import Mysql_Connect
import configparser

class BehaviorDao:
    """对于behavior表的sql操作"""

    def __init__(self):
        self.config = configparser.ConfigParser()
        self.config.read("config.ini")
        self.conf_data = self.config['database']
        self.mysql_connect = Mysql_Connect(host=self.conf_data["host"], user=self.conf_data["user"],
                                           passwd=self.conf_data["passwd"], database=self.conf_data["database"])
        # self.mysql_connect = Mysql_Connect(host="rm-bp1460u9325k305b47o.mysql.rds.aliyuncs.com", user="caishulin",
        #                               passwd="12345678cal!", database="data_test")
        #self.mysql_connect = Mysql_Connect()
        self.mycursor = self.mysql_connect.mycursor
        try:
            self.mycursor.execute("SHOW TABLES")
        except:
            print("数据库连接存在问题")
            return ""
        print("************************数据库连接成功**************************")

    """
    函数实现：1.1 操作次数
    查询结果：
    (20190610, 'buy', 282)
    (20190610, 'cart', 1260)
    """
    def sql_getAllUserAmountByDate(self,date_t = '%%'):

        try:
            self.mycursor.execute("SELECT  bh.behavior_type,COUNT(*) AS num FROM behavior bh where date_d like '" +str(date_t) +"' GROUP BY behavior_type")

        except Exception as e:
            print(e)
            print("1.1 操作次数有问题")
            return ""
        return self.mycursor

    """
    函数实现：1.2 统计每日活跃用户数目
    查询结果：
    (20190610, 244)
    (20190611, 233)
    (20190612, 268)
    """
    def  sql_getAllActiveUserAmountByDate(self,activate_p = 10):

        try:
            self.mycursor.execute(
                "CREATE VIEW temp_2_1 AS (SELECT bh.date_d,user_id,COUNT(*) AS k_num FROM behavior bh GROUP BY date_d,user_id) ")
        except:
            print("1.2的视图已经存在，进行查询")
            # self.mycursor.execute(
            #     "SELECT date_d, COUNT(*) AS num  FROM temp_2_1 WHERE k_num > " + str(activate_p) + " GROUP BY  date_d")

        finally:
            try:
                self.mycursor.execute("SELECT date_d, COUNT(*) AS num  FROM temp_2_1 WHERE k_num > "+ str(activate_p) +" GROUP BY  date_d")
                #print("SELECT date_d, COUNT(*) AS num  FROM temp_2_1 WHERE k_num > "+ str(activate_p) +" GROUP BY  date_d")
            except:
                print("1.2查询创建失败")
                return ""
        return self.mycursor


    """
        函数：1.2.1 每天TOP大类的购买量,没有用视图
        结果：（classid,num,classid.num）这类共11 * n * 2
    """

    def sql_newgetTopNBigCate1(self, n=10,d = 20190610):
        try:
            print("SELECT class1_id,count_m FROM 1_2_behavior WHERE behavior_type = 'buy' AND date_d = " + str(d) + " ORDER BY count_m DESC  LIMIT "+ str(n))
            self.mycursor.execute("SELECT class1_id,count_m FROM 1_2_behavior WHERE behavior_type = 'buy' AND date_d = " + str(d) + " ORDER BY count_m DESC  LIMIT "+ str(n))
        except Exception as e:
            print(e)
            print("1.2.1  sql_newgetTopNBigCate1存在问题")
            return ""
        return self.mycursor

    """
            函数：1.2.2 每天TOP大类的点击量,没有用视图
            结果：（classid,num,classid.num）这类共11 * n * 
    """

    def sql_newgetTopNBigCate2(self, n=10, d=20190610):
        try:
            # print("SELECT class1_id,COUNT(*) AS num FROM 1_2_behavior WHERE behavior_type = 'buy' AND date_d = " + str(d) + " ORDER BY num  DESC limit " )
            self.mycursor.execute(
                "SELECT class1_id,count_m FROM 1_2_behavior WHERE behavior_type = 'clk' AND date_d = " + str(
                    d) + " ORDER BY count_m DESC  LIMIT " + str(n))
        except Exception as e:
            print(e)
            print("1.2.2  sql_newgetTopNBigCate2存在问题")
            return ""
        return self.mycursor

    """
                函数：1.2.3 每天TOP大类的购物车量,没有用视图
                结果：（classid,num,classid.num）这类共11 * n * 2
    """

    def sql_newgetTopNBigCate3(self, n=10, d=20190610):
        try:
            # print("SELECT class1_id,COUNT(*) AS num FROM 1_2_behavior WHERE behavior_type = 'buy' AND date_d = " + str(d) + " ORDER BY num  DESC limit " )
            self.mycursor.execute(
                "SELECT class1_id,count_m FROM 1_2_behavior WHERE behavior_type = 'cart' AND date_d = " + str(
                    d) + " ORDER BY count_m DESC  LIMIT " + str(n))
        except Exception as e:
            print(e)
            print("1.2.3  sql_newgetTopNBigCate3存在问题")
            return ""
        return self.mycursor


    """
                函数：1.2.4 每天TOP大类的收藏量,没有用视图
                结果：（classid,num,classid.num）这类共11 * n * 2
    """

    def sql_newgetTopNBigCate4(self, n=10, d=20190610):
        try:
            # print("SELECT class1_id,COUNT(*) AS num FROM 1_2_behavior WHERE behavior_type = 'buy' AND date_d = " + str(d) + " ORDER BY num  DESC limit " )
            self.mycursor.execute(
                "SELECT class1_id,count_m FROM 1_2_behavior WHERE behavior_type = 'collect' AND date_d = " + str(
                    d) + " ORDER BY count_m DESC  LIMIT " + str(n))
        except Exception as e:
            print(e)
            print("1.2.4  sql_newgetTopNBigCate4存在问题")
            return ""
        return self.mycursor

    #TODO：转化率的问题，是否关于表需要是使用另外的表，还是干啥

    # TODO: 利用视图计算，时间开销大，属于方案2
    """
    函数：为item表和behavior表创建简化视图,为1.2做准备
    """
    def getItemBehaviorView(self):
        try:
            self.mycursor.execute("CREATE VIEW item_behavior_view AS (SELECT date_d,class1_id,behavior_type,COUNT(*) AS num FROM behavior JOIN item ON behavior.item_id=item.item_id GROUP BY  date_d,class1_id,behavior_type)")
        except:
            print("视图创建失败,已经存在")
        return ""

    """
    函数：1.2.1 每天TOP大类的购买量
    结果：（classid,num,classid.num）这类共11 * n * 2
    """
    def sql_getTopNBigCate1(self,n = 10):
        answer = ()
        try:
            # self.mycursor.execute("SELECT table_name FROM information_schema.views WHERE table_name = 'item_behavior_view'")
            # k = 0
            # for x in self.mycursor:
            #     k += 1
            # if k == 0:
            self.getItemBehaviorView()

            for i in np.arange(11):
                d = 20190610 + i
                print("sql :" + "SELECT class1_id,COUNT(*) AS num FROM item_behavior_view WHERE behavior_type = 'buy' AND date_d = " + str(d) + " ORDER BY num  DESC limit " + str(n))
                self.mycursor.execute("SELECT class1_id,COUNT(*) AS num FROM item_behavior_view WHERE behavior_type = 'buy' AND date_d = " + str(d) + " ORDER BY num  DESC limit " + str(n))
                # print(str(d) + ":")
                # print("SELECT item_id,COUNT(*) AS num FORM behavior WHERE behavior_type = 'buy' AND date_d = " + str(
                #     d) + " ORDER BY num  DESC limit " + str(n))

                #self.mycursor.execute("SELECT date_d,item_id,COUNT(*) AS num FROM behavior WHERE behavior_type = 'buy' AND date_d = " + str(d) + " ORDER BY num  DESC limit " + str(n))
                # self.mycursor.execute("SELECT date_d, COUNT(*) AS num  FROM temp_2_1 WHERE k_num > " + str(
                #     10) + " GROUP BY  date_d")

                #print("SELECT item_id,COUNT(*) AS num FROM behavior WHERE behavior_type = 'buy' AND date_d = " + str(d) + " ORDER BY num  DESC limit " + str(n))

                #answer = self.mycursor
                for t in self.mycursor:
                    answer += t
        except Exception as e:
            print(e)
            print("1.2.1 每天TOP大类的购买量 有问题")
            return ""
        return answer

    """
    函数：1.2.2 每天TOP大类的点击
    结果：（classid,num,classid.num）这类共11 * n * 2

    """

    def getTopNBigCate2(self, n=10):
        answer = ()
        try:
            self.getItemBehaviorView()

            for i in np.arange(11):
                d = 20190610 + i
                print(
                    "sql :" + "SELECT class1_id,COUNT(*) AS num FROM item_behavior_view WHERE behavior_type = 'clk' AND date_d = " + str(
                        d) + "ORDER BY num  DESC limit " + str(n))
                self.mycursor.execute(
                    "SELECT class1_id,COUNT(*) AS num FROM item_behavior_view WHERE behavior_type = 'clk' AND date_d = " + str(
                        d) + "ORDER BY num  DESC limit " + str(n))
                for t in self.mycursor:
                    answer += t
        except:
            print("1.2.2 每天TOP大类的点击量 有问题")
            return ""
        return answer


    """
    函数：1.2.3 每天TOP大类的收藏
    结果：（classid,num,classid.num）这类共11 * n * 2

    """

    def getTopNBigCate3(self, n=10):
        answer = ()
        try:
            self.getItemBehaviorView()

            for i in np.arange(11):
                d = 20190610 + i
                print(
                    "sql :" + "SELECT class1_id,COUNT(*) AS num FROM item_behavior_view WHERE behavior_type = 'collect' AND date_d = " + str(
                        d) + "ORDER BY num  DESC limit " + str(n))
                self.mycursor.execute(
                    "SELECT class1_id,COUNT(*) AS num FROM item_behavior_view WHERE behavior_type = 'collect' AND date_d = " + str(
                        d) + "ORDER BY num  DESC limit " + str(n))
                for t in self.mycursor:
                    answer += t
        except:
            print("1.2.2 每天TOP大类的点击量 有问题")
            return ""
        return answer


    """
    函数：1.2.3 每天TOP大类的
    结果：（classid,num,classid.num）这类共11 * n * 2

    """

    def getTopNBigCate3(self, n=10):
        answer = ()
        try:
            self.getItemBehaviorView()

            for i in np.arange(11):
                d = 20190610 + i
                print(
                    "sql :" + "SELECT class1_id,COUNT(*) AS num FROM item_behavior_view WHERE behavior_type = 'collect' AND date_d = " + str(
                        d) + "ORDER BY num  DESC limit " + str(n))
                self.mycursor.execute(
                    "SELECT class1_id,COUNT(*) AS num FROM item_behavior_view WHERE behavior_type = 'collect' AND date_d = " + str(
                        d) + "ORDER BY num  DESC limit " + str(n))
                for t in self.mycursor:
                    answer += t
        except:
            print("1.2.2 每天TOP大类的点击量 有问题")
            return ""
        return answer




    def getTopNBigCate4(self):
        return ""


    """
    函数：2.1 计算每天用户的行为数
    结果：('buy', 282, 'cart', 1260, 'clk', 12815, 'collect', 495, ）2 *4类 * 10天
    """
    def sql_getBehaviorAmountByDate(self,d = 20190610):
        answer = ()
        try:
            # print(
            #     "sql :" + "SELECT behavior_type ,COUNT(*)  AS num FROM behavior WHERE date_d = 20190610 GROUP BY behavior_type")
            self.mycursor.execute(
                "SELECT behavior_type ,COUNT(*)  AS num FROM behavior WHERE date_d = " +  str(d)+" GROUP BY behavior_type")
        except:
            print("2.1 计算每天用户的行为数 有问题")
            return ""
        return self.mycursor


    """
        函数：2.2 计算每天用户的行为转化率
        结果：('buy', 282, 'cart', 1260, 'clk', 12815, 'collect', 495, ）2 *4类 * 10天，需要之后的深处理
     """

    def sql_getBehaviorRatioByDate(self,d= 20190610):
        return self.sql_getBehaviorAmountByDate(d)

    """
      函数：2.3计算总的转化率
    """

    def sql_getAllBehaviorRatio(self):
        try:
            self.mycursor.execute("SELECT behavior_type ,COUNT(*) num FROM behavior  GROUP BY   behavior_type")
        except:
            print("函数：2.3计算总的转化率有问题")
            return ""
        return self.mycursor


    """
    函数：2.4计算各年龄的商品偏爱
    结果：16, 105,  2* n * b_types
    """
    def sql_getTopBigCateByAgeRange(self,n = 10,age = 17):
        try:
           self.mycursor.execute("SELECT class1_id,COUNT(*) AS num FROM 2_4_behavior WHERE age LIKE '%" + str(age) +"%' GROUP BY class1_id ORDER BY num DESC LIMIT " + str(n))
        except:
            print("2.4计算各年龄的商品偏爱 有问题")
            return ""
        return self.mycursor


    """
    函数： 2.5 获取某个商品大类的某个品牌的各个价格区间的销量
    """

    #TODO：关于价格等级的划分问题

    def sql_getTopPriceRangeByBigCateBrand(self,bigCate="%%",brand = "%%"):
        try:
            #print("SELECT price,COUNT(*) num FROM 2_5_behavior WHERE class1_id like '" + str(bigCate)+ "' AND brand_id LIKE '" + str(brand) +"'  GROUP BY price ")
            self.mycursor.execute("SELECT price,COUNT(*) num FROM 2_5_behavior WHERE class1_id like '" + str(bigCate)+ "' AND brand_id LIKE '" + str(brand) +"'  GROUP BY price ")
        except:
            print("函数：2.5 获取某个商品大类的某个品牌的各个价格区间的销量 有问题")
            return ""
        return self.mycursor



    """
         函数： 2.6 获取收入等级人们的消费价格的比例
    """
    #TODO：关于人物聚类后的统计,需要注意的是有些阶层无法在一些数值上产生数据

    def sql_getConsumePriceRatioByIncomeLevel(self,incomeLevel = 0):
        result = ()
        try:
            # print("SELECT price,COUNT(*) num FROM 2_5_behavior WHERE class1_id like '" + str(bigCate)+ "' AND brand_id LIKE '" + str(brand) +"'  GROUP BY price ")
            self.mycursor.execute("SELECT price,COUNT(*) AS num FROM 2_6_behavior WHERE peo_kind = "+str(incomeLevel)+" GROUP BY price")
        except:
            print("2.6 获取收入等级人们的消费价格的比例 有问题")
            return ""
        return self.mycursor


    """
    函数：2.7 各大类的销售信息
    """
    #TODO:
    # def sql_getTopNSaleBigCateInfo(n, bigCate):
    #

#k.count()
# be =  BehaviorDao()
# k = be.sql_getAllActiveUserAmountByDate()
# for t in k:
#     print(t)
# print("Ok")
# if k.isnll() == True:
#     print("空")
# def sql_getAllGenderRatio(self):
#
# userDao = UserDao()
# print(userDao.sql_getAllLocalRatio())
# mycursor = userDao.mycursor.execute("HOW DATABASES")
# for x in mycursor:
#     print(x)







