import { MinimisedChatHead, Image, CloseBTN } from './minimisedConversationsStyled';
import { CloseXIcon } from '../../Layouts/Icons/icons';

function Minimised({
  conversation,
  reActivateConversationHandler,
  closeMinimisedConversationHandler,
}) {
  return (
    <MinimisedChatHead>
      <Image
        src={conversation?.adressatImage?.image}
        onClick={() => reActivateConversationHandler(conversation.id)}
      />
      <CloseBTN onClick={() => closeMinimisedConversationHandler(conversation.id)}>
        <CloseXIcon />
      </CloseBTN>
    </MinimisedChatHead>
  );
}

export default Minimised;
