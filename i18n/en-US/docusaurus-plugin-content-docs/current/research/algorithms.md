# Irregular Particle DEM Methods and Intelligent Computing

**Scientific Question**: How to establish a universal discrete element method that effectively characterizes real irregular particle morphology while balancing accuracy, stability, and efficiency?

---

## Research Background

Addressing the core bottleneck of "difficult morphology characterization, low computational efficiency, and weak engineering applicability" in DEM simulation of irregular granular materials, this direction focuses on fundamental algorithm innovation through breakthroughs in "digital characterization, contact theory reconstruction, and intelligent acceleration" to establish a high-precision and efficient computing system for irregular particles.

---

## Core Research Contents

### 1. Full-Process Digital Technology for Particle Morphology

We have constructed a full-process digital technology system of "morphology acquisition — morphology reconstruction — virtual generation":

- **CT Image Machine Learning Reconstruction**: Pioneered the collaborative morphology reconstruction technology of "X-CT scanning → machine learning image enhancement → level set segmentation", overcoming sub-voxel-level particle morphology analysis challenges
- **Spherical Voronoi Reconstruction Algorithm**: Based on spherical Voronoi tessellation combined with spherical harmonic functions, innovatively designed dual-mode surface sampling strategies (centroid distance/curvature adaptive)
- **Virtual Particle Intelligent Generation**: Established spherical harmonic coefficient-random field particle virtual generation method, achieving 90% morphology similarity between generated virtual particles and measured samples

**Application Results**: Successfully applied to extreme environment particle characterization such as Martian regolith simulant and deep-sea coral sand.

<div style={{textAlign: 'center', margin: '20px 0'}}>
  <img src="/img/research/projects/fig2-digital-pipeline.jpeg" alt="Particle Morphology Digital Pipeline" style={{maxWidth: '90%', height: 'auto'}} />
  <p><em>Full-process digital technology system for particle "morphology acquisition - morphology reconstruction - virtual generation"</em></p>
</div>

### 2. SDF-Based Unified Contact Theory

Traditional DEM particle models and computational methods face challenges of single geometric description and poor contact algorithm universality. This research innovatively constructed a universal interface for arbitrary morphology particle models based on **Signed Distance Field (SDF)**:

- **Unified Mathematical Description**: Unified encapsulation of heterogeneous particle morphologies including spheres, quadric surfaces, spherical harmonics, level sets, and polyhedra
- **Contact Potential Theory Framework**: Established energy-conserving contact solver, overcoming complex contact energy dissipation challenges and ensuring computational stability of DEM simulation
- **Coarse-Fine Particle Contact Algorithm**: Fine particles adopt point-sphere approximation while coarse particles maintain complete SDF geometric description, significantly reducing computational complexity of polydisperse systems

<div style={{textAlign: 'center', margin: '20px 0'}}>
  <img src="/img/research/projects/fig3-sdf-framework.jpeg" alt="SDF Contact Theory Framework" style={{maxWidth: '90%', height: 'auto'}} />
  <p><em>Innovation in contact theory framework based on signed distance field</em></p>
</div>

### 3. Machine Learning-Enabled Contact Solution Acceleration

Traditional contact detection algorithms have computational complexity that grows exponentially with particle number, severely constraining engineering-scale simulation. This research achieves breakthroughs through machine learning methods:

- **Contact State Prediction Network (NetDEM)**: Constructed geometry descriptor-driven contact state prediction network, achieving **20%** reduction in contact detection time
- **Large-Scale Computational Efficiency Improvement**: Million-particle system computational efficiency improved by **25%**
- **Error Control Strategy**: Revealed error propagation patterns in static/dynamic scenarios, proposed contact state-energy dissipation coupled correction strategy

<div style={{textAlign: 'center', margin: '20px 0'}}>
  <img src="/img/research/projects/fig4-ml-acceleration.jpeg" alt="ML Acceleration" style={{maxWidth: '90%', height: 'auto'}} />
  <p><em>Machine learning-enabled contact detection acceleration technology</em></p>
</div>

### 4. Software Platform Development

Developed **NetDEM**, a general-purpose discrete element computing software with fully independent intellectual property rights, supporting OpenMP and MPI hybrid parallel computing, adapted for deployment on national supercomputing platforms (Tianhe), with parallel efficiency reaching 80%.

