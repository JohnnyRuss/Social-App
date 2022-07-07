import { ActivePostMediaContainer, ActivePostMedia as PostMedia } from './styled';
import { ActivePostSliderBTNS } from './';

function ActivePostMedia({ post, handlePreviousPost, handleNextPost }) {
  return (
    <ActivePostMediaContainer>
      <PostMedia src={post?.image} />
      <ActivePostSliderBTNS
        handlePreviousPost={handlePreviousPost}
        handleNextPost={handleNextPost}
      />
    </ActivePostMediaContainer>
  );
}

export default ActivePostMedia;
