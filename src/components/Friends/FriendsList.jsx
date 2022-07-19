import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FriendsContainer } from './components/friendsListStyled';
import { FriendFigure } from './components';

function FriendsList({ friends }) {
  const [friendsToShow, setFriendsToShow] = useState(null);
  const filteredFriends = useSelector((state) => state.user.user.filteredFriends);

  useEffect(() => {
    if (!filteredFriends) setFriendsToShow(friends);
    else setFriendsToShow(filteredFriends);
  }, [filteredFriends, friends]);

  return (
    <FriendsContainer>
      {friendsToShow?.map((friend) => (
        <FriendFigure friend={friend} key={friend.id} />
      ))}
    </FriendsContainer>
  );
}

export default FriendsList;
