import { ChatHeadingIdentifier, Image, Text, OptBTN } from './chatHeadHeadingStyled';
import { ArrowDownRectingle } from '../../Layouts/Icons/icons';

function HeadingIdentifier({ adressatImage, adressatName }) {
  return (
    <ChatHeadingIdentifier>
      <Image src={adressatImage} />
      <Text>{adressatName}</Text>
      <OptBTN>
        <ArrowDownRectingle />
      </OptBTN>
    </ChatHeadingIdentifier>
  );
}

export default HeadingIdentifier;
