import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.li``;
const Thumb = styled.div``;
const Image = styled.img``;
const Wrap = styled.div``;
const Title = styled.h2``;
const Info = styled.p``;
const Genres = styled.span``;
const Year = styled.span``;
const Vote = styled.span``;

export const MovieCard = ({ movie }) => {
  const {
    title = '',
    genres = '',
    release_date = 'xxxx',
    vote_average = 'x.x',
    poster_path = '',
  } = movie;

  return (
    <Card>
      <Thumb>
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={`No poster for movie ${title}`}
        />
      </Thumb>
      <Wrap>
        <Title> {title} </Title>
        <Info>
          {/* <Genres>{ genres }</Genres> */}
          <Year>{Number.parseInt(release_date)}</Year>
          <Vote>{vote_average}</Vote>
        </Info>
      </Wrap>
    </Card>
  );
};
