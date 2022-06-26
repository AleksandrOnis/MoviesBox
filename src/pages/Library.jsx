import { Header } from 'modules/header/Header';
import { Dashboard } from 'modules/dashboard/Dashboard';
import { Footer } from 'modules/footer/Footer';
import { Main } from 'modules/common';
import { useLogOutRedirect, usePagination } from 'hooks';
import { useGetMoviesQuery } from 'api/moviesBox';
import { useEffect } from 'react';
import { Gallery } from 'modules/gallery/Gallery';

export const Library = () => {
  useLogOutRedirect();
  const { page, getPage, pageCount, setPageCount } = usePagination();
  const { data: movies } = useGetMoviesQuery(page);

  useEffect(() => {
    setPageCount(movies?.total_pages);
  }, [movies]);

  return (
    <>
      <Header>
        <Dashboard />
      </Header>
      <Main>
        {movies && <Gallery movies={movies.result} getPage={getPage} pageCount={pageCount} />}
      </Main>

      <Footer />
    </>
  );
};
