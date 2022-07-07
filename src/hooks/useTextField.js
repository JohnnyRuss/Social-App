import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  addComment,
  updateComment,
  addCommentReply,
  updateCommentReply,
} from '../store/reducers/appReducer';

const useTextField = (type, params) => {
  const dispatch = useDispatch();

  const [textFieldValue, setTextFieldValue] = useState('');
  const [commentId, setCommentId] = useState('');
  const [commentUpdate, setCommentUpdate] = useState(false);

  const operationTypes = ['PARENT_COMMENT', 'COMMENT_REPLY'];

  const credentials = { ...params, text: textFieldValue };

  function handleSubmitComment(e) {
    if (e.code !== 'Enter') return;

    if (type === operationTypes[0]) {
      if (commentUpdate) {
        dispatch(
          updateComment({
            credentials: { text: credentials.text },
            state: { postId: credentials.post, commentId },
          })
        );

        return reset();
      }

      const [authorName, authorImage] = handleExtraPropsFromParams(credentials, [
        'authorName',
        'authorImage',
      ]);

      dispatch(
        addComment({
          credentials,
          state: { postId: credentials.post, authorName, authorImage },
        })
      );

      reset();
    } else if (type === operationTypes[1]) {
      if (commentUpdate) {
        dispatch(
          updateCommentReply({
            credentials: { text: credentials.text },
            state: {
              postId: credentials.post,
              commentId: credentials.comment,
              childCommentId: commentId,
            },
          })
        );

        return reset();
      }

      const comment = credentials.comment;
      const [authorName, authorImage] = handleExtraPropsFromParams(credentials, [
        'authorName',
        'authorImage',
      ]);

      dispatch(
        addCommentReply({
          credentials,
          state: { postId: credentials.post, authorName, authorImage, commentId: comment },
        })
      );

      reset();
    }
  }

  function handleCommentUpdate(comment) {
    setTextFieldValue(comment.text);
    setCommentUpdate(true);
    setCommentId(comment.id);
  }

  function reset() {
    setCommentUpdate(false);
    setTextFieldValue('');
    Object.keys(credentials).forEach((property) => delete credentials[property]);
  }

  return { textFieldValue, setTextFieldValue, handleSubmitComment, handleCommentUpdate };
};

function handleExtraPropsFromParams(credentials, fields) {
  const properties = fields.map((field) => credentials[field]);
  fields.forEach((field) => delete credentials[field]);
  return properties;
}

export default useTextField;
