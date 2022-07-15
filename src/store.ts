import { configureStore } from '@reduxjs/toolkit' // toolkit is new version of Redux, much easier ot user
import { useDispatch } from 'react-redux';
// Import all reducers directly into the store
import credentialReducer from './actions/credentials';
import pipelineConfigReducer from './actions/pipelineConfig';

export const store = configureStore({ // no longer need to combineReducers in an index.js file
  reducer: {
    credentials: credentialReducer,
    pipelineConfig: pipelineConfigReducer
  }
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types

export default store;