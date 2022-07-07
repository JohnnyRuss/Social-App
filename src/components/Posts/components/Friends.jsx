import { FriendsBox } from './FriendsStyled';
import { FriendsList, FriendsHeading } from './';

function Friends({ friends }) {
  return (
    <FriendsBox>
      <FriendsHeading friends={friends?.length} />
      <FriendsList friends={friends} />
    </FriendsBox>
  );
}

export default Friends;
