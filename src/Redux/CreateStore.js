import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';;
//import {composeWithDevTools} from "redux-devtools-extension";
import storage from 'redux-persist/lib/storage'

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import createSagaMiddleware from 'redux-saga';

import rootReducer from './index';
import rootSaga from '../Sagas'


const persistConfig = {
    key: 'root2',
    storage: storage,
    stateReconciler: autoMergeLevel2
};

const sagaMiddleware = createSagaMiddleware();

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = console.tron.createStore(
    pReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);
