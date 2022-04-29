import styled from 'styled-components';
import { Wrap } from './Wrap';
import { color } from 'utils/theme';

const StyledFooter = styled.footer`
  /* position: absolute;
  bottom: 0;
  left: 0;
  right: 0; */
  /* flex-grow: 1; */
  padding: 20px;
  font-size: 12px;
  line-height: 14px;
  color: ${color.light};
  letter-spacing: 0.1em;
  background-color: #292929;
`;

const FooterWrap = styled(Wrap)``;

const AccentWrap = styled.span`
  color: ${color.accent};
`;

const Text = styled.p`
  padding: 0 10px;
  :not(:last-child) {
    border-right: 1px solid ${color.accent};
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterWrap fd="row" jc="center">
        <Text>
          <AccentWrap>&copy;</AccentWrap> 2021
        </Text>
        <Text>All Rights Reserved</Text>
        <Text>
          Developed
          <AccentWrap> by </AccentWrap>
          Oleksandr Onyshchenko
        </Text>
      </FooterWrap>
    </StyledFooter>
  );
};
