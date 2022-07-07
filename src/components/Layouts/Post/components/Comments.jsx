import { useSelector } from 'react-redux';

import { useTextField } from '../../../../hooks';
import { userSelector } from '../../../../store/selectors/userSelector';

import { Container } from './commentsStyled';
import { CommentsList } from './';
import { TextField } from '../../';

function Comments({ postId, comments, maxHeight }) {
  const user = useSelector(userSelector);

  const { textFieldValue, setTextFieldValue, handleSubmitComment, handleCommentUpdate } =
    useTextField('PARENT_COMMENT', {
      post: postId,
      author: user.id,
      authorName: user.userName,
      authorImage: user.profileImg,
    });

  return (
    <Container maxHeight={maxHeight}>
      <TextField
        textFieldValue={textFieldValue}
        setTextFieldValue={setTextFieldValue}
        handler={handleSubmitComment}
      />
      <CommentsList
        comments={comments}
        postId={postId}
        user={user}
        handleCommentUpdate={handleCommentUpdate}
      />
    </Container>
  );
}

export default Comments;
