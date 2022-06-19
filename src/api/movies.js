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
  tagTypes: ['Films'],
  endpoints: builder => ({
    getMovieById: builder.query({
      query: id => `/movie/${id}`,
      providesTags: ['Films'],
    }),
    getMoviesBySearch: builder.query({
      query: (query = '', page = 1) =>
        `/search/movie?include_adult=false&query=${query}&page=${page}`,
      transformResponse: response => response.results,
      providesTags: ['Films'],
    }),
    getTrendingMovies: builder.query({
      query: (page = 1) => `/trending/movie/week?page=${page}`,
      transformResponse: response => response,
      providesTags: ['Films'],
    }),
    getTrailerById: builder.query({
      query: id => `/movie/${id}/videos`,
      transformResponse: response => response.results,
      providesTags: ['Films'],
    }),
    getGenresList: builder.query({
      query: () => `/genre/movie/list?official`,
      transformResponse: response => response.genres,
      providesTags: ['Films'],
    }),
  }),
});

export const {
  useGetTrendingMoviesQuery,
  useGetMoviesBySearchQuery,
  useGetTrailerByIdQuery,
  useGetMovieByIdQuery,
  useGetGenresListQuery,
} = moviesApi;
