import { useContext } from 'react';
import { InfoLinksListItem } from './SideBarStyled';
import { generateName } from '../lib/index';

import { DOMcontext } from '../../../store/context/DOMContext';

function SideBarListItem({ link }) {
  const { target, activateInfoBlock } = useContext(DOMcontext);
  
  return (
    <InfoLinksListItem
      name={generateName(link)}
      active={target[`${generateName(link)}`]}
      onClick={activateInfoBlock}>
      {link}
    </InfoLinksListItem>
  );
}

export default SideBarListItem;
