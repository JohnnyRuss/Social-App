import { ImageContainer } from './postImageStyled';
import { Image } from '../../';

function PostImage({ media, setOpenPost }) {
  return (
    <ImageContainer onClick={() => setOpenPost(true)}>
      <Image src={media} />
    </ImageContainer>
  );
}

export default PostImage;
