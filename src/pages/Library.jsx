import styled from 'styled-components';
import { Header } from 'modules/header/Header';
import { Dashboard } from 'modules/dashboard/Dashboard';
import { Footer } from 'modules/footer/Footer';
import { Main } from 'modules/common';
import { useLogOutRedirect } from 'hooks';
import { useGetMoviesQuery } from 'api/moviesBox';
import { useEffect, useState } from 'react';
import { Gallery } from 'modules/gallery/Gallery';

export const Library = () => {
  useLogOutRedirect();
  const [films, setFilms] = useState(null);
  const { data } = useGetMoviesQuery();

  useEffect(() => {
    // setFilms(data);
    console.log(data);
    console.log(useGetMoviesQuery);
  }, [data]);

  return (
    <>
      <Header>
        <Dashboard />
      </Header>
      <Main>{data && <Gallery movies={data}></Gallery>}</Main>
      <Footer />
    </>
  );
};
