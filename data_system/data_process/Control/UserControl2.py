from Service.UserService  import  UserService


class UserControl2:
    def __init__(self):
        print("<<<<<<<<<<<<<<<<<<<<<<<<<<<<UserControl2初始化<<<<<<<<<<<<<<<<<<<<<<<<<<<<")

        self.userservice = UserService()
        try:
            out_data = open("data/user2.txt", "w")
            out_data.truncate()
            k = self.userservice.getAllAgeRatioService() + "\n"
            k += self.userservice.getAllCareerRatioService() + "\n"

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

