import { CommentItem } from './';

function CommentRepliesList({ comment, postId, userId, activeReplyHandler, handleCommentUpdate }) {
  return comment.replies.map((reply) => (
    <CommentItem
      key={reply.id}
      comment={reply}
      postId={postId}
      userId={userId}
      activeReplyHandler={activeReplyHandler}
      handleCommentUpdate={handleCommentUpdate}
    />
  ));
}

export default CommentRepliesList;
