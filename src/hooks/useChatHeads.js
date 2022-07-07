import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getAllConversations } from '../store/reducers/conversationReducer';
import useChatHeadsLimit from './useChatHeadsLimit';

function useChatHeads() {
  const dispatch = useDispatch();

  const [isContent, setIsContent] = useState(false);
  const { pending } = useSelector((state) => state.conversation.activeChatHeadsProcess);
  const [touch, setTouch] = useState(false);
  const ready = !pending && touch;

  const userId = useSelector((state) => state.userBasics.user._id);
  const activeConversationIds = useSelector((state) => state.chatHead.conversations);
  const minimisedConversationIds = useSelector((state) => state.chatHead.minimisedConversations);

  useEffect(() => {
    const chance = activeConversationIds[0] || minimisedConversationIds[0];
    if (!chance && !touch) setTouch(true);
    setIsContent(chance);
  }, [activeConversationIds, minimisedConversationIds, touch]);

  useEffect(() => {
    if (isContent) {
      dispatch(getAllConversations({ id: userId, process: 'activeChatHeadsProcess' }));
      setTouch(true);
    }
  }, [dispatch, isContent, userId]);

  useChatHeadsLimit();

  return { ready, activeConversationIds, minimisedConversationIds, isContent, userId };
}

export default useChatHeads;
