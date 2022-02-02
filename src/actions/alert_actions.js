export const clearAlert = () => {
    return (dispatch) => {
        dispatch({ type: 'DEL_ALERT'})
    }
}