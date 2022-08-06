import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addPlayer, getPlayerId } from '../../../../../api/requests/playerApi';

export const fetchPlayer: any = createAsyncThunk('fetch/fetchPlayer', async (id: number) => {
  try {
    const response = await getPlayerId(id);
    return response;
  } catch (e) {
    console.log(e);
  }
});

export const createNewPlayer: any = createAsyncThunk(
  'player/createNewPlayer',
  async (data: any) => {
    const player = {
      avatarUrl: data.avatarUrl,
      name: data.name,
      position: data.position,
      team: data.team,
      height: data.height,
      weight: data.height,
      birthday: data.birthday, // 2022-08-06T08:26:39.246Z
      number: data.number,
    };
    try {
      const response = await addPlayer(player);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

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
    [createNewPlayer.pending]: (state: any) => {
      state.status = 'loading';
      state.isLoading = true;
    },
    [createNewPlayer.fulfilled]: (state: any, action: any) => {
      state.status = 'success';
      state.playerInfo = { ...state.playerInfo, ...action.payload };
      state.isLoading = false;
    },
    [createNewPlayer.resolved]: (state: any, action: any) => {
      state.status = 'resolved';
      state.error = true;
      state.isLoading = false;
    },
  },
});

export const playerReducer = Player.reducer;
