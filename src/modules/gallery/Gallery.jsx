import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { Modal, Container, DescriptionMovie, Spinner } from 'modules/common';
import { MovieCard } from './MovieCard';
import { deviceScreen } from 'utils/stylesVars';
import { getGenresMovie } from 'utils/genres';
import * as moviesAPI from 'api/movies';
// import { useGetTrendingMoviesQuery } from 'api/movies';

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
  // const [movies, setMovies] = useState([]);
  const [Id, setId] = useState(null);
  // const [trailer, setTrailer] = useState('');
  // const [movieById, setMovieById] = useState(null);
  // const [genresList, setGenresList] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { data: movies, isError, isLoading } = moviesAPI.useGetTrendingMoviesQuery();
  // console.log('use', moviesAPI.useGetGenresListQuery());
  // console.log('data', movies);
  // console.log('error', isError);
  // console.log('loading', isLoading);
  // const [getMoviesByRequestQuery] = moviesAPI.useGetMoviesByRequestQuery();
  // const [getMovieById] = moviesAPI.useGetMovieByIdQuery();
  // console.log(moviesAPI.useGetMovieByIdQuery(Id));
  // const [getTrailerById] = moviesAPI.useGetTrailerByIdQuery();
  const { data: genresList } = moviesAPI.useGetGenresListQuery();
  // console.log('genresList', genresList);

  // async function fetchTrendingMovies(page = 1) {
  //   try {
  //     const responce = await getTrendingMovies(page);
  //     console.log(responce);
  //     setMovies(responce.results);
  //   } catch (error) {
  //     console.log(error.message);
  //     // toast.error('Sorry, server not resonding');
  //   }
  // }

  // async function fetchMovieById(id) {
  //   try {
  //     const data = await getMovieById(id);
  //     setMovieById(data);
  //   } catch (error) {
  //     // console.log(error.message);
  //     // toast.error('Sorry, server not resonding');
  //   }
  // }

  // async function fetchTrailer(id) {
  //   try {
  //     const response = await getTrailerById(id);
  //     if (response.results?.length > 0) {
  //       const trailers = response.results;
  //       const officialTrailers = trailers.find(
  //         trailer => trailer.name.toLowerCase() === 'official trailer',
  //       );
  //       officialTrailers ? setTrailer(officialTrailers.key) : setTrailer(trailers[0].key);
  //     } else toast.error('Sorry, trailer not found');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // const genresMovie = arrayGenres => genresList?.filter(genre => arrayGenres.includes(genre.id));

  // useEffect(() => {
  //   fetchMovieById(Id);
  //   fetchTrailer(Id);
  // }, [Id]);

  const genresMovie = getGenresMovie(genresList);
  // (!isError && !isLoading) =>render // toast.error('Sorry, server not resonding');

  return (
    <SectionGallery>
      <Container>
        {movies?.length ? (
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
      {/* {movieById && (
        <Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen}>
          <DescriptionMovie movie={movieById} genresMovie={genresMovie} trailer={trailer} />
        </Modal>
      )} */}
    </SectionGallery>
  );
};
