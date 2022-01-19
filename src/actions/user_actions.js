import axios from 'axios';
import { API_ROOT } from '../constants';

export const loginUser = (userdata) => {
    let { username, password } = userdata;

    return async (dispatch) => {
        const response = await axios.post(`${API_ROOT}/login`, {
            username: username,
            password: password
        }, { withCredentials: true });
        const { user } = response.data.user;
        dispatch({ type: 'LOGIN_USER', payload: user });
    }
}

// export const register = (userdata) => {
//     return async (dispatch) => {
//         console.log("inside of return dispatch fn")
//         dispatch({ type: 'START_LOAD' })
//         const response = await axios.post(`${API_ROOT}/users/register`,
//         { 
//             userdata
//         }, { withCredentials: true })
//         console.log(response.data)
//     }
// }

export const register = async (userdata, dispatch) => {
    dispatch({ type: 'START_LOAD' })
    const response = await axios.post(`${API_ROOT}/users/register`, { userdata }, { withCredentials: true })
    console.log(response.data)
}

export const authStatus = () => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.get(`${API_ROOT}/users/auth`, { withCredentials: true })
        const data = response.data
        console.log(data)
        dispatch({ type: 'END_LOAD'})
    }
}