import {
  AddWorkPlace,
  AddEducation,
  AddLivingPlace,
  AddBirthPlace,
  AddRelationShip,
  AddPhoneNumber,
} from './components';
import { InfoBlockContainer } from './components/styled';

function AllBlock() {
  return (
    <InfoBlockContainer>
      <AddWorkPlace />
      <AddEducation />
      <AddLivingPlace />
      <AddBirthPlace />
      <AddRelationShip />
      <AddPhoneNumber />
    </InfoBlockContainer>
  );
}

export default AllBlock;
