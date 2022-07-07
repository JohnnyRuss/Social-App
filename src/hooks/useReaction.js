import { useDispatch } from 'react-redux';

import {
  reactOnPost,
  updateReactionOnPost,
  deleteReactionOnPost,
  reactOnComment,
  updateReactionOnComment,
  deleteReactionOnComment,
} from '../store/reducers/appReducer';

const useReaction = (params, existingReaction, operationType) => {
  const dispatch = useDispatch();

  const operations = ['REACT_ON_POST', 'REACT_ON_COMMENT'];

  function handleReaction(e) {
    const reaction = e.target.name;
    const credentials = {
      ...params,
      reaction: reaction,
    };

    if (existingReaction) {
      if (existingReaction.reaction === reaction) {
        operationType === operations[0] &&
          dispatch(
            deleteReactionOnPost({
              reactionId: existingReaction.id,
              postId: credentials.post,
            })
          );

        operationType === operations[1] &&
          dispatch(
            deleteReactionOnComment({
              reactionId: existingReaction.id,
              postId: credentials.post,
              commentId: credentials.comment,
            })
          );

        return;
      }

      operationType === operations[0] &&
        dispatch(
          updateReactionOnPost({
            credentials: { reaction },
            state: {
              reactionId: existingReaction.id,
              postId: credentials.post,
              reaction: reaction,
            },
          })
        );

      operationType === operations[1] &&
        dispatch(
          updateReactionOnComment({
            credentials: { reaction },
            state: {
              postId: credentials.post,
              commentId: credentials.comment,
              reactionId: existingReaction.id,
              reaction: reaction,
            },
          })
        );
    } else {
      operationType === operations[0] && dispatch(reactOnPost(credentials));
      operationType === operations[1] && dispatch(reactOnComment(credentials));
    }
  }

  return { handleReaction };
};

export default useReaction;
