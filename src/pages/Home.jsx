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
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState();
  const [movies, setMovies] = useState(null);
  const { data: moviesByQuery } = useGetMoviesBySearchQuery(searchQuery);
  const { data: trendingMovies, isError, isLoading } = useGetTrendingMoviesQuery(page);
  const getSearchQuery = value => {
    setSearchQuery(value);
  };

  const getPage = newPage => setPage(newPage);
  useEffect(() => {
    setMovies(trendingMovies?.results);
    setPageCount(trendingMovies?.total_pages);
  }, [trendingMovies]);

  useEffect(() => {
    searchQuery && setMovies(moviesByQuery);
  }, [moviesByQuery]);

  useEffect(() => {}, [page]);

  return (
    <>
      <Header>
        <Dashboard getSearchQuery={getSearchQuery} />
      </Header>
      <Main id="main">
        {/* {isLoading ? <Loader /> : <Gallery movies={movies} />} */}
        {movies && <Gallery movies={movies} getPage={getPage} pageCount={pageCount} />}
      </Main>
      <Footer />
    </>
  );
};
