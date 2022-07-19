import { Title } from './components/UpdateComponents/InfoBlockStyled';
import { InfoBlockContainer } from './components/styled';
import {AddRelationShip, AddFamilyMember} from "./components"

function FamilyAndRelationShipBlock() {
  return (
    <InfoBlockContainer>
      <Title>relationshipt</Title>
      <AddRelationShip />
      <Title>family members</Title>
      <AddFamilyMember />
    </InfoBlockContainer>
  );
}

export default FamilyAndRelationShipBlock;