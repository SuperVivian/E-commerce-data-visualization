class Item:

    """商品信息表"""
    def __init__(self,item_id = -1 ,big_cate = -1,cate_id = -1,brand_id = -1,price = 0.0):
        self.item_id = item_id
        self.big_cate = big_cate
        self.cate_id = cate_id
        self.brand_id = brand_id
        self.price = price