
import {
    LOAD_PATIENT_LIST_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    patientLists : '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_PATIENT_LIST_SUCCESS:
            return { ...state, patientLists: action.payload };
        default:
            return state;
    }
};