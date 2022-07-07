import { SearchBarContainer } from './components/styled';
import SearchField from './components/SearchField';

function SearchBar({
  activeSearchBar,
  setActiveSearchBar,
  setSearchQuery,
  searchQuery,
  flex,
  border,
}) {

  return (
    <SearchBarContainer flex={flex}>
      <SearchField
        setActiveSearchBar={setActiveSearchBar}
        activeSearchBar={activeSearchBar}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        border={border}
      />
    </SearchBarContainer>
  );
}

export default SearchBar;
