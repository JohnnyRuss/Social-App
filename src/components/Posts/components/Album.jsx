import { useState } from 'react';

import { AlbumBox } from './AlbumStyled';
import { AlbumHeading, AlbumPhotos } from './';
import { ActivePostModal } from '../../Layouts';

function Album({ media }) {
  const [openPost, setOpenPost] = useState(false);
  const [post, setPost] = useState(null);

  function openPostHandler(params) {
    setPost({
      type: 'all',
      user: params.user,
      id: params.id,
    });

    setOpenPost(true);
  }

  return (
    <AlbumBox>
      <AlbumHeading />
      <AlbumPhotos media={media} openPostHandler={openPostHandler} />
      {openPost && <ActivePostModal post={post} openPost={openPost} setOpenPost={setOpenPost} />}
    </AlbumBox>
  );
}

export default Album;
