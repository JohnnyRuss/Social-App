import { ChatHeadingActionsBox, ActionBTN } from './chatHeadHeadingStyled';
import { CloseIcon, MinimizeIcon } from '../../Layouts/Icons/icons';

function HeadingActions({ onMinimize, onClose }) {
  return (
    <ChatHeadingActionsBox>
      <ActionBTN minimise size={2.5} onClick={onMinimize}>
        <MinimizeIcon />
      </ActionBTN>
      <ActionBTN size={2} onClick={onClose}>
        <CloseIcon />
      </ActionBTN>
    </ChatHeadingActionsBox>
  );
}

export default HeadingActions;
