import { createStore, combineReducers, applyMiddleware } from 'redux';
// Step 1: npm install redux-saga
// Step 2: import createSagaMiddleware
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

// importing reducer from file we moved it to
import elementList from './reducers/element.reducer.js';
import rootSaga from './sagas/_root.saga.js';

// Step 4: create saga middleware
const sagaMiddleware = createSagaMiddleware();

// This is creating the store
// the store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
    // This function is our first reducer
    // reducer is a function that runs every time an action is dispatched
    combineReducers({
        elementList,
        // more reducers go here 
    }),
    // Step 5: add middleware to redux
    applyMiddleware(sagaMiddleware, logger),
);

// Step 6: add our root saga to our middleware
sagaMiddleware.run(rootSaga);


export default storeInstance; 

