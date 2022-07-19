import { NavLink } from 'react-router-dom';

import styles from './sideBarListItem.module.scss';
import { InfoLinksListItem } from './SideBarStyled';

function SideBarListItem({ path, title }) {
  return (
    <NavLink to={path} className={({ isActive }) => (isActive ? styles.active : styles.navLink)}>
      <InfoLinksListItem name={path}>{title}</InfoLinksListItem>
    </NavLink>
  );
}

export default SideBarListItem;
