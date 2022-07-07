import { ContentBox, UserName, Text } from './commentContentStyled';
import {CommentReactions} from "./"

function CommentContentInfo({comment,commentReactions}) {
  return (
    <ContentBox>
      <UserName>{comment?.authorName}</UserName>
      <Text>{comment?.text}</Text>
      {comment.reactions?.[0] && (
        <CommentReactions commentReactions={commentReactions} comment={comment} />
      )}
    </ContentBox>
  );
}

export default CommentContentInfo;
