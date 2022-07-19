import { useFriendRequests } from '../../../hooks';

import RequestFigure from './RequestFigure';
import RequestActions from './RequestActions';
import { Request } from './styled';

function SentRequest({ userImage, userName, userId }) {
  const { cancelFriendRequest } = useFriendRequests({ id: userId });
  return (
    <Request>
      <RequestFigure userImage={userImage} />
      <RequestActions
        pendingRequests={false}
        userName={userName}
        userId={userId}
        cancelFriendRequest={cancelFriendRequest}
      />
    </Request>
  );
}

export default SentRequest;
