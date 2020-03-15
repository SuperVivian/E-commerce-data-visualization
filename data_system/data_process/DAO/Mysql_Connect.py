import mysql.connector
import mysql.connector

class Mysql_Connect:

    def __init__(self,host="127.0.0.1",user="root",passwd="123456",database='data_test'):
        self.host = host,  # 数据库主机地址
        self.user = user,  # 数据库用户名
        self.passwd = passwd  # 数据库密码
        self.database = database #数据库名
        self.mydb = mysql.connector.connect(host = host,user = user,passwd = passwd,database=database,buffered = True)
        #self.mydb = mysql.connector.connect(host=self.host[0], user=self.user[0], passwd=self.passwd[0])#此时的self.host为元组变量
        self.mycursor = self.mydb.cursor()


# mysql_connect = Mysql_Connect(host="rm-bp1460u9325k305b47o.mysql.rds.aliyuncs.com",user="caishulin",passwd="12345678cal!",database="test_001")

# print(type(mysql_connect.host))
# #
# mycursor = mysql_connect.mycursor
# mycursor.execute("select count(*) from `test`")
# for x in mycursor:
#     print(x)