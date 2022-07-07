import { useEffect, useRef } from 'react';
import { ChatBoxContainer } from './chatHeadChatBoxStyled';
import { ChatBoxMessagesList } from './';

function ChatBox({ groupedMessages, activeUserId, adressatImage }) {
  const chatRef = useRef();

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [groupedMessages]);

  return (
    <ChatBoxContainer ref={chatRef}>
      <ChatBoxMessagesList
        groupedMessages={groupedMessages}
        activeUserId={activeUserId}
        adressatImage={adressatImage}
      />
    </ChatBoxContainer>
  );
}

export default ChatBox;
