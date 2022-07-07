import { Link, useParams } from 'react-router-dom';
import { AlbumTitleBox, AlbumTitle, ShowAllLink } from './AlbumStyled';

function AlbumHeading() {
  const { userId } = useParams();
  return (
    <AlbumTitleBox>
      <AlbumTitle>photos</AlbumTitle>
      <Link to={`/profile/${userId}/photos`}>
        <ShowAllLink>show all photos</ShowAllLink>
      </Link>
    </AlbumTitleBox>
  );
}

export default AlbumHeading;
