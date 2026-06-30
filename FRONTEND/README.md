# Proyectos Molones

Aplicación web desarrollada con React que permite crear tarjetas de presentación para proyectos, previsualizarlas en tiempo real, guardarlas temporalmente en el navegador y generar una tarjeta pública usando la API de Adalab. Proyecto grupal realizado durante la evaluación del Módulo 3 de React en Adalab.

## Demo

[Ver proyecto desplegado](https://eesser98.github.io/project-promo-66-module-3-team-1/)

## Funcionalidades

- Crear una tarjeta de proyecto desde un formulario.
- Previsualizar la tarjeta en tiempo real.
- Subir una imagen del proyecto y una foto de la autora.
- Guardar los proyectos temporalmente en `localStorage`.
- Mostrar un listado con los proyectos creados.
- Generar una tarjeta pública mediante la API de Adalab.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- Sass / SCSS
- API REST
- LocalStorage
- Git y GitHub

## Estructura del proyecto

```text
src/
├── components/      # Componentes principales de la aplicación
├── hooks/           # Custom hooks
├── services/        # Lógica de API y localStorage
├── styles/          # Estilos SCSS
├── App.jsx
└── main.jsx
```

## Componentes principales

- `LandingPage`: muestra los proyectos creados.
- `CreatePage`: permite crear un nuevo proyecto.
- `Form`: recoge la información del proyecto y de la autora.
- `Preview`: muestra la previsualización de la tarjeta.
- `Card`: representa visualmente cada proyecto.

## Instalación y uso

Para ejecutar el proyecto en local:

```bash
npm install
npm run dev
```

Después, abre en el navegador la URL que indique la terminal.

## API

El proyecto utiliza la API de Adalab para crear tarjetas de proyecto:

```text
https://api-pw.dev.adalab.es/api/projectCard
```

Cuando se guarda un proyecto correctamente, la API devuelve una URL pública para ver la tarjeta generada.
