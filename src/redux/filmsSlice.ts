import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilmProps } from '../api/types';

interface FilmsState {
  isLoading: boolean;
  films: FilmProps[];
  error: string | undefined;
}

const initialState: FilmsState = {
  isLoading: false,
  films: [],
  error: undefined,
};

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    loadFilms: (state) => {
      state.isLoading = true;
    },
    loadFilmsComplete: (state, action: PayloadAction<FilmProps[]>) => {
      state.films = action.payload;
      state.isLoading = false;
    },
    loadFilmsError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { loadFilms, loadFilmsComplete, loadFilmsError } =
  filmsSlice.actions;

export default filmsSlice.reducer;
