import styled from 'styled-components';
import { Wrap } from '../Wrap';
import { Logo } from './Logo';
import bgImgD from 'images/header-bg/bgimg1024@2x.jpg';
import bgImgT from 'images/header-bg/bgimg760@2x.jpg';
import bgImgM from 'images/header-bg/bgimg@2x.jpg';
import { Navigation } from './Navigation';
import { Toggle } from 'components/common/Toggle';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { ThemeContext } from 'context';
import { deviceScreen } from 'utils/theme';
import { SearchBar } from './SearchBar';
import { Login } from './Login';

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

export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const ThemeInLS = localStorage.getItem('theme');
    if (ThemeInLS !== null)
      if (!JSON.parse(ThemeInLS)) {
        const refCheckBoxTheme = document.getElementById('toggleTheme');
        refCheckBoxTheme.click();
        setTheme(false);
      }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <StyledHeader>
      <Wrap fd="row" jc="space-between" h="40px" m="0 0 40px 0">
        <Logo title="Filmoteka" />
        <Navigation />
        <Login />
      </Wrap>
      <Wrap fd="row" jc="space-between" ai="center">
        <SearchBar />
        <Toggle active={theme} onChange={() => setTheme(!theme)} />
      </Wrap>
    </StyledHeader>
  );
};
