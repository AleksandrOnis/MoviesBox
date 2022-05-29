import styled from 'styled-components';
import { WiDaySunny, WiMoonWaningCrescent4 } from 'react-icons/wi';
import { color } from 'utils/stylesVars';

const IconSun = styled(WiDaySunny)`
  position: absolute;
  top: 50%;
  left: 9%;
  width: 22px;
  height: 22px;
  transform: translateY(-50%);
  color: yellow;
`;

const IconMoon = styled(WiMoonWaningCrescent4)`
  position: absolute;
  top: 50%;
  right: 4%;
  width: 22px;
  height: 22px;
  transform: translateY(-50%);
  color: lightgray;
`;

const ToggleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  border-radius: 20px;
  cursor: pointer;

  :hover,
  :focus {
    transform: scale(1.05);
    box-shadow: 4px 4px 5px rgba(255, 107, 1, 0.6);
  }
`;

const StyledToggle = styled.label`
  position: relative;
  display: inline-block;
  width: 80px;
  height: 40px;
  border: 2px solid ${color.accent};
  border-radius: 20px;
  pointer-events: none;

  input {
    display: none;
  }

  span:after {
    content: '';
    position: absolute;
    height: 38px;
    width: 38px;
    left: 39px;
    border-radius: 50%;
    transition: 0.1s;
    top: -1px;
    background-color: ${color.accent};
  }

  input:checked + span:after {
    transform: translateX(-40px);
    background-color: ${color.accent};
  }
`;

export const ToggleTheme = ({ onChange }) => {
  return (
    <ToggleWrap onClick={() => document.getElementById('toggleTheme').click()}>
      <StyledToggle>
        <input
          id="toggleTheme"
          type="checkbox"
          onChange={e => {
            onChange();
          }}
        />
        <span />
        <IconSun />
        <IconMoon />
      </StyledToggle>
    </ToggleWrap>
  );
};
