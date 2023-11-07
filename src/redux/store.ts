import { configureStore } from '@reduxjs/toolkit';
import filmsReducer from './filmsSlice';
import actorsReducer from './actorsSlice';

export const store = configureStore({
  reducer: {
    films: filmsReducer,
    actors: actorsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
