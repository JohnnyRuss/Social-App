import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setUserMediaAlbums, resetUserMediaAlbums } from '../../store/reducers/userReducer';
import { userMediaAlbumsSelector } from '../../store/selectors/userSelector';

import { AlbumsBox } from './components/albumsStyled';
import AlbumItem from './components/AlbumItem';

function Albums() {
  const dispatch = useDispatch();
  const { profileImages, coverImages, timelineImages } = useSelector(userMediaAlbumsSelector);

  useEffect(() => {
    dispatch(setUserMediaAlbums());
    return () => dispatch(resetUserMediaAlbums());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {}, []);

  return (
    <AlbumsBox>
      <AlbumItem
        cover={profileImages?.[0]?.image}
        title='profile images'
        amount={profileImages?.length}
        path='profileImage'
      />
      <AlbumItem
        cover={coverImages?.[0]?.image}
        title='cover images'
        amount={coverImages?.length}
        path='coverImage'
      />
      <AlbumItem
        cover={timelineImages?.[0]?.image}
        title='timeline images'
        amount={timelineImages?.length}
        path='timeline'
      />
    </AlbumsBox>
  );
}

export default Albums;
