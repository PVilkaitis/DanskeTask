import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  loadActors,
  loadActorsComplete,
  loadActorsError,
} from '../redux/actorsSlice';
import type { RootState } from '../redux/store';
import { getActors } from '../api/starWarsService';

const useActors = () => {
  const dispatch = useDispatch();
  const actors = useSelector((state: RootState) => state.actors.actors);
  const isActorsLoading = useSelector(
    (state: RootState) => state.actors.isLoading,
  );
  const actorsError = useSelector((state: RootState) => state.actors.error);

  useEffect(() => {
    if (actors.length === 0 && !actorsError) {
      dispatch(loadActors());

      getActors()
        .then((response) => {
          dispatch(loadActorsComplete(response.results));
        })
        .catch((error) => {
          dispatch(loadActorsError(error.message));
        });
    }
  }, [dispatch]);

  return { actors, isActorsLoading, actorsError };
};

export default useActors;
