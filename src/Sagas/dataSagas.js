import {FETCH_DATA, FETCH_SUCCESS, FETCH_FAILED} from "../Redux/ActionTypes";

import {takeLatest, takeEvery, put, call, select} from 'redux-saga/effects'
import { Api } from './Api'
import { delay } from 'redux-saga'

function* fetchData ( action ) {
    console.tron.log('redux-saga is fetching data');
    try{
        const payload = yield call(Api.localAPI, action.credentials);
        console.log(payload);
        yield put({type: FETCH_SUCCESS, payload: payload})
    } catch (e) {
        yield put({type: FETCH_FAILED, e})
    }
}

export function* watchFetchData() {
    yield takeLatest(FETCH_DATA, fetchData);
}

