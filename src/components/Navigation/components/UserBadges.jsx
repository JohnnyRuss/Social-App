import { useContext } from 'react';

import { DOMcontext } from '../../../store/context/DOMContext';

import { BadgeBox } from './styled';
import { UserAvatar, LinkedBadge, BurgerBTN } from './';
import { Badge } from '../../Layouts';
//prettier-ignore
import { HomeIcon, MessengerIcon, NotificationIcon, UserFriendRequestsIcon } from '../../Layouts/Icons/icons';

function UserBadges() {
  const {
    setActiveNavBurger,
    activateFriendRequestModal,
    activateMessengerModal,
    activateNotificationModal,
  } = useContext(DOMcontext);

  return (
    <BadgeBox>
      <UserAvatar />
      <LinkedBadge path='/' content={undefined} iconSize='2.3rem' Icon={HomeIcon} />
      <Badge
        Icon={<UserFriendRequestsIcon />}
        iconSize='2.4rem'
        content={1}
        onClick={activateFriendRequestModal}
      />
      <Badge
        Icon={<MessengerIcon />}
        content={1}
        onClick={activateMessengerModal}
      />
      <Badge
        Icon={<NotificationIcon />}
        content={4}
        iconSize='2.4rem'
        onClick={activateNotificationModal}
      />
      <BurgerBTN setActiveNavBurger={setActiveNavBurger} />
    </BadgeBox>
  );
}

export default UserBadges;
