# Propuesta: Persistencia de Múltiples Proyectos con Expiración

## Problema
Actualmente la aplicación solo permite persistir un único proyecto en `localStorage`. Además, no existe un mecanismo para limpiar los datos antiguos, lo que podría llevar a que la usuaria vea datos obsoletos indefinidamente.

## Solución
Refactorizar la persistencia para:
1. Soportar un historial de múltiples proyectos (array de objetos).
2. Centralizar la lógica en un servicio independiente (`src/services/localStorage.js`).
3. Implementar una expiración automática de 24 horas basada en el último guardado.
4. Mejorar el feedback de la UI con un mensaje de éxito y reseteo de formulario.

## Alcance
- Creación del servicio de almacenamiento.
- Modificación de `App.jsx` para integrar el nuevo servicio.
- Implementación de la lógica de "Guardar" en el formulario (limpieza de estado y mensaje de éxito).
- El sistema de expiración afectará a todo el bloque de datos: si pasan 24h sin actividad de guardado, se limpia el historial.
