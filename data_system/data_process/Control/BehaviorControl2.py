from Service.BehaviorService import BehaviorService

class BehaviorControl2:
    """
    activate_p1,计算每天的活跃人数,对于活跃度的定义
    num1,计算各年龄的商品偏爱,前num个数量统计
    num2,计算购买的Top的num个值,num3,点击量top，num4,购物车的top，num5,收藏的top
    """
    def __init__(self,activate_p1 = 10,num1 = 10,num2 = 10,num3 = 10,num4 = 10,num5 = 10,bigCate="%%",brand = "%%"):
        print("<<<<<<<<<<<<<<<<<<<<<<<<<<<<BehaviorControl初始化<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
        self.behavior = BehaviorService()
        try:
            out_data = open("data/behavior2.txt", "w")
            out_data.truncate()
            k = self.behavior.getAllUserAmountByDateService() + '\n'

            out_data.write(k)
            out_data.close()
            print("behavior.txt数据完成存储了")

        except Exception as e:
            print(e)
            out_data.close()
            print("behaviorontrol函数存在问题")



#behavior.getTopPriceRangeByBigCateBrandService()

