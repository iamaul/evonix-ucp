import axios from 'axios';
import history from '../history';
import Swal from 'sweetalert2';
import {
    LOAD_QUIZ,
    LOAD_QUIZ_SCENARIO,
    LOAD_QUIZ_SCENARIO_FAIL,
    QUIZ_UPDATE,
    QUIZ_GRADE,
    QUIZ_SUBMISSIONS,
    QUIZ_RESULT,
    QUIZ_RESULT_FAIL,
    PUSH_QUIZ_SCORE,
    CLEAR_QUIZ
} from './types';

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end'
});

export const loadQuiz = (questions) => dispatch => {
    dispatch({ type: LOAD_QUIZ, payload: questions });
}

export const loadQuizScenario = () => async dispatch => {
    try {
        const res = await axios.get('/api/v1/quiz/scenario');
        dispatch({ type: LOAD_QUIZ_SCENARIO, payload: res.data });
    } catch (error) {
        dispatch({ type: LOAD_QUIZ_SCENARIO_FAIL, payload: {
            msg: error.response.statusText,
            status: error.response.status
        } }); 
    }
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

export const pushQuizScore = (score) => dispatch => {
    dispatch({ type: PUSH_QUIZ_SCORE, payload: score });
}

export const quizResult = (dataObj) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.post('/api/v1/users/application', dataObj, config);
        dispatch({ type: QUIZ_RESULT, payload: res.data });
        history.push('/applications');
    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) {
            errors.map(err => {
                return Toast.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.msg
                });
            });
        }
        dispatch({ type: QUIZ_RESULT_FAIL });
    }
}

export const clearQuiz = () => dispatch => {
    dispatch({ type: CLEAR_QUIZ });
}