import { Fragment } from 'react';
import Post from './Post';

function Posts({ data }) {
  return (
    <Fragment>
      {data?.map((post) => (
        <Post post={post} key={post?.id} />
      ))}
    </Fragment>
  );
}

export default Posts;
