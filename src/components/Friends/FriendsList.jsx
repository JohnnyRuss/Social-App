import { FriendsContainer } from './components/friendsListStyled';
import { FriendFigure } from './components';

function FriendsList({ friends }) {
  return (
    <FriendsContainer>
      {friends?.map((friend) => (
        <FriendFigure friend={friend} key={friend.id} />
      ))}
    </FriendsContainer>
  );
}

export default FriendsList;
