import { combineReducers } from 'redux';

// import all reducers here
import credentialReducer from './credentialsReducer';

// combine reducers
const reducers = combineReducers({
  // key value pairs of reducer name and the imported reducer
  credentials: credentialReducer
});

// make the combined reducers available for import
export default reducers;