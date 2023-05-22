## 成果速递

### 用于颗粒介质 DEM 建模的基于polybezier的粒子模型

近日，*黄林冲教授* 团队在期刊***Computers and Geotechnics***发表了题为**A polybe  ́zier-based particle model for the DEM modeling of granular media**（*用于颗粒介质 DEM 建模的基于polybezier的粒子模型*）的论文。*赖正首副教授*为第一作者，*黄林冲教授*为通讯作者。该研究收到香江学者项目、国家自然科学基金面上项目和青年项目以及深圳市自然科学基金等资助。

#### 问题描述

颗粒状材料，例如矿石、沙子和谷物等，在本质上通常是非球形的。众所周知，颗粒不规则性对颗粒介质的堆积密度、刚度和强度等宏观性质具有重大影响。实验室实验结果表明，颗粒不规则性的增加（例如，球形度/圆度的降低）将导致极端空隙率的增加、小应变刚度的降低、可压缩性的增加、增加临界状态线截距等。

离散元法(DEM)是颗粒介质建模的一个突出的数值工具，它已被用于广泛的工程学科中的许多应用。要为颗粒介质创建准确且可预测的 DEM 模型，其中的关键就是考虑颗粒形状的不规则性。

#### 主要创新

- 提出了一种基于polybezier的颗粒模型，该模型由一组bezier曲线组成，可描述光滑、不规则形状例子的DEM模型。（图1）

![image text](https://github.com/lzhshou/lzhshou.github.io/blob/lichh53-test/docs/publications/2021/05/Fig-1.png)

<center> 图1 </center>

- 通过GJK算法检测接触（图2），采用EPA算法求解接触几何特征（图3）。采用GJK和EPA组合丰富了polybezier颗粒模型与现有的其他颗粒模型在计算中的兼容性。

![image text](https://github.com/lzhshou/lzhshou.github.io/blob/lichh53-test/docs/publications/2021/05/Fig-2.png)

<center>图2 </center>

![image text](https://github.com/lzhshou/lzhshou.github.io/blob/lichh53-test/docs/publications/2021/05/Fig-3.png)

<center>图3 </center>

- 基于上述所提出的颗粒模型，提出了一种基于粒子群（PSO）的几何拟合程序（图4），在不同形态的颗粒中均拟合效果较好（图5）。

![image text](https://github.com/lzhshou/lzhshou.github.io/blob/lichh53-test/docs/publications/2021/05/Fig-4.png)

<center>图4 </center>

![image text](https://github.com/lzhshou/lzhshou.github.io/blob/lichh53-test/docs/publications/2021/05/Fig-5.png)

<center>图5 </center>

- 上述算法在DEM中开展随机堆积和双轴压缩数值模拟实验，计算效果较好（图6）。

![image text](https://github.com/lzhshou/lzhshou.github.io/blob/lichh53-test/docs/publications/2021/05/Fig-6.png)

<center>图6 </center>

- 上述优化算法有从2D向3D推广的可行性。（图7）

![image text](https://github.com/lzhshou/lzhshou.github.io/blob/lichh53-test/docs/publications/2021/05/Fig-7.png)

<center>图7 </center>

#### 科学价值

本文提出了一种新的基于polybezier的粒子模型，用于描述光滑和不规则形状的DEM模型。根据该几何描述模型，提出了具有鲁棒性的接触搜索算法与几何接触特征求解算法。基于提出的PSO拟合程序可实现复杂形状颗粒的数值拟合，可为矿石、谷物等多种材料的DEM模拟前处理提供了可靠的数值工具。

##### 编辑：李诚豪
