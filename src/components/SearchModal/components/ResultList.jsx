import ResultItem from './ResultItem';

function ResultList({ result }) {
  return result?.map((res) => <ResultItem result={res} key={res.id} />);
}

export default ResultList;
