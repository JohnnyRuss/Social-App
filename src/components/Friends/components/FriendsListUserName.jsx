import { Link } from 'react-router-dom';
import { FriendInfo, UserName } from './friendsListStyled';

function FriendsListUserName({ friend }) {
  return (
    <FriendInfo>
      <Link to={`/profile/${friend?._id}`}>
        <UserName>{friend.userName}</UserName>
      </Link>
      {/* <Text>17 munual friends</Text> */}
    </FriendInfo>
  );
}

export default FriendsListUserName;
