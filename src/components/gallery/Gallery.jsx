import styled from 'styled-components';
import { moviesAPI } from 'api';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { Loader, Modal } from 'components/common';
import { MovieCard } from './MovieCard';
import { deviceScreen } from 'utils/theme';

const SectionGallery = styled.section``;
const MoviesList = styled.ul`
  ${deviceScreen.T} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
  }
  ${deviceScreen.D} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const Gallery = () => {
  const [movies, setMovies] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  async function getTrendingMovies(page = 1) {
    try {
      const data = await moviesAPI.getTrendingMovies(page);
      setMovies(data.results);
    } catch (error) {
      toast.error(error);
    } finally {
    }
  }

  useEffect(() => {
    getTrendingMovies();
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
    }
  }, [movies]);

  return movies.length > 0 ? (
    <SectionGallery>
      <MoviesList>
        {movies.map(movie => {
          return <MovieCard setModalIsOpen={setModalIsOpen} key={movie.id} movie={movie} />;
        })}
      </MoviesList>
      <Modal
        isOpen={modalIsOpen}
        setIsOpen={setModalIsOpen}
        justify="start"
        title="Movie description"
        mb="15px"
        w="540px"
      ></Modal>
    </SectionGallery>
  ) : (
    <Loader />
    // isLoading
  );
};
