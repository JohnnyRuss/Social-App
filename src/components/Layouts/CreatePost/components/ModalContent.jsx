import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createPost, updatePost } from '../../../../store/reducers/appReducer';

import { ModalContentBox, Container, ModalTextArea, ShareBTN } from './modalContentStyled';
import Tools from './Tools';
import ModalMedia from './ModalMedia';
import { Spinner } from '../../';

function ModalContent({ operationType, file, setFile, setOpenModal, postId }) {
  const dispatch = useDispatch();
  const { pending } = useSelector((state) => state.app.createPostProcess);

  const [text, setText] = useState('');
  const availableToShare = file || text;

  const [loading, setLoading] = useState(false);

  function handleSharePost() {
    const credentials = {};
    if (operationType === 'create') {
      credentials.type = 'timeline';
      if (text) credentials.description = text;
      if (file) credentials.image = file;
      dispatch(createPost(credentials));
      setLoading(true);
      return;
    } else if (operationType === 'update') {
      credentials.description = text;
      dispatch(updatePost({ credentials, state: { postId: postId } }));
      setLoading(true);
    }
  }

  useEffect(() => {
    if (!loading) return;

    if (!pending) {
      setLoading(false);
      setFile(null);
      setText('');
      setOpenModal(false);
    }
  }, [loading, pending, setFile, setOpenModal]);

  return (
    <ModalContentBox>
      <Container>
        <ModalTextArea
          placeholder='whats on your mind ?'
          onChange={(e) => setText(e.target.value)}
        />
        {file && <ModalMedia file={file} setFile={setFile} />}
        {pending && <Spinner />}
      </Container>
      <Tools setFile={setFile} />
      <ShareBTN disabled={!availableToShare} onClick={handleSharePost}>
        share
      </ShareBTN>
    </ModalContentBox>
  );
}

export default ModalContent;
