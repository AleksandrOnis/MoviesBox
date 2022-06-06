import { createSlice } from '@reduxjs/toolkit';
import { darkTheme, lightTheme } from 'utils/theme';

const initialState = darkTheme;
export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: state => (state.mode === 'light' ? (state = darkTheme) : (state = lightTheme)),
  },
});

export const { switchTheme } = themeSlice.actions;
