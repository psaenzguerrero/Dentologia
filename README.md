# Dentología – Clínica Dental (React + Vite + Tailwind)

Sitio web responsive para una clínica dental, con navegación SPA, animaciones y una paleta clara y agradable.

## Características principales

- **Páginas**: Inicio, Tratamientos, Sobre nosotros, Contacto.
- **Navegación**: `react-router-dom` con Navbar sticky y menú hamburguesa en móvil.
- **Estilo**: Tailwind CSS con paleta extendida (`brand`, `accent`) en `tailwind.config.js`.
- **Animaciones**: Transiciones fluidas con Framer Motion.
- **Accesible y responsive**: Tipografías, colores y componentes pensados para distintas pantallas.

## Demo local

1) Instalar dependencias
```bash
npm install
```
2) Entorno de desarrollo
```bash
npm run dev
```
Abrir la URL que muestre Vite (por defecto: http://localhost:5173).

3) Build de producción y previsualización
```bash
npm run build
npm run preview
```

## Estructura del proyecto

- `src/components`
  - `Navbar.jsx`: barra de navegación con menú hamburguesa.
  - `Footer.jsx`: información de clínica, redes, newsletter y legales.
  - `AnimatedButton.jsx`: botón con microinteracciones.
- `src/pages`
  - `Home.jsx`: héroe, ventajas y CTA.
  - `Treatments.jsx`: grid de tratamientos.
  - `About.jsx`: información de la clínica y valores.
  - `Contact.jsx`: formulario básico y datos de contacto.
- `index.html`: entrada Vite.
- `tailwind.config.js`: contenido escaneado y paleta extendida.
- `postcss.config.js`: configuración PostCSS.
- `vite.config.js`: plugin React.

## Stack técnico

- React 18 + Vite 5
- React Router DOM
- Tailwind CSS + PostCSS + Autoprefixer
- Framer Motion

## Personalización rápida

- **Colores**: editar `theme.extend.colors.brand` y `accent` en `tailwind.config.js`.
- **Tipografía**: añadir fuentes en `index.html` o clases Tailwind.
- **Contenido de clínica**: actualizar textos, teléfono, email y dirección en `Footer.jsx` y `Contact.jsx`.
- **Tratamientos**: modificar el array en `src/pages/Treatments.jsx`.

## Accesibilidad/UX

- Componentes interactivos con `aria-label` en iconos y control del menú.
- Contraste de colores sobre fondo claro.
- Estados de foco mediante clases Tailwind (`focus:ring`).

## SEO básico (sugerencias)

- Completar `<meta name="description">` en `index.html`.
- Añadir favicon y manifest.
- Opcional: sitemap y robots.txt en despliegue.

## Despliegue

- Generar build: `npm run build` (salida en `dist/`).

### Netlify

Opciones:

- Arrastrar y soltar la carpeta `dist/` en la UI de Netlify.
- O conectar el repositorio y configurar:
  - Build command: `npm run build`
  - Publish directory: `dist`
  - Node version: 18+

Para SPA (React Router), activa redirección a `index.html` creando `_redirects` en `dist` o en la configuración de Netlify:

```
/*    /index.html   200
```

### Vercel

- Importar el repositorio en Vercel.
- Framework Preset: Vite.
- Build Command: `npm run build`
- Output Directory: `dist`
- Node 18+

Vercel maneja las rutas SPA automáticamente. Si se requiere, se puede añadir `vercel.json` para personalizaciones.

## Notas del editor (Tailwind)

Si el linter CSS marca `@tailwind`/`@apply` como desconocidos, es normal si no tiene soporte Tailwind. En tiempo de compilación funciona. Recomendado instalar "Tailwind CSS IntelliSense".

## Licencia

Este proyecto se entrega como base para personalización de la clínica. Añade aquí la licencia/propiedad que corresponda.
