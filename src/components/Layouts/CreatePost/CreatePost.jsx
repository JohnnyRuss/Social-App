import { useState } from 'react';

import { Container } from './styled';

import CreatePostLabel from './components/CreatePostLabel';
import CreatePostModal from './CreatePostModal';

function CreatePost() {
  const [file, setFile] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const closeModal = (e) => setOpenModal(false);

  function openMedia(file) {
    setFile(file);
    setOpenModal(true);
  }

  return (
    <Container>
      <CreatePostLabel handleOpenModal={handleOpenModal} openMedia={openMedia} />
      <CreatePostModal
        openModal={openModal}
        closeModal={closeModal}
        file={file}
        setFile={setFile}
        setOpenModal={setOpenModal}
        operationType="create"
      />
    </Container>
  );
}

export default CreatePost;
