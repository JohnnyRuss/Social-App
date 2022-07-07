import { OptionsList, OptionsListItem } from './minimisedConversationsStyled';
import { CloseIcon, MinimizeCircleIcon } from '../../Layouts/Icons/icons';

function MinimizedOptionsModal({
  closeAllConversationsHandler,
  minimiseAllActiveConversationsHandler,
}) {
  return (
    <OptionsList>
      <OptionsListItem onClick={closeAllConversationsHandler}>
        <CloseIcon /> close all conversations
      </OptionsListItem>
      <OptionsListItem onClick={minimiseAllActiveConversationsHandler}>
        <MinimizeCircleIcon />
        minimise all active conversation
      </OptionsListItem>
    </OptionsList>
  );
}

export default MinimizedOptionsModal;
