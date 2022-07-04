import { ADD_CREDENTIALS } from './actionsTypes';

export const addCredentials = (payload) => (
  {
    type: ADD_CREDENTIALS,
    payload: payload,
  }
);
