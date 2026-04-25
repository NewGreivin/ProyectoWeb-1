class ApiError extends Error {
  constructor(message, status = null, details = null) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.details = details;
  }
}

function validateResponse(response, context = 'API') {
  if (!response.ok) {
    throw new ApiError(
      `Error ${response.status}: No se pudo conectar a ${context}`,
      response.status
    );
  }
}

function validateData(data, path, context = 'API') {
  const keys = path.split('.');
  let value = data;
  
  for (const key of keys) {
    value = value?.[key];
    if (value === undefined) {
      throw new ApiError(`Respuesta inválida de ${context}: falta ${path}`, null, data);
    }
  }
  
  return value;
}

function handleError(error, functionName = 'API Call') {
  if (error instanceof ApiError) {
    console.error(`${functionName}:`, error.message);
  } else if (error instanceof TypeError) {
    console.error(`${functionName}: Error de conexión (¿sin internet?)`);
  } else {
    console.error(`${functionName}:`, error.message);
  }
}

async function fetchAPI(url, options = {}, context = 'API') {
  try {
    const response = await fetch(url, options);
    validateResponse(response, context);
    return await response.json();
  } catch (error) {
    if (error instanceof ApiError) throw error;
    throw new ApiError(`Error en ${context}: ${error.message}`);
  }
}

export { ApiError, validateResponse, validateData, handleError, fetchAPI };