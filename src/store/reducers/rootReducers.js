import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer'
import PatientReducer from './PatientReducer'
import PatientFetchReducer from './PatientFetchReducer'
import PatientSearchReducer from './PatientSearchReducer'

const rootReducer = combineReducers({
  auth: AuthReducer,
  patient: PatientReducer,
  patientList: PatientFetchReducer,
  patientSearch : PatientSearchReducer
});
export default rootReducer;