import styled from 'styled-components';
import { moviesAPI } from 'api';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { Loader, Modal, Container, DescriptionMovie, Main, Spinner } from 'modules/common';
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
  const [movieById, setMovieById] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  async function getTrendingMovies(page = 1) {
    try {
      const data = await moviesAPI.getTrendingMovies(page);
      setMovies(data.results);
    } catch (error) {
      toast.error(error);
    }
  }

  async function getMovieById(id) {
    try {
      const data = await moviesAPI.getMovieById(id);
      setMovieById(data);
    } catch (error) {
      toast.error(error);
    }
  }

  const handleclick = event => {
    if (event.target.nodeName === 'LI') {
      const movieId = event.target.dataset.id;
      getMovieById(movieId);
      console.log(movieId);
    }
  };

  useEffect(() => {
    getTrendingMovies();
    const refMain = document.querySelector('main');
    refMain.addEventListener('click', handleclick);
    return () => refMain.removeEventListener('click', handleclick);
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
    }
  }, [movies]);
  return (
    <SectionGallery>
      <Container>
        {movies.length ? (
          <MoviesList>
            {movies.map(movie => {
              return <MovieCard setModalIsOpen={setModalIsOpen} key={movie.id} movie={movie} />;
            })}
          </MoviesList>
        ) : (
          <Spinner />
        )}
      </Container>

      {movieById && (
        <Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen}>
          <DescriptionMovie movie={movieById} />
        </Modal>
      )}
    </SectionGallery>
  );
};
