import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { DOMcontext } from '../../../store/context/DOMContext';

import { Result, ResultFigure, ResultImage, ResultTitle } from './indexStyled';

function ResultItem({ result }) {
  const { setActiveSearchBar } = useContext(DOMcontext);

  return (
    <Link to={`/profile/${result?.id}`} onClick={() => setActiveSearchBar(false)}>
      <Result>
        <ResultFigure>
          <ResultImage src={result?.profileImage} alt={`result item`} />
        </ResultFigure>
        <ResultTitle>{result?.userName}</ResultTitle>
      </Result>
    </Link>
  );
}

export default ResultItem;
