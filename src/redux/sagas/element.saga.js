import { put, takelatest } from 'redux-saga/effects';
import axios from 'axios';

// Make a GET request and pass the data to redux
function* fetchElements() {
    try {
        // Wait for a server response...
        const elements = yield axios.get('/api/element');
        // After we get a response, dispatch an action
        yield put({ type: 'SET_ELEMENTS', payload: elements.data });
    } catch (error) {
        console.log(`error in fetchElements: ${error}`);
        alert('Something went wrong.');
    }
}

function* postElement(action) {
    try {
        yield axios.post('/api/element', action.payload);
        // Call the GET
        yield put({ type: 'FETCH_ELEMENTS' });
        // We can pass functions through actions
        action.setNewElement('');
    } catch (error) {
        console.log(`error in postElement`);
        alert('Something went wrong');
    }
}

// Step 3: Create a root saga
// this is the saga that will watch for actions
function* elementSaga() {
    //! 'FETCH_ELEMENTS' is our action type.
    //! DO NOT USE the same action as the reducer
    yield takeEvery('FETCH_ELEMENTS', fetchElements);
    yield takeEvery('ADD_ELEMENT', postElement);
    // More sagas go here
}

export default 
