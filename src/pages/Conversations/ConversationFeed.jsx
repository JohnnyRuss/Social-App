import { useParams } from 'react-router-dom';
import { Feed } from '../../components/Messenger';
import { conversations } from '../../lib/conversations';

function ConversationFeed() {
  const { conversationId } = useParams();
  const conversation = conversations.find((conversation) => `${conversation.id}` === conversationId);
  
  return <Feed conversation={conversation} />;
}

export default ConversationFeed;
