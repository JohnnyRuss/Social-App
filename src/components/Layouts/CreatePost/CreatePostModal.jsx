import { Modal, UserIdentifier } from '../../Layouts';
import ModalContent from './components/ModalContent';

function CreatePostModal({
  operationType,
  openModal,
  closeModal,
  file,
  setFile,
  setOpenModal,
  postId,
}) {
  return (
    <Modal
      openModal={openModal}
      closeModal={closeModal}
      identifier={<UserIdentifier dimention={['5rem', '5rem']} size="1.6rem"/>}
      btnColor='blackColor'
      btnPosition='right'>
      <ModalContent
        file={file}
        setFile={setFile}
        setOpenModal={setOpenModal}
        operationType={operationType}
        postId={postId}
      />
    </Modal>
  );
}

export default CreatePostModal;
