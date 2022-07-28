import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, SIGN_UP } from '../../../../../api/Constants';
import { IAuthState } from '../../../../../types/models/IAuth';

const link = BASE_URL + SIGN_UP;

export const signUp: any = createAsyncThunk('auth/signup', async (data: any) => {
  const { userName, login, password } = data;
  try {
    const response = await axios.post(link, {
      login,
      password,
      userName,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
});

const initialState: IAuthState = {
  auth: {},
  status: '',
  error: '',
};

const SignUpSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [signUp.pending]: (state) => {
      state.status = 'loading';
      state.error = '';
    },
    [signUp.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.auth = action.payload;
      localStorage.setItem('status', action.payload.status);
    },
    [signUp.rejected]: (state) => {
      state.error = 'Authorization error';
    },
  },
});

export const SignUpReducer = SignUpSlice.reducer;
