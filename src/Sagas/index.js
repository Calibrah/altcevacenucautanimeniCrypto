import { all } from 'redux-saga/effects';
import { watchFetchData } from './dataSagas';

export default function* rootSaga( ) {
    yield all([
        watchFetchData(),
    ]);
}