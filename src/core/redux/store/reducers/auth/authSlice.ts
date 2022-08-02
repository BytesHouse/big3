import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { BASE_URL, SIGN_IN, SIGN_UP } from '../../../../../api/Constants';
import { IAuthState } from '../../../../../types/models/IAuth';
import { addUserToLocalStorage, getUserFromLocalStorage } from '../../../../utils/localStorage';

const linkSignUp = BASE_URL + SIGN_UP;
const linkSignIn = BASE_URL + SIGN_IN;

export const signUp: any = createAsyncThunk('auth/signup', async (data: any, thunkApi) => {
  const { userName, login, password } = data;
  try {
    const response = await axios.post(linkSignUp, {
      login,
      password,
      userName,
    });
    return response.data;
  } catch (error: any) {
    if (error.response.data.indexOf('23505') >= 0)
      toast.error('User with that login already exists');
    return thunkApi.rejectWithValue(error.response.data);
  }
});

export const signIn: any = createAsyncThunk(
  'auth/AuthSignIn',
  async (data: any, { reject }: any) => {
    const login = data.login;
    const password = data.password;

    try {
      const response = await axios.post(linkSignIn, {
        login,
        password,
      });
      toast.success(`Hello there ${response.data.name}`);
      return response.data;
    } catch (error: any) {
      if (error.response.data.title === 'Unauthorized')
        toast.error('The login or password is incorrect');
      return reject(error);
    }
  }
);

const initialState: IAuthState = {
  auth: getUserFromLocalStorage(),
  isLoading: false,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [signUp.pending]: (state) => {
      state.isLoading = true;
    },
    [signUp.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.auth = action.payload;
      addUserToLocalStorage(action.payload);
      toast.success(`Hello where ${action.payload.name}`);
    },
    [signUp.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [signIn.pending]: (state) => {
      state.isLoading = true;
    },
    [signIn.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.auth = action.payload;
      addUserToLocalStorage(action.payload);
    },
    [signIn.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const AuthReducer = AuthSlice.reducer;
