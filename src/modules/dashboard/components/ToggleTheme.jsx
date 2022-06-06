import styled from 'styled-components';
import { WiDaySunny, WiMoonWaningCrescent4 } from 'react-icons/wi';
import { color } from 'utils/stylesVars';
import { useDispatch, useSelector } from 'react-redux';
import { switchTheme } from 'redux/theme/themeSlice';
import { modeTheme } from 'redux/selectors';

export const ToggleTheme = ({ onChange }) => {
  const theme = useSelector(modeTheme);
  const dispatch = useDispatch();
  return (
    <ToggleWrap>
      <StyledToggle>
        <input
          id="toggleTheme"
          type="checkbox"
          checked={theme === 'light' ? true : false}
          onChange={e => {
            dispatch(switchTheme());
          }}
        />
        <span></span>
        <IconSun />
        <IconMoon />
      </StyledToggle>
    </ToggleWrap>
  );
};

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
  cursor: pointer;

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
