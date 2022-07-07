import { useState } from 'react';

import {
  PostHead,
  PostDescription,
  PostImage,
  PostInfo,
  MakeActions,
  Comments,
} from './components';
import { Container } from './components/styled';
import { CreatePostModal, ActivePostModal } from '../';

function Post({ post }) {
  // prettier-ignore
  const { id, authorName, authorImg, description, image, createdAt, userId, reactions, comments } = post;

  const [showCommnets, setShowCommnets] = useState(false);

  const [openPost, setOpenPost] = useState(false);

  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [file, setFile] = useState(null);

  function postUpdateHandler() {
    setOpenUpdateModal(true);
    setFile(post.image);
  }

  const closeModal = (e) => setOpenUpdateModal(false);

  return (
    <Container>
      <PostHead
        postId={id}
        postUpdateHandler={postUpdateHandler}
        userImg={authorImg?.image}
        userName={authorName}
        userId={userId}
        createdAt={createdAt}
      />
      {description && <PostDescription description={description} />}
      {image && <PostImage media={image} setOpenPost={setOpenPost} />}
      <PostInfo postReactions={reactions} comments={comments} showCommnets={setShowCommnets} />
      <MakeActions postId={id} reactions={reactions} showCommnets={setShowCommnets} />
      {showCommnets && <Comments postId={id} comments={comments} />}
      {openPost && <ActivePostModal openPost={openPost} setOpenPost={setOpenPost} post={post} />}
      {openUpdateModal && (
        <CreatePostModal
          setOpenModal={setOpenUpdateModal}
          openModal={openUpdateModal}
          closeModal={closeModal}
          file={file}
          setFile={setFile}
          operationType='update'
          postId={id}
        />
      )}
    </Container>
  );
}

export default Post;
