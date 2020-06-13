import {
    LOAD_QUIZ,
    LOAD_QUIZ_SCENARIO,
    LOAD_QUIZ_SCENARIO_FAIL,
    QUIZ_UPDATE,
    QUIZ_GRADE,
    QUIZ_SUBMISSIONS,
    REQUEST_QUIZ_RESULT,
    QUIZ_RESULT,
    QUIZ_RESULT_FAIL,
    PUSH_QUIZ_SCORE,
    CLEAR_QUIZ
} from '../actions/types';

const INITIAL_STATE = { 
    questions: [],
    scenarios: null, 
    submissions: 0,
    score: 0,
    requestResult: false,
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
        case REQUEST_QUIZ_RESULT:
            return { ...state, requestResult: true }
        case QUIZ_RESULT:
            return { ...state, result: payload, requestResult: false, setLoading: false }
        case QUIZ_RESULT_FAIL:
            return { ...state, requestResult: false }
        case LOAD_QUIZ_SCENARIO_FAIL:
            return {
                ...state,
                error: payload,
                setLoading: false
            }
        case CLEAR_QUIZ:
            return {
                ...state,
                score: 0,
                submissions: 0
            }
        default: return state;
    }
}