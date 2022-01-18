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

export const register = (userdata) => {
    let {
        username, password, address, name, dob
    } = userdata;
    console.log("top level of register fn", userdata)

    return async (dispatch) => {
        console.log("inside of return dispatch fn")
        const response = await axios.post(`${API_ROOT}/users/register`,
        { 
            username: username,
            password: password,
            dob: dob,
            address: address,
            name: name
        })
        debugger
    }
}