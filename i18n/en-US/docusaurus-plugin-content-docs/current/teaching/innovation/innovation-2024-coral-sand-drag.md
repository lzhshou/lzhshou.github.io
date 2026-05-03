---
---

# Drag Force Model and Numerical Simulation of Coral Sand in Water Flow

## Project Overview

- **Level**: University/Provincial Level
- **Team Members**: Zhang Haoqin, Liu Mingjing
- **Advisors**: Lai Zhengshou, Huang Linchong
- **Duration**: Jan 2024 - Dec 2024

## Background and Significance

Island reef coral sand is an important construction material for South China Sea island development. Its hydrodynamic characteristics under water flow directly affect the stability of island reef projects. As the core parameter of particle-fluid interaction, accurately predicting the drag force of coral sand particles is crucial for understanding their migration patterns under wave and current actions.

Coral sand particles have irregular shapes and developed internal pores. Traditional spherical particle drag force formulas struggle to accurately describe their hydrodynamic behavior. This project employs the Computational Fluid Dynamics-Discrete Element Method (CFD-DEM) coupled with spherical harmonic virtual particle generation technology to establish a drag force prediction model considering particle morphology.

![CFD-DEM numerical simulation of coral sand drag force](/img/innovation/2024-coral-sand.png)

<p align="center"><em>Conceptual schematic of CFD-DEM settling simulation of real-shaped coral sand particles (ClaudeBot generated)</em></p>

## Research Content

**Regular Particle Settling Validation**
- Establishing CFD-DEM settling models for ellipsoidal and cylindrical particles
- Validating numerical method accuracy under standard conditions
- Analyzing the influence of aspect ratio and flatness on drag force

**Real Coral Sand Particle Simulation**
- Reconstructing real coral sand particle shapes based on spherical harmonics
- Conducting single-particle settling numerical experiments
- Analyzing the influence of surface roughness and pore distribution on hydrodynamic response

**Morphology-Drag Correlation Analysis**
- Extracting geometric morphological parameters (sphericity, convexity, aspect ratio)
- Establishing statistical relationships between morphological parameters and drag coefficients
- Developing drag force prediction formulas for coral sand

## Technical Approach

- **Method**: CFD-DEM coupling (OpenFOAM + in-house DEM)
- **Particle Modeling**: Spherical harmonic reconstruction of real particle shapes
- **Analysis**: Python/MATLAB
- **Validation**: Laboratory settling experiments

## Innovation Points

1. **Real morphology CFD-DEM simulation**: Breaking through traditional spherical assumptions
2. **Spherical harmonic particle generation**: Generating statistically representative virtual coral sand particles
3. **Morphology-mechanics correlation**: Establishing quantifiable relationships between morphology and drag force

## Project Outcomes

- Completed numerical simulation of regular and real coral sand particles
- Validated CFD-DEM method applicability in coral sand hydrodynamic analysis
- Provided theoretical foundation for coral sand migration prediction in island reef engineering

**Project Showcase**

- <a href="/files/innovation/2024-coral-sand-drag-report.pdf" target="_blank">Final Report (PPT)</a>

---

*University Innovation and Entrepreneurship Training Program Project, 2024. This is a continuation of the 2023 project "Numerical and Experimental Study on Drag Force of Calcareous Sand."*
