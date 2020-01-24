import RegisterReducer from './RegisterReducer';
import BuyReducer from './BuyReducer';
import LoginReducer from './LoginReducer';
import RemailReducer from './RemailReducer';
import RemailsReducer from './RemailsReducer';


import { combineReducers } from 'redux';

export default combineReducers({
RegisterReducer,
BuyReducer,
LoginReducer,
RemailReducer,
RemailsReducer
})