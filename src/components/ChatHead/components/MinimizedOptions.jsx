import { useMinimisedChatHeads } from '../../../hooks';

import { MinimizedOptionsBTN } from './minimisedConversationsStyled';
import { MinimizedOptionsModal } from './';
import { DotsHorizontalIcon } from '../../Layouts/Icons/icons';

function MinimizedOptions() {
  const {
    activeOptions,
    setActiveOptions,
    closeAllConversationsHandler,
    minimiseAllActiveConversationsHandler,
  } = useMinimisedChatHeads();

  return (
    <MinimizedOptionsBTN onClick={() => setActiveOptions((prevState) => !prevState)}>
      <DotsHorizontalIcon />
      {activeOptions && (
        <MinimizedOptionsModal
          closeAllConversationsHandler={closeAllConversationsHandler}
          minimiseAllActiveConversationsHandler={minimiseAllActiveConversationsHandler}
        />
      )}
    </MinimizedOptionsBTN>
  );
}

export default MinimizedOptions;
