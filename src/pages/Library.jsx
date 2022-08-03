import { Header } from 'modules/header/Header';
import { Dashboard } from 'modules/dashboard/Dashboard';
import { Footer } from 'modules/footer/Footer';
import { Main, NotFound } from 'modules/common';
import { useGetListMovies, useSetPageFromAddressBar } from 'hooks';
import { useGetMoviesQuery } from 'api/moviesBox';
import { useEffect } from 'react';
import { Gallery } from 'modules/gallery/Gallery';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectors } from 'redux/selectors';

export const Library = () => {
  const location = useLocation();
  const setPageFromAddressBar = useSetPageFromAddressBar();

  const page = useSelector(selectors.page);

  const { data: movies } = useGetMoviesQuery(page || 1, {
    refetchOnMountOrArgChange: true,
  });

  useGetListMovies(movies);

  useEffect(() => {
    const totalPages = movies?.total_pages;
    setPageFromAddressBar(totalPages);
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  return (
    <>
      <Header>
        <Dashboard />
      </Header>
      <Main>
        {movies?.result === 0 && <NotFound>Add favorite movies to your collection!</NotFound>}
        {movies?.result.length > 0 && (
          <Gallery movies={movies.result} pageCount={movies.total_pages} />
        )}
      </Main>
      <Footer />
    </>
  );
};
