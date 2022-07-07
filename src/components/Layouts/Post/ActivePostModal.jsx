import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { relatedPostsSelector } from '../../../store/selectors/userSelector';
import { getRelatedPosts, deactivateRelatedPosts } from '../../../store/reducers/timelineReducer';

import { ActivePost } from './components';
import { Modal } from '..';

function ActivePostModal({ post, openPost, setOpenPost, reserved }) {
  const dispatch = useDispatch();

  const [showComments, setShowComments] = useState(true);

  //prettier-ignore
  const { process: { pending }, relatedPosts } = useSelector(relatedPostsSelector);
  const [touch, setTouch] = useState(false);
  const ready = touch && !pending;

  const [index, setIndex] = useState(null);

  const closeModalHandler = () => {
    setOpenPost(false);
    !reserved && dispatch(deactivateRelatedPosts());
  };

  function handleNextPost() {
    if (index === relatedPosts.length - 1) return setIndex(0);
    setIndex((prevIndex) => (prevIndex += 1));
  }

  function handlePreviousPost() {
    if (index === 0) return setIndex(relatedPosts.length - 1);
    setIndex((prevIndex) => (prevIndex -= 1));
  }

  useEffect(() => {
    if (reserved) return;
    dispatch(
      getRelatedPosts({
        type: post.type,
        user: post.user,
      })
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (index && index >= 0) return;
    const currentIndex = relatedPosts.findIndex((p) => p.id === post.id);
    setIndex(currentIndex);
    setTouch(true);
  }, [relatedPosts, post, index]);

  return (
    <Modal openModal={openPost} closeModal={closeModalHandler} btnSize='largeSize'>
      <ActivePost
        ready={ready}
        post={relatedPosts[index]}
        showCommnets={showComments}
        setShowCommnets={setShowComments}
        handleNextPost={handleNextPost}
        handlePreviousPost={handlePreviousPost}
        closeModal={closeModalHandler}
      />
    </Modal>
  );
}

export default ActivePostModal;
