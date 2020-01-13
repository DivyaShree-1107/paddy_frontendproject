import RegisterReducer from './RegisterReducer';
import BuyReducer from './BuyReducer';
import LoginReducer from './LoginReducer';



import { combineReducers } from 'redux';

export default combineReducers({
RegisterReducer,
BuyReducer,
LoginReducer
})