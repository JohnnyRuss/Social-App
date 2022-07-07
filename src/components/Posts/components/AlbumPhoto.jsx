import { Photo } from './AlbumStyled';
import { Image } from '../../Layouts';

function AlbumPhoto({ photo, onClick }) {
  return (
    <Photo>
      <Image src={photo} ratio='1/1' onClick={onClick} />
    </Photo>
  );
}

export default AlbumPhoto;
