import { useSelector } from 'react-redux';

import { Title } from './components/UpdateComponents/InfoBlockStyled';
import { InfoBlockContainer } from './components/styled';
import { AddLivingPlace, LivingPlace } from './components';
import { useForeignUser } from '../../hooks';

function LivingPlacesBlock() {
  const { livingPlace } = useSelector((state) => state.user.user.userInfo);
  const { foreignUser } = useForeignUser();

  return (
    <InfoBlockContainer>
      <Title>living places</Title>
      {!foreignUser && <AddLivingPlace />}
      <LivingPlace livingplace={livingPlace} />
    </InfoBlockContainer>
  );
}

export default LivingPlacesBlock;
