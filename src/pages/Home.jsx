import { Main } from 'modules/common';
import { Header } from 'modules/header/Header';
import { Dashboard } from 'modules/dashboard/Dashboard';
import { Footer } from 'modules/footer/Footer';
import { Gallery } from 'modules/gallery/Gallery';
import { useGetTrendingMoviesQuery } from 'api/movies';
import { useEffect } from 'react';
import { usePagination } from 'hooks';

export const Home = () => {
  const { page, setPage, pageCount, setPageCount } = usePagination();
  const { data: movies } = useGetTrendingMoviesQuery(page, { refetchOnMountOrArgChange: 600 });

  useEffect(() => {
    setPageCount(movies?.total_pages);
  }, [movies]);

  return (
    <>
      <Header>
        <Dashboard />
      </Header>
      <Main>
        {movies && <Gallery movies={movies.results} setPage={setPage} pageCount={pageCount} />}
      </Main>
      <Footer />
    </>
  );
};
