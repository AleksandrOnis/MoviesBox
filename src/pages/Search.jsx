import { Main, NotFound } from 'modules/common';
import { Header } from 'modules/header/Header';
import { Dashboard } from 'modules/dashboard/Dashboard';
import { Footer } from 'modules/footer/Footer';
import { Gallery } from 'modules/gallery/Gallery';
import { useGetMoviesBySearchQuery } from 'api/movies';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectors } from 'redux/selectors';
import { useEffect } from 'react';
import { useSetPageFromAddressBar } from 'hooks';

export const Search = () => {
  const location = useLocation();
  const setPageFromAddressBar = useSetPageFromAddressBar();
  const page = useSelector(selectors.page);
  const query = useSelector(selectors.searchQuery);
  const queryFromAddressBar = new URLSearchParams(location.search).get('query');
  const { data: movies } = useGetMoviesBySearchQuery({
    query: queryFromAddressBar,
    page: page || 1,
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
      <Main>
        {movies?.results.length === 0 && <NotFound>Nothing found for this request!</NotFound>}
        {movies && <Gallery movies={movies.results} pageCount={movies.total_pages} />}
      </Main>
      <Footer />
    </>
  );
};
