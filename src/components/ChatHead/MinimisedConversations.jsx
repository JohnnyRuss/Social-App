import { useMinimisedChatHeads } from '../../hooks';

import { MinimisedChatHeadContainer } from './components/minimisedConversationsStyled';
import {
  MinimizedOptions,
  MinimisedConversations as MinimisedConversationsEl,
  MinimisedExtra,
} from './components';

function MinimisedConversations({ minimisedConversationIds, isContent }) {
  const {
    setShowOptionsBTN,
    hideOptionsHandler,
    showOptionsBTN,
    minimisedConversations,
    extraMinimisedConversations,
  } = useMinimisedChatHeads(minimisedConversationIds);

  return (
    <MinimisedChatHeadContainer
      onMouseMove={() => setShowOptionsBTN(true)}
      onMouseLeave={hideOptionsHandler}>
      {showOptionsBTN && isContent && <MinimizedOptions />}
      {minimisedConversations?.map((conversation) => (
        <MinimisedConversationsEl key={conversation?.id} conversation={conversation} />
      ))}
      {extraMinimisedConversations?.[0] && (
        <MinimisedExtra conversation={extraMinimisedConversations} />
      )}
    </MinimisedChatHeadContainer>
  );
}

export default MinimisedConversations;
