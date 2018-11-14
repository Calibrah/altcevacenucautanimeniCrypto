import {FETCH_DATA, FETCH_SUCCESS, FETCH_FAILED} from "./ActionTypes";

export const fetchDataAction = ( credentials ) => {
    return{
        type: FETCH_DATA,
        credentials
    }
}

export const fetchSuccessAction = ( payload ) => {
    return{
        type: FETCH_SUCCESS,
        payload
    }
}

export const fetchFailedAction = ( e ) => {
    return{
        type: FETCH_FAILED,
        error
    }
}