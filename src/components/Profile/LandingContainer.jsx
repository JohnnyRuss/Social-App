import React from 'react';

import { LandingContainerBox } from './Components/ProfileStyled';

function LandingContainer({ children }) {
  return <LandingContainerBox>{children}</LandingContainerBox>;
}

export default LandingContainer;
