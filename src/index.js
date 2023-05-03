import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// Step 1: npm install redux-saga
// Step 2: import createSagaMiddleware
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
// Step 8: Import axios, takeEvery and put
import axios from 'axios';
// put is dispatch (they do the same thing)
import { takeEvery, put } from 'redux-saga/effects';

// importing reducer from file we moved it to
import elementList from './redux/reducers/element.reducer.js';


// Step 4: create saga middleware
const sagaMiddleware = createSagaMiddleware();

// This is creating the store
// the store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
    // This function is our first reducer
    // reducer is a function that runs every time an action is dispatched
    combineReducers({
        elementList,
    }),
    // Step 5: add middleware to redux
    applyMiddleware(sagaMiddleware, logger),
);

// Step 6: add our root saga to our middleware
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
