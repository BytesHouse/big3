import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTeam, getTeamSearch } from '../../../../../api/requests/teamApi';

export const teamSearch: any = createAsyncThunk('teams/teamSearch', async (param: any) => {
  try {
    const response = await getTeamSearch(param);
    return response;
  } catch (e) {
    console.log(e);
  }
});

export const fetchTeamData: any = createAsyncThunk(
  'teams/fetchTeamData',
  async (url: string, { rejectWithValue }: any) => {
    try {
      const response = await getTeam(url);
      const data = response.data;
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

const teams = createSlice({
  name: 'teams',
  initialState: {
    teams: {},
    status: '',
    error: '',
  },
  reducers: {},
  extraReducers: {
    [teamSearch.fulfilled]: (state, action) => {
      state.teams = action.payload.data;
    },
    [fetchTeamData.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchTeamData.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.teams = action.payload;
    },
    [fetchTeamData.rejected]: (state) => {
      state.status = 'rejected';
      state.error = 'Ошибка авторизации';
    },
  },
});

export const teamsReducer = teams.reducer;
