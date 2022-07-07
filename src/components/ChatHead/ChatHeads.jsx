import { useActiveChatHeads } from '../../hooks';

import { ChatHeadContainer } from './components/styled';
import { ChatHead } from './components';

function ChatHeads({ activeConversationIds, userId }) {
  const { activeConversations } = useActiveChatHeads(activeConversationIds);

  return (
    <ChatHeadContainer>
      {activeConversations?.map((conversation) => (
        <ChatHead
          key={conversation?.id}
          userId={userId}
          adressat={conversation?.adressat}
          adressatImage={conversation?.adressatImage}
          adressatName={conversation?.adressatName}
          messages={conversation?.messages}
          conversationId={conversation?.id}
        />
      ))}
    </ChatHeadContainer>
  );
}

export default ChatHeads;
