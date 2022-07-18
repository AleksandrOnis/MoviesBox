import styled from 'styled-components';
import { ButtonArrow, Container } from 'modules/common';
import { MovieCard } from './components/MovieCard';
import { deviceScreen } from 'utils/stylesVars';
import { Pagination } from './components/Pagination';
import { useAddMovieMutation, useDeleteMovieMutation } from 'api/moviesBox';

export const Gallery = ({ movies, pageCount, paginationKey }) => {
  const [addMovie] = useAddMovieMutation();
  const [deleteMovie] = useDeleteMovieMutation();

  return (
    <SectionGallery>
      <Container>
        <>
          <MoviesList>
            {movies.map(movie => {
              const movieId = movie.id || movie.movieId;
              return (
                <MovieCard
                  key={movieId}
                  movie={movie}
                  addMovie={addMovie}
                  deleteMovie={deleteMovie}
                />
              );
            })}
          </MoviesList>
          {pageCount > 1 && <Pagination key={paginationKey} pageCount={pageCount} />}
          {movies?.length > 9 && <ButtonArrow />}
        </>
      </Container>
    </SectionGallery>
  );
};

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
