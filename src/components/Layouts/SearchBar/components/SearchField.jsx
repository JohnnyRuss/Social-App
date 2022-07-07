import { SearchBarWrapper, Input } from './styled';
import ActivateBTN from './ActivateBTN';
import DeactivateBTN from './DeactivateBTN';

function SearchField({ setActiveSearchBar, activeSearchBar, setSearchQuery, searchQuery, border }) {
  return (
    <SearchBarWrapper border={border}>
      {!activeSearchBar && <ActivateBTN setActiveSearchBar={setActiveSearchBar} />}
      {activeSearchBar && <DeactivateBTN setActiveSearchBar={setActiveSearchBar} />}
      <Input
        type='text'
        placeholder='search on Lamasocial'
        activeBar={activeSearchBar}
        id='searchBar'
        border
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        onFocus={() => setActiveSearchBar(true)}
      />
    </SearchBarWrapper>
  );
}

export default SearchField;
