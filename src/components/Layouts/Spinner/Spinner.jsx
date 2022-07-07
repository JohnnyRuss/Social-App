import React from 'react';

import { SpinnerBox } from './styled';
import { SpinnerIcon } from '../Icons/icons';

function Spinner({color}) {
  return (
    <SpinnerBox color={color}>
      <SpinnerIcon />
    </SpinnerBox>
  );
}

export default Spinner;
