import React from 'react';

import { ModalWindow } from './simpleModalStyled';

function SimpleModal({ children }) {
  return <ModalWindow>{children}</ModalWindow>;
}

export default SimpleModal;
