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
  <img src="/img/research/projects/fig2_digital_pipeline.jpeg" alt="Particle Morphology Digital Pipeline" style={{maxWidth: '90%', height: 'auto'}} />
  <p><em>Full-process digital technology system for particle "morphology acquisition - morphology reconstruction - virtual generation"</em></p>
</div>

### 2. SDF-Based Unified Contact Theory

Traditional DEM particle models and computational methods face challenges of single geometric description and poor contact algorithm universality. This research innovatively constructed a universal interface for arbitrary morphology particle models based on **Signed Distance Field (SDF)**:

- **Unified Mathematical Description**: Unified encapsulation of heterogeneous particle morphologies including spheres, quadric surfaces, spherical harmonics, level sets, and polyhedra
- **Contact Potential Theory Framework**: Established energy-conserving contact solver, overcoming complex contact energy dissipation challenges and ensuring computational stability of DEM simulation
- **Coarse-Fine Particle Contact Algorithm**: Fine particles adopt point-sphere approximation while coarse particles maintain complete SDF geometric description, significantly reducing computational complexity of polydisperse systems

<div style={{textAlign: 'center', margin: '20px 0'}}>
  <img src="/img/research/projects/fig3_sdf_framework.jpeg" alt="SDF Contact Theory Framework" style={{maxWidth: '90%', height: 'auto'}} />
  <p><em>Innovation in contact theory framework based on signed distance field</em></p>
</div>

### 3. Machine Learning-Enabled Contact Solution Acceleration

Traditional contact detection algorithms have computational complexity that grows exponentially with particle number, severely constraining engineering-scale simulation. This research achieves breakthroughs through machine learning methods:

- **Contact State Prediction Network (NetDEM)**: Constructed geometry descriptor-driven contact state prediction network, achieving **20%** reduction in contact detection time
- **Large-Scale Computational Efficiency Improvement**: Million-particle system computational efficiency improved by **25%**
- **Error Control Strategy**: Revealed error propagation patterns in static/dynamic scenarios, proposed contact state-energy dissipation coupled correction strategy

<div style={{textAlign: 'center', margin: '20px 0'}}>
  <img src="/img/research/projects/fig4_ml_acceleration.jpeg" alt="ML Acceleration" style={{maxWidth: '90%', height: 'auto'}} />
  <p><em>Machine learning-enabled contact detection acceleration technology</em></p>
</div>

### 4. Software Platform Development

Developed **NetDEM**, a general-purpose discrete element computing software with fully independent intellectual property rights, supporting OpenMP and MPI hybrid parallel computing, adapted for deployment on national supercomputing platforms (Tianhe), with parallel efficiency reaching 80%.

<div style={{textAlign: 'center', margin: '20px 0'}}>
  <img src="/img/research/projects/fig5_netdem_software.jpeg" alt="NetDEM Software Platform" style={{maxWidth: '90%', height: 'auto'}} />
  <p><em>Functional schematic of independently developed NetDEM discrete element and fluid-structure coupling computing software</em></p>
</div>

---

## Research Significance

Provides core technical support for microscopic mechanism research of complex mechanical responses of granular materials, breaking through computational efficiency bottlenecks of traditional numerical methods. The developed NetDEM software has been applied by institutions including Idaho National Laboratory, Hong Kong University of Science and Technology, and National Defense Engineering Research Institute of Academy of Military Science.

---

## Representative Publications

### SDF-DEM Methods and Fluid-Structure Coupling

1. **Lai, Z.**, Huang, S., Kong, Y., Zhao, S., Zhao, J., & Huang, L. (2026). Hybrid resolved-unresolved CFD-DEM framework for multiscale fluid-particle systems with irregular-shaped and polydisperse particles. *Journal of Computational Physics*, 554, 114759. [DOI](https://doi.org/10.1016/j.jcp.2026.114759) | [PDF](/pdf/first_or_correspondence/Lai2026_Hybrid_resolved_unresolved_CFD_DEM.pdf)

2. **Lai, Z.**, Feng, Y., Zhao, J., & Huang, L. (2024). Unifying the contact in signed distance field-based and conventional discrete element methods. *Computers and Geotechnics*, 176, 106764. [DOI](https://doi.org/10.1016/j.compgeo.2024.106764) | [PDF](/pdf/first_or_correspondence/Lai2024%20Unifying%20the%20contact%20in%20signed%20distance%20field-based%20and%20conventional%20discrete.pdf)

3. **Lai, Z.**, Zhao, J., Zhao, S., & Huang, L. (2023). Signed distance field enhanced fully resolved CFD-DEM for simulation of granular flows involving multiphase fluids and irregularly shaped particles. *Computer Methods in Applied Mechanics and Engineering*, 414, 116195. [DOI](https://doi.org/10.1016/j.cma.2023.116195) | [PDF](/pdf/first_or_correspondence/Lai2023%20Signed%20distance%20field%20enhanced%20fully%20resolved%20CFD-DEM%20for%20simulation%20of.pdf)

4. **Lai, Z.**, Zhao, S., Zhao, J., & Huang, L. (2022). Signed distance field framework for unified DEM modeling of granular media with arbitrary particle shapes. *Computational Mechanics*, 70(4), 763-783. [DOI](https://doi.org/10.1007/s00466-022-02220-8) | [PDF](/pdf/first_or_correspondence/Lai2022%20Signed%20distance%20field%20framework%20for%20unified%20DEM%20modeling%20of%20granular%20media%20with.pdf)

### Machine Learning and Intelligent Computing

5. Li, C., **Lai, Z.**#, Huang, S., & Huang, L. (2026). Neural network-driven shape representation and computational particle mechanics via signed distance fields. *Engineering Applications of Artificial Intelligence*, 167, 113913. [DOI](https://doi.org/10.1016/j.engappai.2026.113913) | [PDF](/pdf/first_or_correspondence/Li2026_neural_shape_representation.pdf)

6. Huang, S., Wang, P., **Lai, Z.**#, Yin, Z., Huang, L., & Xu, C. (2024). Machine-learning-enabled discrete element method: The extension to three dimensions and computational issues. *Computer Methods in Applied Mechanics and Engineering*, 432, 117445. [DOI](https://doi.org/10.1016/j.cma.2024.117445) | [PDF](/pdf/first_or_correspondence/Huang2024%20Machine-learning-enabled%20discrete%20element%20method%20-%20The%20extension%20to%20three.pdf)

7. **Lai, Z.**, Chen, Q., & Huang, L. (2021). Machine-learning-enabled discrete element method: Contact detection and resolution of irregular-shaped particles. *International Journal for Numerical and Analytical Methods in Geomechanics*, 46(1), 113-140. [DOI](https://doi.org/10.1002/nag.3293) | [PDF](/pdf/first_or_correspondence/Lai2021%20Machine%E2%80%90learning%E2%80%90enabled%20discrete%20element%20method%20-%20Contact%20detection%20and.pdf)
