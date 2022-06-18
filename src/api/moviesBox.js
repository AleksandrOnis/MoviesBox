import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { rootState } from 'redux/store';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://moviesbox-api.herokuapp.com/api/movies',
  prepareHeaders: headers => {
    const TOKEN = rootState().user.token;
    console.log(TOKEN);
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
      query: (page = 1) => `/?page=${page}`,
      transformResponse: response => response.results,
      providesTags: ['Movies'],
    }),

    addMovie: builder.mutation({
      query: ({ id, ...othersProps }) => ({
        url: `/add`,
        method: 'POST',
        body: othersProps,
        invalidatesTags: ['Movies'],
      }),
    }),
    deleteMovie: builder.mutation({
      query: id => ({
        url: '/',
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['Movies'],
    }),
  }),
});

export const { useGetMoviesQuery, useAddMovieMutation, usedeleteMovieMutation } = moviesBoxApi;
