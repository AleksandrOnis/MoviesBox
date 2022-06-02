import styled from 'styled-components';
import { Loader, Main } from 'modules/common';
import { Header } from 'modules/header/Header';
import { Dashboard } from 'modules/dashboard/Dashboard';
import { Footer } from 'modules/footer/Footer';
import { Gallery } from 'modules/gallery/Gallery';
import { useGetTrendingMoviesQuery, useGetMoviesBySearchQuery } from 'api/movies';
import { useEffect, useState } from 'react';

// const isLoading = false;
// (!isError && !isLoading) =>render // toast.error('Sorry, server not resonding');

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState();
  const [movies, setMovies] = useState(null);
  const { data: moviesByQuery } = useGetMoviesBySearchQuery(searchQuery);
  const { data: trendingMovies, isError, isLoading } = useGetTrendingMoviesQuery();
  const getSearchQuery = value => {
    setSearchQuery(value);
    console.log(searchQuery);
  };

  useEffect(() => {
    setMovies(trendingMovies);
  }, [trendingMovies]);

  useEffect(() => {
    searchQuery && setMovies(moviesByQuery);
  }, [moviesByQuery]);

  return (
    <>
      <Header>
        <Dashboard getSearchQuery={getSearchQuery} />
      </Header>
      <Main id="main">
        {/* {isLoading ? <Loader /> : <Gallery movies={movies} />} */}
        {movies && <Gallery movies={movies} />}
      </Main>
      <Footer />
    </>
  );
};
