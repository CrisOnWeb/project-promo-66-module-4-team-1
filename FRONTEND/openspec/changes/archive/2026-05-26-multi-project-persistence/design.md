# Diseño: Servicio de Persistencia con Expiración

## Estructura de Datos
Para manejar la expiración, los datos se guardarán bajo una única clave `coolProjects` con el siguiente formato:

```json
{
  "lastUpdated": 1716744000000,
  "projects": [
    { "name": "Proyecto A", ... },
    { "name": "Proyecto B", ... }
  ]
}
```

## Lógica del Servicio (`localStorage.js`)

### Método `get()`
1. Recupera el objeto del `localStorage`.
2. Si no existe, retorna un array vacío `[]`.
3. Compara `Date.now()` con `lastUpdated`.
4. Si la diferencia es mayor a 24 horas (86,400,000 ms), elimina la clave y retorna `[]`.
5. Si es válido, retorna el array `projects`.

### Método `save(newProject)`
1. Obtiene los proyectos actuales (usando `get()`).
2. Añade `newProject` al final del array.
3. Actualiza `lastUpdated` con el timestamp actual.
4. Guarda el objeto completo.

## Flujo en la UI (App.jsx)

### Gestión de Estado
Mantendremos dos estados separados:
1. `data`: Los datos del proyecto que se está editando actualmente (el "borrador").
2. `projects`: El historial completo recuperado del service.
3. `successMessage`: Estado booleano o string para el feedback.

### Proceso de Guardado
Al hacer clic en "Guardar":
1. Se llama al service para añadir `data` al historial.
2. Se resetea `data` a los valores iniciales.
3. Se activa el mensaje de éxito.
4. (Opcional) El mensaje desaparece tras unos segundos.

## Diagrama de Componentes

```ascii
      ┌───────────────┐
      │    App.jsx    │◀───────────┐
      └──────┬────────┘            │ (Llamada al guardar)
             │                     │
      ┌──────┴────────┐      ┌─────┴────────┐
      │   Preview     │      │     Form     │
      └───────────────┘      └──────────────┘
             │                     │
             │               ┌─────▼────────┐
             │               │ Persistence  │
             └──────────────▶│   Service    │
                             └──────────────┘
```
