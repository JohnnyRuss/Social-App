import { useEffect } from 'react';
import ModalBox from 'react-modal';
import { CloseIcon } from '../Icons/icons';

import { ModalHeading, CloseBTN } from './modalStyled';

ModalBox.setAppElement('#root');

const customStyles = {
  content: {
    transform: 'translate(-50%, -50%)',
    top: `53%`,
    left: '50%',
    padding: '0',
    right: 'auto',
    bottom: 'auto',
    overflow: 'hidden',
    marginRight: '-50%',
  },
};

function Modal({ children, openModal, closeModal, identifier, btnPosition, btnSize, btnColor }) {
  useEffect(() => {
    const body = document.querySelector('body');
    if (openModal) body.style.overflow = 'hidden';

    return () => (body.style.overflow = 'scroll');
  }, [openModal]);

  return (
    <ModalBox isOpen={openModal} onRequestClose={closeModal} style={customStyles}>
      <ModalHeading padding={identifier ? true : false}>
        {identifier && identifier}
        <CloseBTN
          onClick={closeModal}
          btnPosition={btnPosition}
          btnColor={btnColor}
          btnSize={btnSize}>
          <CloseIcon />
        </CloseBTN>
      </ModalHeading>
      {children}
    </ModalBox>
  );
}

export default Modal;
