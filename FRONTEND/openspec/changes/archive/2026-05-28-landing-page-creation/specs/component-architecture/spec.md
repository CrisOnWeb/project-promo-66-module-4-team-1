## Requisitos MODIFICADOS

### Requisito: Arquitectura de Componentes Modular
La aplicación DEBERÁ ser refactorizada en una arquitectura modular usando componentes de React. Cada sección principal de la interfaz (Header, Footer, LandingPage, CreatePage, Form, Preview) DEBERÁ ser su propio componente funcional.

#### Escenario: Estructura de componentes exitosa
- **CUANDO** se inspecciona el proyecto
- **ENTONCES** existen archivos separados para Header, Footer, LandingPage, CreatePage, Form, Preview y Card en `src/components/`.

### Requisito: Elementos de UI Reutilizables (Componentes Atómicos)
La aplicación DEBERÁ utilizar componentes pequeños y reutilizables para elementos comunes de la interfaz, como Botones y Encabezados (Heading), para asegurar la consistencia.

#### Escenario: Reutilización de botones
- **CUANDO** se necesita un botón en diferentes partes de la aplicación (por ejemplo, Formulario, Landing)
- **ENTONCES** se usa el mismo componente `Button` con las propiedades adecuadas.
