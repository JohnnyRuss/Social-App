import { useFriendRequests } from '../../hooks';

import { RequestsContainer } from './components';
import { SentRequest } from '../Layouts';

function SentRequests() {
  const { sentRequests } = useFriendRequests();

  return (
    <RequestsContainer>
      {sentRequests?.map((req) => (
        <SentRequest
          userImage={req?.userImage}
          userId={req?.userId}
          userName={req?.userName}
          key={req.userId}
        />
      ))}
    </RequestsContainer>
  );
}

export default SentRequests;
