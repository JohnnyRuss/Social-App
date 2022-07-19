import { Nav, NavList } from './NavStyled';
import { NavItem } from './';

function SearchAndHeadingNavigation() {
  return (
    <Nav>
      <NavList>
        <NavItem title={'pending requests'} path={'pendingRequests'} />
        <NavItem title={'sent requests'} path={'sentRequests'} />
      </NavList>
    </Nav>
  );
}

export default SearchAndHeadingNavigation;
