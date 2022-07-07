import { MessageBox } from './styled';
import { ChatMessage } from '../../Layouts';

function Message({ msgGroup, activeUserId, adressatImage }) {
  return (
    <MessageBox active={msgGroup[0].user === activeUserId}>
      <ChatMessage msgGroup={msgGroup} activeUserId={activeUserId} adressatImage={adressatImage} />
    </MessageBox>
  );
}

export default Message;
