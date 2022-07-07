import { useMinimisedChatHeads } from '../../../hooks';
import { Minimised } from './';

function MinimisedConversations({ conversation, extras }) {
  const { reActivateConversationHandler, closeMinimisedConversationHandler } =
  useMinimisedChatHeads();

  return (
    <Minimised
      conversation={conversation}
      reActivateConversationHandler={reActivateConversationHandler}
      closeMinimisedConversationHandler={closeMinimisedConversationHandler}
    />
  );
}

export default MinimisedConversations;
