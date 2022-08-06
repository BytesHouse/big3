import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPlayers, getPlayerSearch, getPosition } from '../../../../../api/requests/playerApi';

export const search: any = createAsyncThunk('player/search', async (param: any) => {
  const response = await getPlayerSearch(param);
  return response;
});

export const fetchPlayers: any = createAsyncThunk(
  'player/fetchPlayers',
  async (url: string, { rejectWithValue }: any) => {
    try {
      const response = await getPlayers(url);
      const data = response.data;
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const fetchPlayersPosition: any = createAsyncThunk('player/fetchPositions', async () => {
  try {
    const response = await getPosition();
    const data = response.data;
    return data;
  } catch (e) {
    console.log(e);
  }
});

interface PlayersState {
  players: object;
  status: string;
  error: string;
  positions: [];
}

const initialState: PlayersState = {
  players: {},
  status: '',
  error: '',
  positions: [],
};

const players = createSlice({
  name: 'players',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPlayers.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchPlayers.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.players = action.payload;
    },
    [fetchPlayers.rejected]: (state) => {
      state.status = 'rejected';
      state.error = 'Authorization error';
    },

    [fetchPlayersPosition.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchPlayersPosition.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.positions = action.payload;
    },
    [fetchPlayers.rejected]: (state) => {
      state.status = 'rejected';
      state.error = 'Authorization error';
    },
  },
});

export const playersReducer = players.reducer;
