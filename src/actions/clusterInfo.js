import { createSlice } from '@reduxjs/toolkit';

export const clusterInfoSlice = createSlice({
  name: 'clusterInfo',
  initialState: {
    numOfClusters: 0
  },
  reducers: {
    updateNumOfClusters: (state, action) => {
      state.numOfClusters = action.payload
    }
  }
});

export const { updateNumOfClusters } = clusterInfoSlice.actions;

export default clusterInfoSlice.reducer;