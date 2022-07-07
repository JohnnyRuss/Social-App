import { Fragment } from 'react';

import { Title } from '../components/InfoBlockStyled';
import { AddWorkPlace, AddEducation } from '../components';

function JobAndEducationBlock() {
  return (
    <Fragment>
      <Title>job</Title>
      <AddWorkPlace />
      <Title>high or proffesional collage</Title>
      <AddEducation university={true} checked={true} />
      <Title>middle school</Title>
      <AddEducation college={true} checked={true} />
    </Fragment>
  );
}

export default JobAndEducationBlock;
