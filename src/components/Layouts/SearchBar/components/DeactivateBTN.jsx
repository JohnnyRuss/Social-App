import { IconBox } from './styled';
import { ArrowLeftRectingle } from '../../Icons/icons';

function DeactivateBTN({ setActiveSearchBar }) {
  return (
    <IconBox onClick={() => setActiveSearchBar(false)} htmlFor='searchBar'>
      <ArrowLeftRectingle />
    </IconBox>
  );
}

export default DeactivateBTN;
