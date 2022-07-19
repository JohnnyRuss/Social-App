import { RequestsLists } from './styled';
import { PendingRequest } from '../Layouts';

function RequestsList({ pendingRequests }) {
  return (
    <RequestsLists>
      {pendingRequests?.map((req) => (
        <PendingRequest
          userImage={req?.userImage}
          userName={req?.userName}
          userId={req?.userId}
          key={req?.userId}
        />
      ))}
    </RequestsLists>
  );
}

export default RequestsList;
