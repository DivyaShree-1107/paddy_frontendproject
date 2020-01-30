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
export function salesHandle(userdata) {
    debugger
    return dispatch => {
        dispatch(BeginFunc(ActionTypes.ADD_SIGNUP_BEGIN_SALES));
        HttpWrapper('POST', '/sales', false, userdata)
            .then(response => {
                debugger
                sessionStorage.setItem('authentication', response.data.token)
                sessionStorage.setItem('role', response.data.role)
                sessionStorage.setItem('Firstname', response.data.Firstname)
               // if(!response.data.Admin)
                // {
                    BrowserHistory.push('/dashboard')
                // }
                
                dispatch(SuccessFunc(ActionTypes.ADD_SIGNUP_SUCCESS_SALES, response.data));
                // BrowserHistory.push('/dashboard');
            })
            .catch(error => {
                dispatch(ErrorFunc(ActionTypes.ADD_SIGNUP_FAILURE_SALES, error));
            });
            
    };
}