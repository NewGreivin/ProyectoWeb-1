import apiClient from '../../services/apiClient.js';
import { handleError } from '../../utils/errorHandler.js';

const BASE_URL = import.meta.env.VITE_TRIVIA_BASE_URL || 'https://the-trivia-api.com/v2';

async function getTriviaQuestions(options = {}) {
  try {
    const { limit = 10, category = '', difficulty = '' } = options;
    let url = `${BASE_URL}/questions?limit=${limit}`;
    if (category) url += `&categories=${category}`;
    if (difficulty) url += `&difficulties=${difficulty}`;
    
    return await apiClient.get(url, {}, 'Trivia Questions');
  } catch (error) {
    handleError(error, 'getTriviaQuestions');
    throw error;
  }
}

async function getTriviaCategories() {
  try {
    return await apiClient.get(`${BASE_URL}/categories`, {}, 'Trivia Categories');
  } catch (error) {
    handleError(error, 'getTriviaCategories');
    throw error;
  }
}

async function getRandomTriviaQuestion() {
  try {
    const data = await apiClient.get(
      `${BASE_URL}/questions?limit=1`,
      {},
      'Trivia Random'
    );
    return data[0] || data;
  } catch (error) {
    handleError(error, 'getRandomTriviaQuestion');
    throw error;
  }
}

export { getTriviaQuestions, getTriviaCategories, getRandomTriviaQuestion };