---
sidebar: false
---

# Scientific Computing Visualization and Photorealistic Rendering Based on Graphics Engine

## Project Overview

- **Level**: University/Provincial Level
- **Team Members**: Zheng Zefeng, Gong Daxuan, Zhang Luoyun, Zhong Zhuoneng, Zhu Xinsheng
- **Advisor**: Lai Zhengshou
- **Duration**: Jan 2025 - Dec 2025

## Background and Significance

Scientific computing visualization is an important bridge connecting numerical simulation with engineering applications. Current mainstream visualization software (such as ParaView), while powerful, has two major pain points: high learning curves requiring mastery of complex node editors, and limited rendering quality based on rasterization techniques that struggle to present realistic material lighting effects.

With the maturation of GPU ray tracing technology, game-level rendering quality can now be applied in scientific visualization. This project aims to develop a ray tracing-based scientific computing visualization tool to lower the barrier to visualization and enhance rendering realism, providing researchers with more intuitive and aesthetically pleasing presentation tools.

## Research Content

**Ray Tracing Renderer Development**
- GPU-accelerated ray tracing based on Vulkan RTX API
- Support for mesh models and volume rendering
- Material system implementation (diffuse, specular, refraction, subsurface scattering)
- Advanced effects including ambient occlusion and global illumination

**AI-Assisted Rendering Workflow**
- Exploring AI-generated rendering workflows
- Researching automatic translation from natural language descriptions to rendering parameters
- Lowering the barrier for non-professional users

**Scientific Data Adaptation**
- Support for common scientific data formats (VTK, HDF5, NetCDF)
- Visualization mapping for flow fields, stress fields, temperature fields
- Time series data animation rendering

## Technical Approach

- **Language**: C++ / CUDA
- **Graphics API**: Vulkan with Ray Tracing
- **AI Framework**: PyTorch (for rendering workflow generation)
- **Data Interface**: VTK, OpenVDB

## Innovation Points

1. **Ray tracing for scientific visualization**: Introducing game-level ray tracing technology to significantly enhance rendering realism
2. **AI-driven workflows**: Exploring LLM-assisted rendering workflow design
3. **GPU acceleration**: Leveraging modern GPU RT Cores for real-time interactive ray tracing

## Expected Outcomes

- Open-source ray tracing scientific visualization software
- High-quality rendering support for common scientific data formats
- AI-assisted rendering prototype
- Reusable rendering algorithm modules

---

*University Innovation and Entrepreneurship Training Program Project, 2025*