<div style={{textAlign: 'center', margin: '20px 0'}}>
  <img src="/img/research/projects/fig5-netdem-software.jpeg" alt="NetDEM Software Platform" style={{maxWidth: '90%', height: 'auto'}} />
  <p><em>Functional schematic of independently developed NetDEM discrete element and fluid-structure coupling computing software</em></p>
</div>

---

## Research Significance

Provides core technical support for microscopic mechanism research of complex mechanical responses of granular materials, breaking through computational efficiency bottlenecks of traditional numerical methods. The developed NetDEM software has been applied by institutions including Idaho National Laboratory, Hong Kong University of Science and Technology, and National Defense Engineering Research Institute of Academy of Military Science.

---

## Representative Publications

### SDF-DEM Methods and Fluid-Structure Coupling

1. **Lai, Z.**, Huang, S., Kong, Y., Zhao, S., Zhao, J., & Huang, L. (2026). Hybrid resolved-unresolved CFD-DEM framework for multiscale fluid-particle systems with irregular-shaped and polydisperse particles. *Journal of Computational Physics*, 554, 114759. [DOI](https://doi.org/10.1016/j.jcp.2026.114759) | [PDF](/pdf/first-or-correspondence/lai2026-hybrid-resolved-unresolved-cfd-dem.pdf)

2. **Lai, Z.**, Feng, Y., Zhao, J., & Huang, L. (2024). Unifying the contact in signed distance field-based and conventional discrete element methods. *Computers and Geotechnics*, 176, 106764. [DOI](https://doi.org/10.1016/j.compgeo.2024.106764) | [PDF](/pdf/first-or-correspondence/lai2024-unifying-the-contact-in-signed-distance-field-based-and.pdf)

3. **Lai, Z.**, Zhao, J., Zhao, S., & Huang, L. (2023). Signed distance field enhanced fully resolved CFD-DEM for simulation of granular flows involving multiphase fluids and irregularly shaped particles. *Computer Methods in Applied Mechanics and Engineering*, 414, 116195. [DOI](https://doi.org/10.1016/j.cma.2023.116195) | [PDF](/pdf/first-or-correspondence/lai2023-signed-distance-field-enhanced-fully-resolved-cfd-dem-for.pdf)

4. **Lai, Z.**, Zhao, S., Zhao, J., & Huang, L. (2022). Signed distance field framework for unified DEM modeling of granular media with arbitrary particle shapes. *Computational Mechanics*, 70(4), 763-783. [DOI](https://doi.org/10.1007/s00466-022-02220-8) | [PDF](/pdf/first-or-correspondence/lai2022-signed-distance-field-framework-for-unified-dem-modeling-of.pdf)

5. **Lai, Z.**, Chen, Q., & Huang, L. (2021). Revisiting the GJK and shape erosion method for contact resolution in DEM. *Powder Technology*, 394, 363-371. [DOI](https://doi.org/10.1016/j.powtec.2021.08.068) | [PDF](/pdf/first-or-correspondence/lai2021-revisiting-the-gjk-and-shape-erosion-method-for-contact.pdf)

6. Zhao, S., **Lai, Z.**, & Zhao, J. (2022). Leveraging ray tracing cores for particle-based simulations on GPUs. *International Journal for Numerical Methods in Engineering*, 123(4), 696-713. [DOI](https://doi.org/10.1002/nme.7139) | [PDF](/pdf/first-or-correspondence/zhao2022-leveraging-ray-tracing-cores-for-particle-based-simulations-on.pdf)

### Machine Learning and Intelligent Computing

5. Li, C., **Lai, Z.**#, Huang, S., & Huang, L. (2026). Neural network-driven shape representation and computational particle mechanics via signed distance fields. *Engineering Applications of Artificial Intelligence*, 167, 113913. [DOI](https://doi.org/10.1016/j.engappai.2026.113913) | [PDF](/pdf/first-or-correspondence/li2026-neural-shape-representation.pdf)

6. Huang, S., Wang, P., **Lai, Z.**#, Yin, Z., Huang, L., & Xu, C. (2024). Machine-learning-enabled discrete element method: The extension to three dimensions and computational issues. *Computer Methods in Applied Mechanics and Engineering*, 432, 117445. [DOI](https://doi.org/10.1016/j.cma.2024.117445) | [PDF](/pdf/first-or-correspondence/huang2024-machine-learning-enabled-discrete-element-method-the-extension.pdf)

7. **Lai, Z.**, Chen, Q., & Huang, L. (2021). Machine-learning-enabled discrete element method: Contact detection and resolution of irregular-shaped particles. *International Journal for Numerical and Analytical Methods in Geomechanics*, 46(1), 113-140. [DOI](https://doi.org/10.1002/nag.3293) | [PDF](/pdf/first-or-correspondence/lai2021-machine-learning-enabled-discrete-element-method-contact.pdf)

### Particle Morphology Characterization and Modeling

1. Li, C., Huang, L., **Lai, Z.**#, Huang, S., & Lin, Y. (2026). A diffusion-based generative framework for virtual porous granular media generation. *Powder Technology*, 473, 122230. [DOI](https://doi.org/10.1016/j.powtec.2026.122230) | [PDF](/pdf/first-or-correspondence/li2026-diffusion-generative-framework.pdf)

2. Huang, S.†, Huang, L., **Lai, Z.**#, & Zhao, J. (2023). Morphology characterization and discrete element modeling of coral sand with intraparticle voids. *Engineering Geology*, 315, 107023. [DOI](https://doi.org/10.1016/j.enggeo.2023.107023) | [PDF](/pdf/first-or-correspondence/huang2023-morphology-characterization-and-discrete-element-modeling-of.pdf)

3. Wu, F., Huang, L., & **Lai, Z.** (2024). Spherical Voronoi-based particle surface discretization and reconstruction method. *Engineering Mechanics*, 41(9), 245-256. [DOI](https://doi.org/10.6052/j.issn.1000-4750.2022.07.0614) | [PDF](/pdf/first-or-correspondence/wu2022-spherical-voronoi-reconstruction-zh.pdf)

4. **Lai, Z.**, Chen, Q., & Huang, L. (2019). Reconstructing granular particles from X-ray computed tomography using the TWS machine learning tool and the level set method. *Acta Geotechnica*, 14(1), 1-18. [DOI](https://doi.org/10.1007/s11440-018-0759-x) | [PDF](/pdf/first-or-correspondence/lai2019-reconstructing-granular-particles-from-x-ray-computed-tomography.pdf)

5. **Lai, Z.** & Huang, L. (2021). A polybezier-based particle model for the DEM modeling of granular media. *Computers and Geotechnics*, 134, 104052. [DOI](https://doi.org/10.1016/j.compgeo.2021.104052) | [PDF](/pdf/first-or-correspondence/lai2021-a-polybezier-based-particle-model-for-the-dem-modeling-of.pdf)

6. Huang, S., Huang, L., & **Lai, Z.** (2021). An extension of the Fourier series-based particle model to the GJK-based contact detection and resolution framework for DEM. *Computational Particle Mechanics*, 9, 381-391. [DOI](https://doi.org/10.1007/s40571-021-00446-6) | [PDF](/pdf/first-or-correspondence/huang2021-an-extension-of-the-fourier-series-based-particle-model-to-the.pdf)

7. **Lai, Z.**, Chen, Q., & Huang, L. (2020). Fourier series-based discrete element method for computational mechanics of irregular-shaped particles. *Computer Methods in Applied Mechanics and Engineering*, 362, 112873. [DOI](https://doi.org/10.1016/j.cma.2020.112873) | [PDF](/pdf/first-or-correspondence/lai2020-fourier-series-based-discrete-element-method-for-computational.pdf)

### Special Granular Material Applications

1. **Lai, Z.** & Chen, Q. (2017). Characterization and discrete element simulation of grading and shape-dependent behavior of JSC-1A Martian regolith simulant. *Granular Matter*, 19(4), 69. [DOI](https://doi.org/10.1007/s10035-017-0754-1) | [PDF](/pdf/first-or-correspondence/lai2017-characterization-and-discrete-element-simulation-of-grading-and.pdf)

2. Xiao, R., Liang, B., Wu, F., Huang, L., & **Lai, Z.** (2022). Biocementation of coral sand under seawater environment and an improved three-stage biogrouting approach. *Construction and Building Materials*, 362, 129758. [DOI](https://doi.org/10.1016/j.conbuildmat.2022.129758) | [PDF](/pdf/first-or-correspondence/xiao2022-biocementation-of-coral-sand-under-seawater-environment-and-an.pdf)
