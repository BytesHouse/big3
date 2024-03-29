import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { BASE_URL, SIGN_IN, SIGN_UP } from '../../../../../api/Constants';
import { IAuthState } from '../../../../../types/models/IAuth';
import {
  addUserToLocalStorage,
  deleteUserFromLocalStorage,
  getUserFromLocalStorage,
} from '../../../../utils/localStorage';
import { post } from '../../../../../api/fetchRequests/baseRequest';

const linkSignUp = BASE_URL + SIGN_UP;
const linkSignIn = BASE_URL + SIGN_IN;

export const signUp: any = createAsyncThunk('auth/signup', async (data: any, thunkApi) => {
  const { userName, login, password } = data;
  try {
    const response = await post(
      linkSignUp,
      JSON.stringify({
        login,
        password,
        userName,
      })
    );
    return response;
  } catch (error: any) {
    console.log(error);
    if (error.message === 'status: 409') toast.error('User with that login already exists');
    return thunkApi.rejectWithValue(error.message);
  }
});

export const signIn: any = createAsyncThunk(
  'auth/AuthSignIn',
  async (data: any, { reject }: any) => {
    const login = data.login;
    const password = data.password;

    try {
      const response = await post(
        linkSignIn,
        JSON.stringify({
          login,
          password,
        })
      );
      console.log(response);
      toast.success(`Hello there ${response.name}`);
      return response;
    } catch (error: any) {
      if (error.message === 'status: 401') toast.error('The login or password is incorrect');
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
  reducers: {
    logoutUser: (state) => {
      state.auth = null;
      deleteUserFromLocalStorage();
    },
  },
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

export const { logoutUser } = AuthSlice.actions;

export const AuthReducer = AuthSlice.reducer;
