import { useDispatch } from 'react-redux';

import { deletePost } from '../../../../store/reducers/appReducer';

import { PostHeadUserIdentifierAndTime } from './';
import { Container } from './postHeadStyled';
import { OptionsMini } from '../..';

function PostHead({ userImg, userName, userId, createdAt, postUpdateHandler, postId, closeModal }) {
  const dispatch = useDispatch();
  const postDeleteHandler = () => {
    dispatch(deletePost(postId));
    closeModal && closeModal();
  };

  return (
    <Container>
      <PostHeadUserIdentifierAndTime
        userImg={userImg}
        userName={userName}
        userId={userId}
        createdAt={createdAt}
      />
      <OptionsMini
        activeHover={true}
        updateHandler={postUpdateHandler}
        deleteHandler={postDeleteHandler}
      />
    </Container>
  );
}

export default PostHead;
