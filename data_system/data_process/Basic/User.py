
class User:
    """用户信息类"""

    """
    __name表示私有属性,外部不可访问，name表示基本属性
    """

    def __init__(self,user_id = -1,gender = 'M',age=-1,edu = -1,career = -1,incomeLeve = -1,stage = '',province_id = -1,user_type= ''):
        self.user_id = user_id
        self.gender = gender
        self.age = age
        self.edu = edu
        self.career = career
        self.incomeLeve = incomeLeve
        self.stage = stage
        self.province_id = province_id
        self.user_type = user_type
  #      self.__name = "csl"

# user = User(2322,user_type = "good")
# print(user.user_id,user.age,user.user_type,user.name)
