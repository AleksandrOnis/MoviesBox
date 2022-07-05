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
    addMovieId: (state, action) => {
      state.moviesIds = [...state.moviesIds, action.payload];
    },
    delMovieId: (state, action) => {
      state.moviesIds = state.moviesIds.filter(movieId => movieId !== action.payload);
    },
  },
});

export const { moviesIds, addMovieId, delMovieId } = moviesBoxSlice.actions;
