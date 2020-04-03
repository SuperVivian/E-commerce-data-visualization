"""
将csv文件转化为txt文件（不包含表项）
"""

import numpy as np
import pandas as pd
submit1_path="user_new_value1.csv"
submit1=pd.read_csv(submit1_path)
#submit1.drop('Target',axis=1,inplace=True)
#submit1.Predicted=submit1.Predicted.apply(lambda x: "00"+str(int(x)+1))
#submit1.Predicted=submit1.Predicted.apply(lambda x: str(int(x)))
#submit1.id = submit1.id.apply(lambda x: str(x))
#submit1.Id=submit1.Id.apply(lambda x: str(x).zfill(6))
#submit1=submit1.sort_values('id',ascending=True)
submit1.to_csv("./user_new_value1.txt",sep='\t',index=None,header=None)