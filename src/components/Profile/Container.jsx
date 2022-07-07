import React from 'react';

import { ProfileContainer } from './Components/ProfileStyled';

function Container({ children }) {
  return <ProfileContainer>{children}</ProfileContainer>;
}

export default Container;
