import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userSlice } from 'redux/user/userSlice';
import { moviesApi } from 'api/movies';
import { authApi } from 'api/auth';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { themeSlice } from './theme/themeSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const rootReducer = combineReducers({
  [moviesApi.reducerPath]: moviesApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  user: userSlice.reducer,
  theme: themeSlice.reducer,
});

const persistConfig = {
  key: 'theme',
  storage,
  whitelist: ['theme'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    moviesApi.middleware,
    authApi.middleware,
  ],
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
