import useLocalSearch from '../../hooks/useLocalSearch';

import { SearchBar } from '../Layouts';
import { Container, HeadingTitle } from './components/searchAndHeadingStyled';
import { SearchAndHeadingNavigation } from './components';

function SearchAndHeading() {
  const { searchQuery, setSearchQuery } = useLocalSearch();

  return (
    <Container>
      <HeadingTitle>friends</HeadingTitle>
      <SearchAndHeadingNavigation />
      <SearchBar flex={1} border={true} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </Container>
  );
}

export default SearchAndHeading;
