import { ExtraMinimisedChatHeadsModalContainer } from './minimisedConversationsStyled';
import { MinimisedExtraList } from './';

function MinimisedExtraOverlayAndModal({
  conversation,
  showExtra,
  reActivateConversationHandler,
  closeMinimisedConversationHandler,
  hideExtraListHandler,
}) {
  return (
    <ExtraMinimisedChatHeadsModalContainer>
      + {conversation?.length}
      {showExtra && (
        <MinimisedExtraList
          conversation={conversation}
          reActivateConversationHandler={reActivateConversationHandler}
          closeMinimisedConversationHandler={closeMinimisedConversationHandler}
          hideExtraListHandler={hideExtraListHandler}
        />
      )}
    </ExtraMinimisedChatHeadsModalContainer>
  );
}

export default MinimisedExtraOverlayAndModal;
