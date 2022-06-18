import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: '',
  token: '',
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, action) => {
      console.log(action.payload.data);
      state.data = action.payload.data.user.email;
      state.token = action.payload.data.token;
      state.isLoggedIn = true;
    },
    logOut: state => {
      state.user = '';
      state.token = '';
      state.isLoggedIn = false;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
