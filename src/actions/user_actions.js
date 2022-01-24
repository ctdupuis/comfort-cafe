import axios from 'axios';
import { API_ROOT } from '../constants';

export const login = (userdata, history) => {
    let { username, password } = userdata;

    return async (dispatch) => {
        const response = await axios.post(`${API_ROOT}/login`, {
            username: username,
            password: password
        }, { withCredentials: true });
        const user = response.data
        console.log(user)
        dispatch({ type: 'LOGIN_USER', payload: user });
        history.replace("/");
    }
}

export const register = (userdata, history) => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.post(`${API_ROOT}/users/register`,
        { 
            userdata
        }, { withCredentials: true })
        const user = response.data;
        dispatch({ type: 'LOGIN_USER', payload: user })
        dispatch({ type: 'END_LOAD' })
        history.replace("/");
    }
}

export const authStatus = () => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.get(`${API_ROOT}/users/auth`, { withCredentials: true });
        const data = response.data
        console.log("auth response:", data)
        dispatch({ type: 'END_LOAD'})
    }
}

export const logout = (history) => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.get(`${API_ROOT}/users/logout`);
        const data = response.data;
    }
}