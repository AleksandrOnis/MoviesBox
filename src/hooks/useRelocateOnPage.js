import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { setPage } from 'redux/pagination/paginationSlice';

export const useRelocateOnPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  return function relocate(newPage) {
    dispatch(setPage(newPage));
    window.scroll(0, 0);
    if (location.pathname !== '/search') navigate(`${location.pathname}?page=${newPage}`);
    else {
      const queryFromAddressBar = new URLSearchParams(location.search).get('query');
      navigate(`/search?query=${queryFromAddressBar}&page=${newPage}`);
    }
  };
};
