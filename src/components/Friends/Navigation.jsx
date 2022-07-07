import { Nav, NavList } from './components/NavStyled';
import { NavItem } from './components';

function Navigation() {
  return (
    <Nav>
      <NavList>
        <NavItem title='all friends' path='allFriends' />
        <NavItem title='munutual friends' path='muntualFriends' />
        <NavItem title='recently added' path='recentlyAddedFriends' />
        <NavItem title='friends birthdays' path='upComingBirthdays' />
      </NavList>
    </Nav>
  );
}

export default Navigation;
