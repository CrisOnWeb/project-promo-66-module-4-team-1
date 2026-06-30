const API_URL = 'https://api-pw.dev.adalab.es/api/projectCard';

/**
 * Crea una tarjeta de proyecto enviando los datos a la API.
 * @param {Object} data - Datos del proyecto (name, slogan, technologies, repo, demo, desc, autor, job, image, photo)
 * @returns {Promise<Object>} - Respuesta de la API con { id, url, success, error }
 */
const createProject = async (data) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error al crear el proyecto en la API:', error);
    return { success: false, error: 'Error de red o servidor' };
  }
};

/**
 * Obtiene los detalles de un proyecto por su ID.
 * @param {string} id - ID del proyecto
 * @returns {Promise<Object>} - Datos del proyecto
 */
const getProjectById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    
    // Si la respuesta no es correcta (404, 500, etc)
    if (!response.ok) {
      return { success: false, error: `Error ${response.status}: Proyecto no encontrado` };
    }

    // Comprobamos si el contenido es JSON
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const result = await response.json();
      return { ...result, success: true };
    } else {
      // Si no es JSON (es HTML), devolvemos éxito para que se pueda abrir la URL
      return { success: true, isHtml: true };
    }
  } catch (error) {
    console.error(`Error al obtener el proyecto ${id}:`, error);
    return { success: false, error: 'Error de red o el proyecto ya no existe' };
  }
};

const apiService = {
  createProject,
  getProjectById,
};

export default apiService;
