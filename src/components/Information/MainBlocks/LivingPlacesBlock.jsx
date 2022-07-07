import { Fragment } from 'react';

import { Title } from '../components/InfoBlockStyled';
import { AddLivingPlace } from '../components';

function LivingPlacesBlock() {
  return (
    <Fragment>
      <Title>living places</Title>
      <AddLivingPlace />
    </Fragment>
  );
}

export default LivingPlacesBlock;
