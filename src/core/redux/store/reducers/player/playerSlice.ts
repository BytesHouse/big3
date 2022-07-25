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
  error: null;
}

const initialState: PlayerState = {
  playerInfo: {},
  status: '',
  error: null,
};

const Player = createSlice({
  name: 'player',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPlayer.pending]: (state: any) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchPlayer.fulfilled]: (state: any, action: any) => {
      state.status = 'resolved';
      state.playerInfo = [action.payload.data];
    },
  },
});

export const playerReducer = Player.reducer;
