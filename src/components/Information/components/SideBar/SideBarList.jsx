import { InfoLinksList } from './SideBarStyled';
import { LINKS } from '../../lib/index';
import { SideBarListItem } from '../';

function SideBarList() {
  return (
    <InfoLinksList>
      {LINKS.map((link) => (
        <SideBarListItem key={link.id} path={link.path} title={link.title} />
      ))}
    </InfoLinksList>
  );
}

export default SideBarList;
