import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
  page: 1,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setQuery } = searchSlice.actions;
