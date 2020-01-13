import * as ActionTypes from './types';
import HttpWrapper from '../Utils/HttpWrapper';
import BrowserHistory from '../Component/utils/BrowserHistroy';

export function BeginFunc(ActionType) {
    return { type: ActionType }
}

export function SuccessFunc(ActionType, result) {
    return {
        type: ActionType,
        payload: result
    }
}

export function ErrorFunc(ActionType, error) {
    return {
        type: ActionType,
        payload: { error }
    }
}

export function loginHandle(userdata) {
    debugger
    return dispatch => {
        dispatch(BeginFunc(ActionTypes.ADD_SIGNUP_BEGIN));
        HttpWrapper('POST', '/Signin', false, userdata)
    
            .then(response => {
                sessionStorage.setItem('authentication', response.data.token)
            sessionStorage.setItem('userEmail', response.data.email)
            
                dispatch(SuccessFunc(ActionTypes.ADD_LOGIN_SUCCESS, response.data));
                BrowserHistory.push('/dashboard');
            })
            .catch(error => {
                dispatch(ErrorFunc(ActionTypes.ADD_LOGIN_FAILURE, error));
            });
    };
}