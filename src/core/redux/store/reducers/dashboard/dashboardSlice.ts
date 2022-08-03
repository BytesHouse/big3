import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 0,
  isSidebarOpen: false,
};

const Dashboard = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
    },
    toggleSideBar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});
export const { changePage, toggleSideBar } = Dashboard.actions;

export const dashboardReducer = Dashboard.reducer;
