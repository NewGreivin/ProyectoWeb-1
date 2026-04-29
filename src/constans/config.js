export const API_CONFIG = {
  TRIVIA: {
    BASE_URL: import.meta.env.VITE_TRIVIA_BASE_URL || 'https://the-trivia-api.com/v2',
    ENDPOINTS: {
      QUESTIONS: '/questions',
      CATEGORIES: '/categories',
    },
  },

  TRANSLATOR: {
    HOST: import.meta.env.VITE_RAPIDAPI_HOST || 'text-translator2.p.rapidapi.com',
    KEY: import.meta.env.VITE_RAPIDAPI_KEY,
    ENDPOINTS: {
      TRANSLATE: '/translate',
      LANGUAGES: '/languages',
    },
  },
};

export const APP_LIMITS = {
  TRIVIA_QUESTIONS_LIMIT: 10,
  TRIVIA_CATEGORIES_LIMIT: 50,
  TRANSLATOR_MAX_TEXT_LENGTH: 500,
  API_TIMEOUT_MS: 10000,
};

export const FEATURES = {
  ENABLE_AUTO_TRANSLATE: false,
};

export const LANGUAGES = {
  ES: 'es',
  EN: 'en',
};

export const LANGUAGE_LABELS = {
  es: 'Español',
  en: 'English',
};

export const TRIVIA_DIFFICULTIES = {
  EASY: 'easy',
  MEDIUM: 'medium',
  HARD: 'hard',
};

export const DIFFICULTY_LABELS = {
  easy: 'Fácil',
  medium: 'Medio',
  hard: 'Difícil',
};

export const DIFFICULTY_TIMES = {
  easy: 45,
  medium: 35,
  hard: 20,
};

export const TRIVIA_CATEGORIES = {
  ARTS_LITERATURE: {
    es: 'Artes y Literatura',
    code: 'arts_and_literature',
  },
  FILM_TV: {
    es: 'Películas y TV',
    code: 'film_and_tv',
  },
  FOOD_DRINK: {
    es: 'Comida y Bebida',
    code: 'food_and_drink',
  },
  GENERAL_KNOWLEDGE: {
    es: 'Conocimiento General',
    code: 'general_knowledge',
  },
  GEOGRAPHY: {
    es: 'Geografía',
    code: 'geography',
  },
  HISTORY: {
    es: 'Historia',
    code: 'history',
  },
  MUSIC: {
    es: 'Música',
    code: 'music',
  },
  SCIENCE: {
    es: 'Ciencia',
    code: 'science',
  },
  SOCIETY_CULTURE: {
    es: 'Sociedad y Cultura',
    code: 'society_and_culture',
  },
  SPORT_LEISURE: {
    es: 'Deporte y Ocio',
    code: 'sport_and_leisure',
  },
};
