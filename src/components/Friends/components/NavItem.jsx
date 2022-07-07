import { NavLink } from 'react-router-dom';
import styles from './Navlink.module.scss';
import { NavListItem } from './NavStyled';

function NavItem({ title, path }) {
  return (
    <NavListItem>
      <NavLink to={path} className={({ isActive }) => (isActive ? styles.active : '')}>
        {title}
      </NavLink>
    </NavListItem>
  );
}

export default NavItem;
