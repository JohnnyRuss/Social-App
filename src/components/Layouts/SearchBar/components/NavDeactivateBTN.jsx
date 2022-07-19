import { SearchBarLabel } from './styled';
import { ArrowLeftRectingle } from '../../Icons/icons';

function DeactivateBTN({ activateSearchBar }) {
  return (
    <SearchBarLabel onClick={() => activateSearchBar(false)} htmlFor='searchBar'>
      <ArrowLeftRectingle />
    </SearchBarLabel>
  );
}

export default DeactivateBTN;
