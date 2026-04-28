import { TRIVIA_DIFFICULTIES, DIFFICULTY_LABELS } from '../../constans/config.js';

function validateTriviaQuestion(question) {
  if (!question || typeof question !== 'object') return false;
  const hasQuestion = !!(question.question || question.Q);
  const hasCorrectAnswer = !!(question.correct_answer || question.correctAnswer || question.answer);
  return hasQuestion && hasCorrectAnswer;
}

function shuffleAnswers(correctAnswer, incorrectAnswers) {
  const allAnswers = [correctAnswer, ...(Array.isArray(incorrectAnswers) ? incorrectAnswers : [])];
  return allAnswers.sort(() => Math.random() - 0.5);
}

function decodeHTMLEntities(text) {
  if (!text) return text;
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
}

function processTriviaQuestion(question) {
  if (!validateTriviaQuestion(question)) {
    throw new Error('Pregunta de trivia inválida');
  }

  let questionText = question.question || question.Q || '';
  
  if (typeof questionText === 'object' && questionText !== null) {
    questionText = questionText.text || questionText.title || questionText.content || '';
  }
  
  const correctAnswer = question.correct_answer || question.correctAnswer || question.answer || '';
  const incorrectAnswers = question.incorrect_answers || question.incorrectAnswers || [];

  return {
    question: decodeHTMLEntities(questionText),
    correctAnswer: decodeHTMLEntities(correctAnswer),
    incorrectAnswers: (Array.isArray(incorrectAnswers) ? incorrectAnswers : []).map(decodeHTMLEntities),
    shuffledAnswers: shuffleAnswers(
      decodeHTMLEntities(correctAnswer),
      (Array.isArray(incorrectAnswers) ? incorrectAnswers : []).map(decodeHTMLEntities)
    ),
    category: question.category || 'General',
    difficulty: DIFFICULTY_LABELS[question.difficulty] || question.difficulty || 'medium',
    type: question.type || 'multiple',
  };
}

function validateAnswer(userAnswer, correctAnswer) {
  return userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim();
}

function calculateScore(isCorrect, difficulty = 'medium') {
  const baseScore = 10;
  const multipliers = {
    [TRIVIA_DIFFICULTIES.EASY]: 1,
    [TRIVIA_DIFFICULTIES.MEDIUM]: 2,
    [TRIVIA_DIFFICULTIES.HARD]: 3,
  };

  return isCorrect ? baseScore * (multipliers[difficulty] || 1) : 0;
}

function groupQuestionsByCategory(questions) {
  return questions.reduce((grouped, question) => {
    const category = question.category || 'General';
    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push(question);
    return grouped;
  }, {});
}

async function translateTriviaQuestion(question, translateFn) {
  try {
    const translatedQuestion = await translateFn(question.question);
    const translatedCorrectAnswer = await translateFn(question.correctAnswer);
    const translatedIncorrectAnswers = await Promise.all(
      question.incorrectAnswers.map(answer => translateFn(answer))
    );
    const translatedShuffledAnswers = await Promise.all(
      question.shuffledAnswers.map(answer => translateFn(answer))
    );

    return {
      ...question,
      question: translatedQuestion,
      correctAnswer: translatedCorrectAnswer,
      incorrectAnswers: translatedIncorrectAnswers,
      shuffledAnswers: translatedShuffledAnswers,
    };
  } catch (error) {
    console.error('Error traduciendo pregunta:', error);
    return question;
  }
}

export { validateTriviaQuestion, shuffleAnswers, decodeHTMLEntities, processTriviaQuestion, validateAnswer, calculateScore, groupQuestionsByCategory, translateTriviaQuestion };