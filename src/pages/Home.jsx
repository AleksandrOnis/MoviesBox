import { Main } from 'modules/common';
import { Header } from 'modules/header/Header';
import { Dashboard } from 'modules/dashboard/Dashboard';
import { Footer } from 'modules/footer/Footer';
import { Gallery } from 'modules/gallery/Gallery';
import { useGetTrendingMoviesQuery } from 'api/movies';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectors } from 'redux/selectors';
import { useLocation } from 'react-router-dom';
import { useSetPageFromAddressBar } from 'hooks';

export const Home = () => {
  const location = useLocation();
  const setPageFromAddressBar = useSetPageFromAddressBar();
  const page = useSelector(selectors.page);

  const { data: movies } = useGetTrendingMoviesQuery(page || 1, {
    refetchOnMountOrArgChange: 600,
  });

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
      <Main>{movies && <Gallery movies={movies.results} pageCount={movies.total_pages} />}</Main>
      <Footer />
    </>
  );
};
