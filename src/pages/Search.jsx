import { Main, NotFound } from 'modules/common';
import { Header } from 'modules/header/Header';
import { Dashboard } from 'modules/dashboard/Dashboard';
import { Footer } from 'modules/footer/Footer';
import { Gallery } from 'modules/gallery/Gallery';
import { useGetMoviesBySearchQuery } from 'api/movies';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectors } from 'redux/selectors';
import { useCurrentPageIsValid } from 'hooks';

export const Search = () => {
  useCurrentPageIsValid();
  const navigate = useNavigate();
  const location = useLocation();
  const page = useSelector(selectors.page);
  const query = useSelector(selectors.searchQuery);
  const queryFromAddressBar = new URLSearchParams(location.search).get('query');
  const pageFromAddressBar = new URLSearchParams(location.search).get('page');
  const { data: movies } = useGetMoviesBySearchQuery({
    query: queryFromAddressBar,
    page: pageFromAddressBar,
  });

  useEffect(() => {
    navigate(`/search?query=${queryFromAddressBar}&page=${page}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <Header>
        <Dashboard />
      </Header>
      <Main>
        {movies?.results.length === 0 && <NotFound>Nothing found for this request!</NotFound>}
        {movies && (
          <Gallery movies={movies.results} paginationKey={query} pageCount={movies.total_pages} />
        )}
      </Main>
      <Footer />
    </>
  );
};
