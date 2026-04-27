# 颗粒材料智能表征与数据驱动建模

**科学问题**：如何利用机器学习与先进实验技术实现颗粒材料微观结构的精准表征与宏观力学行为的智能预测？

---

## 研究背景

融合**人工智能**与**实验岩土力学**，推动颗粒材料研究从经验描述向数据驱动的定量预测转变。本方向聚焦于颗粒形态的智能化表征、虚拟生成及力学性能预测，为计算岩土力学提供高质量的数据支撑和高效的分析工具。

---

## 核心研究内容

### 1. 深度学习图像重建与形态解析

**技术突破**：
- **CNN三维图像分割**：基于卷积神经网络与三维图像分割算法，从 X 射线 CT 扫描数据中自动提取颗粒形态与孔隙结构
- **亚体素级解析**：首创"机器学习图像增强→水平集分割"协同形态重构技术，攻克亚体素级颗粒形态解析难题
- **极端环境颗粒表征**：成功应用于**火星模拟壤**、**深海珊瑚砂**等特殊颗粒材料的形态数字化

**应用成果**：建立了颗粒"形态获取—形态重构—虚拟生成"的全流程数字化技术体系。

### 2. 虚拟颗粒智能生成

**技术方法**：
- **球谐系数-随机场方法**：建立球谐系数与随机场结合的颗粒虚拟生成方法，揭示颗粒形态谱系演化规律
- **扩散模型驱动**：研发基于扩散模型的虚拟多孔颗粒材料生成框架，实现高真实感颗粒形态的智能生成
- **形态相似度**：生成虚拟颗粒与实测样本形态相似度达**90%**，突破物理实验样本数量限制

<div style={{textAlign: 'center', margin: '20px 0'}}>
  <img src="/img/research/virtual-particles.png" alt="虚拟颗粒生成" style={{maxWidth: '85%', height: 'auto'}} />
  <p><em>基于机器学习的虚拟颗粒生成与形态谱系演化</em></p>
</div>

### 3. 数据驱动本构建模

**研究内容**：
- **形态-性能关联**：构建颗粒形状描述符与宏观力学性能间的机器学习映射模型
- **神经网络接触力学**：研发神经网络驱动的形状表征与计算颗粒力学方法，基于SDF实现高效的接触检测与力学计算
- **代理模型加速**：建立颗粒材料宏观响应的代理模型，实现快速参数反演与优化设计

### 4. 钙质砂等特殊土体研究

**研究对象**：
- **珊瑚砂**：针对珊瑚砂颗粒的内孔隙特征，建立考虑微观形态效应的多尺度计算流程
- **生物胶结**：研究微生物诱导碳酸钙沉积（MICP）过程中的颗粒胶结机制
- **火星壤**：开展火星模拟壤颗粒的离散元建模，服务于深空探测工程

**典型发现**：
- 珊瑚砂的内孔隙结构显著影响其压缩破碎行为
- 颗粒形态的非规则性是控制钙质砂力学响应的关键因素

---

## 研究意义

为颗粒材料的智能化表征与性能预测提供新范式，拓展机器学习在计算力学中的应用，实现从"经验试错"到"数据驱动"的研究范式转变。

---

## 代表论文

### 深度学习与智能计算

1. Li, C., **Lai, Z.**#, Huang, S., & Huang, L. (2026). Neural network-driven shape representation and computational particle mechanics via signed distance fields. *Engineering Applications of Artificial Intelligence*, 167, 113913. [DOI](https://doi.org/10.1016/j.engappai.2026.113913) | [PDF](/pdf/first-or-correspondence/li2026-neural-shape-representation.pdf)

2. Huang, S., Wang, P., **Lai, Z.**#, Yin, Z., Huang, L., & Xu, C. (2024). Machine-learning-enabled discrete element method: The extension to three dimensions and computational issues. *Computer Methods in Applied Mechanics and Engineering*, 432, 117445. [DOI](https://doi.org/10.1016/j.cma.2024.117445) | [PDF](/pdf/first-or-correspondence/huang2024-machine-learning-enabled-discrete-element-method-the-extension.pdf)

3. **Lai, Z.**, Chen, Q., & Huang, L. (2021). Machine-learning-enabled discrete element method: Contact detection and resolution of irregular-shaped particles. *International Journal for Numerical and Analytical Methods in Geomechanics*, 46(1), 113-140. [DOI](https://doi.org/10.1002/nag.3293) | [PDF](/pdf/first-or-correspondence/lai2021-machine-learning-enabled-discrete-element-method-contact.pdf)

### 虚拟颗粒生成与扩散模型

4. Li, C., Huang, L., **Lai, Z.**#, Huang, S., & Lin, Y. (2026). A diffusion-based generative framework for virtual porous granular media generation. *Powder Technology*, 473, 122230. [DOI](https://doi.org/10.1016/j.powtec.2026.122230) | [PDF](/pdf/first-or-correspondence/li2026-diffusion-generative-framework.pdf)

### 颗粒形态表征与CT图像重建

5. Huang, S., Huang, L., **Lai, Z.**#, & Zhao, J. (2023). Morphology characterization and discrete element modeling of coral sand with intraparticle voids. *Engineering Geology*, 315, 107023. [DOI](https://doi.org/10.1016/j.enggeo.2023.107023) | [PDF](/pdf/first-or-correspondence/huang2023-morphology-characterization-and-discrete-element-modeling-of.pdf)

6. **Lai, Z.**, Chen, Q., & Huang, L. (2019). Reconstructing granular particles from X-ray computed tomography using the TWS machine learning tool and the level set method. *Acta Geotechnica*, 14(1), 1-18. [DOI](https://doi.org/10.1007/s11440-018-0759-x) | [PDF](/pdf/first-or-correspondence/lai2019-reconstructing-granular-particles-from-x-ray-computed-tomography.pdf)

7. **Lai, Z.**, Chen, Q., & Huang, L. (2021). A polybézier-based particle model for the DEM modeling of granular media. *Computers and Geotechnics*, 134, 104052. [DOI](https://doi.org/10.1016/j.compgeo.2021.104052) | [PDF](/pdf/first-or-correspondence/lai2021-a-polybezier-based-particle-model-for-the-dem-modeling-of.pdf)
