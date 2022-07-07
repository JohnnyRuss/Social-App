import { ImageFigure, Image } from './commentContentStyled';

function CommentContentImage({comment}) {
  return (
    <ImageFigure>
      <Image src={comment?.authorImage.image} />
    </ImageFigure>
  );
}

export default CommentContentImage;
