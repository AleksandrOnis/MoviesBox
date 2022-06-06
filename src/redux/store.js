import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userSlice } from 'redux/user/userSlice';
import { moviesApi } from 'api/movies';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { themeSlice } from './theme/themeSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const rootReducer = combineReducers({
  [moviesApi.reducerPath]: moviesApi.reducer,
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
    ...getDefaultMiddleware({ serializableCheck: false }),
    moviesApi.middleware,
  ],
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
