import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setPage } from 'redux/pagination/paginationSlice';

export const useCurrentPageIsValid = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useLayoutEffect(() => {
    const initPage = new URLSearchParams(location.search).get('page');
    if (initPage > 0 && initPage < 1001) dispatch(setPage(initPage));
    else dispatch(setPage(1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
