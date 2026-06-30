## ESPECIFICACIONES

En el desarrollo de esta aplicación web usaremos las siguientes tecnologías:

- Uso de Sass para los estilos.

- Uso de mediaqueries para que el diseño sea adaptable al dispositivo

- Uso de React para la estructuración en componentes de la aplicación

- Desarrollo usando la estrategia Mobile First

- Uso de git para el control de versiones del proyecto, con ramas y pull-requests para revisar los cambios de las compañeras

## FUNCIONAMIENTO

La tarjeta del proyecto deberá tener los siguientes campos (entre paréntesis el nombre del campo a usar):

- Nombre del proyecto (name)

- Slogan del proyecto (slogan)

- Tecnologías (technologies)

- Repo (repo)

- Demo (demo)

- Descripción (desc)

- Nombre de la autora (autor)

- Trabajo de la autora (job)

- Foto del autora (image)

- Foto del proyecto ( photo)

Respecto a la interacción con la web:

- Los campos deberán tener restricciones para su formato indicado.
- Las modificaciones que hacemos en el formulario (diseño y contenido), aparecen automáticamente en la vista previa de la tarjeta del proyecto.
- Toda la información del formulario debe almacenarse en localStorage, de forma que al recargar la página siga disponible.
- Al hacer clic en el botón de "Crear Tarjeta" enviaremos el formulario (submit) a un API que devolverá la URL de una web con la tarjeta de visita con la información rellena
- Mostraremos esta URL para que el usuario verifique si la tarjeta está bien definida.

## DISEÑO

El diseño lo podéis inspeccionar en este proyecto de [zeplin](https://scene.zeplin.io/project/63ff697548616a52a72db81d). En este diseño debéis tener en cuenta:

- El diseño de la web puede ser adaptado por cada equipo, asi que podéis ser tan creativas como quieran.
- Dentro del Figma encontrarán el diseño para móvil y el desktop/tablet. Las pantallas de desktop/tablet son las mismas.
- Las pantallas dentro del Figma son tanto para el proyecto del módulo 3 y el módulo 4, por lo que no es necesario que diseñen todas las pantallas para este módulo.
- Para el módulo 3 es imprescindible que realicéis la vista para añadir proyectos proyectos-molones-add-table-desktop .
- No esta maquetada una página de inicio que luego te lleve a la página del formulario para crear un proyecto, pero sois libres de crearla si queréis.

## PLANIFICACIÓN TÉCNICA

1. Presentación y planning del proyecto
   Crear el tablero de tareas globales, establecer los working agreements, organizar el trabajo y planificar cuando y como van a realizar las tareas.

Crear un repositorio en Github con un template de React para comenzar a trabajar.

Crea el HTML y CSS del proyecto, crea el componente App.js y los estilos correspondientes.

Para la maquetación os proporcionamos un repositorio con el html y css base que podéis utilizar y adaptar a vuestro proyecto.

Recuerda que la maquetación del proyecto es libre, cada equipo puede personalizar su proyecto como considere.

2. Eventos y estado
   Piensa cuales son las variables de estado que necesitas para gestionar la aplicación y créalas.

Trabajar con objetos, convertir las variables de estado en una única variable de estado que almacene un objeto.

Crea las funciones manejadoras de los eventos para cuando cambian los valores de los inputs del formulario de crear la tarjeta de proyecto.

Muestra los valores que escribe la usuaria en la tarjeta de previsualización.

3. Componentes y props
   Crea la estructura de componentes para tu aplicación.

4. Lifting
   Usa props y lifting cada vez que necesites que tus componentes se comuniquen.

5. Fetch y local storage
   Haz el fetch al API, específicamente al endpoint https://api-pw.dev.adalab.es/api/projectCard para crear la tarjeta de previsualización de la tarjeta Recuerda mostrar la url de tarjeta de previsualización del proyecto.

Despliega la página en GitHub Pages.

6. Router
   Se creativo y crea una página de inicio de tu aplicación que te lleve a la página de crear el proyecto.

Trabajo en equipo para completar tareas y resolver dudas.

Guarda los datos que escriba la usuaria en el localStorage.

7. Formularios
   Optimiza los el código y crea una única función para controlar todos los cambios que se producen en el formulario.

Realizar validaciones de datos del formulario: campos obligatorios, email, etc.
