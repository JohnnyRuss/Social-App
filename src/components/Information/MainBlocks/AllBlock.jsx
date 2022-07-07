import { Fragment } from 'react';

import {
  AddWorkPlace,
  AddEducation,
  AddLivingPlace,
  AddBirthPlace,
  AddRelationShip,
  AddPhoneNumber,
} from '../components';

function AllBlock() {
  return (
    <Fragment>
      <AddWorkPlace />
      <AddEducation />
      <AddLivingPlace />
      <AddBirthPlace />
      <AddRelationShip />
      <AddPhoneNumber />
    </Fragment>
  );
}

export default AllBlock;
