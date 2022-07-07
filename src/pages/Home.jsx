import React from 'react';

import {
  Container,
  UserEvents,
  Feed,
  UserFriendsContainer,
  FriendBirthDay,
  Commercial,
  OnlineFriends,
} from '../components/Home';

import { Users } from '../utils/DUMMY';

function Home() {
  return (
    <Container>
      <UserEvents />
      <Feed />
      <UserFriendsContainer>
        <FriendBirthDay />
        <Commercial />
        <OnlineFriends data={Users} />
      </UserFriendsContainer>
    </Container>
  );
}

export default Home;
