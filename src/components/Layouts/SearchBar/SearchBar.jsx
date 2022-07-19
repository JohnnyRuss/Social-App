import { SearchBarContainer, SearchBar as Bar, Input, SearchBarLabel } from './components/styled';
import { SearchIcon } from '../Icons/icons';

function SearchBar({ setSearchQuery, searchQuery }) {
  return (
    <SearchBarContainer>
      <Bar>
        <SearchBarLabel htmlFor='searchBarLocal'>
          <SearchIcon />
        </SearchBarLabel>
        <Input
          type='text'
          placeholder='search on room'
          id='searchBarLocal'
          border
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
      </Bar>
    </SearchBarContainer>
  );
}

export default SearchBar;
