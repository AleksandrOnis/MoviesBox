import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: '',
  token: '',
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.login = action.payload.user.name;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    logOut: state => {
      state.login = '';
      state.token = '';
      state.isLoggedIn = false;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
