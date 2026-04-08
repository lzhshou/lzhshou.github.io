# 多尺度流固耦合与多相流模拟

**科学问题**：深海天然气水合物开采中，如何刻画气-液-固三相流的跨尺度强耦合过程与流动失稳机理？

---

## 研究背景

流-固耦合系统在自然和工程环境中普遍存在（侵蚀、沉积物输运、过滤等）。现有 CFD-DEM 方法主要分为**解析法 (resolved)** 和**非解析法 (unresolved)**，各有局限性：

- 解析法计算成本高，难以处理大尺度系统
- 非解析法基于经验封闭模型，难以捕捉颗粒形状效应
- 缺乏能够统一处理不同尺度（粗细颗粒共存）的混合框架

---

## 核心研究内容

### 1. 混合解析 CFD-DEM 框架

创新性地提出了**自适应三尺度耦合策略**，根据颗粒尺寸与网格尺寸的比值自动选择计算方案：

| 方案 | 尺寸比条件 | 适用场景 |
|:---|:---|:---|
| **全解析 (Resolved)** | d/h > 8 | 粗颗粒，流体网格直接解析颗粒边界，采用浸没边界（IB）方法 |
| **半解析 (Semi-resolved)** | 1/3 < d/h < 8 | 中等颗粒，核函数插值方法处理颗粒与流体相互作用 |
| **非解析 (Unresolved)** | d/h < 1/3 | 细颗粒，经验阻力模型（Gidaspow模型） |

**技术特点**：
- 兼顾计算精度与效率，实现宽级配、任意形态颗粒系统的高效模拟
- 基于 SDF 的高精度固相分数计算方法
- 守恒力反馈确保动量守恒

<div style={{textAlign: 'center', margin: '20px 0'}}>
  <img src="/img/research/cfd_dem_framework.png" alt="CFD-DEM耦合框架" style={{maxWidth: '90%', height: 'auto'}} />
  <p><em>自适应CFD-DEM耦合框架：从全解析到非解析的多尺度模拟</em></p>
</div>

### 2. 相变-破碎耦合建模

针对水合物开采中的复杂物理过程，构建 **SDF-相场统一描述框架**：

- **颗粒组分表征**：以相场序参量表征水合物晶体与砂砾等组分的空间分布，结合 SDF 精确刻画非球形颗粒边界
- **温压驱动相变动力学**：研究温压条件变化下水合物相变过程及界面迁移规律
- **相变损伤耦合**：建立黏结强度随水合物含量变化的损伤关系，刻画沉积物碎块的破碎演化

### 3. 气相多尺度拓扑演化

针对气相从微气泡到宏观气栓的跨尺度演变特征：

- **离散-连续耦合表征**：微尺度气泡采用离散描述，宏观气团采用 VOF 方法捕捉界面
- **气泡聚并与破碎动力学**：研究气泡碰撞接触与液膜排空过程，建立离散气泡与连续界面的动态转换准则
- **可压缩气相本构**：建立描述气泡温度、压力与体积响应关系的气相本构模型

### 4. 多相流失稳机理

- **流型演化规律**：研究立管输运过程中温压变化对多相流结构演化的影响，构建多相流流型演化图谱
- **段塞流形成机制**：分析水合物分解速率、固液比及温压差对段塞流形成与演化的影响
- **失稳量化判据**：量化相变诱发压力脉动与流动失稳特征，建立安全调控理论依据

---

## 研究资助

**广东省自然科学基金面上项目** (2026-): 水合物固态流化开采中气-液-固三相流动机理与耦合数值方法研究

---

## 研究意义

为理解颗粒材料在流体作用下的力学响应机制提供多尺度视角，服务于：

- **海洋资源开发**：深海天然气水合物开采、深海采矿
- **基础设施安全**：海底管线稳定性、防波堤设计
- **化工过程优化**：过滤、沉降、流化床设计

---

## 代表论文

### 多尺度 CFD-DEM 框架

1. **Lai, Z.**, Huang, S., Kong, Y., Zhao, S., Zhao, J., & Huang, L. (2026). Hybrid resolved-unresolved CFD-DEM framework for multiscale fluid-particle systems with irregular-shaped and polydisperse particles. *Journal of Computational Physics*, 554, 114759. [DOI](https://doi.org/10.1016/j.jcp.2026.114759) | [PDF](/pdf/first_or_correspondence/Lai2026_Hybrid_resolved_unresolved_CFD_DEM.pdf)

2. **Lai, Z.**, Zhao, J., Zhao, S., & Huang, L. (2023). Signed distance field enhanced fully resolved CFD-DEM for simulation of granular flows involving multiphase fluids and irregularly shaped particles. *Computer Methods in Applied Mechanics and Engineering*, 414, 116195. [DOI](https://doi.org/10.1016/j.cma.2023.116195) | [PDF](/pdf/first_or_correspondence/Lai2023_signed_distance_field_enhanced_fully_resolved_cfd_dem_for.pdf)

### 渗流侵蚀与多相流应用

3. Huang, S., Wang, P., **Lai, Z.**#, Yin, Z.-Y., Huang, L., & Xu, C. (2026). Hybrid SDF-CFD-DEM analysis of suffusion behavior in coral sand incorporating irregular particle morphology and intraparticle voids. *Engineering Geology*, 364, 108616. [DOI](https://doi.org/10.1016/j.enggeo.2026.108616) | [PDF](/pdf/first_or_correspondence/Huang2026_hybrid_sdf_cfd_dem_analysis_of_suffusion_behavior_in_coral.pdf)

4. Liu, Y., Yin, Z., Huang, S., **Lai, Z.**, & Zhou, C. (2024). Resolved CFD-DEM Modeling of Suffusion in Gap-Graded Shaped Granular Soils. *Journal of Geotechnical and Geoenvironmental Engineering*, 150(4), 04024008. [DOI](https://doi.org/10.1061/JGGEFK.GTENG-11891) | [PDF](/pdf/coauthored/Liu2024_resolved_cfd_dem_modeling_of_suffusion_in_gap_graded_shaped.pdf)

### 颗粒流与工艺应用

5. **Lai, Z.**, Xia, Y., & Chen, Q. (2023). Discrete element modeling of granular hopper flow of irregular-shaped deformable particles. *Advanced Powder Technology*, 34(9), 104106. [DOI](https://doi.org/10.1016/j.apt.2023.104106) | [PDF](/pdf/first_or_correspondence/Lai2023_discrete_element_modeling_of_granular_hopper_flow_of_irregular.pdf)
