## Por qué

La aplicación actualmente carece de una página de inicio para mostrar los proyectos creados. Los usuarios necesitan un centro principal donde puedan ver una colección de proyectos guardados en su sesión local, lo que proporciona una mejor experiencia de usuario y una forma de navegar de vuelta a la herramienta de creación de proyectos.

## Qué cambia

- **Nueva Página de Inicio**: Crear una página de inicio dedicada (`LandingPage`) que sirva como punto de entrada o escaparate para los proyectos.
- **Galería de Proyectos**: Implementar un componente (por ejemplo, `ProjectList` o `ProjectGallery`) para mostrar todos los proyectos recuperados de `LocalStorage`.
- **Componentes Reutilizables**: Reutilizar el componente `Card` para la visualización individual de proyectos, el componente `Heading` para la sección Hero y `Button` para la navegación. El `Header` se mantiene como componente común ya presente en `App.jsx`.
- **Navegación**: Actualizar el flujo de la aplicación para permitir a los usuarios moverse entre la página de inicio y la página de creación.

## Capacidades

### Nuevas Capacidades
- `landing-page-showcase`: Capacidad para mostrar una colección de proyectos guardados en LocalStorage en una página de inicio dedicada.

### Capacidades Modificadas
- `component-architecture`: Actualizada para incluir la nueva LandingPage y sus subcomponentes en la arquitectura general.

## Impacto

- **App.jsx**: Necesitará manejar el estado de navegación para alternar entre la Página de Inicio y la Página de Creación.
- **Componentes**: Nuevos componentes `LandingPage` y `ProjectList`.
- **Estilos**: Nuevo SCSS para el diseño de la página de inicio.
- **LocalStorage**: Lógica de recuperación de datos para la galería.
