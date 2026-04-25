import { useState, useCallback } from 'react';
import {translateText,getSupportedLanguages,} from './translatorService.js';
import {validateTextToTranslate,validateLanguages,processTranslationResult,} from './translatorLogic.js';

function useTranslator() {
  const [translatedText, setTranslatedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [translationHistory, setTranslationHistory] = useState([]);

  const translate = useCallback(
    async (text, targetLanguage, sourceLanguage = 'auto') => {
      setLoading(true);
      setError(null);

      try {
        validateTextToTranslate(text);
        validateLanguages(sourceLanguage, targetLanguage);

        const result = await translateText(text, targetLanguage, sourceLanguage);
        setTranslatedText(result);

        const translationEntry = processTranslationResult(
          text,
          result,
          sourceLanguage,
          targetLanguage
        );
        setTranslationHistory((prev) => [translationEntry, ...prev]);

        return result;
      } catch (err) {
        setError(err.message);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return {
    translatedText,
    loading,
    error,
    translate,
    translationHistory,
    clearHistory: () => setTranslationHistory([]),
    reset: () => {
      setTranslatedText('');
      setError(null);
    },
  };
}

function useSupportedLanguages() {
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchLanguages = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await getSupportedLanguages();
      setLanguages(result);
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {languages,loading,error,fetchLanguages,};
}

export { useTranslator, useSupportedLanguages };