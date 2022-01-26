export default function itemReducer(
    state = {
        items: []
    },
    action
) {
    switch (action.type) {
        case 'STORE_ITEMS':
            return {
                ...state,
                items: action.payload
            };
        case 'EMPTY_ITEMS':
            return {
                ...state,
                items: []
            };
        default: return state;
    }
};