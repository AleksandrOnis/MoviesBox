import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const GUEST_TOKEN = process.env.REACT_APP_GUEST_TOKEN;

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.themoviedb.org/3',
  prepareHeaders: headers => {
    headers.set('authorization', `Bearer ${GUEST_TOKEN}`);
    return headers;
  },
});

export const moviesApi = createApi({
  reducerPath: ['moviesApi'],
  baseQuery,
  endpoints: builder => ({
    getMovieById: builder.query({
      query: id => `/movie/${id}`,
    }),
    getMoviesByRequest: builder.query({
      query: (query = '', page = 1) =>
        `/search/movie?include_adult=false&query=${query}&page=${page}`,
    }),
    getTrendingMovies: builder.query({
      query: (page = 1) => `/trending/movie/week?page=${page}`,
      transformResponse: response => response.results,
    }),
    getTrailerById: builder.query({
      query: id => `/movie/${id}/videos`,
    }),
    getGenresList: builder.query({
      query: () => `/genre/movie/list?official`,
      transformResponse: response => response.genres,
    }),
  }),
});

export const {
  useGetTrendingMoviesQuery,
  useGetMoviesByRequestQuery,
  useGetTrailerByIdQuery,
  useGetMovieByIdQuery,
  useGetGenresListQuery,
} = moviesApi;
