import { Main } from 'modules/common';
import { Header } from 'modules/header/Header';
import { Dashboard } from 'modules/dashboard/Dashboard';
import { Footer } from 'modules/footer/Footer';
import { Gallery } from 'modules/gallery/Gallery';
import { useGetTrendingMoviesQuery } from 'api/movies';
import { useEffect, useId } from 'react';
import { useSelector } from 'react-redux';
import { selectors } from 'redux/selectors';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCurrentPageIsValid } from 'hooks';

export const Home = () => {
  useCurrentPageIsValid();
  const navigate = useNavigate();
  const location = useLocation();
  const id = useId();
  const page = useSelector(selectors.page);
  const pageFromAddressBar = new URLSearchParams(location.search).get('page') || 1;
  const { data: movies } = useGetTrendingMoviesQuery(pageFromAddressBar, {
    refetchOnMountOrArgChange: 600,
  });

  useEffect(() => {
    navigate(`/home?page=${page}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <Header>
        <Dashboard />
      </Header>
      <Main>
        {movies && (
          <Gallery movies={movies.results} paginationKey={id} pageCount={movies.total_pages} />
        )}
      </Main>
      <Footer />
    </>
  );
};
