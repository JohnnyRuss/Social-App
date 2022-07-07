import { Fragment } from 'react';

import { Image, GroupBox, MessageText } from './styled';

function ChatMessage({ msgGroup, activeUserId, adressatImage }) {
  return (
    <Fragment>
      {msgGroup[0]?.user !== activeUserId && <Image src={adressatImage.image} />}
      <GroupBox>
        {msgGroup?.map((group, i, arr) => (
          <MessageText
            first={i === 0}
            last={i === arr.length - 1}
            active={group.user === activeUserId}
            key={`message group ${i}`}>
            {group.text}
          </MessageText>
        ))}
      </GroupBox>
    </Fragment>
  );
}

export default ChatMessage;
