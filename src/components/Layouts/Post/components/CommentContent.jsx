import { useState } from 'react';

import { Comment } from './commentContentStyled';
import { CommentContentImage, CommentContentInfo } from './';
import { OptionsMini } from '../../';

function CommentContent({
  comment,
  commentReactions,
  handleCommentUpdate,
  handleCommentDelete,
  foreignUser,
}) {
  const [activeHover, setActiveHover] = useState(false);

  return (
    <Comment onMouseOver={() => setActiveHover(true)} onMouseOut={() => setActiveHover(false)}>
      <CommentContentImage comment={comment} />
      <CommentContentInfo comment={comment} commentReactions={commentReactions} />
      {!foreignUser && (
        <OptionsMini
          updateHandler={handleCommentUpdate}
          deleteHandler={handleCommentDelete}
          content={comment}
          showOnHover={true}
          activeHover={activeHover}
        />
      )}
    </Comment>
  );
}

export default CommentContent;
