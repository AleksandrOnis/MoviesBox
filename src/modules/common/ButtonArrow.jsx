import styled from 'styled-components';
import { color } from 'utils/stylesVars';
import { Button } from '.';
import { BiArrowToTop } from 'react-icons/bi';

export const ButtonArrow = props => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <StyledButtonArrow onClick={handleClick} w="40px" {...props} m="30px auto 0 auto">
      <IconArrowToTop />
    </StyledButtonArrow>
  );
};

const StyledButtonArrow = styled(Button)`
  display: block;
`;

const IconArrowToTop = styled(BiArrowToTop)`
  width: 22px;
  height: 22px;
  color: ${color.accent};
`;
