import { Fragment } from 'react';

import { Title } from '../components/InfoBlockStyled';
import {AddRelationShip, AddFamilyMember} from "../components"

function FamilyAndRelationShipBlock() {
  return (
    <Fragment>
      <Title>relationshipt</Title>
      <AddRelationShip />
      <Title>family members</Title>
      <AddFamilyMember />
    </Fragment>
  );
}

export default FamilyAndRelationShipBlock;