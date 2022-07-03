import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { rootState } from 'redux/store';

const baseQuery = fetchBaseQuery({
  // baseUrl: 'http://localhost:3001/api',
  baseUrl: 'https://moviesbox-api.herokuapp.com/api',
  prepareHeaders: headers => {
    const TOKEN = rootState().user.token;
    headers.set('authorization', `Bearer ${TOKEN}`);
    return headers;
  },
});

export const moviesBoxApi = createApi({
  reducerPath: ['moviesBoxApi'],
  baseQuery,
  tagTypes: ['Movies'],
  endpoints: builder => ({
    getMovies: builder.query({
      query: (page = 1) => `/movies?page=${page}`,
      providesTags: ['Movies'],
    }),

    addMovie: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/movies/add`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Movies'],
    }),
    deleteMovie: builder.mutation({
      query: id => ({
        url: '/movies',
        method: 'DELETE',
        body: { movieId: id },
      }),
      invalidatesTags: ['Movies'],
    }),
  }),
});

export const { useGetMoviesQuery, useAddMovieMutation, useDeleteMovieMutation } = moviesBoxApi;
