import {
    LOAD_QUIZ,
    QUIZ_UPDATE,
    QUIZ_GRADE,
    QUIZ_SUBMISSIONS
} from '../actions/types';

const INITIAL_STATE = { 
    questions: [], 
    submissions: 0,
    setLoading: true 
}

export default function (state = INITIAL_STATE, action) {
    const { type, payload } = action;

    switch (type) {
        case LOAD_QUIZ:
            return { ...state, questions: payload, setLoading: false }
        case QUIZ_UPDATE:
            const updatedQuiz = state.questions.map((question) => {
                return question.id === payload.questionId ? { ...question, providedAnswer: payload.answer } : question
            });
            return { ...state, questions: updatedQuiz, setLoading: false }
        case QUIZ_GRADE:
            return { ...state, questions: payload, setLoading: false }
        case QUIZ_SUBMISSIONS:
            return { ...state, submissions: payload, setLoading: false }
        default: return state;
    }
}