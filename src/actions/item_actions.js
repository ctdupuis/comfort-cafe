import axios from "axios";
import { API_ROOT } from "../constants";

export const getItems = () => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.get(`${API_ROOT}/items`)
        const items = response.data;
        dispatch({ type: 'STORE_ITEMS', payload: items })
        dispatch({ type: 'END_LOAD' })
    }
}