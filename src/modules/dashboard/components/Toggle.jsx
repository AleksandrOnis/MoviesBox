import styled from 'styled-components';
import { WiDaySunny, WiMoonWaningCrescent4 } from 'react-icons/wi';
import { color } from 'utils/stylesVars';

const IconSun = styled(WiDaySunny)`
  position: absolute;
  top: 50%;
  left: 9%;
  transform: translateY(-50%);
  color: yellow;
`;

const IconMoon = styled(WiMoonWaningCrescent4)`
  position: absolute;
  top: 50%;
  right: 4%;
  transform: translateY(-50%);
  color: lightgray;
`;

const ToggleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 10px;
  cursor: pointer;
`;

const StyledToggle = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
  border: 1px solid ${color.accent};
  border-radius: 20px;
  pointer-events: none;

  input {
    display: none;
  }

  span:after {
    content: '';
    position: absolute;
    height: 31px;
    width: 31px;
    left: 29px;
    border-radius: 50%;
    transition: 0.1s;
    top: -1px;
    background-color: ${color.accent};
  }

  input:checked + span:after {
    transform: translateX(-31px);
    background-color: ${color.accent};
  }
`;

export const Toggle = ({ onChange }) => {
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
