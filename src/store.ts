import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index.js';
import thunk from 'redux-thunk';
//import { someAction1 } from './actions/actions';

export const store = configureStore(
  reducers
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;