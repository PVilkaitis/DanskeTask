import { axiosInstance } from './axiosInstance';
import { FilmsResponse, ActorsResponse } from './types';

export const getFilms = async (): Promise<FilmsResponse> => {
  const { data } = await axiosInstance.get('/films');
  return data;
};

export const getActors = async (): Promise<ActorsResponse> => {
  const { data } = await axiosInstance.get('/people');
  return data;
};
