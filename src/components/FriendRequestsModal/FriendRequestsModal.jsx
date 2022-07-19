import { Container, ModalTitle, Message } from './styled';
import RequestsList from './RequestsList';

import { useFriendRequests } from '../../hooks';

function FriendRequestsModal() {
  const { pendingRequests } = useFriendRequests();

  return (
    <Container>
      <ModalTitle>friend requets</ModalTitle>
      {!pendingRequests?.[0] && <Message>there are no friend requests yet</Message>}
      <RequestsList pendingRequests={pendingRequests} />
    </Container>
  );
}

export default FriendRequestsModal;
