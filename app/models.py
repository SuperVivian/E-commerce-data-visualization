import pymongo

class Model:
    def __init__(self,url="",database=""):
        self.url=url
        self.database=database
        # if self.url=="":
        #     self.url="mongodb://localhost:27017/"
        # if self.database=="":
        #     self.database="Data_visual"
        # self.myclient=pymongo.MongoClient(self.url)
        # self.mydb=self.myclient[self.database]

    def get_behavior_count(self):
        # mycol=self.mydb["behavior_count"]
        # data=mycol.find()
        res=[]
        # for x in data:
        #     x.pop("_id")
        #     res.append(x)
        res=[10,40,60,100]
        return res

# if __name__ == '__main__':
#     model=Model()
#     print(type(model.get_behavior_count()))