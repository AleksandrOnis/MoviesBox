import styled from 'styled-components';
import noPoster from 'images/no-poster.jpg';
import { cubicBezier } from 'utils/stylesVars';
import { titlesGenres } from 'utils/genres';

const Card = styled.li`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding: 0 10px 10px 10px;
  width: 280px;
  line-height: 1.33;
  letter-spacing: 0.02em;

  border-radius: 5px;
  cursor: pointer;

  transition: transform 250ms ${cubicBezier}, box-shadow 250ms ${cubicBezier};

  :hover,
  :focus {
    transform: scale(1.01);
    box-shadow: 8px 8px 10px rgba(37, 37, 37, 0.6);
  }
`;
const Thumb = styled.div`
  /* background: url(${noPoster}) cover no-repeat; */
  border-radius: 5px;
  height: 380px;

  overflow: hidden;
  pointer-events: none;
`;
const Image = styled.img`
  width: 280px;
  height: 400px;
  border-radius: 5px;
  object-fit: fill;
`;
const WrapTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  pointer-events: none;
`;
const Title = styled.h2`
  /* text-transform: uppercase; */
`;
const Year = styled.span``;
const WrapInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
  color: #ff6b01;
  pointer-events: none;
`;
const Vote = styled.span`
  display: inline-block;
  text-align: center;
  padding-top: 2px;
  width: 36px;
  border-radius: 5px;
  color: #ffffff;
  background-color: #ff6b01;
`;

export const MovieCard = ({ movie, setModalIsOpen, setId, genresMovie }) => {
  const {
    title = '',
    release_date = 'xxxx',
    vote_average = 'x.x',
    poster_path = '',
    id = '',
  } = movie;
  const genresIds = genresMovie(movie.genre_ids);
  const genres = titlesGenres(genresIds);

  return (
    <Card
      onClick={() => {
        setModalIsOpen(true);
        setId(id);
      }}
    >
      <Thumb>
        {poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={`Poster for movie ${title}`}
          />
        ) : (
          <Image src={{ noPoster }} alt={`No poster for movie ${title}`} />
        )}
      </Thumb>
      <WrapTitle>
        <Title> {title} </Title>
        <Year>{Number.parseInt(release_date)}</Year>
      </WrapTitle>
      <WrapInfo>
        {genres}
        <Vote>{vote_average}</Vote>
      </WrapInfo>
    </Card>
  );
};
