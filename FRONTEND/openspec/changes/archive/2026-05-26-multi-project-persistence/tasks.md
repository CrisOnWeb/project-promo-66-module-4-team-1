# Tareas: Persistencia Múltiple y Expiración

## Servicio de Almacenamiento
- [x] Crear carpeta `src/services`.
- [x] Crear `src/services/localStorage.js`.
- [x] Implementar función `get` con lógica de expiración de 24h.
- [x] Implementar función `set` (o `save`) que actualice el timestamp y el array.

## Refactorización en App.jsx
- [x] Crear una constante `initialData` para facilitar el reseteo.
- [x] Modificar el estado inicial de `data` para que empiece vacío (no cargue del storage al inicio).
- [x] Crear estado `projects` que se sincronice con el service al montar el componente.
- [x] Implementar la función `handleSave` que use el service y resetee el formulario.

## UI y Feedback
- [x] Añadir estado `showSuccess` en `App.jsx`.
- [x] Modificar `Form.jsx` para que el botón "Guardar" ejecute la acción de guardado real (no solo preventDefault).
- [x] Mostrar el mensaje "¡Proyecto guardado con éxito!" en la UI.
- [x] Implementar un `setTimeout` para ocultar el mensaje de éxito tras 3-5 segundos.

## Validación
- [x] Verificar que al guardar, el formulario se limpia.
- [x] Verificar que el mensaje de éxito aparece y desaparece.
- [x] (Simulación) Forzar un timestamp antiguo en el storage y comprobar que se borra al recargar.
