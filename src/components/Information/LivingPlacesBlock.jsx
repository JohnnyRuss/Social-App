import { Title } from './components/UpdateComponents/InfoBlockStyled';
import { InfoBlockContainer } from './components/styled';
import { AddLivingPlace } from './components';

function LivingPlacesBlock() {
  return (
    <InfoBlockContainer>
      <Title>living places</Title>
      <AddLivingPlace />
    </InfoBlockContainer>
  );
}

export default LivingPlacesBlock;
