import { SharesAndComments, Text } from './PostInfoStyled';

function PostInfoSharesAndComments({ commentsLength, showCommnets }) {
  return (
    <SharesAndComments>
      {/* <Text>3 shares</Text> */}
      <Text onClick={() => showCommnets((prev) => !prev)} cursor='true'>
        {commentsLength} comments
      </Text>
    </SharesAndComments>
  );
}

export default PostInfoSharesAndComments;
