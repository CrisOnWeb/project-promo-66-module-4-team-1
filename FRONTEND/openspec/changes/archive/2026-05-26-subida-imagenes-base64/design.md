# Diseño: Flujo de Imágenes y Validación

## Comparativa: ¿Service o Custom Hook?

| Criterio | Service (JS puro) | Custom Hook (React) | Ganador |
| :--- | :--- | :--- | :--- |
| **Acceso a Estado** | Difícil (requiere pasar setters) | Directo (useContext/useState) | Hook |
| **Limpieza** | Manual | Automática (useEffect) | Hook |
| **Reutilización** | Alta (fuera de React) | Alta (dentro de React) | Empate |
| **Contexto UI** | No sabe nada de la UI | Puede manejar estados de carga/error | Hook |

**Decisión:** Usaremos un **Custom Hook** (`useFileReader.js`). Es la opción más "React-friendly" porque nos permite devolver no solo la función de lectura, sino también estados de error o carga que la UI puede usar para dar feedback a la usuaria.

## Arquitectura de la Solución

### 1. El Hook: `useFileReader`
Ubicación: `src/hooks/useFileReader.js` (a crear)

```javascript
// Pseudocódigo del Hook
const useFileReader = (callback) => {
  const [error, setError] = useState(null);
  const MAX_SIZE = 1024 * 1024; // 1MB

  const handleFile = (ev) => {
    const file = ev.target.files[0];
    if (file && file.size > MAX_SIZE) {
      setError('El archivo es demasiado grande (máx 1MB)');
      return;
    }
    // Lógica de FileReader...
    // callback(base64Data);
  };

  return { handleFile, error };
};
```

### 2. Integración en el Formulario
Modificaremos `Form.jsx` para que use el hook dos veces (una para cada botón) o una función genérica que identifique el campo mediante el `name` del input.

```ascii
[ Botón Autora ] ───▶ useFileReader(data.photo) ───┐
                                                   ├─▶ setData en App.jsx
[ Botón Proyecto] ──▶ useFileReader(data.image) ───┘
```

### 3. Persistencia
En `App.jsx`, añadiremos un `useEffect` que escuche cambios en `data` y lo guarde en `localStorage`.

## Diagrama de Secuencia

1. **Usuaria** selecciona imagen de 800KB.
2. **Input File** dispara `onChange`.
3. **Hook** valida: `800KB < 1MB` ✅.
4. **FileReader** convierte a Base64.
5. **Callback** actualiza el estado `data` en `App.jsx`.
6. **useEffect** guarda el nuevo `data` en `localStorage`.
7. **Card** y **Preview** se actualizan automáticamente al recibir el nuevo string Base64 por props.
