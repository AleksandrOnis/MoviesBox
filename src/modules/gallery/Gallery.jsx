import styled from 'styled-components';
import { moviesAPI } from 'api';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { Loader, Modal, Container, DescriptionMovie } from 'modules/common';
import { MovieCard } from './MovieCard';
import { deviceScreen } from 'utils/stylesVars';

const SectionGallery = styled.section``;
const MoviesList = styled.ul`
  margin-left: auto;
  margin-right: auto;
  ${deviceScreen.M} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
  }
  ${deviceScreen.L} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  ${deviceScreen.XL} {
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
  return (
    <SectionGallery>
      <Container>
        {movies.length && (
          <MoviesList>
            {movies.map(movie => {
              return <MovieCard setModalIsOpen={setModalIsOpen} key={movie.id} movie={movie} />;
            })}
          </MoviesList>
        )}
      </Container>
      <Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen}>
        <DescriptionMovie />
      </Modal>
    </SectionGallery>
  );
};
