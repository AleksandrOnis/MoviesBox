import { Loader, Main } from 'modules/common';
import { Header } from 'modules/header/Header';
import { Dashboard } from 'modules/dashboard/Dashboard';
import { Footer } from 'modules/footer/Footer';
import { Gallery } from 'modules/gallery/Gallery';
import { useGetMoviesBySearchQuery } from 'api/movies';
import { useEffect } from 'react';
import { usePagination } from 'hooks/usePagination';
import { useLocation } from 'react-router-dom';

export const Search = () => {
  const location = useLocation();
  const { page, getPage, pageCount, setPageCount } = usePagination();
  const queryFromSearchParameter = new URLSearchParams(location.search).get('query');
  const { data: movies } = useGetMoviesBySearchQuery(queryFromSearchParameter, page);

  useEffect(() => {
    setPageCount(movies?.total_results);
  }, [movies]);

  return (
    <>
      <Header>
        <Dashboard />
      </Header>
      <Main>
        {/* {isLoading ? <Loader /> : <Gallery movies={movies} />} */}
        {movies && <Gallery movies={movies.results} getPage={getPage} pageCount={pageCount} />}
      </Main>
      <Footer />
    </>
  );
};
