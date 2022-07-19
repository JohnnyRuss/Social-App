import { RequestFigure as RequestFig, Image } from './styled';

function RequestFigure({ userImage }) {
  return (
    <RequestFig>
      <Image src={userImage} />
    </RequestFig>
  );
}

export default RequestFigure;
