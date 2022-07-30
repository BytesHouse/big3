import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addTeam, getTeamId } from '../../../../../api/requests/teamApi';

export const fetchTeamData: any = createAsyncThunk('teamData/fetchTeamData', async (id: number) => {
  try {
    const response = await getTeamId(id);
    return response;
  } catch (e) {
    console.log(e);
  }
});
export const createNewTeam: any = createAsyncThunk(
  'team/createTeam',
  async (data: any, { reject }: any) => {
    const team = {
      name: data.name,
      division: data.devision,
      foundationYear: data.foundationYear,
      conference: data.conference,
      imageUrl: data.imageUrl,
    };
    try {
      const response = await addTeam(team);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

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
    [createNewTeam.fulfilled]: (state, action) => {
      state.teamInfo = { ...state, ...action.payload };
    },
  },
});

export const teamDataReducer = teamData.reducer;
