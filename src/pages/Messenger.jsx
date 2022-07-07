import { useParams, Outlet } from 'react-router-dom';
import { Container, SideBar, Feed } from '../components/Messenger';
import { conversations } from '../lib/conversations';

function Messenger() {
  const { conversationId } = useParams();
  const defaultConversation = conversations[0];
  
  return (
    <Container>
      <SideBar conversations={conversations} />
      {!conversationId && <Feed conversation={defaultConversation} />}
      <Outlet />
    </Container>
  );
}

export default Messenger;
