import axios from 'axios';
import Swal from 'sweetalert2';
import {
    GET_NEWS,
    GET_NEWS_FAIL,
    GET_NEWS_DETAIL,
    GET_NEWS_DETAIL_FAIL
} from './types';

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end'
});

export const getHeadlineNews = () => async dispatch => {
    try {
        const res = await axios.get('/api/v1/news/headline');
        dispatch({ type: GET_HEADLINE_NEWS, payload: res.data });
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
        dispatch({ type: GET_HEADLINE_NEWS_FAIL });
    }
}

export const getNews = () => async dispatch => {
    try {
        const res = await axios.get('/api/v1/news');
        dispatch({ type: GET_NEWS, payload: res.data });
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
        dispatch({ type: GET_NEWS_FAIL });
    }
}

export const getNewsDetail = (slug) => async dispatch => {
    try {
        const res = await axios.get(`/api/v1/news/${slug}`);
        dispatch({ type: GET_NEWS_DETAIL, payload: res.data });
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
        dispatch({ type: GET_NEWS_DETAIL_FAIL });
    }
}