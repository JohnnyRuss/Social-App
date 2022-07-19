import { Title } from './components/UpdateComponents/InfoBlockStyled';
import { InfoBlockContainer } from './components/styled';
import { AddWorkPlace, AddEducation } from './components';

function JobAndEducationBlock() {
  return (
    <InfoBlockContainer>
      <Title>job</Title>
      <AddWorkPlace />
      <Title>high or proffesional collage</Title>
      <AddEducation university={true} checked={true} />
      <Title>middle school</Title>
      <AddEducation college={true} checked={true} />
    </InfoBlockContainer>
  );
}

export default JobAndEducationBlock;
