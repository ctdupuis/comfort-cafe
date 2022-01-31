export default function itemReducer(
    state = {
        order: false
    },
    action
) {
    switch (action.type) {
        case 'START_ORDER':
            return {
                ...state,
                order: action.payload
            };
        case 'COMPLETE_ORDER':
            return {
                ...state,
                order: false
            };
        case 'CLEAR_ORDER':
            return {
                ...state,
                order: false
            }
        default: return state;
    }
};