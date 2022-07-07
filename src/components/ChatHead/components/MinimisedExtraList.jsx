import {
  ExtraMinimisedChatHeadsModalBridge,
  ExtraMinimisedChatHeadsModalList,
} from './minimisedConversationsStyled';
import { MinimisedExtraListItem } from './';

function MinimisedExtraList({
  conversation,
  reActivateConversationHandler,
  closeMinimisedConversationHandler,
  hideExtraListHandler,
}) {
  return (
    <ExtraMinimisedChatHeadsModalBridge className='bridge' onMouseLeave={hideExtraListHandler}>
      <ExtraMinimisedChatHeadsModalList>
        {conversation?.map((con) => (
          <MinimisedExtraListItem
            key={con?.id}
            conversation={con}
            reActivateConversationHandler={reActivateConversationHandler}
            closeMinimisedConversationHandler={closeMinimisedConversationHandler}
          />
        ))}
      </ExtraMinimisedChatHeadsModalList>
    </ExtraMinimisedChatHeadsModalBridge>
  );
}

export default MinimisedExtraList;
