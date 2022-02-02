import axios from 'axios';
import { API_ROOT } from '../constants';

export const login = (userdata) => {
    return async (dispatch) => {
        const response = await axios.post(`${API_ROOT}/users/login`, {
            userdata
        }, { withCredentials: true });
        const user = response.data
        dispatch({ type: 'LOGIN_USER', payload: user });
    }
}

export const register = (userdata) => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.post(`${API_ROOT}/users/register`,
        { 
            userdata
        }, { withCredentials: true })
        const user = response.data;
        dispatch({ type: 'LOGIN_USER', payload: user })
        dispatch({ type: 'END_LOAD' })
    }
}

export const authStatus = () => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.get(`${API_ROOT}/users/auth`, { withCredentials: true });
        const user = response.data.auth;
        if (user.auth) {
            dispatch({ type: 'END_LOAD' })
        } else {
            dispatch({ type: 'LOGIN_USER', payload: user })
            dispatch({ type: 'END_LOAD' })
        }
        
    }
}

export const logout = () => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.get(`${API_ROOT}/users/logout`, { withCredentials:true });
        const alert = response.data;
        dispatch({ type: 'INIT_ALERT', payload: alert.alert })
        dispatch({ type: 'LOGOUT_USER' })
        dispatch({type: 'CLEAR_ORDER'})
        dispatch({ type: 'END_LOAD' })
    }
}