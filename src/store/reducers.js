import * as types from './types';
const initialState = {
    loading: false,
    isSignOut: true,
    user: {},
    token: null,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_USER:
            return {
                ...state,
                token: action.token,
                user: action.user,
                isSignOut: false,
                loading: true,
            };

        case types.LOGIN_USER_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        case types.REGISTER_USER:
            return {
                ...state,
                loading: true,
                isSignOut: true
            };
        case types.REGISTER_USER_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        case types.LOGOUT:
            return {
                ...state,
                user: null,
                token: null,
                loading: false,
                isSignOut: true
            };
        default:
            return state;
    }
}