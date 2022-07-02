import * as types from '../actions/actionsTypes';
import { state } from '../types';

const initialState: state = {
  submittedCreds: false,
  httpLink: ''
}

const credentialsReducer = (state: state = initialState, action): state => {

  switch (action.type) {
    case types.ADD_CREDENTIALS:
      const httpLink = action.payload;
      return ({
        ...state,
        httpLink,
        submittedCreds: true
      })
    default: {
      return state;
    }
  }
}

export default credentialsReducer;