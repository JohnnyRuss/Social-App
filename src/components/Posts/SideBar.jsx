import React from 'react';

import Hobbies from './components/Hobbies';
import Album from './components/Album';
import Friends from './components/Friends';
import { SideBarContainer } from './components/styled';

function SideBar({sideBarInfo}) {
  const { hobbies, media, friends } = sideBarInfo;

  return (
    <SideBarContainer>
      <Hobbies hobbies={hobbies} />
      <Album media={media} />
      <Friends friends={friends} />
    </SideBarContainer>
  );
}

export default SideBar;
