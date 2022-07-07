import { useState } from 'react';

import { LikeBTN, ReactionsBridge, ReactionsContainer, ReactionFigure } from './styled';
import { LikeIcon } from '../Icons/icons';
import { reactions } from '../../../lib/reactions';

function Reactions({ withIcon = true, handler, activeUserExistingReaction, figureSize }) {
  const [activeReaction, setActiveReaction] = useState(false);

  function hideReactionsHandler(e) {
    if (e.target.closest('.reaction-bridge')) return;
    setActiveReaction(false);
  }

  const userReaction = activeUserExistingReaction
    ? reactions.find((reaction) => reaction.name === activeUserExistingReaction.reaction)
    : null;

  const defaultFigure = userReaction ? (
    <ReactionFigure src={userReaction.src} alt={userReaction.alt} size={figureSize} />
  ) : (
    <LikeIcon />
  );

  return (
    <LikeBTN onMouseOver={() => setActiveReaction(true)} onMouseOut={hideReactionsHandler}>
      {withIcon && defaultFigure}
      {activeUserExistingReaction ? activeUserExistingReaction.reaction : 'like'}
      {activeReaction && (
        <ReactionsBridge className='reaction-bridge' onMouseOut={() => setActiveReaction(false)}>
          <ReactionsContainer>
            {reactions.map((r) => (
              <ReactionFigure src={r.src} name={r.name} alt={r.alt} key={r.alt} onClick={handler} />
            ))}
          </ReactionsContainer>
        </ReactionsBridge>
      )}
    </LikeBTN>
  );
}

export default Reactions;
