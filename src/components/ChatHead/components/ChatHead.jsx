import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { socket } from '../../../store/socket';
import { useActiveChatHeads } from '../../../hooks';
import { sendMessage, setNewMessage } from '../../../store/reducers/conversationReducer';

import { groupMessages } from '../../../lib/groupMessages';

import { ChatHeadBox } from './chatHeadHeadingStyled';
import { Heading, ChatBox, InputBox } from './';

function ChatHead({ userId, adressat, adressatImage, adressatName, messages, conversationId }) {
  const { handleCloseChathead, handleMinimiseChathead } = useActiveChatHeads();
  
  const dispatch = useDispatch();
  const groupedMessages = groupMessages(messages);
  const formRef = useRef();

  useEffect(() => {
    socket.on('getMessage', (message) => {
      dispatch(setNewMessage(message));
    });
  }, [dispatch]);

  function handleSendMessage(e) {
    e.preventDefault();

    const newMessage = {};
    const data = new FormData(formRef.current);
    for (const [key, value] of data) {
      newMessage[key] = value;
    }

    formRef.current.reset();

    const credentials = {
      text: newMessage.text,
      receiverId: adressat,
      userId: userId,
      conversation: conversationId,
    };

    dispatch(sendMessage({ newMessage, credentials }));
  }

  const closeChatHead = () => handleCloseChathead(conversationId, messages);
  const minimiseChatHead = () => handleMinimiseChathead(conversationId);

  return (
    <ChatHeadBox>
      <Heading
        onClose={closeChatHead}
        onMinimize={minimiseChatHead}
        adressatImage={adressatImage.image}
        adressatName={adressatName}
      />
      <ChatBox
        groupedMessages={groupedMessages}
        activeUserId={userId}
        adressatImage={adressatImage}
      />
      <InputBox handleSendMessage={handleSendMessage} form={formRef} />
    </ChatHeadBox>
  );
}

export default ChatHead;
