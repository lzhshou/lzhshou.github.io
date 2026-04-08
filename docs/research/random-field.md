# 随机场建模与岩土工程可靠度

**科学问题**：如何充分考虑颗粒材料的空间变异性，对其物理力学特性进行准确表征与建模，以探明其对各类工程问题的影响规律？

---

## 研究背景

颗粒材料的力学行为具有典型的**多尺度关联特性**：微观层面的颗粒组构特征（如尺寸、形态、孔隙率等）直接影响着宏观堆积体的复杂力学响应，导致其宏观物理力学参数呈现出显著的**空间变异性**。

针对颗粒材料宏观力学行为"**参数变异难量化—灾变机制难预测—工程调控缺依据**"的行业痛点，本方向建立"勘察优化—随机建模—可靠度分析"多方位框架流程，破解空间变异性对重大岩土工程安全评估的关键制约。

---

## 核心研究内容

### 1. 基于空间变异特征的勘察优化

**科学问题**：传统勘察方案难以平衡勘探成本与参数表征精度，对复杂场地形态适应性差。

**创新突破**：
- **随机场理论评估方法**：基于随机场理论建立勘察方案可靠度的评估方法，实现地质、钻孔、CPT等异构勘察数据的概率融合
- **贝叶斯-马尔科夫链蒙特卡洛联合反演**：构建场地表征参数测定框架，突破传统方法的局限性
- **质心沃罗诺伊优化算法**：创新性提出质心沃罗诺伊（Centroidal Voronoi Tessellation, CVT）驱动的勘探点优化算法，相较传统网格布设方案，在**同等勘察成本下可靠度提高20%**

**应用范围**：该方法可推广应用于场地液化潜力、压实度、污染物浓度等岩土参数的场地表征、勘察与优化。

<div style={{textAlign: 'center', margin: '20px 0'}}>
  <img src="/img/research/projects/fig6_investigation_opt.jpeg" alt="勘察优化方法" style={{maxWidth: '90%', height: 'auto'}} />
  <p><em>基于空间变异特征的勘察优化理论</em></p>
</div>

### 2. 旋转各向异性随机场建模

**科学问题**：空间变异性与地层各向异性耦合作用下的工程灾变机理不明，现有规范尚未考虑参数空间分布特征影响。

**创新突破**：
- **非平稳随机场框架**：提出考虑空间非平稳特性及旋转各向异性的随机场建模方法
- **边坡灾变能量演化**：以边坡工程为研究对象，研究边坡灾变过程中的能量演化规律，基于能量演化提出一种新的**非均质岩土边坡失稳判据**
- **海床-管线系统分析**：以海床-海底管线为研究对象，分析波浪动荷载作用下海床的液化潜力及管线的力学行为，揭示斜向近**45°的旋转各向异性**对海床-海底管线体系的较不利倾角影响规律

<div style={{textAlign: 'center', margin: '20px 0'}}>
  <img src="/img/research/projects/fig7_anisotropic_analysis.jpeg" alt="旋转各向异性分析" style={{maxWidth: '90%', height: 'auto'}} />
  <p><em>旋转各向异性耦合的工程可靠度分析</em></p>
</div>

### 3. 滨海软弱地质风险管控工程应用

**科学问题**：滨海混杂软弱地基兼具显著空间变异性与旋转各向异性，传统勘察布设与风险评估精度受限。

**创新突破**：
- 将质心沃罗诺伊图驱动的勘察优化理论与旋转各向异性耦合的可靠度分析方法进行系统集成
- 构建"**智能布控—随机场建模—能量演化判据**"的技术链
- 结合深度学习方法，实现多源勘察数据（钻孔、CPT、物探）的概率融合与自适应布设

**工程应用**：该方法已在**方久尼特大桥**、**深圳妈湾工程**及**南沙南珠中城际**等项目中应用，为滨海跨海基础设施提供地质风险识别与参数优化方案，有效规避了潜在失稳风险。

