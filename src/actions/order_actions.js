import axios from "axios";
import { API_ROOT } from "../constants";

export const getOrder = () => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.get(`${API_ROOT}`, {withCredentials:true})
        const order = response.data;
        dispatch({ type: 'END_LOAD'})
    }
}