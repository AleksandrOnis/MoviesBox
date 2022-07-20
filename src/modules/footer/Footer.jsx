import styled from 'styled-components';
import { Wrap } from 'modules/common/Wrap';
import { deviceScreen, color } from 'utils/stylesVars';

export const Footer = () => {
  return (
    <StyledFooter>
      <Wrap jc="center">
        <Text>
          <AccentWrap>&copy;</AccentWrap> 2022
        </Text>
        <Text>All Rights Reserved</Text>
        <Text>
          Developed
          <AccentWrap> by </AccentWrap>
          <Link
            href="https://www.linkedin.com/in/Oleksandr-Onyshchenko-Onis/"
            title="looking at the Linkedin"
            target="_blank"
          >
            Oleksandr Onyshchenko
          </Link>
        </Text>
      </Wrap>
    </StyledFooter>
  );
};

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

const Link = styled.a`
  color: inherit;
  white-space: nowrap;
  text-decoration: underline ${color.accent};

  :hover {
    color: ${color.accent};
    text-decoration: none;
  }
`;
