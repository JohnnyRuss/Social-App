import { useMemo } from 'react';

import { Container } from './PostInfoStyled';
import { PostInfoReactions, PostInfoSharesAndComments } from './';
import { reactions } from '../../../../lib/reactions';

function PostInfo({ postReactions, comments, showCommnets }) {
  const commentsLength = useMemo(
    () =>
      comments
        ?.map((comment) => comment?.replies?.length + 1)
        .reduce((acc, num) => (acc += num), 0),
    [comments]
  );

  const reactionsVariety = useMemo(
    () =>
      Array.from(new Set(postReactions?.map((reaction) => reaction.reaction))).map((reaction) =>
        reactions.find((reactionIcon) => reactionIcon.name === reaction)
      ),
    [postReactions]
  );

  return (
    <Container>
      <PostInfoReactions reactionsVariety={reactionsVariety} postReactions={postReactions} />
      <PostInfoSharesAndComments commentsLength={commentsLength} showCommnets={showCommnets} />
    </Container>
  );
}

export default PostInfo;
