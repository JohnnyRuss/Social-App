import { useState } from 'react';
import { ModalBox, ModalBTN, ModalWindow, OptionBTN } from './styled';
import { DotsHorizontalIcon, DeleteIcon, UpdateIcon } from '../../../Layouts/Icons/icons';
import { useForeignUser } from '../../../../hooks';

function OptModal() {
  const [activeModal, setActiveModal] = useState(false);
  const { foreignUser } = useForeignUser();

  return (
    !foreignUser && (
      <ModalBox>
        <ModalBTN onClick={() => setActiveModal((prevState) => !prevState)}>
          <DotsHorizontalIcon />
        </ModalBTN>
        {activeModal && (
          <ModalWindow>
            <OptionBTN>
              <DeleteIcon />
              delete
            </OptionBTN>
            <OptionBTN>
              <UpdateIcon />
              update
            </OptionBTN>
          </ModalWindow>
        )}
      </ModalBox>
    )
  );
}

export default OptModal;
