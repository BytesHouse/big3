import { IUser } from '../../../types/models/IUser';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  user: IUser;
  isLogin: boolean;
  error: string;
}

const initialState: UserState = {
  user: {
    id: 0,
    userName: '',
    login: '',
    password: '',
  },
  isLogin: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    foo(state, action: PayloadAction) {
      console.log(state);
    },
  },
});

export default userSlice.reducer;