<div style={{textAlign: 'center', margin: '20px 0'}}>
  <img src="/img/research/projects/fig8_nanzhuzhong_project.jpeg" alt="南珠中项目应用" style={{maxWidth: '90%', height: 'auto'}} />
  <p><em>南珠中城际轨道项目滨海软弱地质风险管控工程应用</em></p>
</div>

---

## 研究意义

为颗粒材料空间变异性的工程表征与灾害风险评估提供理论框架，显著提升场地参数表征的可靠度，服务于滨海基础设施安全设计与施工决策。

---

## 代表论文

### 随机场建模与勘察优化

1. Huang, L., Huang, S., & **Lai, Z.**# (2020). On the optimization of site investigation programs using centroidal Voronoi tessellation and random field theory. *Computers and Geotechnics*, 118, 103331. [DOI](https://doi.org/10.1016/j.compgeo.2019.103331) | [PDF](/pdf/first_or_correspondence/Huang2020%20On the optimization of site investigation programs using centroidal Voronoi.pdf)

2. Zhu, B., Liu, J., **Lai, Z.**, & Qian, T. (2023). Sampling Gaussian stationary random fields: A stochastic realization approach. *ISA Transactions*, 142, 386-398. [DOI](https://doi.org/10.1016/j.isatra.2023.08.007) | [PDF](/pdf/coauthored/Zhu2023%20Sampling Gaussian stationary random fields - A stochastic realization approach.pdf)

### 海床-管线系统与可靠度分析

3. **Lai, Z.**, Chen, Q., & Huang, L. (2021). Evaluating the hydromechanical responses of seabed–pipelines with rotated anisotropic heterogeneous seabed properties. *Ocean Engineering*, 234, 109226. [DOI](https://doi.org/10.1016/j.oceaneng.2021.109226) | [PDF](/pdf/first_or_correspondence/Lai2021%20Evaluating the hydromechanical responses of seabed–pipelines with rotated.pdf)

4. **Lai, Z.**, Chen, Q., Wang, C., & Zhou, X. (2019). Modeling dynamic responses of heterogeneous seabed with embedded pipeline through multiresolution random field and coupled hydromechanical simulations. *Ocean Engineering*, 173, 556-570. [DOI](https://doi.org/10.1016/j.oceaneng.2019.01.015) | [PDF](/pdf/first_or_correspondence/Lai2019%20Modeling dynamic responses of heterogeneous seabed with embedded pipeline.pdf)

### 边坡稳定与能量判据

5. Huang, L., Huang, S., & **Lai, Z.**# (2019). On an energy-based criterion for defining slope failure considering spatially varying soil properties. *Engineering Geology*, 264, 105323. [DOI](https://doi.org/10.1016/j.enggeo.2019.105323) | [PDF](/pdf/first_or_correspondence/Huang2020%20On an energy-based criterion for defining slope failure considering spatially.pdf)

### 多尺度岩土材料建模

6. Lin, Y., **Lai, Z.**, Ma, J., & Huang, L. (2024). A combined weighted Voronoi tessellation and random field approach for modeling heterogeneous rocks with correlated grain structure. *Construction and Building Materials*, 416, 135228. [DOI](https://doi.org/10.1016/j.conbuildmat.2024.135228) | [PDF](/pdf/coauthored/Lin2024%20A%20combined weighted Voronoi tessellation and random field approach for modeling.pdf)

7. Lin, Y., Ma, J., **Lai, Z.**, Huang, L., & Lei, M. (2023). A FDEM approach to study mechanical and fracturing responses of geo-materials with stochastic inclusions using a novel reconstruction strategy. *Engineering Fracture Mechanics*, 282, 109171. [DOI](https://doi.org/10.1016/j.engfracmech.2023.109171) | [PDF](/pdf/coauthored/Lin2023%20A%20FDEM approach to study mechanical and fracturing responses of geo-materials.pdf)
