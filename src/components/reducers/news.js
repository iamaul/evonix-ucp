import {
    GET_NEWS,
    // GET_FACTION_NEWS,
    GET_HEADLINE_NEWS,
    GET_NEWS_DETAIL
} from '../actions/types';

const INITIAL_STATE = {
    headline_news: null,
    news: null,
    // faction_news: null,
    news_detail: null,
    setLoading: true
}

export default function (state = INITIAL_STATE, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_HEADLINE_NEWS:
            return {
                ...state,
                headline_news: payload,
                setLoading: false
            }
        case GET_NEWS:
            return {
                ...state,
                news: payload,
                setLoading: false
            }
        // case GET_FACTION_NEWS:
        //     return {
        //         ...state,
        //         faction_news: payload,
        //         setLoading: false
        //     }
        case GET_NEWS_DETAIL:
            return {
                ...state,
                news_detail: payload,
                setLoading: false
            }
        default: return state;
    }
}