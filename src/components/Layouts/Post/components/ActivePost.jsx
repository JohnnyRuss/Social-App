import { Fragment } from 'react';

import { ActivePostContainer } from './styled';
import { ActivePostMedia, ActivePostDetails } from './';
import { Spinner } from '../../';

function ActivePost({
  ready,
  post,
  setShowCommnets,
  showCommnets,
  handleNextPost,
  handlePreviousPost,
  closeModal,
}) {
  return (
    <ActivePostContainer>
      {!ready && <Spinner />}
      {ready && (
        <Fragment>
          <ActivePostMedia
            post={post}
            handlePreviousPost={handlePreviousPost}
            handleNextPost={handleNextPost}
          />
          <ActivePostDetails
            closeModal={closeModal}
            post={post}
            setShowCommnets={setShowCommnets}
            showCommnets={showCommnets}
          />
        </Fragment>
      )}
    </ActivePostContainer>
  );
}

export default ActivePost;
