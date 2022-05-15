import axios from 'axios';
import { toast } from 'react-toastify';
//https://api.themoviedb.org/3/genre/movie/list?api_key=590a6f37621ff65548240da14486f6b8&language=en-US
//Объект со списком жанров

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTBhNmYzNzYyMWZmNjU1NDgyNDBkYTE0NDg2ZjZiOCIsInN1YiI6IjYxOWExOGU4YmU3ZjM1MDA5MDdkNTNjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GfmtDhNir5MZJCHi4q2ycSDwats7A4Rz127QE9GN30w';

const handleFetch = async function (request) {
  // loading is start
  try {
    const response = await axios.get(request);
    return response.data;
  } catch (error) {
    toast.error(error);
    throw new Error(error.response.data.status_message);
  } finally {
    // loading is finished
  }
};

export const getTrendingMovies = function (page = 1) {
  return handleFetch(`/trending/movie/week?page=${page}`);
};

export const getMoviesByQuery = function (query = '', page = 1) {
  return handleFetch(`/search/movie?include_adult=false&query=${query}&page=${page}`);
};

export const getMovieById = function (id) {
  return handleFetch(`/movie/${id}`);
};

export const getTrailerById = function (id) {
  return handleFetch(`/movie/${id}/videos`);
};
