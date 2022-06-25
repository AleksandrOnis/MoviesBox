import styled from 'styled-components';
import { Header } from 'modules/header/Header';
import { Dashboard } from 'modules/dashboard/Dashboard';
import { Footer } from 'modules/footer/Footer';
import { Main } from 'modules/common';
import { useLogOutRedirect } from 'hooks';
import { useGetMoviesQuery } from 'api/moviesBox';
import { useEffect, useState } from 'react';
import { Gallery } from 'modules/gallery/Gallery';
import { usePagination } from 'hooks/usePagination';

export const Library = () => {
  useLogOutRedirect();
  const { page, getPage, pageCount, setPageCount } = usePagination();
  const [films, setFilms] = useState(null);
  const { data: movies } = useGetMoviesQuery(page);

  useEffect(() => {
    setFilms(movies.result);
    setPageCount(movies.total_pages);
  }, [movies]);

  return (
    <>
      <Header>
        <Dashboard />
      </Header>
      <Main>{films && <Gallery movies={films} getPage={getPage} pageCount={pageCount} />}</Main>

      <Footer />
    </>
  );
};
