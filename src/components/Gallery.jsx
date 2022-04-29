import styled from 'styled-components';
import { moviesAPI } from 'api';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { Loader } from 'components/common/Loader';
import { MovieCard } from './MovieCard';

const SectionGallery = styled.section``;
const MoviesList = styled.ul`
  display: flex;
  gap: 30px;
`;

export const Gallery = () => {
  const [movies, setMovies] = useState([]);

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
      Movies
      <MoviesList>
        {movies.map(movie => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </MoviesList>
    </SectionGallery>
  ) : (
    <Loader />
    // isLoading
  );
};
