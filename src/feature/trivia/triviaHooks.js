import { useState, useCallback } from 'react';
import {getTriviaQuestions,getTriviaCategories,getRandomTriviaQuestion,} from './triviaService.js';
import { processTriviaQuestion, translateTriviaQuestion } from './triviaLogic.js';
import { translateText } from '../translator/translatorService.js';
import { FEATURES } from '../../constans/config.js';

function useTriviaQuestions() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchQuestions = useCallback(async (options = {}) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getTriviaQuestions(options);
      
      const processedQuestions = (Array.isArray(data) ? data : [data])
        .filter(q => q && typeof q === 'object')
        .map((q) => {
          try {
            return processTriviaQuestion(q);
          } catch {
            return null;
          }
        })
        .filter(q => q);
      
      if (processedQuestions.length === 0) {
        throw new Error('No se obtuvieron preguntas válidas');
      }
      
      let finalQuestions = processedQuestions;
      
      if (FEATURES.ENABLE_AUTO_TRANSLATE) {
        finalQuestions = await Promise.all(
          processedQuestions.map((q) =>
            translateTriviaQuestion(q, (text) =>
              translateText(text, 'es', 'en')
            )
          )
        );
      }
      
      setQuestions(finalQuestions);
      return finalQuestions;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {questions,loading,error,fetchQuestions, reset: () => {setQuestions([]);setError(null);},
  };
}

function useTriviaCategoriesHook() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCategories = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getTriviaCategories();
      setCategories(data);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {categories,loading,error,fetchCategories,};
}

function useRandomTriviaQuestion() {
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRandomQuestion = useCallback(async () => {
    setLoading(true); 
    setError(null);
    try {
      const data = await getRandomTriviaQuestion();
      const questionData = Array.isArray(data) ? data[0] : data;
      const processedQuestion = processTriviaQuestion(questionData);
      setQuestion(processedQuestion);
      return processedQuestion;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {question,loading,error,fetchRandomQuestion, reset: () => setQuestion(null),};
}

export { useTriviaQuestions, useTriviaCategoriesHook, useRandomTriviaQuestion };
