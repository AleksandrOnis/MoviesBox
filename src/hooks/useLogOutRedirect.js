import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggedIn as isLogin } from 'redux/selectors';

export const useLogOutRedirect = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(isLogin);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn]);
};
