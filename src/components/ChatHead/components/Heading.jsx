import { ChatHeading } from './chatHeadHeadingStyled';
import { HeadingIdentifier, HeadingActions } from './';

function Heading({ onClose, adressatImage, adressatName, onMinimize }) {
  return (
    <ChatHeading>
      <HeadingIdentifier adressatImage={adressatImage} adressatName={adressatName} />
      <HeadingActions onMinimize={onMinimize} onClose={onClose} />
    </ChatHeading>
  );
}

export default Heading;
