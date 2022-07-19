import { ActiveUserItem, ActiveUserFigure, ActiveUserName } from './styled';
import { Image } from '../Layouts';

function ActiveUser({ src, userName }) {
  return (
    <ActiveUserItem>
      <ActiveUserFigure>
        <Image src={src} dimention={['4rem', '4rem']} radius='50%' />
      </ActiveUserFigure>
      <ActiveUserName>{userName}</ActiveUserName>
    </ActiveUserItem>
  );
}

export default ActiveUser;
