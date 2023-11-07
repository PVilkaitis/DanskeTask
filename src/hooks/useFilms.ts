import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  loadFilms,
  loadFilmsComplete,
  loadFilmsError,
} from '../redux/filmsSlice';
import type { RootState } from '../redux/store';
import { getFilms } from '../api/starWarsService';

const useFilms = () => {
  const dispatch = useDispatch();
  const films = useSelector((state: RootState) => state.films.films);
  const isFilmsLoading = useSelector(
    (state: RootState) => state.films.isLoading,
  );
  const filmsError = useSelector((state: RootState) => state.films.error);

  useEffect(() => {
    if (films.length === 0 && !filmsError) {
      console.log('here');
      dispatch(loadFilms());
      getFilms()
        .then((response) => {
          dispatch(loadFilmsComplete(response.results));
        })
        .catch((error) => {
          dispatch(loadFilmsError(error.message));
        });
    }
  }, [dispatch]);

  return { films, isFilmsLoading, filmsError };
};

export default useFilms;
