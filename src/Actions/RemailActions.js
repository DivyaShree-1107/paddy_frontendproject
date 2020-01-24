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

export function emailHandle(userdata) {
    debugger
return dispatch => {
dispatch(BeginFunc(ActionTypes.ADD_SIGNUP_BEGIN_REMAIL));
HttpWrapper('POST', '/Buyform', false, userdata)


.then(response => {
dispatch(SuccessFunc(ActionTypes.ADD_SIGNUP_SUCCESS_BUYFORM, response.data));
BrowserHistory.push('/');
})
.catch(error => {
dispatch(ErrorFunc(ActionTypes.ADD_SIGNUP_FAILURE_BUYFORM, error));
});
};
}