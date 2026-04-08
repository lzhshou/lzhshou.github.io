# Multiscale Fluid-Structure Coupling and Multiphase Flow Simulation

**Scientific Question**: In deep-sea natural gas hydrate extraction, how to characterize the cross-scale strong coupling process and flow instability mechanisms of gas-liquid-solid three-phase flow?

---

## Research Background

Fluid-structure coupling systems are ubiquitous in natural and engineering environments (erosion, sediment transport, filtration, etc.). Existing CFD-DEM methods are mainly divided into **resolved** and **unresolved** approaches, each with limitations:

- Resolved methods have high computational costs and are difficult to apply to large-scale systems
- Unresolved methods rely on empirical closure models and struggle to capture particle shape effects
- Lack of hybrid frameworks that can uniformly handle different scales (coarse and fine particles coexisting)

---

## Core Research Contents

### 1. Hybrid Resolved-Unresolved CFD-DEM Framework

We innovatively propose an **adaptive three-scale coupling strategy** that automatically selects computational schemes based on the ratio of particle size to mesh size:

| Scheme | Size Ratio Condition | Application Scenario |
|:---|:---|:---|
| **Resolved** | d/h > 8 | Coarse particles, fluid mesh directly resolves particle boundaries using Immersed Boundary (IB) method |
| **Semi-resolved** | 1/3 < d/h < 8 | Medium particles, kernel function interpolation for particle-fluid interaction |
| **Unresolved** | d/h < 1/3 | Fine particles, empirical drag models (Gidaspow model) |

**Technical Features**:
- Balances computational accuracy and efficiency for efficient simulation of wide-graded, arbitrary morphology particle systems
- SDF-based high-precision solid fraction calculation
- Conservation force feedback ensures momentum conservation

<div style={{textAlign: 'center', margin: '20px 0'}}>
  <img src="/img/research/cfd_dem_framework.png" alt="CFD-DEM Coupling Framework" style={{maxWidth: '90%', height: 'auto'}} />
  <p><em>Adaptive CFD-DEM coupling framework: from resolved to unresolved multiscale simulation</em></p>
</div>

### 2. Phase Change-Fracture Coupling Modeling

For complex physical processes in hydrate extraction, we construct an **SDF-phase field unified description framework**:

- **Particle Component Characterization**: Phase field order parameter characterizes spatial distribution of hydrate crystals and sand components, combined with SDF for precise non-spherical particle boundary characterization
- **Temperature-Pressure Driven Phase Change Dynamics**: Studies hydrate phase change processes and interface migration under varying temperature-pressure conditions
- **Phase Change Damage Coupling**: Establishes damage relationships for cohesive strength varying with hydrate content, characterizing fragmentation evolution of sediment clasts

### 3. Gas Phase Multiscale Topological Evolution

For cross-scale evolution characteristics of gas phase from micro-bubbles to macro-slugs:

- **Discrete-Continuous Coupled Characterization**: Micro-scale bubbles use discrete description, macro bubbles use VOF method for interface capture
- **Bubble Coalescence and Fragmentation Dynamics**: Studies bubble collision contact and liquid film drainage processes, establishes dynamic conversion criteria between discrete bubbles and continuous interface
- **Compressible Gas Phase Constitutive Model**: Establishes gas phase constitutive model describing bubble temperature, pressure, and volume response

### 4. Multiphase Flow Instability Mechanisms

- **Flow Pattern Evolution**: Studies effects of temperature-pressure changes on multiphase flow structure evolution during riser transport, constructs multiphase flow pattern evolution diagrams
- **Slug Flow Formation Mechanisms**: Analyzes effects of hydrate decomposition rate, solid-liquid ratio, and temperature-pressure difference on slug flow formation and evolution
- **Instability Quantification Criteria**: Quantifies phase change-induced pressure pulsation and flow instability characteristics, establishes safety control theoretical basis

---

## Research Funding

**Guangdong Natural Science Foundation General Program** (2026-): Multiphase Flow and Coupled Numerical Methods for Hydrate Solid Fluidization

---

## Research Significance

Provides multiscale perspectives for understanding mechanical response mechanisms of granular materials under fluid action, serving:

- **Marine Resource Development**: Deep-sea natural gas hydrate extraction, deep-sea mining
- **Infrastructure Safety**: Submarine pipeline stability, breakwater design
- **Chemical Process Optimization**: Filtration, sedimentation, fluidized bed design

---

## Representative Publications

### Multiscale CFD-DEM Framework

1. **Lai, Z.**, Huang, S., Kong, Y., Zhao, S., Zhao, J., & Huang, L. (2026). Hybrid resolved-unresolved CFD-DEM framework for multiscale fluid-particle systems with irregular-shaped and polydisperse particles. *Journal of Computational Physics*, 554, 114759. [DOI](https://doi.org/10.1016/j.jcp.2026.114759) | [PDF](/pdf/first_or_correspondence/Lai2026_Hybrid_resolved_unresolved_CFD_DEM.pdf)

2. **Lai, Z.**, Zhao, J., Zhao, S., & Huang, L. (2023). Signed distance field enhanced fully resolved CFD-DEM for simulation of granular flows involving multiphase fluids and irregularly shaped particles. *Computer Methods in Applied Mechanics and Engineering*, 414, 116195. [DOI](https://doi.org/10.1016/j.cma.2023.116195) | [PDF](/pdf/first_or_correspondence/Lai2023%20Signed%20distance%20field%20enhanced%20fully%20resolved%20CFD-DEM%20for%20simulation%20of.pdf)

### Seepage Erosion and Multiphase Flow Applications

3. Huang, S., Wang, P., **Lai, Z.**#, Yin, Z.-Y., Huang, L., & Xu, C. (2026). Hybrid SDF-CFD-DEM analysis of suffusion behavior in coral sand incorporating irregular particle morphology and intraparticle voids. *Engineering Geology*, 364, 108616. [DOI](https://doi.org/10.1016/j.enggeo.2026.108616) | [PDF](/pdf/first_or_correspondence/Huang2026%20Hybrid%20SDF-CFD-DEM%20analysis%20of%20suffusion%20behavior%20in%20coral%20sand%20incorporating%20irregular%20particle%20morphology%20and%20intraparticle%20voids.pdf)

4. Liu, Y., Yin, Z., Huang, S., **Lai, Z.**, & Zhou, C. (2024). Resolved CFD-DEM Modeling of Suffusion in Gap-Graded Shaped Granular Soils. *Journal of Geotechnical and Geoenvironmental Engineering*, 150(4), 04024008. [DOI](https://doi.org/10.1061/JGGEFK.GTENG-11891) | [PDF](/pdf/coauthored/Liu2024%20Resolved%20CFD-DEM%20Modeling%20of%20Suffusion%20in%20Gap-Graded%20Shaped%20Granular%20Soils.pdf)
