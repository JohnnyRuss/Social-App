import { Link, useParams } from 'react-router-dom';

import {
  FriendTitleBox,
  TitleMiniBox,
  FriendTitle,
  FriendsAmount,
  ShowAllLink,
} from './FriendsStyled';

function FriendsHeading({ friends }) {
  const { userId } = useParams();
  return (
    <FriendTitleBox>
      <TitleMiniBox>
        <FriendTitle>friends</FriendTitle>
        <FriendsAmount>{friends} friends</FriendsAmount>
      </TitleMiniBox>
      <Link to={`/profile/${userId}/friends/allFriends`}>
        <ShowAllLink>show all friends</ShowAllLink>
      </Link>
    </FriendTitleBox>
  );
}

export default FriendsHeading;
