import { NavSearchBarContainer } from './components/styled';
import { NavSearchField } from './components';

function NavigationSearchBar({ activateSearchBar, activeSearchBar, setSearchQuery, searchQuery }) {
  return (
    <NavSearchBarContainer>
      <NavSearchField
        activateSearchBar={activateSearchBar}
        activeSearchBar={activeSearchBar}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
      />
    </NavSearchBarContainer>
  );
}

export default NavigationSearchBar;
