import { useState } from 'react';

const useFileReader = (callback) => {
  const [error, setError] = useState(null);
  const MAX_SIZE = 1024 * 1024; // 1MB

  const handleFile = (ev) => {
    const file = ev.target.files[0];
    setError(null);

    if (file) {
      if (file.size > MAX_SIZE) {
        setError('El archivo es demasiado grande (máximo 1MB)');
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        callback(reader.result);
      };
      reader.onerror = () => {
        setError('Error al leer el archivo');
      };
      reader.readAsDataURL(file);
    }
  };

  return { handleFile, error };
};

export default useFileReader;
