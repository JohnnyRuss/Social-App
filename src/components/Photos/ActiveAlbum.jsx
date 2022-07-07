import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getRelatedPosts, deactivateRelatedPosts } from '../../store/reducers/timelineReducer';
import { relatedPostsSelector } from '../../store/selectors/userSelector';

import { PhotosBox } from './components/photosStyled';
import PhotosList from './components/PhotosList';
import { ActivePostModal, Spinner } from '../Layouts';

function ActiveAlbum() {
  const dispatch = useDispatch();
  const { userId, albumId } = useParams();

  const [openPost, setOpenPost] = useState(false);
  const [post, setPost] = useState(null);

  //prettier-ignore
  const { process: { pending }, relatedPosts } = useSelector(relatedPostsSelector);
  const [touch, setTouch] = useState(false);
  const ready = touch && !pending;

  function openPostHandler(params) {
    setPost({
      type: albumId,
      user: params.user,
      id: params.id,
    });

    setOpenPost(true);
  }

  useEffect(() => {
    dispatch(
      getRelatedPosts({
        type: albumId,
        user: userId,
      })
    );

    setTouch(true);

    return ()=> dispatch(deactivateRelatedPosts())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PhotosBox>
      {!ready && <Spinner />}
      {ready && <PhotosList openPostHandler={openPostHandler} mediaPosts={relatedPosts} />}
      {openPost && (
        <ActivePostModal
          post={post}
          openPost={openPost}
          setOpenPost={setOpenPost}
          reserved={true}
        />
      )}
    </PhotosBox>
  );
}

export default ActiveAlbum;
