import { useMinimisedChatHeads } from '../../../hooks';

import { ExtraMinimisedChatHeadsContainer, Image } from './minimisedConversationsStyled';
import { MinimisedExtraOverlayAndModal } from './';

function MinimisedExtra({ conversation }) {
  const {
    reActivateConversationHandler,
    closeMinimisedConversationHandler,
    showExtra,
    setShowExtra,
    hideExtraListHandler,
  } = useMinimisedChatHeads();

  return (
    <ExtraMinimisedChatHeadsContainer
      className='extra'
      onMouseEnter={() => setShowExtra(true)}
      onMouseLeave={hideExtraListHandler}>
      <Image src={conversation[0]?.adressatImage?.image} />
      <MinimisedExtraOverlayAndModal
        conversation={conversation}
        showExtra={showExtra}
        reActivateConversationHandler={reActivateConversationHandler}
        closeMinimisedConversationHandler={closeMinimisedConversationHandler}
        hideExtraListHandler={hideExtraListHandler}
      />
    </ExtraMinimisedChatHeadsContainer>
  );
}

export default MinimisedExtra;
