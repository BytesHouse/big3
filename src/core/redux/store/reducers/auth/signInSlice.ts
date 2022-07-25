import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, SIGN_IN } from '../../../../../api/Constants';

const link = BASE_URL + SIGN_IN;

export const SignIn: any = createAsyncThunk(
  'auth/AuthSignIn',
  async (data: any, { reject }: any) => {
    const login = data.Login;
    const password = data.password;

    try {
      const response = await axios.post(link, {
        login,
        password,
      });
      return response.data;
    } catch (e) {
      return reject(e);
    }
  }
);

const SignInSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: {},
    status: '',
    error: '',
  },
  reducers: {},
  extraReducers: {
    [SignIn.pending]: (state) => {
      state.status = 'loading';
      state.error = '';
    },
    [SignIn.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.auth = action.payload;
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('name', action.payload.name);
      localStorage.setItem('avatarUrl', action.payload.avatarUrl);
    },
    [SignIn.rejected]: (state) => {
      state.status = 'rejected';
      state.error = 'Authorization error';
    },
  },
});

export const AuthReducer = SignInSlice.reducer;
