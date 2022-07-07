import { useState } from 'react';

import { useTextField } from '../../../../hooks';

import { CommentEl } from './commentStyled';
import { CommentItem, CommentShowRepliesBTN, CommentReplies } from './';

function Comment({ comment, postId, user, handleMainCommentUpdate }) {
  const [showReplies, setShowReplies] = useState(false);
  const [activeReply, setActiveReply] = useState(false);

  const [adressat, setAdressat] = useState('');

  const existingReplies = (com) => com.replies && Array.isArray(com.replies) && com.replies[0];

  function showRepliesHandler() {
    if (activeReply) setActiveReply(false);
    setShowReplies((prevState) => !prevState);
  }

  function activeReplyHandler(adressat) {
    if (!showReplies) setShowReplies(true);
    setActiveReply(true);
    setAdressat(adressat);
  }

  const { textFieldValue, setTextFieldValue, handleSubmitComment, handleCommentUpdate } =
    useTextField('COMMENT_REPLY', {
      comment: comment.id,
      adressatComment: adressat.adressatComment || comment.id,
      adressat: adressat.adressat || comment.authorId,
      adressatName: adressat.authorName || comment.authorName,
      post: postId,
      author: user.id,
      authorName: user.userName,
      authorImage: user.profileImg,
    });

  return (
    <CommentEl>
      <CommentItem
        comment={comment}
        postId={postId}
        userId={user.id}
        activeReply={activeReply}
        activeReplyHandler={activeReplyHandler}
        handleCommentUpdate={handleMainCommentUpdate}
      />
      {existingReplies(comment) && (
        <CommentShowRepliesBTN showRepliesHandler={showRepliesHandler} showReplies={showReplies} />
      )}
      {(showReplies || activeReply) && (
        <CommentReplies
          existingReplies={existingReplies(comment)}
          comment={comment}
          postId={postId}
          userId={user.id}
          activeReplyHandler={activeReplyHandler}
          handleCommentUpdate={handleCommentUpdate}
          textFieldValue={textFieldValue}
          setTextFieldValue={setTextFieldValue}
          activeReply={activeReply}
          handleSubmitComment={handleSubmitComment}
        />
      )}
    </CommentEl>
  );
}

export default Comment;
