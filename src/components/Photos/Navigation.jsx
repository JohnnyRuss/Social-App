import { NavLink } from 'react-router-dom';

import { Nav } from './components/navigationStyled';
import styles from './components/navigation.module.scss';

function Navigation() {
  return (
    <Nav>
      <NavLink to="allPhotos" className={({ isActive }) => (isActive ? styles.active : '')}>your photos</NavLink>
      <NavLink to="albums" className={({ isActive }) => (isActive ? styles.active : '')}>albums</NavLink>
    </Nav>
  );
}

export default Navigation;
