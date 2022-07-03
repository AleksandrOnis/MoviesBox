import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: ['authApi'],
  baseQuery: fetchBaseQuery({
    // baseUrl: 'http://localhost:3001/api',
    baseUrl: 'https://moviesbox-api.herokuapp.com/api',
  }),
  endpoints: builder => ({
    registerUser: builder.mutation({
      query: body => ({
        url: '/auth/signup',
        method: 'POST',
        body,
      }),
    }),
    loginUser: builder.mutation({
      query: body => ({
        url: '/auth/signin',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
