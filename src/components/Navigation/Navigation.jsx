import { useContext } from 'react';
import { useSelector } from 'react-redux';

import { DOMcontext } from '../../store/context/DOMContext';
import { useSearchBar } from '../../hooks';

import { Nav } from './components/styled';
import { UserBadges } from './components';
import { MessengerModal, NotificationModal, SearchModal } from '../';
import { Logo, SearchBar } from '../Layouts';

function Navigation() {
  const {
    activeMessengerModal,
    activeNotificationModal,
    activateMessengerModal,
    activateNotificationModal,
    activeSearchBar,
    setActiveSearchBar,
  } = useContext(DOMcontext);

  const result = useSelector((state) => state.timeline.searchResults);

  const { searchQuery, setSearchQuery } = useSearchBar();

  return (
    <Nav>
      <Logo />
      <SearchBar
        activeSearchBar={activeSearchBar}
        setActiveSearchBar={setActiveSearchBar}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <UserBadges
        activeMessengerModal={activateMessengerModal}
        activeNotificationModal={activateNotificationModal}
      />
      {activeSearchBar && <SearchModal result={result} />}
      {activeMessengerModal && <MessengerModal />}
      {activeNotificationModal && <NotificationModal />}
    </Nav>
  );
}

export default Navigation;
