import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { userNavInfoSelector } from '../../../store/selectors/userSelector';

import { UserIDE } from './styled';
import { UserIdentifier } from '../../Layouts';

function UserAvatar() {
  const { firstName, profileImg, _id } = useSelector(userNavInfoSelector);

  return (
    <Link to={`/profile/${_id}`}>
      <UserIDE>
        <UserIdentifier src={profileImg.image} userName={firstName} color='white' />
      </UserIDE>
    </Link>
  );
}

export default UserAvatar;
