import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getAllConversations } from '../../store/reducers/conversationReducer';
import { setConversation } from '../../store/reducers/chatHeadReducer';

import { ModalContainer, ContentBox, LinkEl } from './components/styled';
import ContentItem from './components/ContentItem';
import Heading from './components/Heading';

function MessengerModal() {
  const dispatch = useDispatch();
  const conversations = useSelector((state) => state.conversation.conversation.conversations);
  const activeUserId = useSelector((state) => state.userBasics.user._id);

  function handleOpenChatHead(id) {
    dispatch(setConversation(id));
  }

  useEffect(() => {
    dispatch(getAllConversations({ id: activeUserId, process: 'modalProcess' }));
  }, [dispatch, activeUserId]);


  return (
    <ModalContainer>
      <Heading text='chats' withIcon={true} />
      <ContentBox>
        {conversations.map((conversation) => (
          <ContentItem
            key={conversation.id}
            conversationId={conversation.id}
            adressatName={conversation.adressatName}
            adressatImage={conversation.adressatImage}
            message={conversation?.lastMessage?.text}
            createdAt={conversation?.lastMessage?.createdAt}
            miniBoxDirection='row'
            onClick={handleOpenChatHead}
          />
        ))}
      </ContentBox>
      <LinkEl>
        <Link to='/messages'>see all in messenger</Link>
      </LinkEl>
    </ModalContainer>
  );
}

export default MessengerModal;
