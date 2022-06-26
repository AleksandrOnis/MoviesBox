import { useState } from 'react';

export const usePagination = () => {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  function getPage(newPage) {
    setPage(newPage);
  }

  return { page, getPage, pageCount, setPageCount };
};
