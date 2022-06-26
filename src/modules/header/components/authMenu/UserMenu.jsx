import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/user/userSlice';
import { Button } from 'modules/common';
import { login } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { deviceScreen } from 'utils/stylesVars';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(login);

  return (
    <Wrap>
      <Name>{userName}</Name>
      <Button w="80px" onClick={() => dispatch(logOut())}>
        Log out
      </Button>
    </Wrap>
  );
};

const Wrap = styled.div``;

const Name = styled.p`
  display: none;

  ${deviceScreen.M} {
    display: inline-block;
    margin-right: 20px;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: 0.1em;
    color: #fff;
  }
`;
