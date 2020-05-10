import {
    LOAD_QUIZ,
    QUIZ_UPDATE,
    QUIZ_GRADE,
    QUIZ_SUBMISSIONS
} from './types';

export const loadQuiz = (questions) => dispatch => {
    dispatch({ type: LOAD_QUIZ, payload: questions });
}

export const updateQuiz = (questionId, answer) => dispatch => {
    const data = { questionId, answer };
    dispatch({ type: QUIZ_UPDATE, payload: data });
}

export const gradeQuiz = (questions) => dispatch => {
    dispatch({ type: QUIZ_GRADE, payload: questions });
}

export const quizSubmissions = (submissions) => dispatch => {
    dispatch({ type: QUIZ_SUBMISSIONS, payload: submissions });
}