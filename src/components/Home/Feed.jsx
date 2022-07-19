import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getTimelinePosts } from '../../store/reducers/timelineReducer';
import { timelinePostsSelector, isActiveSelector } from '../../store/selectors/userSelector';

import { FeedContainer } from './styled';
import { CreatePost, Posts, Spinner } from '../Layouts';

function Feed() {
  const dispatch = useDispatch();
  const timelinePosts = useSelector(timelinePostsSelector);
  const active = useSelector(isActiveSelector);
  const pending = useSelector((state) => state.timeline.process.pending);

  useEffect(() => {
    if (!active) return;
    dispatch(getTimelinePosts());
  }, [dispatch, active]);

  return (
    <FeedContainer>
      <CreatePost />
      {pending && <Spinner />}
      {!pending && <Posts data={timelinePosts} />}
    </FeedContainer>
  );
}

export default Feed;
