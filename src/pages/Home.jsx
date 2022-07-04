import { Loader, Main } from 'modules/common';
import { Header } from 'modules/header/Header';
import { Dashboard } from 'modules/dashboard/Dashboard';
import { Footer } from 'modules/footer/Footer';
import { Gallery } from 'modules/gallery/Gallery';
import { useGetTrendingMoviesQuery } from 'api/movies';
import { useEffect } from 'react';
import { usePagination } from 'hooks';

// const isLoading = false;
// (!isError && !isLoading) =>render // toast.error('Sorry, server not resonding');

export const Home = () => {
  const { page, getPage, pageCount, setPageCount } = usePagination();
  const {
    data: movies,
    isError,
    isLoading,
  } = useGetTrendingMoviesQuery(page, { refetchOnMountOrArgChange: 600 });

  useEffect(() => {
    setPageCount(movies?.total_pages);
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
