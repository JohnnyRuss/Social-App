import { ImageBox, Image } from './friendsListStyled';

function FriendsListImage({friend}) {
  return (
    <ImageBox>
      <Image src={friend?.profileImg.image} />
    </ImageBox>
  );
}

export default FriendsListImage;
