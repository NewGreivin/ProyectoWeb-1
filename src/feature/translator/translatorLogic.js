import { LANGUAGES, LANGUAGE_LABELS } from '../../constans/config.js';

function validateTextToTranslate(text, maxLength = 500) {
  if (!text) {
    throw new Error('El texto no puede estar vacío');
  }

  if (text.trim().length === 0) {
    throw new Error('El texto no puede contener solo espacios');
  }

  if (text.length > maxLength) {
    throw new Error(`El texto no puede exceder ${maxLength} caracteres`);
  }

  return true;
}

function validateLanguages(sourceLanguage, targetLanguage) {
  if (sourceLanguage === targetLanguage && sourceLanguage !== 'auto') {
    throw new Error('El idioma de origen y destino no pueden ser iguales');
  }
  return true;
}

function getLanguageLabel(languageCode) {
  return LANGUAGE_LABELS[languageCode] || languageCode;
}

function processTranslationResult(originalText, translatedText, sourceLanguage, targetLanguage) {
  return {
    originalText: originalText || '',
    translatedText: translatedText || '',
    sourceLanguage,
    targetLanguage,
    timestamp: new Date().toISOString(),
  };
}

export { validateTextToTranslate, validateLanguages, getLanguageLabel, processTranslationResult };
