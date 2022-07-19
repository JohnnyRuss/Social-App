import { Link } from 'react-router-dom';

import { RequestActionsBox, UserName, BTNBox, BTN } from './styled';

function RequestActions({
  pendingRequests = true,
  userName,
  userId,
  deleteFriendRequest,
  confirmFriendRequest,
  cancelFriendRequest,
}) {
  return (
    <RequestActionsBox>
      <Link to={`/profile/${userId}`}>
        <UserName>{userName}</UserName>
      </Link>
      <BTNBox>
        {pendingRequests && (
          <>
            <BTN confirm onClick={() => confirmFriendRequest(userId)}>
              confirm request
            </BTN>
            <BTN onClick={() => deleteFriendRequest(userId)}>delete request</BTN>
          </>
        )}
        {!pendingRequests && <BTN onClick={() => cancelFriendRequest(userId)}>cancel request</BTN>}
      </BTNBox>
    </RequestActionsBox>
  );
}

export default RequestActions;
