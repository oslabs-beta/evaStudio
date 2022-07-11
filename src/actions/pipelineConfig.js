import { createSlice } from '@reduxjs/toolkit';

export const clusterInfoSlice = createSlice({
  name: 'clusterInfo',
  initialState: {
    dataSource: '',
    numOfClusters: 0,
    sync: ''
  },
  reducers: {
    setDataSource: (state, action) => {
      state.dataSource = action.payload
    },
    updateNumOfClusters: (state, action) => {
      state.numOfClusters = action.payload;
    },
    setSync: (state, action) => {
      state.sync = action.payload;
    }
  }
});

export const { setDataSource, updateNumOfClusters, setSync } = clusterInfoSlice.actions;

export default clusterInfoSlice.reducer;