import { ActorProps } from '../api/types';

export const actorsFilter = (
  actors: ActorProps[],
  filmId: number,
): ActorProps[] => {
  return actors.filter((actor) =>
    actor.films.some((film) => {
      const urlParts = film.split('/');
      const id = parseInt(urlParts[urlParts.length - 2], 10);
      return id === filmId;
    }),
  );
};
