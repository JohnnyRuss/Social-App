import { IconBox } from './styled';
import { SearchIcon } from '../../Icons/icons';

function ActivateBTN({ setActiveSearchBar }) {
  return (
    <IconBox onClick={() => setActiveSearchBar(true)} htmlFor='searchBar'>
      <SearchIcon />
    </IconBox>
  );
}

export default ActivateBTN;
