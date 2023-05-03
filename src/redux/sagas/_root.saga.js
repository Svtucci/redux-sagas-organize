// TEST FILE TO SEE WHY ROOTSAGE CAN BE IMPORTED WITH DIFFERENT NAME

import { all } from 'redux-saga/effects'; 
import elementSaga from './element.saga';

// Our rootSaga bundles all other sagas together

export default function* rootSaga () {
    yield all([
        elementSaga(),
        //add other sagas here
    ]);
}