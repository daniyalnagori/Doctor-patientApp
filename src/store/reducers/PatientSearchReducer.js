
import {
    LOAD_PATIENT_SEARCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    patientsearch : '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_PATIENT_SEARCH_SUCCESS:
            return { ...state, patientsearch: action.payload };
        default:
            return state;
    }
};