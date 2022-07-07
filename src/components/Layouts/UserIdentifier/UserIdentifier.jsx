import { useSelector } from 'react-redux';
import { userSelector } from '../../../store/selectors/userSelector';

import styled from 'styled-components';
import { Image } from '../';

const Container = styled.figure`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Caption = styled.figcaption`
  font-weight: 500;
  font-size: ${({ size }) => (size ? size : '1.2rem')};
  color: ${({ color }) => (color ? color : 'black')};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

function UserIdentifier({ src, userName, size, color, dimention }) {
  const { userName: activeUserName, profileImg } = useSelector(userSelector);
  return (
    <Container>
      <Image
        src={src || profileImg.image}
        alt={'user avatar'}
        dimention={dimention || ['3.5rem', '3.5rem']}
        radius='50%'
      />
      <Caption size={size} color={color}>
        {userName || activeUserName}
      </Caption>
    </Container>
  );
}

export default UserIdentifier;
