import { Friend } from './';
import { FriendsWrapper } from './FriendsStyled';

function FriendsList({ friends }) {
  return (
    <FriendsWrapper>
      {friends?.map?.((friend, i) => (
        <Friend key={friend._id} friend={friend} />
      ))}
    </FriendsWrapper>
  );
}

export default FriendsList;
