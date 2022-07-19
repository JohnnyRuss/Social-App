import { useFriendRequests } from '../../hooks';

import { RequestsContainer } from './components';
import { PendingRequest } from '../Layouts';

function PendingRequests() {
  const { pendingRequests } = useFriendRequests();

  return (
    <RequestsContainer>
      {pendingRequests.map((req) => (
        <PendingRequest
          userImage={req?.userImage}
          userId={req?.userId}
          userName={req?.userName}
          key={req.userId}
        />
      ))}
    </RequestsContainer>
  );
}

export default PendingRequests;
