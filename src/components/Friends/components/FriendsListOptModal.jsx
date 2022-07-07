import { ModalBox } from './friendsListStyled';
import { FriendsListOptModalItem } from './';
import { SimpleModal } from '../../Layouts';

function FriendsListOptModal() {
  return (
    <SimpleModal>
      <ModalBox>
        <FriendsListOptModalItem />
      </ModalBox>
    </SimpleModal>
  );
}

export default FriendsListOptModal;
