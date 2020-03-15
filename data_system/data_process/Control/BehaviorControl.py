from Service.BehaviorService import BehaviorService

class BehaviorControl:
    """
    activate_p1,计算每天的活跃人数,对于活跃度的定义
    num1,计算各年龄的商品偏爱,前num个数量统计
    num2,计算购买的Top的num个值,num3,点击量top，num4,购物车的top，num5,收藏的top
    """
    def __init__(self,activate_p1 = 10,num1 = 10,num2 = 10,num3 = 10,num4 = 10,num5 = 10,bigCate="%%",brand = "%%"):
        print("<<<<<<<<<<<<<<<<<<<<<<<<<<<<BehaviorControl初始化<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
        self.behavior = BehaviorService()
        try:
            out_data = open("data/behavior.txt", "w")
            out_data.truncate()
            k = self.behavior.getAllUserAmountByDateService() + '\n'
            k += self.behavior.getAllActiveUserAmountByDateService(activate_p=activate_p1) + '\n'
            k += self.behavior.getAllBehaviorRatioService() + '\n'
            k += self.behavior.getBehaviorAmountByDateService() + '\n'
            k += self.behavior.getBehaviorRatioByDateService() + '\n'
            k += self.behavior.getConsumePriceRatioByIncomeLevelService() + '\n'
            k += self.behavior.getTopBigCateByAgeRangeService(n = num1) + '\n'
            k += self.behavior.newgetTopNBigCate1Service(n = num2) + '\n'
            k += self.behavior.newgetTopNBigCate2Service(n = num3) + '\n'
            k += self.behavior.newgetTopNBigCate3Service(n = num4) + '\n'
            k += self.behavior.newgetTopNBigCate4Service(n = num5) + '\n'
            #k += self.behavior.getTopPriceRangeByBigCateBrandService(bigCate=bigCate,brand=brand)
            out_data.write(k)
            out_data.close()
            print("behavior.txt数据完成存储了")

        except Exception as e:
            print(e)
            out_data.close()
            print("behaviorontrol函数存在问题")


#k += self.behavior.getTopPriceRangeByBigCateBrandService()

