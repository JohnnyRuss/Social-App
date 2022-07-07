import { Link } from 'react-router-dom';
import TimeAgo from 'react-timeago';

import { UserIdentifierBox } from './postHeadStyled';
import { UserIdentifier } from '../..';

function PostHeadUserIdentifierAndTime({ userId, userImg, userName, createdAt }) {
  return (
    <UserIdentifierBox>
      <Link to={`/profile/${userId}`}>
        <UserIdentifier src={userImg} userName={userName} size='1.4rem' />
      </Link>
      {createdAt && <TimeAgo date={createdAt} />}
    </UserIdentifierBox>
  );
}

export default PostHeadUserIdentifierAndTime;
