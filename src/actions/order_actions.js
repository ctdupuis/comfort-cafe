import axios from "axios";
import { API_ROOT } from "../constants";

export const getOrder = () => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.get(`${API_ROOT}/orders`, {withCredentials:true})
        const order = response.data;
        dispatch({type: 'START_ORDER', payload: order})
        dispatch({ type: 'END_LOAD'})
    }
}

export const createOrder = user => {
    return async (dispatch) => {
        const postObj = Object.assign({}, user, {
            total: 0.00,
            tax: 0.00,
            subtotal: 0.00,
            date: new Date()
        })
        dispatch({ type: 'START_LOAD' })
        const response = await axios.post(`${API_ROOT}/orders`, postObj, {withCredentials: true})
        const order = response.data;
        dispatch({ type: 'START_ORDER', payload: order })
        dispatch({type: 'END_LOAD'})
    }
}

export const updateOrder = (id, orderdata) => {
    return async (dispatch) => {
        let {_id, name, price, categories, description, qty} = orderdata;
        dispatch({type: 'START_LOAD'})
        const response = await axios.put(`${API_ROOT}/orders/${id}`, { _id, name, price, categories, description, qty }, {withCredentials:true})
        const order = response.data;
        dispatch({ type: 'UPDATE_ORDER', payload: order })
        dispatch({type: 'END_LOAD'})
    }
}

export const completeOrder = id => {
    return async (dispatch) => {
        dispatch({type: 'START_LOAD'})
        const response = await axios.put(`${API_ROOT}/orders/${id}/complete`)
        const order = response.data;
        console.log("completion action:", order)
        dispatch({type: 'END_LOAD'})
    }
}