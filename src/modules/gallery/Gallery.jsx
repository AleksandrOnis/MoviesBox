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
  const [Id, setId] = useState(null);
  const [trailer, setTrailer] = useState('');
  const [movieById, setMovieById] = useState(null);
  const [genresList, setGenresList] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  async function getTrendingMovies(page = 1) {
    try {
      const data = await moviesAPI.getTrendingMovies(page);
      setMovies(data.results);
    } catch (error) {
      // console.log(error.message);
      // toast.error('Sorry, server not resonding');
    }
  }

  async function getMovieById(id) {
    try {
      const data = await moviesAPI.getMovieById(id);
      setMovieById(data);
    } catch (error) {
      // console.log(error.message);
      // toast.error('Sorry, server not resonding');
    }
  }

  async function getTrailer(id) {
    try {
      const response = await moviesAPI.getTrailerById(id);
      if (response.results?.length > 0) {
        const trailers = response.results;
        const officialTrailers = trailers.find(
          trailer => trailer.name.toLowerCase() === 'official trailer',
        );
        officialTrailers ? setTrailer(officialTrailers.key) : setTrailer(trailers[0].key);
      } else toast.error('Sorry, trailer not found');
    } catch (error) {
      console.log(error);
    }
  }

  async function getGenreslist() {
    try {
      const response = await moviesAPI.getGenresList();
      setGenresList([...response.genres]);
    } catch (error) {
      // console.log(error.message);
      // toast.error('Sorry, server not resonding');
    }
  }

  const genresMovie = arrayGenres => genresList.filter(genre => arrayGenres.includes(genre.id));

  useEffect(() => {
    getTrendingMovies();
    getGenreslist();
  }, []);

  useEffect(() => {
    getMovieById(Id);
    getTrailer(Id);
  }, [Id]);

  return (
    <SectionGallery>
      <Container>
        {movies.length ? (
          <MoviesList>
            {movies.map(movie => {
              return (
                <MovieCard
                  setModalIsOpen={setModalIsOpen}
                  key={movie.id}
                  movie={movie}
                  setId={setId}
                  genresMovie={genresMovie}
                />
              );
            })}
          </MoviesList>
        ) : (
          <Spinner />
        )}
      </Container>

      {movieById && (
        <Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen}>
          <DescriptionMovie movie={movieById} genresMovie={genresMovie} trailer={trailer} />
        </Modal>
      )}
    </SectionGallery>
  );
};
