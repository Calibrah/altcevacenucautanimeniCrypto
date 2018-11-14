import { combineReducers } from 'redux';
import FetchDataReducer from "./fetchDataReducer";

const rootReducer = combineReducers({
    FetchDataReducer,
});

export default rootReducer