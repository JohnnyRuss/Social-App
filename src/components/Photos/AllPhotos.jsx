import { useState } from 'react';
import { useSelector } from 'react-redux';

import { PhotosBox } from './components/photosStyled';
import PhotosList from './components/PhotosList';
import { ActivePostModal } from '../Layouts';

function AllPhotos() {
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

  const userPosts = useSelector((state) => state.user.user.posts);
  const mediaPosts = userPosts
    .filter((post) => Object.keys(post).includes('image'))
    .map((post) => ({
      image: post.image,
      user: post.user,
      id: post.id,
    }));

  return (
    <PhotosBox>
      <PhotosList openPostHandler={openPostHandler} mediaPosts={mediaPosts}/>
      {openPost && <ActivePostModal post={post} openPost={openPost} setOpenPost={setOpenPost} />}
    </PhotosBox>
  );
}

export default AllPhotos;
