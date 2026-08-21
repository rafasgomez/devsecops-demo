# DevSecOps Demo – Node.js + XSS + SAST + Trivy

Demo práctica de **DevSecOps** que muestra cómo integrar seguridad desde las primeras etapas del desarrollo (Shift-Left).

Incluye una aplicación Node.js vulnerable a **XSS** de forma intencionada, un pipeline de GitHub Actions con análisis estático (SAST), construcción multi-arquitectura de la imagen Docker y escaneo de seguridad.

## 🎯 Objetivo

Demostrar un flujo realista de DevSecOps:

- Código vulnerable (XSS reflejado)
- Análisis estático de código (CodeQL)
- Construcción y publicación de imagen Docker multi-arch
- Escaneo dinámico (OWASP ZAP)
- Preparado para incorporar escaneo de vulnerabilidades de imagen (Trivy)

## 🛠️ Stack tecnológico

| Componente              | Tecnología                          |
|-------------------------|-------------------------------------|
| Runtime                 | Node.js 20                         |
| Framework               | Express                            |
| Contenedor              | Docker (Alpine)                    |
| CI/CD                   | GitHub Actions                     |
| SAST                    | GitHub CodeQL                      |
| DAST                    | OWASP ZAP Baseline                 |
| Registry                | GitHub Container Registry (GHCR)   |
| Escaneo de imágenes     | Trivy (recomendado añadir)         |

## 📁 Estructura del proyecto
