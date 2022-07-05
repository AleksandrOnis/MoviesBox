import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userSlice } from 'redux/user/userSlice';
import { moviesApi } from 'api/movies';
import { authApi } from 'api/auth';
import { moviesBoxApi } from 'api/moviesBox';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { themeSlice } from './theme/themeSlice';
import { moviesBoxSlice } from './moviesBox/moviesBoxSlice';
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
  [moviesBoxApi.reducerPath]: moviesBoxApi.reducer,
  user: userSlice.reducer,
  theme: themeSlice.reducer,
  moviesBox: moviesBoxSlice.reducer,
});

const rootPersistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

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
    moviesBoxApi.middleware,
  ],
});

export const persistor = persistStore(store);

export const rootState = store.getState;

setupListeners(store.dispatch);
