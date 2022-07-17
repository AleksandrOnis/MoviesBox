import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggedIn } from 'redux/selectors';

export const useLogOutRedirect = () => {
  const navigate = useNavigate();
  const isLogin = useSelector(isLoggedIn);

  useEffect(() => {
    if (!isLogin) {
      navigate('/login');
    }
  }, [isLogin]);
};
