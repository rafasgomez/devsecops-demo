# DevSecOps Demo – Node.js + XSS + SAST + Trivy

Demo práctica de **DevSecOps** que muestra cómo integrar la seguridad desde las primeras etapas del desarrollo (*Shift-Left Security*).

Incluye una aplicación Node.js con una vulnerabilidad **XSS** introducida de forma intencionada, un pipeline de GitHub Actions con análisis estático (SAST), construcción multi-arquitectura de la imagen Docker, análisis dinámico (DAST) y escaneo de vulnerabilidades de imagen.

---

## 🎯 Objetivo

Demostrar un flujo realista de DevSecOps de principio a fin:

- Código vulnerable (XSS reflejado) como caso de estudio.
- Análisis estático de código (**CodeQL**).
- Construcción y publicación de imagen Docker multi-arquitectura.
- Análisis dinámico de la aplicación en ejecución (**OWASP ZAP Baseline**).
- Escaneo de vulnerabilidades de la imagen de contenedor (**Trivy**).

---

## 🛠️ Stack tecnológico

| Componente          | Tecnología                        |
| ------------------- | ---------------------------------- |
| Runtime              | Node.js 20                         |
| Framework             | Express                             |
| Contenedor            | Docker (Alpine)                     |
| CI/CD                 | GitHub Actions                      |
| SAST                  | GitHub CodeQL                       |
| DAST                  | OWASP ZAP Baseline                  |
| Registry               | GitHub Container Registry (GHCR)    |
| Escaneo de imágenes   | Trivy                               |

---

## 📁 Estructura del proyecto

```
devsecops-demo/
├── .github/
│   └── workflows/       # Pipelines de CI/CD (SAST, build, DAST, escaneo)
├── Dockerfile           # Imagen de la aplicación (Alpine + Node.js)
├── app.js               # Aplicación Express con vulnerabilidad XSS intencionada
├── package.json
├── package-lock.json
└── README.md
```

---

## 🚀 Puesta en marcha

### Requisitos previos

- [Node.js 20+](https://nodejs.org/)
- [Docker](https://www.docker.com/) (opcional, para ejecutar en contenedor)

### Ejecución local

```bash
git clone https://github.com/rafasgomez/devsecops-demo.git
cd devsecops-demo
npm install
node app.js
```

La aplicación quedará disponible en `http://localhost:3000` (ajusta el puerto según lo definido en `app.js`).

### Ejecución con Docker

```bash
docker build -t devsecops-demo .
docker run -p 3000:3000 devsecops-demo
```

---

## 🔄 Pipeline de CI/CD (GitHub Actions)

El pipeline definido en `.github/workflows/` ejecuta, en cada push o pull request:

1. **SAST** – Análisis estático del código fuente con CodeQL para detectar patrones vulnerables (como el XSS incluido a propósito).
2. **Build** – Construcción de la imagen Docker multi-arquitectura (amd64/arm64) y publicación en GitHub Container Registry (GHCR).
3. **DAST** – Escaneo dinámico de la aplicación en ejecución con OWASP ZAP Baseline.
4. **Escaneo de imagen (recomendado)** – Integración de Trivy para detectar vulnerabilidades conocidas en las dependencias y en la imagen base.

Puedes consultar el resultado de cada ejecución en la pestaña [**Actions**](https://github.com/rafasgomez/devsecops-demo/actions) del repositorio.

---

## ⚠️ Vulnerabilidad intencionada

Este proyecto contiene una vulnerabilidad **XSS reflejado** de forma deliberada, con fines educativos y de demostración. **No debe desplegarse en un entorno de producción ni exponerse públicamente sin remediar dicha vulnerabilidad.**

El objetivo es servir como caso de prueba para las herramientas de SAST/DAST integradas en el pipeline.

---

## 🧩 Próximas mejoras

- [ ] Integrar Trivy en el pipeline para el escaneo de la imagen final.
- [ ] Añadir gestión de secretos (GitHub Secrets / Vault).
- [ ] Incorporar pruebas automatizadas (unitarias/integración).
- [ ] Firma de imágenes (Cosign / Sigstore).

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si quieres proponer una mejora:

1. Haz un fork del repositorio.
2. Crea una rama para tu cambio (`git checkout -b feature/mi-mejora`).
3. Haz commit de tus cambios y abre un Pull Request.

---

## 📄 Licencia

Este proyecto se distribuye con fines educativos/demostrativos. Añade aquí la licencia que prefieras (por ejemplo, [MIT](https://opensource.org/licenses/MIT)) si vas a publicarlo abiertamente.

---

## ✍️ Autor

**Rafael Gómez** – [@rafasgomez](https://github.com/rafasgomez)
