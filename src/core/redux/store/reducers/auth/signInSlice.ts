import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
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
      toast.success(`Hello there ${response.data.name}`);
      return response.data;
    } catch (e) {
      return reject(e);
    }
  }
);

const initialState: IAuthState = {
  auth: {},
  isLoading: false,
};

const SignInSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [signIn.pending]: (state) => {
      state.isLoading = true;
    },
    [signIn.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.auth = payload;
    },
    [signIn.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const AuthReducer = SignInSlice.reducer;
