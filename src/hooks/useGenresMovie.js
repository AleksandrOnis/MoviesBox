import { moviesApi } from 'api/movies';
import { getGenresMovie, titlesGenres } from 'utils/genres';

export const useGenresMovie = genre_ids => {
  const { data: genresList } = moviesApi.useGetGenresListQuery();
  const genresMovie = getGenresMovie(genresList);
  const genresIds = genresMovie(genre_ids);
  const genres = titlesGenres(genresIds);

  return genres;
};
