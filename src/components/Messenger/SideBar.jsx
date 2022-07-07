import { Link } from 'react-router-dom';
import { SideBarContainer, ContentBox, SideBarHeading } from './components/styled';
import Conversation from './components/Conversation';

function SideBar({ conversations }) {
  return (
    <SideBarContainer>
      <SideBarHeading>Chats</SideBarHeading>
      <ContentBox>
        {conversations.map((conversation) => (
          <Link to={`${conversation.id}`} key={conversation.id}>
            <Conversation
              author={conversation.adressatName}
              authorImage={conversation.adressatImage}
              message={conversation.messages[conversation.messages.length - 1].text}
              timeAgo='2h'
            />
          </Link>
        ))}
      </ContentBox>
    </SideBarContainer>
  );
}

export default SideBar;
