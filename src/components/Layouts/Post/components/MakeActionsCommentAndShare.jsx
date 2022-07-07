import { CommentAndShareContainer } from './makeActionsStyled';
import { CommentIcon, ShareIcon } from '../../Icons/icons';
import { DetailedIcon } from '../../';

function MakeActionsCommentAndShare({showCommnets}) {
  return (
    <CommentAndShareContainer>
      <DetailedIcon
        onClick={() => showCommnets(true)}
        Icon={<CommentIcon />}
        caption='leave comment'
      />
      {/* <DetailedIcon Icon={<ShareIcon />} caption='share' /> */}
    </CommentAndShareContainer>
  );
}

export default MakeActionsCommentAndShare;
