import styled from 'styled-components';
import defaultImage from 'images/window-login.jpg';
import { deviceScreen } from 'utils/stylesVars';

const defaultTitle = 'MoviesBox';
const defaultText = 'it`s your window to the world of cinema';

export const Hero = ({ image = defaultImage, title = defaultTitle, text = defaultText }) => {
  return (
    <>
      <HeroTitle>{title}</HeroTitle>
      <HeroText>{text}</HeroText>
      <WrapImage>
        <HeroImage src={image} />
      </WrapImage>
    </>
  );
};

const HeroTitle = styled.p`
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 1.2;
  text-align: center;

  ${deviceScreen.L} {
    font-size: 24px;
  }
`;
const HeroText = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 1.2;
  text-align: center;

  ${deviceScreen.L} {
    font-size: 18px;
  }
`;

const WrapImage = styled.div`
  overflow: hidden;
  border-radius: 50px;
`;

const HeroImage = styled.img`
  transition: transform 1s;

  :hover,
  :focus {
    transform: scale(1.4);
  }
`;
