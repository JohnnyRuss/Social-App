import { useSelector, useDispatch } from 'react-redux';

import { removeConversation, setMinimiseConversation } from '../store/reducers/chatHeadReducer';
import { deleteConversation } from '../store/reducers/conversationReducer';

function useActiveChatHeads(activeConversationIds) {
  const dispatch = useDispatch();

  const conversations = useSelector((state) => state.conversation.conversation.conversations);
  const activeConversations = activeConversationIds
    ?.map((id) => conversations.find((conversation) => conversation.id === id))
    .reverse();

  const handleCloseChathead = (conversationId, messages) => {
    dispatch(removeConversation(conversationId));
    if (!messages || (Array.isArray(messages) && !messages[0]))
      dispatch(deleteConversation(conversationId));
  };

  const handleMinimiseChathead = (conversationId) =>
    dispatch(setMinimiseConversation(conversationId));

  return { activeConversations, handleCloseChathead, handleMinimiseChathead };
}

export default useActiveChatHeads;
