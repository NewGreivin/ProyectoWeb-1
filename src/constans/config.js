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

export const LANGUAGES = {
  ES: 'es',
  EN: 'en',
  FR: 'fr',
  DE: 'de',
  PT: 'pt',
  IT: 'it',
  JA: 'ja',
  ZH: 'zh',
  RU: 'ru',
  KO: 'ko',
  AR: 'ar',
  NL: 'nl',
  PL: 'pl',
  TR: 'tr',
  VI: 'vi',
};

export const LANGUAGE_LABELS = {
  es: 'Español',
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português',
  it: 'Italiano',
  ja: '日本語',
  zh: '中文',
  ru: 'Русский',
  ko: '한국어',
  ar: 'العربية',
  nl: 'Nederlands',
  pl: 'Polski',
  tr: 'Türkçe',
  vi: 'Tiếng Việt',
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
