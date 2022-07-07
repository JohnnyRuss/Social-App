import { PhotosWrapper } from './AlbumStyled';
import { AlbumPhoto } from './';

function AlbumPhotos({ media, openPostHandler }) {
  return (
    <PhotosWrapper>
      {media?.map((media, i) => (
        <AlbumPhoto
          key={`user picture ${i}`}
          photo={media.image}
          onClick={() => openPostHandler({ user: media.user, id: media.id })}
        />
      ))}
    </PhotosWrapper>
  );
}

export default AlbumPhotos;
