import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { moviesIds } from 'redux/moviesBox/moviesBoxSlice';

export const useGetListMovies = movies => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(moviesIds(movies?.moviesIds));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies?.total_pages]);
};
