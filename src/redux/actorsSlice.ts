import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActorProps } from '../api/types';

interface ActorsState {
  isLoading: boolean;
  actors: ActorProps[];
  error: string | undefined;
}

const initialState: ActorsState = {
  isLoading: false,
  actors: [],
  error: undefined,
};

export const actorsSlice = createSlice({
  name: 'actors',
  initialState,
  reducers: {
    loadActors: (state) => {
      state.isLoading = true;
    },
    loadActorsComplete: (state, action: PayloadAction<ActorProps[]>) => {
      state.actors = action.payload;
      state.isLoading = false;
    },
    loadActorsError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { loadActors, loadActorsComplete, loadActorsError } =
  actorsSlice.actions;

export default actorsSlice.reducer;
