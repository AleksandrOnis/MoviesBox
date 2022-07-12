import styled from 'styled-components';
import { color, deviceScreen } from 'utils/stylesVars';
import noPoster from 'images/film.jpg';
import ReactPlayer from 'react-player';
import { Button, Modal } from '.';
import { useModal } from 'hooks/useModal';
import { useGetTrailerByIdQuery } from 'api/movies';
import { getOfficialTrailer } from 'utils/getOfficialTrailer';
import { useSelector, useDispatch } from 'react-redux';
import { isLoggedIn, moviesIds } from 'redux/selectors';
import { useState, useEffect } from 'react';
import { addMovieId, delMovieId } from 'redux/moviesBox/moviesBoxSlice';

export const DescriptionMovie = ({ movie = {}, addMovie, deleteMovie }) => {
  const { title, genre_ids, release_date, vote_average, poster_path, overview, id } = movie;
  const movieId = id || movie.movieId;
  const { isModal, openModal, closeModal } = useModal();
  const { data: trailers } = useGetTrailerByIdQuery(movieId);
  const isLogined = useSelector(isLoggedIn);
  const filmsIds = useSelector(moviesIds);
  const [isAdded, setIsAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  let trailer = null;
  if (trailers) {
    trailer = getOfficialTrailer(trailers); ///////////////////////MEMO
  }

  const handleOpenModal = () => {
    openModal();
  };

  const handleAddLibrary = async () => {
    try {
      setIsLoading(true);
      const data = {
        title,
        overview,
        movieId,
        poster_path,
        release_date,
        genre_ids,
        vote_average,
      };
      const result = await addMovie(data);
      //можна переписати логіку оновлення через кеш
      if (result) {
        setIsAdded(true);
        dispatch(addMovieId(movieId));
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelLibrary = async () => {
    try {
      setIsLoading(true);
      const result = await deleteMovie(movieId);
      if (result) {
        setIsAdded(false);
        dispatch(delMovieId(movieId));
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsAdded(filmsIds?.find(filmId => filmId === movieId));
  }, []);

  return (
    <>
      <Container>
        <WrapPoster>
          {poster_path ? (
            <Poster
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={`No poster for movie ${title}`}
            />
          ) : (
            <Poster src={noPoster} alt={`No poster for movie ${title}`} />
          )}
        </WrapPoster>
        <WrapContent>
          <Title>{title}</Title>
          <Info></Info>
          <About>About </About>
          <Description>{overview}</Description>
          <WrapButton>
            <Button w="140px" accent onClick={handleOpenModal}>
              Watch trailer
            </Button>
            {!isLogined ? (
              <Button w="140px" disabled>
                Login to add
              </Button>
            ) : isAdded ? (
              <Button w="140px" colorText="red" onClick={handleDelLibrary} isLoading={isLoading}>
                Del from library
              </Button>
            ) : (
              <Button w="140px" accent onClick={handleAddLibrary} isLoading={isLoading}>
                Add to library
              </Button>
            )}
          </WrapButton>
        </WrapContent>
      </Container>

      {isModal && (
        <Modal closeModal={closeModal} offListener>
          {trailer && (
            <TrailerWrap>
              <ReactPlayer
                width="100%"
                controls
                url={`https://www.youtube.com/watch?v=${trailer.key}`}
              />
            </TrailerWrap>
          )}
        </Modal>
      )}
    </>
  );
};

const Container = styled.div`
  overflow-y: auto;
  font-weight: 500;

  ${deviceScreen.M} {
    display: flex;
    gap: 30px;
    width: 618px;
  }

  ${deviceScreen.L} {
    gap: 40px;
    width: 882px;
  }
`;

const WrapPoster = styled.div`
  display: none;

  ${deviceScreen.M} {
    display: block;
    width: 50%;
    border-radius: 5px;
    margin-bottom: 30px;
    overflow: hidden;
  }
`;
const Poster = styled.img``;

const WrapContent = styled.div`
  min-width: 300px;
  ${deviceScreen.M} {
    width: 50%;
  }
`;

const Title = styled.p`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.15;

  ${deviceScreen.D} {
    font-size: 30px;
    line-height: 1.17;
  }
`;

const Info = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const About = styled.p`
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const Description = styled.div`
  width: 100%;
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 1.7;
`;

const WrapButton = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
  padding-right: 15px;
`;

const TrailerWrap = styled.div`
  min-width: 300px;

  ${deviceScreen.M} {
    width: 618px;
  }

  ${deviceScreen.L} {
    width: 882px;
  }
`;
