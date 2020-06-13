import {
    COUNT_SERVER_USERS,
    COUNT_SERVER_VEHICLES,
    COUNT_SERVER_PROPERTIES,
    COUNT_SERVER_USER_APPS,
    COUNT_SERVER_USERS_FAIL,
    COUNT_SERVER_VEHICLES_FAIL,
    COUNT_SERVER_PROPERTIES_FAIL,
    COUNT_SERVER_USER_APPS_FAIL,
} from './types';
import api from '../api/api';

export const getCountServerUsers = () => async dispatch => {
    try {
        const res = await api.get('server/stats/users');
        dispatch({ type: COUNT_SERVER_USERS, payload: res.data });
    } catch (error) {
        dispatch({ type: COUNT_SERVER_USERS_FAIL });
    }
}

export const getCountServerVehicles = () => async dispatch => {
    try {
        const res = await api.get('server/stats/player_vehicles');
        dispatch({ type: COUNT_SERVER_VEHICLES, payload: res.data });
    } catch (error) {
        dispatch({ type: COUNT_SERVER_VEHICLES_FAIL });
    }
}

export const getCountServerProperties = () => async dispatch => {
    try {
        const res = await api.get('server/stats/player_properties');
        dispatch({ type: COUNT_SERVER_PROPERTIES, payload: res.data });
    } catch (error) {
        dispatch({ type: COUNT_SERVER_PROPERTIES_FAIL });
    }
}

export const getCountServerUserApps = () => async dispatch => {
    try {
        const res = await api.get('server/stats/user_applications');
        dispatch({ type: COUNT_SERVER_USER_APPS, payload: res.data });
    } catch (error) {
        dispatch({ type: COUNT_SERVER_USER_APPS_FAIL });
    }
}