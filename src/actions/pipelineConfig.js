import { createSlice } from '@reduxjs/toolkit';

export const clusterInfoSlice = createSlice({
  name: 'clusterInfo',
  initialState: {
    dataSource: '',
    numOfClusters: 0,
    sink: ''
  },
  reducers: {
    setDataSource: (state, action) => {
      state.dataSource = action.payload
    },
    updateNumOfClusters: (state, action) => {
      state.numOfClusters = action.payload;
    },
    setSink: (state, action) => {
      state.sink = action.payload;
    }
  }
});

export const { setDataSource, updateNumOfClusters, setSink } = clusterInfoSlice.actions;

export default clusterInfoSlice.reducer;