import { Header } from 'modules/header/Header';
import { Dashboard } from 'modules/dashboard/Dashboard';
import { Footer } from 'modules/footer/Footer';
import { Main, NotFound } from 'modules/common';
import { useCurrentPageIsValid, useGetListMovies } from 'hooks';
import { useGetMoviesQuery } from 'api/moviesBox';
import { useEffect, useId } from 'react';
import { Gallery } from 'modules/gallery/Gallery';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { selectors } from 'redux/selectors';

export const Library = () => {
  useCurrentPageIsValid();

  const navigate = useNavigate();
  const location = useLocation();
  const id = useId();

  const page = useSelector(selectors.page);

  const pageFromAddressBar = new URLSearchParams(location.search).get('page');

  const { data: movies } = useGetMoviesQuery(pageFromAddressBar, {
    refetchOnMountOrArgChange: true,
  });

  useGetListMovies(movies);

  useEffect(() => {
    navigate(`/library?page=${page}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <Header>
        <Dashboard />
      </Header>
      <Main>
        {movies?.result === 0 && <NotFound>Add favorite movies to your collection!</NotFound>}
        {movies?.result.length > 0 && (
          <Gallery movies={movies.result} paginationKey={id} pageCount={movies.total_pages} />
        )}
      </Main>
      <Footer />
    </>
  );
};
