import { useState, useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';

import { DOMcontext } from '../store/context/DOMContext';
import { searchUser, clearSearchResults } from '../store/reducers/timelineReducer';

function useSearchBar() {
  const dispatch = useDispatch();
  const { activeSearchBar } = useContext(DOMcontext);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (!searchQuery || !activeSearchBar) return;
    const timer = setTimeout(() => {
      dispatch(searchUser(searchQuery));
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchQuery, activeSearchBar, dispatch]);

  useEffect(() => {
    if (!activeSearchBar || !searchQuery) {
      setSearchQuery('');
      dispatch(clearSearchResults());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSearchBar, dispatch, searchQuery]);

  return { searchQuery, setSearchQuery };
}

export default useSearchBar;
