import { CommentsList as Comments } from './commentsStyled';
import { Comment } from './';

function CommentsList({ comments, postId, user, handleCommentUpdate }) {
  return (
    <Comments>
      {comments?.map((comment) => (
        <Comment
          key={comment?.id}
          comment={comment}
          postId={postId}
          user={user}
          handleMainCommentUpdate={handleCommentUpdate}
        />
      ))}
    </Comments>
  );
}

export default CommentsList;
