import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { userPostsPageSelector } from '../store/selectors/userSelector';

import { SideBar, Landing } from '../components/Posts';
import { CreatePost, Posts as AllPosts } from '../components/Layouts';

function Posts() {
  const postsData = useSelector(userPostsPageSelector);
  const { posts, sideBarInfo } = postsData;

  return (
    <Fragment>
      <SideBar sideBarInfo={sideBarInfo} />
      <Landing>
        <CreatePost />
        <AllPosts data={posts} />
      </Landing>
    </Fragment>
  );
}

export default Posts;
