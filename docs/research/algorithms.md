# 异形颗粒离散元方法与智能计算

**科学问题**：如何建立能够有效表征不规则颗粒真实形态的普适性离散元计算方法，兼顾计算精度、稳定性与效率？

---

## 研究背景

针对异形颗粒材料离散元模拟中"**形态表征难—计算效率低—工程适用弱**"的核心瓶颈，本方向聚焦离散元方法的基础算法革新，通过"数字化表征—接触理论重构—智能加速"的技术突破，建立异形颗粒的高精度高效计算体系。

---

## 核心研究内容

### 1. 颗粒形态全流程数字化技术

构建了"**形态获取—形态重构—虚拟生成**"的颗粒形态全流程数字化技术体系：

- **CT图像机器学习重构**：首创"X-CT扫描→机器学习图像增强→水平集分割"协同形态重构技术，攻克亚体素级颗粒形态解析难题
- **球面沃罗诺伊重构算法**：基于球面沃罗诺伊剖分与球谐函数融合，创新设计双模式表面采样策略（质心距离/曲率自适应）
- **虚拟颗粒智能生成**：建立球谐系数-随机场颗粒虚拟生成方法，生成虚拟颗粒与实测样本形态相似度达90%

**应用成果**：成功应用于火星模拟壤、深海珊瑚砂等极端环境颗粒表征。

<div style={{textAlign: 'center', margin: '20px 0'}}>
  <img src="/img/research/projects/fig2-digital-pipeline.jpeg" alt="颗粒形态全流程数字化" style={{maxWidth: '90%', height: 'auto'}} />
  <p><em>颗粒"形态获取-形态重构-虚拟生成"全流程数字化技术体系</em></p>
</div>

### 2. 基于有向距离场（SDF）的统一接触理论

传统离散元颗粒模型及计算方法存在几何描述单一、接触算法普适性差等技术挑战。本研究创新构建了基于**有向距离场（Signed Distance Field, SDF）**的任意形态颗粒模型通用接口：

- **统一数学描述**：实现球形、二次曲面、球谐函数、水平集、多面体等异构颗粒形态的统一封装
- **接触势理论框架**：建立能量守恒接触求解器，攻克复杂接触能量耗散难题，保证离散元模拟的计算稳定性
- **粗细颗粒接触算法**：细颗粒采用点-球近似，粗颗粒保持完整SDF几何描述，显著降低多分散系统计算复杂度

<div style={{textAlign: 'center', margin: '20px 0'}}>
  <img src="/img/research/projects/fig3-sdf-framework.jpeg" alt="SDF接触理论框架" style={{maxWidth: '90%', height: 'auto'}} />
  <p><em>基于有向距离场的接触理论框架创新</em></p>
</div>

### 3. 机器学习赋能的接触求解加速

传统接触检测算法计算复杂度随颗粒数量呈指数增长，严重制约工程尺度模拟。本研究基于机器学习方法实现突破：

- **接触状态预测网络（NetDEM）**：构建几何描述符驱动的接触状态预测网络，实现接触检测耗时降低**20%**
- **大规模计算效率提升**：百万级颗粒体系计算效率提升**25%**
- **误差控制策略**：揭示算法在静/动态场景下的误差传递规律，提出接触状态-能量耗散耦合修正策略

<div style={{textAlign: 'center', margin: '20px 0'}}>
  <img src="/img/research/projects/fig4-ml-acceleration.jpeg" alt="机器学习加速" style={{maxWidth: '90%', height: 'auto'}} />
  <p><em>机器学习赋能的接触检测加速技术</em></p>
</div>

### 4. 软件平台研发

开发了具有完全自主知识产权的通用型离散元计算软件 **NetDEM**，支持OpenMP和MPI混合并行计算，适配国家超算平台（天河）部署，并行效率达80%。

<div style={{textAlign: 'center', margin: '20px 0'}}>
  <img src="/img/research/projects/fig5-netdem-software.jpeg" alt="NetDEM软件平台" style={{maxWidth: '90%', height: 'auto'}} />
  <p><em>自主开发的NetDEM离散元及流固耦合计算软件功能示意</em></p>
