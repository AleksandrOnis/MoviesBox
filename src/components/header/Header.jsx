import styled from 'styled-components';
import { Wrap } from 'components/common';
import { Logo, Navigation } from './components';
import bgImgD from 'images/header-bg/bgimg1024@2x.jpg';
import bgImgT from 'images/header-bg/bgimg760@2x.jpg';
import bgImgM from 'images/header-bg/bgimg@2x.jpg';
import { deviceScreen } from 'utils/theme';
import { Login } from './components/authMenu/Authorization';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 25px;
  padding-bottom: 25px;

  width: 100%;
  /* height: 230px; */
  margin-left: auto;
  margin-right: auto;
  background: url(${bgImgM}) center no-repeat;
  background-size: cover;
  ${deviceScreen.T} {
    padding-left: 70px;
    padding-right: 70px;
    background-image: url(${bgImgT});
    justify-content: space-between;
  }

  ${deviceScreen.D} {
    background-image: url(${bgImgD});
  }
`;

export const Header = ({ children }) => {
  return (
    <StyledHeader>
      <Wrap jc="space-between" h="40px" m="0 0 40px 0">
        <Logo title="Filmoteka" />
        <Navigation />
        <Login />
      </Wrap>
      {children}
    </StyledHeader>
  );
};
