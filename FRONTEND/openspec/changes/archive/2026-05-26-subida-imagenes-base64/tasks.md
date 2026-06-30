# Tareas: Implementación de Subida de Imágenes

## Preparación
- [x] Crear carpeta `src/hooks`.
- [x] Crear el archivo `src/hooks/useFileReader.js`.

## Lógica del Hook
- [x] Implementar validación de tamaño (1MB).
- [x] Implementar `FileReader` para convertir a Base64.
- [x] Manejar estado de error para feedback visual.

## Integración
- [x] En `App.jsx`, crear función `updateData` para pasarla como callback.
- [x] En `Form.jsx`, importar el hook y conectarlo a los inputs de archivo.
- [x] Asegurarse de que los inputs tengan los `name="image"` y `name="photo"` correctos.

## Persistencia y Feedback
- [x] Implementar `useEffect` en `App.jsx` para guardar en `localStorage`.
- [x] Implementar lógica de carga inicial desde `localStorage` en el `useState` de `App`.
- [x] Mostrar mensaje de error en el formulario si la imagen supera el tamaño.

## Validación
- [x] Probar subida de imagen de autor.
- [x] Probar subida de imagen de proyecto.
- [x] Verificar que al recargar la página las imágenes persisten.
- [x] Verificar que una imagen de >1MB muestra error y no se sube.
