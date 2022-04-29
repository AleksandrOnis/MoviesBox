import styled from 'styled-components';
import noPoster from 'images/no-poster.jpg';

const Card = styled.li`
  cursor: pointer;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-radius: 5px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 400;
  letter-spacing: 0.08em;

  -webkit-transition: -webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    -webkit-box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: -webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    -webkit-box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    -webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    -webkit-box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    -webkit-transform: scale(1.01);
    transform: scale(1.01);
    -webkit-box-shadow: 8px 8px 10px rgba(37, 37, 37, 0.6);
    box-shadow: 8px 8px 10px rgba(37, 37, 37, 0.6);
  }
`;
const LinkA = styled.a`
  pointer-events: none;
`;
const Thumb = styled.div`
  /* background-color: #a5a5a5; */
  /* background: url(${noPoster} cover no-repeat); */
  border-radius: 5px;
  width: 100%;
  height: 398px;
  overflow: hidden;
  pointer-events: none;
`;
const Image = styled.img`
  border-radius: 5px;
  -o-object-fit: cover;
  object-fit: cover;
  height: 100%;
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
const Genres = styled.span``;
const Vote = styled.span`
  display: inline-block;
  text-align: center;
  padding-top: 2px;
  width: 36px;
  height: 16px;
  border-radius: 5px;
  color: #ffffff;
  background-color: #ff6b01;
`;

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
        {/* <Genres>{ genres }</Genres> */}
        <Year>{Number.parseInt(release_date)}</Year>
        <Vote>{vote_average}</Vote>
      </WrapInfo>
    </Card>
  );
};
