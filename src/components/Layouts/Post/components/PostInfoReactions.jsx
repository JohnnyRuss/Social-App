import PostInfoReactionsList from './PostInfoReactionsList';
import { Reactions, Text } from './PostInfoStyled';
import { LikeIcon } from '../../Icons/icons';

function PostInfoReactions({ reactionsVariety, postReactions }) {
  return (
    <Reactions>
      {reactionsVariety[0] && <PostInfoReactionsList reactionsVariety={reactionsVariety} />}
      {!reactionsVariety[0] && <LikeIcon />}
      <Text>{postReactions?.length || 0}</Text>
    </Reactions>
  );
}

export default PostInfoReactions;
