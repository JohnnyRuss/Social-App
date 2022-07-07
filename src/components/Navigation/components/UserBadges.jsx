import { useContext } from 'react';

import { DOMcontext } from '../../../store/context/DOMContext';

import { BadgeBox } from './styled';
import { UserAvatar, LinkedBadge, BurgerBTN } from './';
import { Badge } from '../../Layouts';
//prettier-ignore
import { HomeIcon, MessengerIcon, NotificationIcon, UserFriendsIcon } from '../../Layouts/Icons/icons';

function UserBadges({ activeMessengerModal, activeNotificationModal }) {
  const { setActiveNavBurger } = useContext(DOMcontext);

  return (
    <BadgeBox>
      <UserAvatar />
      <LinkedBadge path='/' content={undefined} iconSize='2.3rem' Icon={HomeIcon} />
      <Badge
        Icon={<UserFriendsIcon />}
        iconSize='2rem'
        content={1}
        // onBlur={activeMessengerModal}
      />
      <Badge
        Icon={<MessengerIcon />}
        content={1}
        onClick={activeMessengerModal}
        // onBlur={activeMessengerModal}
      />
      <Badge
        Icon={<NotificationIcon />}
        content={4}
        iconSize='2.5rem'
        onClick={activeNotificationModal}
        // onBlur={activeNotificationModal}
      />
      <BurgerBTN setActiveNavBurger={setActiveNavBurger} />
    </BadgeBox>
  );
}

export default UserBadges;
