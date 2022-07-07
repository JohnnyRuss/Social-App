import { ConversationBox, InfoBox, Author, MiniBox, Message, Text } from './styled';
import { Image } from '../../Layouts';

function Conversation({ author, authorImage, message, timeAgo }) {
  return (
    <ConversationBox>
      <Image dimention={['5rem', '5rem']} radius='50%' src={authorImage} />
      <InfoBox>
        <Author>{author}</Author>
        <MiniBox>
          <Message>{message}</Message>
          <Text>{timeAgo}</Text>
        </MiniBox>
      </InfoBox>
    </ConversationBox>
  );
}

export default Conversation;
