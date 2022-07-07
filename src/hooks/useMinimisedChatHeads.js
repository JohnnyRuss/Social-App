import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  closeAllConversations,
  minimiseAllActiveConversations,
  reActivateConversation,
  removeConversationFromMinimised,
} from '../store/reducers/chatHeadReducer';

function useMinimisedChatHeads(minimisedConversationIds) {
  const dispatch = useDispatch();

  // CONVERSATIONS DATA (ACTIVE, MINIMISED, EXTRA-MINIMISED)
  const conversations = useSelector((state) => state.conversation.conversation.conversations);
  const minimisedConversations = minimisedConversationIds
    ?.map((id) => conversations.find((conversation) => conversation.id === id))
    .reverse();

  const extraMinimisedConversationIds = useSelector((state) => state.chatHead.extra);
  const extraMinimisedConversations = extraMinimisedConversationIds?.map((id) =>
    conversations.find((conversation) => conversation.id === id)
  );

  // 1) GLOBAL OPT BTN
  // 1.1) TOGGLE CHATHEADS GLOBAL OPT BTN
  const [showOptionsBTN, setShowOptionsBTN] = useState(false);
  const [activeOptions, setActiveOptions] = useState(false);

  const hideOptionsHandler = () => !activeOptions && setShowOptionsBTN(false);

  // 1.2) GLOBAL ACTION BTN ACTION CREATORS
  const closeAllConversationsHandler = () => dispatch(closeAllConversations());
  const minimiseAllActiveConversationsHandler = () => dispatch(minimiseAllActiveConversations());

  // 2) CLOSE OR REACTIVATE CHATHEAD
  const reActivateConversationHandler = (id) => dispatch(reActivateConversation(id));
  const closeMinimisedConversationHandler = (id) => dispatch(removeConversationFromMinimised(id));

  // 3) TOGGLE EXTRA MINIMISED CONVERSATIONS LIST
  const [showExtra, setShowExtra] = useState(false);

  function hideExtraListHandler(e) {
    if ((e.target.closest('.bridge') || e.target.closest('.extra')) && showExtra)
      setShowExtra(false);
  }

  return {
    // CONVERSATIONS DATA
    minimisedConversations,
    extraMinimisedConversations,
    // GLOBAL OPT BTN
    showOptionsBTN,
    setShowOptionsBTN,
    hideOptionsHandler,
    activeOptions,
    setActiveOptions,
    // GLOBAL ACTION BTN ACTION CREATORS
    closeAllConversationsHandler,
    minimiseAllActiveConversationsHandler,
    // CLOSE OR REACTIVATE CHATHEAD
    reActivateConversationHandler,
    closeMinimisedConversationHandler,
    // TOGGLE EXTRA MINIMISED CONVERSATIONS LIST
    showExtra,
    setShowExtra,
    hideExtraListHandler,
  };
}

export default useMinimisedChatHeads;
