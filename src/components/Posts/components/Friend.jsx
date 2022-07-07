import { Link } from 'react-router-dom';

import { Friend as FriendBox, FriendImgBox, UserName } from './FriendsStyled';
import { Image } from '../../Layouts';

function Friend({ friend }) {
  return (
    <Link to={`/profile/${friend._id}`} >
      <FriendBox>
        <FriendImgBox>
          <Image src={friend.profileImg.image} ratio='1/1' radius='1rem' />
        </FriendImgBox>
        <UserName>{friend.userName}</UserName>
      </FriendBox>
    </Link>
  );
}

export default Friend;
