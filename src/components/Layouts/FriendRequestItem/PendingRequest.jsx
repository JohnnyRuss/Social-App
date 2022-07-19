import { useFriendRequests } from '../../../hooks';

import RequestFigure from './RequestFigure';
import RequestActions from './RequestActions';
import {Request} from "./styled"

function PendingRequest({ userImage, userName, userId }) {
  const { deleteFriendRequest, confirmFriendRequest } = useFriendRequests({ id: userId });
  return (
    <Request>
      <RequestFigure userImage={userImage} />
      <RequestActions
        userName={userName}
        userId={userId}
        deleteFriendRequest={deleteFriendRequest}
        confirmFriendRequest={confirmFriendRequest}
      />
    </Request>
  );
}

export default PendingRequest;
