import { useSelector, useDispatch } from 'react-redux';

import { useFriendRequests } from '../../../hooks';
import { getConversation } from '../../../store/reducers/conversationReducer';

import { Container, BTN } from './friendShipStyled';
import { UserFriendsIcon, CloseIcon, MessengerIcon } from '../../Layouts/Icons/icons';

function FriendShip({ profileOwner }) {
  //prettier-ignore
  const { profileImg, userName, id } = useSelector((state) => state.user.user);
  const { _id: activeUserId } = useSelector((state) => state.userBasics.user);
  const dispatch = useDispatch();

  function getConversationHandler() {
    dispatch(getConversation({ adressatId: profileOwner, id: activeUserId }));
  }

  const {
    isPending,
    alreadySent,
    isFriend,
    none,
    sendFriendRequest,
    cancelFriendRequest,
    confirmFriendRequest,
    deleteFriendRequest,
  } = useFriendRequests({ image: profileImg.image, userName, id });

  return (
    <Container>
      {none && (
        <BTN onClick={() => sendFriendRequest(profileOwner)}>
          <UserFriendsIcon /> add to friends
        </BTN>
      )}
      {alreadySent && (
        <BTN onClick={() => cancelFriendRequest(profileOwner)}>
          <CloseIcon /> cancel request
        </BTN>
      )}
      {isFriend && (
        <BTN>
          <UserFriendsIcon /> friend
        </BTN>
      )}
      {isPending && (
        <>
          <BTN onClick={() => confirmFriendRequest(profileOwner)}>
            <UserFriendsIcon /> confirm friend
          </BTN>
          <BTN onClick={() => deleteFriendRequest(profileOwner)}>
            <CloseIcon /> delete request
          </BTN>
        </>
      )}
      <BTN onClick={getConversationHandler} colored>
        <MessengerIcon /> send message
      </BTN>
    </Container>
  );
}

export default FriendShip;
