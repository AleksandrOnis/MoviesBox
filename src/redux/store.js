import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from 'redux/user/userSlice';
import { moviesApi } from 'api/movies';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    user: userSlice.reducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), moviesApi.middleware],
});

// setupListeners(store.dispatch);
