import React from 'react';
import { FilmProps } from '../../api/types';

import styles from './styles.module.css';

export interface FilmCardProps {
  film: FilmProps;
  actorsHandler: (filmId: number) => void;
}

const Button = ({ film, actorsHandler }: FilmCardProps) => {
  const { title, episode_id, release_date } = film;
  return (
    <div className={styles.filmCard}>
      <div className={styles.filmInfo}>
        <h1 className={styles.filmTitle}>{title}</h1>
        <p className={styles.filmReleaseDate}>Release Date: {release_date}</p>
        <p className={styles.filmEpisodeId}>Episode ID: {episode_id}</p>
      </div>

      <button
        className={styles.showPeopleBtn}
        onClick={() => actorsHandler(episode_id)}
      >
        Show people
      </button>
    </div>
  );
};

export default Button;
