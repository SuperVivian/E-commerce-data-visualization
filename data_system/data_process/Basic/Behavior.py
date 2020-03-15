class Behavior:
    """行为信息类"""

    def __init__(self,behavior_id = -1,item_id = -1,behavior_type = "",date=""):
        self.behavior_id = behavior_id
        self.item_id = item_id
        self.behavior_type = behavior_type
        self.date = date

        