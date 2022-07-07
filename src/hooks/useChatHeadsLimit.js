import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import useWindowDimensions from './useWindowDimention';
import { setAndUpdateAvailableWindowLimit } from '../store/reducers/chatHeadReducer';

const useChatHeadsLimit = () => {
  const dispatch = useDispatch();

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width <= 680) dispatch(setAndUpdateAvailableWindowLimit(1));
    else if (width > 680 && width <= 960) dispatch(setAndUpdateAvailableWindowLimit(2));
    else if (width > 960) dispatch(setAndUpdateAvailableWindowLimit(3));
  }, [width, dispatch]);
};

export default useChatHeadsLimit;
