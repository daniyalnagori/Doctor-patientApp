import firebase from '../../configs/db';
import { Actions } from 'react-native-router-flux';
import {
    FIRST_NAME,
    LAST_NAME,
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER,
    SIGNUP_USER_FAIL,
    LOGOUT_USER_SUCCESS
} from './types';

export class AuthActions {

    static firstChange = (text) => {
        return {
            type: FIRST_NAME,
            payload: text
        };
    };

    static lastChange = (text) => {
        return {
            type: LAST_NAME,
            payload: text
        };
    };

    static emailChanged = (text) => {
        return {
            type: EMAIL_CHANGED,
            payload: text
        };
    };

    static passwordChanged = (text) => {
        return {
            type: PASSWORD_CHANGED,
            payload: text
        };
    };

    static loginUser = ({ email, password }) => {
        return (dispatch) => {
            dispatch({ type: LOGIN_USER });
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(user => AuthActions.loginUserSuccess(dispatch, user))
                .catch((error) => AuthActions.loginUserFail(dispatch, error));
        };
    };

    static loginUserSuccess = (dispatch, user) => {
        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: user
        });
        Actions.dashboard();
    };

    static loginUserFail = (dispatch) => {
        dispatch({ type: LOGIN_USER_FAIL });
    };


    static signupUser = ({ email, password }) => {
        return (dispatch) => {
            dispatch({ type: SIGNUP_USER });
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => AuthActions.signupUserSuccess(dispatch, user))
                .catch((error) => AuthActions.signupUserFail(dispatch, error));
        };

    };
    static logoutRequest = () => {
        return (dispatch) => {
            firebase.auth().signOut().then((val)=>{
                AuthActions.logout(dispatch,val)
                if(val){
                    Actions.login()
                }
            }).catch((err)=>{
                alert("Error",err)
            })
        }
    }

    static signupUserSuccess = (dispatch, user) => {
        dispatch({
            type: SIGNUP_USER_SUCCESS,
            payload: user
        });
        Actions.login();
    };

    static signupUserFail = (dispatch) => {
        dispatch({ type: LOGIN_USER_FAIL });
    };
    static logout = (dispatch) => {
        dispatch({ type: LOGOUT_USER_SUCCESS });
    };

}