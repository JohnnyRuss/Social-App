import { NavLink } from 'react-router-dom';

import styles from './Components/Navlink.module.scss';
import { UserMenuList, UserMenuListItem } from './Components/UserMenuStyled';

function UserMenu() {
  return (
    <UserMenuList>
      <NavLink to='posts' className={({ isActive }) => (isActive ? styles.active : '')}>
        <UserMenuListItem>posts</UserMenuListItem>
      </NavLink>
      <NavLink to='information/review' className={({ isActive }) => (isActive ? styles.active : '')}>
        <UserMenuListItem>information</UserMenuListItem>
      </NavLink>
      <NavLink to='friends' className={({ isActive }) => (isActive ? styles.active : '')}>
        <UserMenuListItem>friends</UserMenuListItem>
      </NavLink>
      <NavLink to='photos' className={({ isActive }) => (isActive ? styles.active : '')}>
        <UserMenuListItem>photos</UserMenuListItem>
      </NavLink>
      <NavLink to='videos' className={({ isActive }) => (isActive ? styles.active : '')}>
        <UserMenuListItem>videos</UserMenuListItem>
      </NavLink>
    </UserMenuList>
  );
}

export default UserMenu;
