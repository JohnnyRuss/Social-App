import { useSelector } from 'react-redux';

import { userSelector } from '../../../../store/selectors/userSelector';
import { useReaction } from '../../../../hooks';

import { Container } from './makeActionsStyled';
import { MakeActionsCommentAndShare } from './';
import { Reactions } from '../../';

function MakeActions({ showCommnets, postId, reactions }) {
  const { id } = useSelector(userSelector);
  const activeUserExistingReaction = reactions?.find((reaction) => reaction?.user === id);

  const { handleReaction } = useReaction(
    { user: id, post: postId },
    activeUserExistingReaction,
    'REACT_ON_POST'
  );

  return (
    <Container>
      <Reactions
        handler={handleReaction}
        activeUserExistingReaction={activeUserExistingReaction}
        figureSize={2}
      />
      <MakeActionsCommentAndShare showCommnets={showCommnets} />
    </Container>
  );
}

export default MakeActions;
