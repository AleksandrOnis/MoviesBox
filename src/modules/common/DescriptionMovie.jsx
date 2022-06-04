import styled from 'styled-components';
import { deviceScreen } from 'utils/stylesVars';
import noPoster from 'images/film.jpg';
import ReactPlayer from 'react-player';
import { Button, Modal } from '.';
import { useModal } from 'hooks/useModal';
import { useGetTrailerByIdQuery } from 'api/movies';
import { getOfficialTrailer } from 'utils/getOfficialTrailer';

export const DescriptionMovie = ({ movie = {} }) => {
  const { title, genres, release_date, vote_average = 'x.x', poster_path, overview, id } = movie;
  console.log(movie);

  const { isModal, openModal, closeModal } = useModal();

  const { data: trailers } = useGetTrailerByIdQuery(id);

  let trailer = null;
  if (trailers) {
    trailer = getOfficialTrailer(trailers); ///////////////////////MEMO
  }

  const handleButtonClick = () => {
    openModal();
  };

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
          <Button w="140px" accent onClick={handleButtonClick}>
            Watch trailer
          </Button>
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

const TrailerWrap = styled.div`
  min-width: 300px;

  ${deviceScreen.M} {
    width: 618px;
  }

  ${deviceScreen.L} {
    width: 882px;
  }
`;
