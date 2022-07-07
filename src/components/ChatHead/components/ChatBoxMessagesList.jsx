import { MessageBox } from './chatHeadChatBoxStyled';
import { ChatMessage } from '../../Layouts';

function ChatBoxMessagesList({ groupedMessages, activeUserId, adressatImage }) {
  return groupedMessages?.map((msgGroup, i) => (
    <MessageBox key={i} active={msgGroup[0]?.user === activeUserId}>
      <ChatMessage msgGroup={msgGroup} activeUserId={activeUserId} adressatImage={adressatImage} />
    </MessageBox>
  ));
}

export default ChatBoxMessagesList;
