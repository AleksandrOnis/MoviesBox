import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setPage } from 'redux/pagination/paginationSlice';
import { selectors } from 'redux/selectors';
import { isValidPage } from 'utils/isValidPage';
import { useRelocateOnPage } from './useRelocateOnPage';

export const useSetPageFromAddressBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const relocate = useRelocateOnPage();
  const page = useSelector(selectors.page);

  return function setPageFromAddressBar(totalPages) {
    const initPage = new URLSearchParams(location.search).get('page');
    if (isValidPage(initPage, totalPages)) page !== initPage && dispatch(setPage(initPage));
    else relocate(1);
  };
};
