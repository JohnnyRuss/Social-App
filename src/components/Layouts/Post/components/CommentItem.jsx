import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { deleteComment, deleteCommentReply } from '../../../../store/reducers/appReducer';
import { useReaction, useForeignUser } from '../../../../hooks';

import { Devider } from './commentItemStyled';
import { CommentContent, CommentActions } from './';
import { reactions } from '../../../../lib/reactions';

function CommentItem({ comment, activeReplyHandler, postId, userId, handleCommentUpdate }) {
  const dispatch = useDispatch();

  const activeUserExistingReaction = useMemo(
    () => comment?.reactions?.find((reaction) => reaction.user === userId),
    [comment, userId]
  );

  const commentReactions = useMemo(
    () =>
      Array.from(new Set(comment?.reactions?.map((reaction) => reaction.reaction))).map(
        (reaction) => reactions.find((reactionIcon) => reactionIcon.name === reaction)
      ),
    [comment]
  );

  const { handleReaction } = useReaction(
    { user: userId, post: postId, comment: comment.id },
    activeUserExistingReaction,
    'REACT_ON_COMMENT'
  );

  const { foreignUser } = useForeignUser(comment.authorId);

  const handleCommentDelete = (comment) => {
    if (comment.comment)
      dispatch(
        deleteCommentReply({ commentId: comment.comment, childCommentId: comment.id, postId })
      );
    else if (!comment.comment) dispatch(deleteComment({ commentId: comment.id, postId }));
  };

  return (
    <Devider>
      <CommentContent
        comment={comment}
        commentReactions={commentReactions}
        foreignUser={foreignUser}
        handleCommentUpdate={handleCommentUpdate}
        handleCommentDelete={handleCommentDelete}
      />
      <CommentActions
        activeUserExistingReaction={activeUserExistingReaction}
        handleReaction={handleReaction}
        activeReplyHandler={activeReplyHandler}
        comment={comment}
      />
    </Devider>
  );
}

export default CommentItem;
