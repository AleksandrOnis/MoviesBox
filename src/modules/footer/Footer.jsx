import styled from 'styled-components';
import { Wrap } from 'modules/common/Wrap';
import { deviceScreen, color } from 'utils/stylesVars';

const StyledFooter = styled.footer`
  padding: 20px;
  line-height: 14px;
  color: ${color.light};
  letter-spacing: 0.1em;
  background-color: ${color.bg};

  ${deviceScreen.L} {
    font-size: 14px;
  }
`;

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
      <Wrap jc="center">
        <Text>
          <AccentWrap>&copy;</AccentWrap> 2021
        </Text>
        <Text>All Rights Reserved</Text>
        <Text>
          Developed
          <AccentWrap> by </AccentWrap>
          Oleksandr Onyshchenko
        </Text>
      </Wrap>
    </StyledFooter>
  );
};
