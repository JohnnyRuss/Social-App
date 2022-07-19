import { NavSearchBar, Input } from './styled';
import {NavActivateBTN, NavDeactivateBTN} from "./"

function NavSearchField({ activateSearchBar, activeSearchBar, setSearchQuery, searchQuery }) {
  return (
    <NavSearchBar>
      {!activeSearchBar && <NavActivateBTN activateSearchBar={activateSearchBar} />}
      {activeSearchBar && <NavDeactivateBTN activateSearchBar={activateSearchBar} />}
      <Input
        type='text'
        placeholder='search on room'
        activeBar={activeSearchBar}
        id='searchBar'
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        onFocus={() => activateSearchBar(true)}
      />
    </NavSearchBar>
  );
}

export default NavSearchField;
