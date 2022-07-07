import { Fragment } from 'react';

import { useChatHeads } from '../../hooks';

import ChatHeads from './ChatHeads';
import MinimisedConversations from './MinimisedConversations';

function Conversation() {
  const { ready, activeConversationIds, userId, minimisedConversationIds, isContent } =
    useChatHeads();

  return (
    ready && (
      <Fragment>
        <ChatHeads activeConversationIds={activeConversationIds} userId={userId} />
        <MinimisedConversations
          minimisedConversationIds={minimisedConversationIds}
          isContent={isContent}
        />
      </Fragment>
    )
  );
}

export default Conversation;
