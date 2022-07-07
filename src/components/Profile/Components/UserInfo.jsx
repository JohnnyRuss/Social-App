import { useContext } from 'react';
import { useDispatch } from 'react-redux';

import { DOMcontext } from '../../../store/context/DOMContext';
import { uploadProfileImg, uploadCoverImg } from '../../../store/reducers/appReducer';

import { UserInfoBox, UserName, FriendsAmount } from './UserInfoStyled';
import { SaveChanges, NewFriends, FriendShip } from './';

function UserInfo({ info, activeUser }) {
  const dispatch = useDispatch();

  const { profileFile, setProfileFile, coverFile, setCoverFile } = useContext(DOMcontext);
  const active = profileFile || coverFile;

  function cancelFileChangeHandler() {
    if (profileFile) setProfileFile(null);
    if (coverFile) setCoverFile(null);
  }

  function saveChangeHandler() {
    if (profileFile)
      dispatch(uploadProfileImg({ image: profileFile, type: 'profileImage', user: activeUser }));
    if (coverFile)
      dispatch(uploadCoverImg({ image: coverFile, type: 'coverImage', user: activeUser }));
  }

  return (
    <UserInfoBox>
      <UserName>{info.userName}</UserName>
      <FriendsAmount>{info.friendsAmount} friend</FriendsAmount>
      <NewFriends data={info.friends} />
      {active && (
        <SaveChanges
          cancelFileChangeHandler={cancelFileChangeHandler}
          saveChangeHandler={saveChangeHandler}
        />
      )}
      {/* <FriendShip /> */}
    </UserInfoBox>
  );
}

export default UserInfo;
