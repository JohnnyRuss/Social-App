import { CloseXIcon } from '../../Layouts/Icons/icons';
import {
  ExtraMinimisedChatHeadsModalListItem,
  Text,
  CloseExtraMinimisedChatHeadBTN,
} from './minimisedConversationsStyled';

function MinimisedExtraListItem({
  conversation,
  reActivateConversationHandler,
  closeMinimisedConversationHandler,
}) {
  return (
    <ExtraMinimisedChatHeadsModalListItem
      onClick={() => reActivateConversationHandler(conversation.id)}>
      <Text>{conversation?.adressatName}</Text>
      <CloseExtraMinimisedChatHeadBTN
        onClick={(e) => {
          e.stopPropagation();
          closeMinimisedConversationHandler(conversation.id);
        }}>
        <CloseXIcon />
      </CloseExtraMinimisedChatHeadBTN>
    </ExtraMinimisedChatHeadsModalListItem>
  );
}

export default MinimisedExtraListItem;
