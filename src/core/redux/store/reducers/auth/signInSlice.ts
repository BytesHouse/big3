import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, SIGN_IN } from '../../../../../api/Constants';
import { IAuthState } from '../../../../../types/models/IAuth';
import { useNavigate } from 'react-router-dom';

const link = BASE_URL + SIGN_IN;

export const signIn: any = createAsyncThunk(
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

const initialState: IAuthState = {
  auth: {},
  status: '',
  error: '',
};

const SignInSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    [signIn.pending]: (state) => {
      state.status = 'loading';
      state.error = '';
    },
    [signIn.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.auth = action.payload;
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('name', action.payload.name);
      localStorage.setItem('avatarUrl', action.payload.avatarUrl);
      const navigate = useNavigate();
      navigate('/teams');
    },
    [signIn.rejected]: (state) => {
      state.status = 'rejected';
      state.error = 'Authorization error';
    },
  },
});

export const AuthReducer = SignInSlice.reducer;