</div>

---

## 研究意义

为颗粒材料复杂力学响应的微观机理研究提供核心技术支撑，突破传统数值方法的计算效率瓶颈。开发的NetDEM软件被美国爱达荷国家实验室、香港科技大学及军事科学院国防工程研究院等机构应用。

---

## 代表论文

### SDF-DEM 方法与流固耦合

1. **Lai, Z.**, Huang, S., Kong, Y., Zhao, S., Zhao, J., & Huang, L. (2026). Hybrid resolved-unresolved CFD-DEM framework for multiscale fluid-particle systems with irregular-shaped and polydisperse particles. *Journal of Computational Physics*, 554, 114759. [DOI](https://doi.org/10.1016/j.jcp.2026.114759) | [PDF](/pdf/first-or-correspondence/lai2026-hybrid-resolved-unresolved-cfd-dem.pdf)

2. **Lai, Z.**, Feng, Y., Zhao, J., & Huang, L. (2024). Unifying the contact in signed distance field-based and conventional discrete element methods. *Computers and Geotechnics*, 176, 106764. [DOI](https://doi.org/10.1016/j.compgeo.2024.106764) | [PDF](/pdf/first-or-correspondence/lai2024-unifying-the-contact-in-signed-distance-field-based-and.pdf)

3. **Lai, Z.**, Zhao, J., Zhao, S., & Huang, L. (2023). Signed distance field enhanced fully resolved CFD-DEM for simulation of granular flows involving multiphase fluids and irregularly shaped particles. *Computer Methods in Applied Mechanics and Engineering*, 414, 116195. [DOI](https://doi.org/10.1016/j.cma.2023.116195) | [PDF](/pdf/first-or-correspondence/lai2023-signed-distance-field-enhanced-fully-resolved-cfd-dem-for.pdf)

4. **Lai, Z.**, Zhao, S., Zhao, J., & Huang, L. (2022). Signed distance field framework for unified DEM modeling of granular media with arbitrary particle shapes. *Computational Mechanics*, 70(4), 763-783. [DOI](https://doi.org/10.1007/s00466-022-02220-8) | [PDF](/pdf/first-or-correspondence/lai2022-signed-distance-field-framework-for-unified-dem-modeling-of.pdf)

5. **Lai, Z.**, Chen, Q., & Huang, L. (2021). Revisiting the GJK and shape erosion method for contact resolution in DEM. *Powder Technology*, 394, 363-371. [DOI](https://doi.org/10.1016/j.powtec.2021.08.068) | [PDF](/pdf/first-or-correspondence/lai2021-revisiting-the-gjk-and-shape-erosion-method-for-contact.pdf)

6. Zhao, S., **Lai, Z.**, & Zhao, J. (2022). Leveraging ray tracing cores for particle-based simulations on GPUs. *International Journal for Numerical Methods in Engineering*, 123(4), 696-713. [DOI](https://doi.org/10.1002/nme.7139) | [PDF](/pdf/first-or-correspondence/zhao2022-leveraging-ray-tracing-cores-for-particle-based-simulations-on.pdf)

### 机器学习与智能计算

7. Li, C., **Lai, Z.**#, Huang, S., & Huang, L. (2026). Neural network-driven shape representation and computational particle mechanics via signed distance fields. *Engineering Applications of Artificial Intelligence*, 167, 113913. [DOI](https://doi.org/10.1016/j.engappai.2026.113913) | [PDF](/pdf/first-or-correspondence/li2026-neural-shape-representation.pdf)

8. Huang, S., Wang, P., **Lai, Z.**#, Yin, Z., Huang, L., & Xu, C. (2024). Machine-learning-enabled discrete element method: The extension to three dimensions and computational issues. *Computer Methods in Applied Mechanics and Engineering*, 432, 117445. [DOI](https://doi.org/10.1016/j.cma.2024.117445) | [PDF](/pdf/first-or-correspondence/huang2024-machine-learning-enabled-discrete-element-method-the-extension.pdf)

9. **Lai, Z.**, Chen, Q., & Huang, L. (2021). Machine-learning-enabled discrete element method: Contact detection and resolution of irregular-shaped particles. *International Journal for Numerical and Analytical Methods in Geomechanics*, 46(1), 113-140. [DOI](https://doi.org/10.1002/nag.3293) | [PDF](/pdf/first-or-correspondence/lai2021-machine-learning-enabled-discrete-element-method-contact.pdf)

### 颗粒形态表征与建模

10. Li, C., Huang, L., **Lai, Z.**#, Huang, S., & Lin, Y. (2026). A diffusion-based generative framework for virtual porous granular media generation. *Powder Technology*, 473, 122230. [DOI](https://doi.org/10.1016/j.powtec.2026.122230) | [PDF](/pdf/first-or-correspondence/li2026-diffusion-generative-framework.pdf)

11. Huang, S., Huang, L., **Lai, Z.**#, & Zhao, J. (2023). Morphology characterization and discrete element modeling of coral sand with intraparticle voids. *Engineering Geology*, 315, 107023. [DOI](https://doi.org/10.1016/j.enggeo.2023.107023) | [PDF](/pdf/first-or-correspondence/huang2023-morphology-characterization-and-discrete-element-modeling-of.pdf)

12. 吴峰, 黄林冲, **赖正首** (2022). 基于球面沃罗诺伊的颗粒表面离散与重构方法. *工程力学*, 41(9), 245-256. [DOI](https://doi.org/10.6052/j.issn.1000-4750.2022.07.0614) | [PDF](/pdf/first-or-correspondence/wu2022-spherical-voronoi-reconstruction-zh.pdf)

13. **Lai, Z.**, Chen, Q., & Huang, L. (2020). Reconstructing granular particles from X-ray computed tomography using the TWS machine learning tool and the level set method. *Acta Geotechnica*, 14(1), 1-18. [DOI](https://doi.org/10.1007/s11440-018-0759-x) | [PDF](/pdf/first-or-correspondence/lai2019-reconstructing-granular-particles-from-x-ray-computed-tomography.pdf)

14. **Lai, Z.**, Chen, Q., & Huang, L. (2021). A polybézier-based particle model for the DEM modeling of granular media. *Computers and Geotechnics*, 134, 104052. [DOI](https://doi.org/10.1016/j.compgeo.2021.104052) | [PDF](/pdf/first-or-correspondence/lai2021-a-polybezier-based-particle-model-for-the-dem-modeling-of.pdf)

15. Huang, S., Huang, L., & **Lai, Z.** (2021). An extension of the Fourier series-based particle model to the GJK-based contact detection and resolution framework for DEM. *Computational Particle Mechanics*, 9(2), 381-391. [DOI](https://doi.org/10.1007/s40571-021-00446-6) | [PDF](/pdf/first-or-correspondence/huang2021-an-extension-of-the-fourier-series-based-particle-model-to-the.pdf)

16. **Lai, Z.**, Chen, Q., & Huang, L. (2020). Fourier series-based discrete element method for computational mechanics of irregular-shaped particles. *Computer Methods in Applied Mechanics and Engineering*, 362, 112873. [DOI](https://doi.org/10.1016/j.cma.2020.112873) | [PDF](/pdf/first-or-correspondence/lai2020-fourier-series-based-discrete-element-method-for-computational.pdf)

### 特殊颗粒材料应用

17. **Lai, Z.**, Chen, Q., & Huang, L. (2017). Characterization and discrete element simulation of grading and shape-dependent behavior of JSC-1A Martian regolith simulant. *Granular Matter*, 19(4), 69. [DOI](https://doi.org/10.1007/s10035-017-0754-1) | [PDF](/pdf/first-or-correspondence/lai2017-characterization-and-discrete-element-simulation-of-grading-and.pdf)

18. Xiao, R., Liang, B., Wu, F., Huang, L., & **Lai, Z.** (2022). Biocementation of coral sand under seawater environment and an improved three-stage biogrouting approach. *Construction and Building Materials*, 362, 129758. [DOI](https://doi.org/10.1016/j.conbuildmat.2022.129758) | [PDF](/pdf/first-or-correspondence/xiao2022-biocementation-of-coral-sand-under-seawater-environment-and-an.pdf)
