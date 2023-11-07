import React from 'react';
import { ActorProps } from '../../api/types';

import styles from './styles.module.css';

interface ActorCardProps {
  actor: ActorProps;
  index: number;
}

const ActorCard = ({ actor, index }: ActorCardProps) => {
  const { name, birth_year, gender, mass } = actor;

  return (
    <div className={styles.actorCard}>
      <div className={styles.actorNumber}>{index + 1}.</div>
      <div className={styles.actorName}>{name}</div>
      <div className={styles.actorBirthYear}>{birth_year}</div>
      <div className={styles.actorGender}>{gender}</div>
      <div className={styles.actorMass}>{mass} kg</div>
    </div>
  );
};

export default ActorCard;
