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

export function registerHandle(userdata) {
    debugger
    return dispatch => {
        dispatch(BeginFunc(ActionTypes.ADD_SIGNUP_BEGIN));
        HttpWrapper('POST', '/Signup', false, userdata)
    
            .then(response => {
                //  if(!response.data.Admin)
                // {
                //     BrowserHistory.push('/dashboarduser')
                // }
                // else{
                //    BrowserHistory.push('/dashboard');

                // }
                dispatch(SuccessFunc(ActionTypes.ADD_SIGNUP_SUCCESS, response.data));
                BrowserHistory.push('/login');
            })
            .catch(error => {
                dispatch(ErrorFunc(ActionTypes.ADD_SIGNUP_FAILURE, error));
            });
    };
}