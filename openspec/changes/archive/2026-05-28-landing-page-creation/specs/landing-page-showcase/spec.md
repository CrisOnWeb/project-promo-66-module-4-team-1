## Requisitos AÑADIDOS

### Requisito: Mostrar Página de Inicio
El sistema DEBERÁ proporcionar una Página de Inicio como punto de entrada principal, mostrando una sección de bienvenida (Hero) y una lista de proyectos existentes.

#### Escenario: Carga de la Página de Inicio
- **CUANDO** el usuario visita la URL raíz de la aplicación
- **ENTONCES** el sistema DEBERÁ mostrar la Página de Inicio con una sección Hero y una galería de proyectos guardados.

### Requisito: Visualización de la Galería de Proyectos
El sistema DEBERÁ mostrar todos los proyectos almacenados en LocalStorage dentro de una sección de galería en la Página de Inicio.

#### Escenario: Galería con proyectos
- **CUANDO** hay proyectos guardados en LocalStorage
- **ENTONCES** el sistema DEBERÁ mostrar cada proyecto como una `Card` dentro de la galería.

#### Escenario: Galería sin proyectos
- **CUANDO** no hay proyectos guardados en LocalStorage
- **ENTONCES** el sistema DEBERÁ mostrar un mensaje indicando que aún no se han creado proyectos.

### Requisito: Navegación a la Creación de Proyectos
El sistema DEBERÁ permitir al usuario navegar desde la Página de Inicio a la página de Creación de Proyectos.

#### Escenario: Clic en "Nuevo Proyecto"
- **CUANDO** el usuario hace clic en el botón para crear un nuevo proyecto en la Página de Inicio
- **ENTONCES** el sistema DEBERÁ navegar a la vista de Creación de Proyectos.

## Requisitos MODIFICADOS

### Requisito: Integración en la Arquitectura de Componentes
El sistema DEBERÁ integrar los componentes `LandingPage` y `ProjectList` en la arquitectura de componentes existente.

#### Escenario: Verificar arquitectura
- **CUANDO** se inspecciona el árbol de componentes
- **ENTONCES** `LandingPage` DEBERÁ ser un componente de nivel superior, y `ProjectList` DEBERÁ ser un hijo de `LandingPage` que reutiliza el componente `Card`.
