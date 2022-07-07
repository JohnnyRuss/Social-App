import { Link } from 'react-router-dom';

import { AlbumBox, AlbumCover, AlbumTitle, Text } from './albumsStyled';

function AlbumItem({ cover, title, amount, path }) {
  return (
    <Link to={path}>
      <AlbumBox>
        <AlbumCover src={cover} />
        <AlbumTitle>{title}</AlbumTitle>
        <Text>{amount} items</Text>
      </AlbumBox>
    </Link>
  );
}

export default AlbumItem;
