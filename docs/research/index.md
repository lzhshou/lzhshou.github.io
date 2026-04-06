# 研究方向

我们的研究聚焦于**计算岩土力学**与**多尺度模拟**，致力于开发先进的数值方法和软件工具，解决复杂工程问题。

---

## 核心研究方向

### 1. 离散元方法 (DEM)

基于符号距离场 (SDF) 和傅里叶级数的下一代离散元建模技术：

- **SDF-DEM 框架**：统一处理任意形状颗粒的接触检测与求解
- **傅里叶级数颗粒模型**：高效的不规则形状表征方法
- **机器学习加速**：神经网络驱动的接触检测算法
- **GPU并行计算**：利用光线追踪核心加速颗粒模拟

**代表成果**：
- JCP (2026): Hybrid resolved-unresolved CFD-DEM framework
- CMAME (2023): SDF enhanced fully resolved CFD-DEM
- IJNME (2021): Machine-learning-enabled DEM

---

### 2. 多相流与多尺度模拟

开发耦合计算方法，研究流体-颗粒相互作用：

- **CFD-DEM耦合**：多相流系统中颗粒行为的精细模拟
- **多尺度建模**：从微观颗粒到宏观材料的跨尺度方法
- **孔隙介质流动**：珊瑚砂等复杂多孔介质的渗流模拟
- **海底管道**：流固耦合与海底地质灾害分析

**代表成果**：
- CG (2024): SDF-based and conventional DEM unification
- JGGE (2024): Resolved CFD-DEM modeling of suffusion
- Ocean Engineering (2021): Hydromechanical seabed-pipeline responses

---

### 3. 机器学习与智能计算

将人工智能技术应用于土木工程数值模拟：

- **生成式AI**：基于扩散模型的虚拟颗粒材料生成
- **形状表征**：神经网络驱动的颗粒形态学习
- **本构建模**：数据驱动的材料参数识别
- **计算加速**：AI加速的数值算法

**代表成果**：
- EAAI (2026): Neural network-driven shape representation
- PT (2026): Diffusion-based generative framework
- CMAME (2024): ML-enabled DEM 3D extension

---

### 4. 颗粒材料表征与建模

基于先进成像技术的真实颗粒材料建模：

- **CT图像重建**：从X射线CT图像重建真实颗粒形状
- **球面沃罗诺伊**：颗粒表面离散与重构方法
- **形态表征**：颗粒形状量化与统计分析
- **生物胶结**：微生物诱导的碳酸钙沉积模拟

**代表成果**：
- EG (2023): Coral sand morphology and DEM modeling
- 工程力学 (2022): 球面沃罗诺伊颗粒表面重构
- Construction and Building Materials (2022): Coral sand biocementation

---

### 5. 随机场与不确定性量化

处理工程材料空间变异性的随机方法：

- **随机场生成**：高斯平稳随机场的随机实现方法
- **优化采样**：基于重心沃罗诺伊的场地勘察优化
- **可靠度分析**：边坡稳定与失效概率评估
- **异质岩石建模**：加权沃罗诺伊与随机场结合方法

**代表成果**：
- CBM (2024): Heterogeneous rocks with correlated grain structure
- CG (2020): Site investigation optimization using CVT
- EG (2020): Energy-based slope failure criterion

---

## 开源软件

### NetDEM

我们开发的**开源离散元模拟软件**，特点包括：

- 支持任意形状颗粒（多面体、超二次曲面、傅里叶级数等）
- 基于SDF的统一接触算法
- GPU并行计算加速
- 与CFD、FEM的多物理场耦合
- Python/MATLAB接口

**GitHub**: [https://github.com/lzhshou/NetDEM](https://github.com/lzhshou/NetDEM)

---

## 科研项目

### 在研项目

| 项目来源 | 项目类型 | 项目名称 | 时间 | 角色 |
|----------|----------|----------|------|------|
| 广东省科技厅 | 面上项目 | 水合物固态流化开采中气-液-固三相流动机理 | 2026- | 主持 |
| 广东省科技厅 | 基础研究重大项目 | 海上风电平台多场多尺度动力耦合灾变机理 | 2025- | 参与 |

### 已完成项目

| 项目来源 | 项目类型 | 项目名称 | 时间 | 角色 |
|----------|----------|----------|------|------|
| 全国博士后管委会/香港学者协会 | 香江学者计划 | 颗粒介质多尺度模拟 | 2021-2023 | 主持 |
| 国家自然科学基金 | 青年项目 | 基于CT和机器学习的钙质砂多尺度DEM建模 | 2020-2022 | 主持 |
| 博士后科学基金 | 面上项目 | 基于傅里叶级数的不规则颗粒DEM研究 | 2020-2021 | 主持 |

---

*如需了解更多研究详情，请查看[论文发表](../publications/)页面或[联系我们](../about/)*
