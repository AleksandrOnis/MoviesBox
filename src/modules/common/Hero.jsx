import styled from 'styled-components';
import defaultBgImage from 'images/window-login.jpg';

const HeroWrap = styled.div`
  width: 700px;
`;
const HeroTitle = styled.h2``;
const HeroText = styled.p``;
// const HeroImage = styled.div`
//   width: 100%;
//   background: ${bg => `url(${bg}) center no-repeat`};
//   background-size: cover;
// `;

const HeroImage = styled.img`
  width: 500px;
`;

const defaultTitle = 'MoviesBox';
const defaultText = 'it`s your window to the world of cinema';

export const Hero = ({ bg = defaultBgImage, title = defaultTitle, text = defaultText }) => {
  return (
    <HeroWrap>
      <HeroTitle>{title}</HeroTitle>
      <HeroText>{text}</HeroText>
      {/* <HeroImage></HeroImage> */}
      <HeroImage src={defaultBgImage} />
    </HeroWrap>
  );
};
