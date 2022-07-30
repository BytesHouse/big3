import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 0,
};

const Dashboard = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
    },
  },
});
export const { changePage } = Dashboard.actions;

export const dashboardReducer = Dashboard.reducer;
