import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { FeedContainer, ContentBox, FeedHeadingBox, Author } from './components/styled';
import Message from './components/Message';
import TextInput from './components/TextInput';
import { Image } from '../Layouts';
import { groupMessages } from '../../lib/groupMessages';

function Feed({ conversation }) {
  const { conversationId } = useParams();
  const activeUserId = 2;
  const groupedMessages = groupMessages(conversation.messages);

  const chatRef = useRef();

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [conversationId]);

  return (
    <FeedContainer>
      <FeedHeadingBox>
        <Image src={conversation.adressatImage} dimention={['5rem', '5rem']} radius='50%' />
        <Author>{conversation.adressatName}</Author>
      </FeedHeadingBox>
      <ContentBox ref={chatRef}>
        {groupedMessages.map((msgGroup, i) => (
          <Message
            key={`message ${i}`}
            msgGroup={msgGroup}
            activeUserId={activeUserId}
            adressatImage={conversation.adressatImage}
          />
        ))}
      </ContentBox>
      <TextInput />
    </FeedContainer>
  );
}

export default Feed;
