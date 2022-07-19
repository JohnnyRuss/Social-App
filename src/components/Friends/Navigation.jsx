import { useForeignUser } from '../../hooks';

import { Nav, NavList } from './components/NavStyled';
import { NavItem } from './components';

function Navigation() {
  const { foreignUser } = useForeignUser();
  return (
    <Nav>
      <NavList>
        <NavItem title='all friends' path='allFriends' />
        {foreignUser && <NavItem title='munutual friends' path='muntualFriends' />}
        <NavItem title='recently added' path='recentlyAddedFriends' />
        <NavItem title='friends birthdays' path='upComingBirthdays' />
      </NavList>
    </Nav>
  );
}

export default Navigation;
