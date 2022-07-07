import { useSelector } from 'react-redux';

import { ModalBox, ContentBox } from './components/indexStyled';
import ResultList from './components/ResultList';
import { Spinner } from './../Layouts';

function SearchModal({ result }) {
  const { pending } = useSelector((state) => state.timeline.searchProcess);

  return (
    <ModalBox>
      <ContentBox pending={pending}>
        {pending && <Spinner />}
        {!pending && <ResultList result={result} />}
      </ContentBox>
    </ModalBox>
  );
}

export default SearchModal;
