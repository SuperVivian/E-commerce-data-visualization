from Service.UserService  import  UserService


class UserControl:
    def __init__(self):
        print("<<<<<<<<<<<<<<<<<<<<<<<<<<<<UserControl初始化<<<<<<<<<<<<<<<<<<<<<<<<<<<<")

        self.userservice = UserService()
        try:
            out_data = open("data/user.txt", "w")
            out_data.truncate()
            k = self.userservice.getAllAgeRatioService() + "\n"
            k += self.userservice.getAllCareerRatioService() + "\n"
            k += self.userservice.getAllEduRatioService() + "\n"
            k += self.userservice.getAllGenderRatioService() + "\n"
            k += self.userservice.getAllIncomeRatioService() + "\n"
            k += self.userservice.getAllLocalRatioService() + "\n"
            out_data.write(k)
            out_data.close()
            print("user.txt数据完成存储了")
        except Exception as e:
            print(e)
            out_data.close()
            print("UserControl函数存在问题")


#
# UserControl = UserControl()
# user = UserService()
# m = user.getAllAgeRatioService()
# print(type(m))

