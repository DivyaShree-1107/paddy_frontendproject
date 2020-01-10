
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import index5 from './Reducer/index5';
import ReduxThunk from 'redux-thunk'
// import RegisterReducer from './Reducer/RegisterReducer';
import { Provider } from 'react-redux'; 

import { createStore, applyMiddleware, compose } from 'redux';
import Reducer from './Reducers/index';
// import task2ReducerA from './Reducer/task2ReducerA';
// import task2ReducerB from './Reducer/task2ReducerB';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducer, {}, composeEnhancers(applyMiddleware(ReduxThunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();