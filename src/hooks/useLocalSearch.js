import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setFilteredFriends, resetFilteredFriends } from '../store/reducers/userReducer';

function useLocalSearch() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (!searchQuery) return;

    const timer = setTimeout(() => {
      dispatch(setFilteredFriends(searchQuery));
    }, 1000);

    return () => clearTimeout(timer);
  }, [dispatch, searchQuery]);

  useEffect(() => {
    if (searchQuery) return;
    dispatch(resetFilteredFriends());
  }, [dispatch, searchQuery]);

  return { searchQuery, setSearchQuery };
}

export default useLocalSearch;
