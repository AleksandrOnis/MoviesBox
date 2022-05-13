import styled from 'styled-components';
import { WiDaySunny, WiMoonWaningCrescent4 } from 'react-icons/wi';
import { color } from 'utils/theme';

const IconSun = styled(WiDaySunny)`
  position: absolute;
  top: 25%;
  left: 9%;
  color: yellow;
`;

const IconMoon = styled(WiMoonWaningCrescent4)`
  position: absolute;
  top: 25%;
  right: 4%;
  color: lightgray;
`;

const ToggleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 10px;
  height: 50px;
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
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider:after {
    position: absolute;
    content: '';
    height: 31px;
    width: 31px;
    left: 29px;
    background-color: ${color.accent};
    border-radius: 50%;
    transition: 0.1s;
    top: -1px;
  }

  input:checked + .slider:after {
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
        <span className="slider" />
        <IconSun />
        <IconMoon />
      </StyledToggle>
    </ToggleWrap>
  );
};
