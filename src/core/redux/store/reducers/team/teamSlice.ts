import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTeamId } from '../../../../../api/requests/teamApi';

export const fetchTeamData: any = createAsyncThunk('teamData/fetchTeamData', async (id: number) => {
  try {
    const response = await getTeamId(id);
    return response;
  } catch (e) {
    console.log(e);
  }
});

const teamData = createSlice({
  name: 'teamData',
  initialState: {
    teamInfo: {},
    status: '',
    error: '',
  },
  reducers: {},
  extraReducers: {
    [fetchTeamData.pending]: (state) => {
      state.status = 'loading';
      state.error = '';
    },
    [fetchTeamData.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.teamInfo = [action.payload.data];
    },
  },
});

export const teamDataReducer = teamData.reducer;
