export default function itemReducer(
    state = {
        order: false,
        history: false
    },
    action
) {
    switch (action.type) {
        case 'START_ORDER':
            return {
                ...state,
                order: action.payload
            };
        case 'UPDATE_ORDER':
            return {
                ...state,
                order: action.payload
            };
        case 'CLEAR_ORDER':
            return {
                ...state,
                order: false
            }
        case 'COMPLETE_ORDER':
            return {
                ...state,
                history: action.payload,
                order: false
            }
        case 'POPULATE_HISTORY':
            return {
                ...state,
                history: action.payload
            }
        default: return state;
    }
};