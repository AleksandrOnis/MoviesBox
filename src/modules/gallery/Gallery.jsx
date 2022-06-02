import styled from 'styled-components';
import { toast } from 'react-toastify';
import { Container, Spinner } from 'modules/common';
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

export const Gallery = ({ movies }) => {
  return (
    <SectionGallery>
      <Container>
        {movies ? (
          <MoviesList>
            {movies.map(movie => {
              return <MovieCard key={movie.id} movie={movie} />;
            })}
          </MoviesList>
        ) : (
          <Spinner />
        )}
      </Container>
    </SectionGallery>
  );
};
