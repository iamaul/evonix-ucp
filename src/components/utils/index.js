import { shuffle, take } from 'lodash';

import api from './api';

import questions from '../../data/quiz/multiple_choice';

const NUMBER_OF_QUESTIONS = 10;

export const setAuthToken = (token) => {
    if (token) {
        api.defaults.headers.common['x-auth-token'] = token;
        localStorage.setItem('token', token);
    } else {
        delete api.defaults.headers.common['x-auth-token'];
        localStorage.removeItem('token');
    }
}

export const setQuestions = () => {
    const orderQuestions = questions
        .filter((q) => !q.justification)
        .map((question, index) => {
            question.id = index;

            question.choices = Object.keys(question).reduce((result, key) => {
                const match = key.match(/^choice_([a-z])$/)
                if (!match) {
                    return result;
                }

                const choice = match[1];
                result[choice] = question[key];

                return result;
            }, {});
            return question;
        });
    return take(shuffle(orderQuestions), NUMBER_OF_QUESTIONS);
}

export const getGradedQuestions = (questions) => {
    questions.forEach((question) => {
        if (!question.providedAnswer) {
            question.isCorrect = false;
            return;
        }
        question.isCorrect = question.answer.toLowerCase() === question.providedAnswer.toLowerCase();
    });
    return questions;
}