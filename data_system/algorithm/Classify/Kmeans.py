import numpy as np
import math as m
import random
import matplotlib.pyplot as plt
import evaluate as eva

data_path = "./user_new_value.txt"


# 导入数据
def load_data():
    points = np.loadtxt(data_path, delimiter='\t')
    return points


def cal_dis(data, clu, k):
    """
    计算质点与数据点的距离
    :param data: 样本点
    :param clu:  质点集合
    :param k: 类别个数
    :return: 质心与样本点距离矩阵
    """
    dis = []
    for i in range(len(data)):
        dis.append([])
        for j in range(k):
            distance=(data[i, 1] - clu[j, 1])**2 + (data[i, 3]-clu[j, 3])**2 \
                     + (data[i, 6]-clu[j, 6])**2 + (data[i, 8]-clu[j, 8])**2 \
                     + (data[i, 10]-clu[j, 10])**2
            dis[i].append(m.sqrt(distance))
    return np.asarray(dis)


def divide(data, dis):
    """
    对数据点分组
    :param data: 样本集合
    :param dis: 质心与所有样本的距离
    :param k: 类别个数
    :return: 分割后样本
    """
    clusterRes = [0] * len(data)
    for i in range(len(data)):
        seq = np.argsort(dis[i])
        clusterRes[i] = seq[0]

    return np.asarray(clusterRes)


def center(data, clusterRes, k):
    """
    计算质心
    :param group: 分组后样本
    :param k: 类别个数
    :return: 计算得到的质心
    """
    clunew = []
    for i in range(k):
        # 计算每个组的新质心
        idx = np.where(clusterRes == i)
        sum = data[idx].sum(axis=0)
        avg_sum = sum/len(data[idx])
        clunew.append(avg_sum)
    clunew = np.asarray(clunew)
    #return clunew[:, 0: 2]
    return clunew


def classify(data, clu, k):
    """
    迭代收敛更新质心
    :param data: 样本集合
    :param clu: 质心集合
    :param k: 类别个数
    :return: 误差， 新质心
    """
    clulist = cal_dis(data, clu, k)
    clusterRes = divide(data, clulist)
    clunew = center(data, clusterRes, k)
    err = clunew - clu
    return err, clunew, k, clusterRes


def plotRes(data, clusterRes, clusterNum):
    """
    结果可视化
    :param data:样本集
    :param clusterRes:聚类结果
    :param clusterNum: 类个数
    :return:
    """
    nPoints = len(data)
    scatterColors = ['black', 'blue', 'green', 'yellow', 'red', 'purple', 'orange', 'brown']
    for i in range(clusterNum):
        color = scatterColors[i % len(scatterColors)]
        x1 = [];  y1 = []
        for j in range(nPoints):
            if clusterRes[j] == i:
                x1.append(data[j, 10])
                y1.append(data[j, 1])
        plt.scatter(x1, y1, c=color, alpha=1, marker='+')
    plt.show()


if __name__ == '__main__':

    k = 6                                        # 类别个数
    data = load_data()
    #clu = random.sample(data[:, 0:2].tolist(), k)  # 随机取质心
    clu = random.sample(data.tolist(), k)  # 随机取质心
    clu = np.asarray(clu)
    err, clunew,  k, clusterRes = classify(data, clu, k)
    print(clusterRes)
    while np.any(abs(err) > 0):
        print(clunew)
        err, clunew,  k, clusterRes = classify(data, clunew, k)

    clulist = cal_dis(data, clunew, k)
    clusterResult = divide(data, clulist)

    nmi, acc, purity = eva.eva(clusterResult, np.asarray(data[:, 2]))
    print(nmi, acc, purity)
    plotRes(data, clusterResult, k)


    fw = open("./classify_value.txt", 'w')  # 将要输出保存的文件地址
    counter = 0
    for line in open("./user_new_value.txt"):  # 读取的文件
        fw.write(line.rstrip("\n") + "\t" + str(clusterResult[counter]))  # 将字符串写入文件中
        # line.rstrip("\n")为去除行尾换行符
        fw.write("\n")  # 换行
        counter = counter+1