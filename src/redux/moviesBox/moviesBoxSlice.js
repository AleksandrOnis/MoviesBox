import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  moviesIds: [],
};

export const moviesBoxSlice = createSlice({
  name: 'moviesBox',
  initialState,
  reducers: {
    moviesIds: (state, action) => {
      state.moviesIds = action.payload;
    },
  },
});

export const { moviesIds } = moviesBoxSlice.actions;
