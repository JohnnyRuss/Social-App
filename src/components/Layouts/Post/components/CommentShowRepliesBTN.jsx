import { ShowRepliesBTN } from './commentStyled';

function CommentShowRepliesBTN({showRepliesHandler, showReplies}) {
  return (
    <ShowRepliesBTN onClick={showRepliesHandler}>
      {showReplies ? 'hide replies' : 'show replies'}
    </ShowRepliesBTN>
  );
}

export default CommentShowRepliesBTN;
