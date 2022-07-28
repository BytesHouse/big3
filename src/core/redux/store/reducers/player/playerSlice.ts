import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPlayerId } from '../../../../../api/requests/playerApi';

export const fetchPlayer: any = createAsyncThunk('fetch/fetchPlayer', async (id: number) => {
  try {
    const response = await getPlayerId(id);
    return response;
  } catch (e) {
    console.log(e);
  }
});

interface PlayerState {
  playerInfo: object;
  status: string;
  error: boolean;
  isLoading: boolean;
}

const initialState: PlayerState = {
  playerInfo: {},
  status: '',
  error: false,
  isLoading: true,
};

const Player = createSlice({
  name: 'player',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPlayer.pending]: (state: any) => {
      state.status = 'loading';
      state.isLoading = true;
    },
    [fetchPlayer.fulfilled]: (state: any, action: any) => {
      state.status = 'success';
      state.playerInfo = [action.payload.data];
      state.isLoading = false;
    },
    [fetchPlayer.resolved]: (state: any, action: any) => {
      state.status = 'resolved';
      state.error = true;
      state.isLoading = false;
    },
  },
});

export const playerReducer = Player.reducer;
