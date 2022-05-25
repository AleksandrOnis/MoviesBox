import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: '',
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.login = action.payload;
      state.isLoggedIn = true;
    },
    logOut: state => {
      state.login = '';
      state.isLoggedIn = false;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
