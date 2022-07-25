import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, SIGN_UP } from '../../../../../api/Constants';
import { IAuthState } from '../../../../../types/models/IAuth';

const link = BASE_URL + SIGN_UP;

export const SignUp: any = createAsyncThunk(SIGN_UP, async (data: any) => {
  const userName = data.UserName;
  const login = data.Login;
  const password = data.password;
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
    [SignUp.pending]: (state) => {
      state.status = 'loading';
      state.error = '';
    },
    [SignUp.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.auth = action.payload;
      localStorage.setItem('status', action.payload.status);
    },
    [SignUp.rejected]: (state) => {
      state.error = 'Authorization error';
    },
  },
});

export const SignUpReducer = SignUpSlice.reducer;
