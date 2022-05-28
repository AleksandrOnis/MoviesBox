import styled from 'styled-components';
import { deviceScreen } from 'utils/stylesVars';
import noPoster from 'images/film.jpg';
import ReactPlayer from 'react-player';
import { Button, Modal } from '.';
import { useModal } from 'hooks/useModal';
import { useGetTrailerByIdQuery } from 'api/movies';
import { getOfficialTrailer } from 'utils/getOfficialTrailer';

const Container = styled.div`
  width: 280px;
  max-height: 90vh;
  overflow-y: auto;
  padding-top: 48px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 41px;
  font-weight: 500;

  ${deviceScreen.M} {
    display: flex;
    width: 618px;
    padding-top: 42px;
    padding-bottom: 40px;
    padding-left: 28px;
    padding-right: 30px;
  }

  ${deviceScreen.D} {
    width: 882px;
    max-height: 95vh;
    padding-top: 50px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 40px;
  }
`;

const WrapContent = styled.div`
  ${deviceScreen.M} {
    max-width: 50%;
  }
`;

const WrapPoster = styled.div`
  overflow: hidden;
  width: 240px;
  border-radius: 5px;
  margin-bottom: 30px;

  ${deviceScreen.M} {
    width: 264px;
    margin-right: 32px;
  }

  ${deviceScreen.L} {
    width: 396px;
    margin-right: 30px;
  }
`;
const Poster = styled.img`
  object-fit: contain;
  width: 100%;
  border-radius: 5px;
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

const TrailerWrap = styled.div`
  width: 600px;
`;

const Description = styled.div`
  margin-bottom: 10px;
  line-height: 1.7;
`;

export const DescriptionMovie = ({ movie = {} }) => {
  const { title, genres, release_date, vote_average = 'x.x', poster_path, overview, id } = movie;

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
