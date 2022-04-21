import styled from 'styled-components';
import { Wrap } from '../Wrap';
import { Logo } from './Logo';
import bgImg from 'images/header-bg/bgimg1024@2x.jpg';

const StyledHeader = styled(container)`
  background: url(${bgImg}) center no-repeat;
  background-size: contain;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Wrap p="50px" fd="row" g="10px">
        <Logo text="Filmoteka" />
      </Wrap>
    </StyledHeader>
  );
};
