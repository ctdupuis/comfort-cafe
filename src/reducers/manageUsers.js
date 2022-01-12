export default function userReducer(
    state = {
        currentUser: undefined
    },
    action
) {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                currentUser: action.user
            };
        case 'LOGOUT_USER':
            return {
                ...state,
                currentUser: undefined
            };
        default: return state;
    }
};