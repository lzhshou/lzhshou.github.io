---
---

# Digital Simulation Platform for Emergency Evacuation in Underground Large Spaces

## Project Overview

- **Level**: University Level
- **Principal Investigator**: Gong Daxuan (24345015)
- **Advisor**: Lai Zhengshou
- **Duration**: Jan 2026 - Dec 2026

## Background and Significance

With accelerating urbanization, large underground spaces such as subway transfer stations, underground commercial streets, and civil defense projects are becoming increasingly common. These spaces have complex structures and limited accessibility, posing significant challenges for evacuation during disasters such as fires, floods, or collapses.

Traditional evacuation simulation software is mostly based on 2D planar grids, which struggle to handle complex 3D scenarios and lack physical realism. This project responds to the national strategic needs for urban resilience and intelligent decision-making in the "15th Five-Year Plan," aiming to develop a physics engine-based 3D evacuation simulation platform to provide scientific support for underground space safety design and emergency management.

## Research Content

This project constructs a three-layer coupled architecture of "physical environment - information propagation - crowd behavior":

**Physical Layer**: Building 3D scenes based on game-level physics engine (Jolt Physics), importing real architectural structure models, simulating physical processes of disasters such as collapses, floods, and fires, including channel blockage, water accumulation, and smoke diffusion.

**Information Layer**: Simulating intelligent agents' limited perception capabilities through field of view detection, line-of-sight occlusion, and sound propagation mechanisms to achieve information diffusion and transmission in crowds, considering information misinformation and correction processes.

**Logic Layer**: Implementing evacuation decisions based on behavior rules, including typical evacuation behaviors such as moving toward exits, avoiding dangers, following crowds, and hesitant detours, evaluating key indicators such as evacuation time, congestion areas, and exit utilization rates.

## Technical Approach

- **Language**: C++
- **Physics Engine**: Jolt Physics
- **Graphics**: Vulkan Real-time Renderer
- **Rule Definition**: GAML (inspired by GAMA Platform)
- **Performance**: ECS, Spatial Octree, SIMD acceleration

## Innovation Points

1. **Three-layer coupling architecture**: Establishing effective connections between physical, information, and logic layers
2. **3D physics-driven**: Introducing real physics engines compared to traditional 2D planar simulations
3. **Limited perception model**: Agents make decisions based on non-omniscient information, more consistent with real disaster scenarios

## Expected Outcomes

- Open-source underground space evacuation simulation software
- Support for multiple disaster types (fire, flood, collapse)
- Assessment indicators including evacuation time, congestion hotspots, and exit efficiency
- Complete technical documentation

---

*University Innovation and Entrepreneurship Training Program Project, 2026*
