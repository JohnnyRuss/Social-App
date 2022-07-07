import { Photo } from './photosStyled';

function PhotosList({ openPostHandler, mediaPosts }) {
  return mediaPosts.map((media) => (
    <Photo
      src={media.image}
      alt='user photo'
      key={media.id}
      onClick={() => openPostHandler({ user: media.user, id: media.id })}
    />
  ));
}

export default PhotosList;
