import { InfoLinksList } from './SideBarStyled';
import { LINKS } from '../lib/index';
import { SideBarListItem } from './';

function SideBarList() {
  return (
    <InfoLinksList>
      {LINKS.map((link, i) => (
        <SideBarListItem key={`user info link ${i}`} link={link} />
      ))}
    </InfoLinksList>
  );
}

export default SideBarList;
