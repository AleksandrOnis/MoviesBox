import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectors } from 'redux/selectors';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectors.isLoggedIn);

  return isLoggedIn ? children : <Navigate to="/login" />;
};
