import { Text, ModalBoxOptionItem, IconBox } from './friendsListStyled';
import { DeleteIcon } from '../../Layouts/Icons/icons';

function FriendsListOptModalItem() {
  return (
    <ModalBoxOptionItem>
      <IconBox>
        <DeleteIcon />
      </IconBox>
      <Text>delete friend</Text>
    </ModalBoxOptionItem>
  );
}

export default FriendsListOptModalItem;
