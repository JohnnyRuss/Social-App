import { SearchBar } from '../Layouts';
import { Container, HeadingTitle } from './components/searchAndHeadingStyled';

function SearchAndHeading() {
  return (
    <Container>
      <HeadingTitle>friends</HeadingTitle>
      <SearchBar flex={1} border={true} />
    </Container>
  );
}

export default SearchAndHeading;
