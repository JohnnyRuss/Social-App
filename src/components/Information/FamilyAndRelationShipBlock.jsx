import { useSelector } from 'react-redux';
import { Title } from './components/UpdateComponents/InfoBlockStyled';
import { InfoBlockContainer } from './components/styled';
import { AddRelationShip, AddFamilyMember, Relationship } from './components';
import { useForeignUser } from '../../hooks';

function FamilyAndRelationShipBlock() {
  const { relationship } = useSelector((state) => state.user.user.userInfo);
  const { foreignUser } = useForeignUser();
  return (
    <InfoBlockContainer>
      <Title>relationshipt</Title>
      {!foreignUser && <AddRelationShip />}
      <Relationship relationship={relationship} />
      <Title>family members</Title>
      {!foreignUser && <AddFamilyMember />}
    </InfoBlockContainer>
  );
}

export default FamilyAndRelationShipBlock;
