# Propuesta: Gestión de Imágenes con Base64 y Limite de Tamaño

## Problema
Actualmente la aplicación no permite subir imágenes. Además, existe el requisito de persistir los datos en `localStorage`, lo que impone una restricción técnica de espacio. Sin un control de tamaño, imágenes pesadas podrían corromper el almacenamiento local o causar lentitud.

## Solución
Implementar un sistema de subida de archivos que:
1. Convierta imágenes a Base64 para facilitar su almacenamiento y previsualización.
2. Valide que el tamaño sea inferior a 1MB.
3. Se integre con el estado global `data` en `App.jsx`.

## Alcance
- Creación de un Custom Hook `useImageReader` para encapsular la lógica.
- Modificación de `Form.jsx` para integrar los inputs de tipo archivo.
- Actualización de `App.jsx` para manejar la actualización del estado desde el hook.
- Implementación de feedback básico (error si excede el tamaño).
