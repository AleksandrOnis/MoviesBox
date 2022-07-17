import styled from 'styled-components';
import { Header } from 'modules/header/Header';
import { Dashboard } from 'modules/dashboard/Dashboard';
import { Footer } from 'modules/footer/Footer';
import { Main, NotFound } from 'modules/common';
import { useLogOutRedirect, usePagination } from 'hooks';
import { useGetMoviesQuery } from 'api/moviesBox';
import { useEffect } from 'react';
import { Gallery } from 'modules/gallery/Gallery';
import { useDispatch } from 'react-redux';
import { moviesIds } from 'redux/moviesBox/moviesBoxSlice';

export const Library = () => {
  useLogOutRedirect();
  const { page, setPage, pageCount, setPageCount } = usePagination();
  const { data: movies } = useGetMoviesQuery(page, { refetchOnMountOrArgChange: true });
  const dispatch = useDispatch();

  useEffect(() => {
    setPageCount(movies?.total_pages);
    dispatch(moviesIds(movies?.moviesIds));
  }, [movies]);

  return (
    <>
      <Header>
        <Dashboard />
      </Header>
      <Main>
        {movies?.result === 0 && <NotFound>Add favorite movies to your collection!</NotFound>}
        {movies?.result.length > 0 && (
          <Gallery movies={movies.result} setPage={setPage} pageCount={pageCount} />
        )}
      </Main>
      <Footer />
    </>
  );
};
