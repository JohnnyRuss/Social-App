import { ActionsBox } from './commentActionsStyled';
import { CommentActionsReplyBTN } from './';
import { Reactions } from '../../';

function CommentActions({
  activeUserExistingReaction,
  handleReaction,
  activeReplyHandler,
  comment,
}) {
  return (
    <ActionsBox>
      <Reactions
        withIcon={activeUserExistingReaction ? true : false}
        figureSize={1.4}
        handler={handleReaction}
        activeUserExistingReaction={activeUserExistingReaction}
      />
      <CommentActionsReplyBTN activeReplyHandler={activeReplyHandler} comment={comment} />
    </ActionsBox>
  );
}

export default CommentActions;
