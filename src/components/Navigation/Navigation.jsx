import { useContext } from 'react';
import { useSelector } from 'react-redux';

import { DOMcontext } from '../../store/context/DOMContext';
import { useSearchBar } from '../../hooks';

import { Nav } from './components/styled';
import { UserBadges } from './components';
import { MessengerModal, NotificationModal, SearchModal, FriendRequestsModal } from '../';
import { Logo, NavigationSearchBar } from '../Layouts';

function Navigation() {
  const {
    activeMessengerModal,
    activeNotificationModal,
    activeFriendRequestModal,
    activateSearchBar,
    activeSearchBar,
  } = useContext(DOMcontext);

  const result = useSelector((state) => state.timeline.searchResults);

  const { searchQuery, setSearchQuery } = useSearchBar();

  return (
    <Nav>
      <Logo />
      <NavigationSearchBar
        activateSearchBar={activateSearchBar}
        activeSearchBar={activeSearchBar}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <UserBadges />
      {activeSearchBar && <SearchModal result={result} />}
      {activeFriendRequestModal && <FriendRequestsModal />}
      {activeMessengerModal && <MessengerModal />}
      {activeNotificationModal && <NotificationModal />}
    </Nav>
  );
}

export default Navigation;
