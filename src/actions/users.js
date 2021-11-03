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