import apiClient from '../../services/apiClient.js';
import { handleError } from '../../utils/errorHandler.js';
import { LANGUAGES, LANGUAGE_LABELS } from '../../constans/config.js';

const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const API_HOST = import.meta.env.VITE_RAPIDAPI_HOST;

const headers = {
  'x-rapidapi-key': API_KEY,
  'x-rapidapi-host': API_HOST,
};

function checkApiConfig() {
  if (!API_KEY) throw new Error('API Key de RapidAPI no configurada en .env');
  if (!API_HOST) throw new Error('API Host de RapidAPI no configurado en .env');
}

async function translateText(
  text,
  targetLanguage,
  sourceLanguage = 'auto'
) {
  try {
    checkApiConfig();
    
    const body = new URLSearchParams();
    body.append('source_language', sourceLanguage);
    body.append('target_language', targetLanguage);
    body.append('text', text);

    const response = await apiClient.post(
      `https://${API_HOST}/translate`,
      body.toString(),
      {
        headers: 
        {
            ...headers,'Content-Type': 
            'application/x-www-form-urlencoded',
        },
      },
      'Translator'
    );

    if (response?.data?.translatedText) {
      return response.data.translatedText;
    }
    if (response?.translatedText) {
      return response.translatedText;
    }
    if (typeof response === 'string') {
      return response;
    }
    
    const translated = 
      response?.data?.translated || 
      response?.translated || 
      response?.translation ||
      response?.text;
    
    if (translated) {return translated;}

    throw new Error(`Respuesta inválida del Translator`);
  } catch (error) {
    handleError(error, 'translateText');
    throw error;
  }
}

async function getSupportedLanguages() {
  try {
    checkApiConfig();
    
    const commonLanguages = Object.entries(LANGUAGE_LABELS).map(([code, name]) => ({
      code,
      name,
    }));

    return commonLanguages;
  } catch (error) {
    handleError(error, 'getSupportedLanguages');
    throw error;
  }
}

export { translateText, getSupportedLanguages };