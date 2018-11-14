import { FETCH_DATA, FETCH_FAILED, FETCH_SUCCESS } from "./ActionTypes";

const INITIAL_STATE = {

};

const FetchDataReducer = ( data = INITIAL_STATE, action ) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            return action.payload;
        case FETCH_FAILED:
            return {};
        default:
            return data;
    }
}

export default FetchDataReducer;