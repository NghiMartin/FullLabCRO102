import { configureStore } from '@reduxjs/toolkit';
import counterReducer  from './counterSlice';
import { pokemonApi } from './pokemon-api-slice';
import { setupListeners } from '@reduxjs/toolkit/query';
import userReducer from './userSlice';
export const store = configureStore({
  reducer: {
    Counter: counterReducer,
    Users : userReducer,
    [pokemonApi.reducerPath] : pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware().concat(pokemonApi.middleware),
})

setupListeners(store.dispatch);