import { ActivePostInfoContainer } from './styled';
import { PostHead, PostDescription, PostInfo, MakeActions, Comments } from './';

function ActivePostDetails({ post, setShowCommnets, showCommnets, closeModal }) {
  return (
    <ActivePostInfoContainer>
      <PostHead
        postId={post?.id}
        userImg={post?.authorImg?.image}
        userName={post?.authorName}
        userId={post?.userId}
        createdAt={post?.createdAt}
        closeModal={closeModal}
      />
      <PostDescription description={post?.description} />
      <PostInfo
        postReactions={post?.reactions}
        comments={post?.comments}
        showCommnets={setShowCommnets}
      />
      <MakeActions postId={post?.id} reactions={post?.reactions} showCommnets={setShowCommnets} />
      {showCommnets && <Comments postId={post?.id} comments={post?.comments} maxHeight='100%' />}
    </ActivePostInfoContainer>
  );
}

export default ActivePostDetails;
