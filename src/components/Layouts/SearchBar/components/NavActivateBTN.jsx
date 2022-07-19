import { SearchBarLabel } from './styled';
import { SearchIcon } from '../../Icons/icons';

function ActivateBTN({ activateSearchBar }) {
  return (
    <SearchBarLabel onClick={() => activateSearchBar(true)} htmlFor='searchBar'>
      <SearchIcon />
    </SearchBarLabel>
  );
}

export default ActivateBTN;
