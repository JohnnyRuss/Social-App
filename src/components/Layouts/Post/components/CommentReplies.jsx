import { RepliesList } from './commentRepliesStyled';
import { CommentRepliesList } from './';
import { TextField } from '../../';

function CommentReplies({
  existingReplies,
  comment,
  postId,
  userId,
  activeReplyHandler,
  handleCommentUpdate,
  textFieldValue,
  setTextFieldValue,
  activeReply,
  handleSubmitComment,
}) {
  return (
    <RepliesList>
      {existingReplies && (
        <CommentRepliesList
          comment={comment}
          postId={postId}
          userId={userId}
          activeReplyHandler={activeReplyHandler}
          handleCommentUpdate={handleCommentUpdate}
        />
      )}
      <TextField
        textFieldValue={textFieldValue}
        setTextFieldValue={setTextFieldValue}
        focus={activeReply}
        handler={handleSubmitComment}
      />
    </RepliesList>
  );
}

export default CommentReplies;
