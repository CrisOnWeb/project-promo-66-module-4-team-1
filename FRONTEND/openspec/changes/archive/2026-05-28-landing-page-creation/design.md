## Contexto

La aplicación cuenta actualmente con un componente `CreatePage` donde los usuarios pueden crear tarjetas de proyecto y guardarlas en `LocalStorage`. Sin embargo, no hay forma de ver la colección de proyectos guardados dentro de la aplicación. Se requiere una `LandingPage` para mostrar estos proyectos y proporcionar un mejor punto de entrada.

## Objetivos / No-Objetivos

**Objetivos:**
- Implementar un componente `LandingPage`.
- Implementar un componente `ProjectList` que itere sobre los proyectos de `LocalStorage`.
- Reutilizar los componentes `Card`, `Header`, `Button` y `Heading`.
- **Importante**: El componente `Heading` se utilizará para construir la sección Hero de la `LandingPage`.
- Implementar una navegación sencilla basada en estados para cambiar entre `LandingPage` y `CreatePage`.

**No-Objetivos:**
- Implementar un backend para el almacenamiento de proyectos (permanecer en `LocalStorage`).
- Navegación compleja con librerías externas si no es necesario.

## Decisiones

### 1. Navegación basada en estados en App.jsx
- **Decisión**: Utilizar el estado de React en `App.jsx` para alternar entre la vista de 'landing' y 'create'.
- **Justificación**: Mantiene el cambio quirúrgico y evita introducir nuevas dependencias pesadas si no son necesarias para este requisito simple.
- **Alternativas**: Usar `react-router-dom` sería mejor para una aplicación en crecimiento, pero podría estar fuera del alcance si el proyecto aún no lo utiliza.

### 2. Componente de Lista de Proyectos
- **Decisión**: Crear un componente `ProjectList.jsx` que reciba el array de `projects` como propiedad.
- **Justificación**: Separación de responsabilidades. `LandingPage` maneja el diseño general, mientras que `ProjectList` maneja el mapeo de los proyectos.

### 3. Reutilización de Heading como Hero
- **Decisión**: Utilizar el componente `Heading` para el título principal dentro de la sección Hero de la `LandingPage`.
- **Justificación**: Cumplir con la instrucción del usuario de reutilizar `Heading` como elemento central del Hero. El `Header` se mantendrá como elemento común en la parte superior definido en `App.jsx`.

## Riesgos / Compensaciones

- **[Riesgo]** Los datos de LocalStorage podrían estar vacíos. → **[Mitigación]** Manejar estados vacíos en `ProjectList` con un mensaje amigable.
- **[Riesgo]** Cambios bruscos en el diseño al cambiar de página. → **[Mitigación]** Asegurar anchos de contenedor consistentes y estilos compartidos.
