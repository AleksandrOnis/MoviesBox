import styled from 'styled-components';
import { Wrap } from '../Wrap';
import { Logo } from './Logo';
import bgImgD from 'images/header-bg/bgimg1024@2x.jpg';
import bgImgT from 'images/header-bg/bgimg760@2x.jpg';
import bgImgM from 'images/header-bg/bgimg@2x.jpg';
import { Navigation } from './Navigation';
import { Toggle } from 'components/Toggle';
import { useState, useEffect } from 'react';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 45px;
  width: 100%;
  height: 230px;
  margin-left: auto;
  margin-right: auto;
  background: url(${bgImgM}) center no-repeat;
  background-size: cover;
  @media screen and (min-width: 768px) {
    padding-left: 70px;
    padding-right: 70px;
    background-image: url(${bgImgT});
    justify-content: space-between;
  }

  @media screen and (min-width: 1024px) {
    background-image: url(${bgImgD});
  }
`;

export const Header = () => {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const toggleThemeInLS = localStorage.getItem('toggleTheme');
    if (toggleThemeInLS !== null)
      if (!JSON.parse(toggleThemeInLS)) {
        const refCheckBoxTheme = document.getElementById('toggleTheme');
        refCheckBoxTheme.click();
        setToggle(false);
      }
  }, []);

  useEffect(() => {
    localStorage.setItem('toggleTheme', toggle);
  }, [toggle]);

  // const saveToLS = () => {
  //   if (refCheckBox.checked) {
  //     refCheckBox.click();
  //     setToggle(true);
  //   }
  // };

  // const loadFromLS = () => {
  //   if (refCheckBox.checked) {
  //     refCheckBox.click();
  //     setToggle(true);
  //   }
  // };

  return (
    <StyledHeader>
      <Logo title="Filmoteka" />
      <Navigation />
      <Toggle active={toggle} onChange={() => setToggle(!toggle)} />
    </StyledHeader>
  );
};
