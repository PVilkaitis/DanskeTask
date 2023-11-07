import React, { useState, useEffect } from 'react';
import useFilms from '../../hooks/useFilms';
import useActors from '../../hooks/useActors';
import { FilmCard, ActorCard } from '../../components';
import { ActorProps } from '../../api/types';
import { v4 as uuidv4 } from 'uuid';
import { actorsFilter } from '../../utils/actorsFilter';

import styles from './styles.module.css';

const FilmsContainer = () => {
  const [activeActors, setActiveActors] = useState<ActorProps[]>();

  const { isFilmsLoading, films, filmsError } = useFilms();

  const { isActorsLoading, actors, actorsError } = useActors();

  const actorsHandler = (filmId: number) => {
    if (actors && films) {
      const data = actorsFilter(actors, filmId);
      setActiveActors(data);
    }
  };

  useEffect(() => {
    console.log('activeActors ', activeActors);
  }, [activeActors]);

  return (
    <div className={styles.container}>
      <div className={styles.filmsContainer}>
        {films &&
          films.map((item) => (
            <FilmCard
              key={item.episode_id}
              film={item}
              actorsHandler={actorsHandler}
            />
          ))}
        {isFilmsLoading && <p>Loading</p>}
      </div>

      <div className={styles.actorsContainer}>
        {activeActors &&
          activeActors.map((item, index) => (
            <ActorCard key={uuidv4()} index={index} actor={item} />
          ))}
      </div>
    </div>
  );
};

export default FilmsContainer;
