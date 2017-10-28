import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER,
    SIGNUP_USER_FAIL,
    FIRST_NAME,
    LAST_NAME,
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGOUT_USER_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    first: '',
    last: '',
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false,
    isLoggin: false,
    logout: ''
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case FIRST_NAME:
            return { ...state, first: action.payload };
        case LAST_NAME:
            return { ...state, last: action.payload };
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload, isLoggin: true };
        case LOGOUT_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, logout: action.payload };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed.Enter valid username & password', password: '', loading: false };
        case SIGNUP_USER:
            return { ...state, loading: true, error: '' };
        case SIGNUP_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case SIGNUP_USER_FAIL:
            return { ...state, error: 'Authentication Failed.Enter valid username & password', password: '', loading: false };
        default:
            return state;
    }
};    