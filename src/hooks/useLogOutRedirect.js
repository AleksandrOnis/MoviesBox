import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectors } from 'redux/selectors';

export const useLogOutRedirect = () => {
  const navigate = useNavigate();
  const isLogin = useSelector(selectors.isLoggedIn);

  useEffect(() => {
    if (!isLogin) {
      navigate('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin]);
};
