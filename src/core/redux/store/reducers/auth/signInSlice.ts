import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, SIGN_IN } from '../../../../../api/Constants';
import { IAuthState } from '../../../../../types/models/IAuth';

const link = BASE_URL + SIGN_IN;

export const signIn: any = createAsyncThunk(
  'auth/AuthSignIn',
  async (data: any, { reject }: any) => {
    const login = data.login;
    const password = data.password;

    try {
      const response = await axios.post(link, {
        login,
        password,
      });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('name', response.data.name);
      localStorage.setItem('avatarUrl', response.data.avatarUrl);
      return response.data;
    } catch (e) {
      return reject(e);
    }
  }
);

const initialState: IAuthState = {
  auth: {},
  status: '',
  error: '',
};

const SignInSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [signIn.pending]: (state) => {
      state.status = 'loading';
      state.error = '';
    },
    [signIn.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.auth = action.payload;
    },
    [signIn.rejected]: (state) => {
      state.status = 'rejected';
      state.error = 'Authorization error';
    },
  },
});

export const AuthReducer = SignInSlice.reducer;
