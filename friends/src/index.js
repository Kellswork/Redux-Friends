import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {BrowserRouter as Router } from 'react-router-dom';
// import logger from 'redux-logger';
import rootReducer from './reducers'
import './index.css';
import App from './App';


const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ),
)

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));

