import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { BASE_URL, SIGN_UP } from '../../../../../api/Constants';
import { IAuthState } from '../../../../../types/models/IAuth';

const link = BASE_URL + SIGN_UP;

export const signUp: any = createAsyncThunk('user/signup', async (data: any, thunkApi) => {
  const { userName, login, password } = data;
  try {
    const response = await axios.post(link, {
      login,
      password,
      userName,
    });
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('name', response.data.name);
    localStorage.setItem('avatarUrl', response.data.avatarUrl);
    return response.data;
  } catch (error: any) {
    if (error.response.data.indexOf('23505') >= 0)
      toast.error('User with that login already exists');
    return thunkApi.rejectWithValue(error.response.data);
  }
});

const initialState: IAuthState = {
  auth: {},
  isLoading: false,
};

const SignUpSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [signUp.pending]: (state) => {
      state.isLoading = true;
    },
    [signUp.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.auth = payload;
      toast.success(`Hello where ${payload.name}`);
    },
    [signUp.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const SignUpReducer = SignUpSlice.reducer;
