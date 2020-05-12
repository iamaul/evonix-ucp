import {
    LOAD_QUIZ,
    LOAD_QUIZ_SCENARIO,
    LOAD_QUIZ_SCENARIO_FAIL,
    QUIZ_UPDATE,
    QUIZ_GRADE,
    QUIZ_SUBMISSIONS,
    QUIZ_RESULT,
    PUSH_QUIZ_SCORE
} from '../actions/types';

const INITIAL_STATE = { 
    questions: [],
    scenarios: [], 
    submissions: 0,
    score: 0,
    result: null,
    error: null,
    setLoading: true 
}

export default function (state = INITIAL_STATE, action) {
    const { type, payload } = action;

    switch (type) {
        case LOAD_QUIZ:
            return { ...state, questions: payload, setLoading: false }
        case LOAD_QUIZ_SCENARIO:
            return {
                ...state,
                scenarios: payload,
                setLoading: false
            }
        case QUIZ_UPDATE:
            const updatedQuiz = state.questions.map((question) => {
                return question.id === payload.questionId ? { ...question, providedAnswer: payload.answer } : question
            });
            return { ...state, questions: updatedQuiz, setLoading: false }
        case QUIZ_GRADE:
            return { ...state, questions: payload, setLoading: false }
        case QUIZ_SUBMISSIONS:
            return { ...state, submissions: payload, setLoading: false }
        case PUSH_QUIZ_SCORE:
            return { ...state, score: payload, setLoading: false }
        case QUIZ_RESULT:
            return { ...state, result: payload, setLoading: false }
        case LOAD_QUIZ_SCENARIO_FAIL:
            return {
                ...state,
                error: payload,
                setLoading: false
            }
        default: return state;
    }
}