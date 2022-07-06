import { createSlice } from '@reduxjs/toolkit';

export const addCredentialsSlice = createSlice({
  name: 'addCredentials',
  initialState: {
    httpLink: ''
  },
  reducers: {
    addHttpLink: (state, action) => {
      state.httpLink = action.payload
    }
  }
});

export const { addHttpLink } = addCredentialsSlice.actions;

export default addCredentialsSlice.reducer;