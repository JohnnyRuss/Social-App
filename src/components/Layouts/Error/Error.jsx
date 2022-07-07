import React from 'react';

import { Devider, Error as ErrorBox, IconBox } from './styled';
import { ErrorIcon } from '../Icons/icons';

function Error({ message }) {
  return (
    <Devider>
      <IconBox>
        <ErrorIcon />
      </IconBox>
      <ErrorBox>{message}</ErrorBox>
    </Devider>
  );
}

export default Error;
