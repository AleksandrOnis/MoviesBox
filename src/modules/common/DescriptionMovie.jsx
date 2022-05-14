import styled from 'styled-components';
import { deviceScreen } from 'utils/stylesVars';
import noPoster from 'images/film.jpg';

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
  background-color: rgb(165, 165, 165);
  background-image: url(${noPoster});
  background-size: cover;
  background-repeat: no-repeat;
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
  object-fit: cover;
  height: 100%;
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

const Description = styled.div`
  margin-bottom: 20px;
  line-height: 1.7;
`;

export const DescriptionMovie = ({ title, overview, poster }) => {
  return (
    <Container>
      <WrapPoster>
        <Poster src={poster} alt={`No poster for movie ${title}`} />
      </WrapPoster>
      <WrapContent>
        <Title>{title}</Title>
        <Info></Info>
        <About>About</About>
        <Description>{overview}</Description>
      </WrapContent>
    </Container>
  );
};
