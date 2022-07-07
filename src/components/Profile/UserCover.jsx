import { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  userShortInfoSelector,
  userProfileImageSelector,
  userCoverImageSelector,
} from '../../store/selectors/userSelector';
import { useForeignUser } from '../../hooks';

import { UserCoverContainer } from './Components/ProfileStyled';
import { CoverImage, ProfileImage, UserInfo, FriendShip } from './Components/index';
import { ActivePostModal } from '../Layouts';

function UserCover() {
  const { userInfo, profileImg, coverImg } = useSelector(userShortInfoSelector);

  const { foreignUser, _id, profileOwner } = useForeignUser();

  const profileImgPost = useSelector(userProfileImageSelector);
  const coverImgPost = useSelector(userCoverImageSelector);

  const [openPost, setOpenPost] = useState(false);
  const [activeProfilePost, setActiveProfilePost] = useState(false);
  const [activeCoverPost, setActiveCoverPost] = useState(false);

  function handleOpenProfileImage(e) {
    setActiveCoverPost(false);
    setOpenPost(true);
    setActiveProfilePost(true);
  }

  function handleOpenCoverImage(e) {
    setActiveProfilePost(false);
    setOpenPost(true);
    setActiveCoverPost(true);
  }

  return (
    <UserCoverContainer>
      <CoverImage
        src={coverImg?.image}
        restriction={foreignUser}
        handleOpenCoverImage={handleOpenCoverImage}
      />
      <ProfileImage
        src={profileImg?.image}
        restriction={foreignUser}
        handleOpenProfileImage={handleOpenProfileImage}
      />
      <UserInfo info={userInfo} activeUser={_id} />
      {foreignUser && <FriendShip profileOwner={profileOwner} />}
      {openPost && (
        <ActivePostModal
          openPost={openPost}
          setOpenPost={setOpenPost}
          post={activeProfilePost ? profileImgPost : activeCoverPost ? coverImgPost : null}
        />
      )}
    </UserCoverContainer>
  );
}

export default UserCover;
