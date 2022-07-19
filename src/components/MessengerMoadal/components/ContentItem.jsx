import TimeAgo from 'react-timeago';

import { ContentItemContainer, InfoBox, Author, MiniBox, Message } from './styled';
import { Image } from '../../Layouts';

function ContentItem({
  adressatName,
  adressatImage,
  message,
  createdAt,
  miniBoxDirection,
  onClick,
  conversationId,
}) {
  return (
    <ContentItemContainer onClick={() => onClick(conversationId)}>
      <Image dimention={['5rem', '5rem']} radius='50%' src={adressatImage?.image} />
      <InfoBox>
        <Author>{adressatName}</Author>
        <MiniBox direction={miniBoxDirection}>
          <Message>{message}</Message>
          <TimeAgo date={createdAt} />
        </MiniBox>
      </InfoBox>
    </ContentItemContainer>
  );
}

export default ContentItem;
