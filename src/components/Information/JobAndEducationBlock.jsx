import { useSelector } from 'react-redux';

import { Title } from './components/UpdateComponents/InfoBlockStyled';
import { InfoBlockContainer, Message } from './components/styled';
import { AddWorkPlace, WorkPlace, Education, AddEducation } from './components';
import { GraduationIcon, CaseIcon } from '../Layouts/Icons/icons';

import { useForeignUser } from '../../hooks';

function JobAndEducationBlock() {
  const { workPlace, education } = useSelector((state) => state.user.user.userInfo);
  const { foreignUser } = useForeignUser();

  return (
    <InfoBlockContainer>
      <Title>job</Title>
      {!foreignUser && <AddWorkPlace />}
      {workPlace?.map((place) => (
        <WorkPlace workplace={place} key={place?._id} />
      ))}
      {!workPlace?.[0] && (
        <Message>
          <CaseIcon /> There are no details about workplace
        </Message>
      )}
      <Title>high or proffesional collage</Title>
      {!foreignUser && <AddEducation university={true} checked={true} />}
      {education
        ?.filter((edu) => edu.schoolType === 'university')
        ?.map((edu) => (
          <Education education={edu} key={edu?._id} />
        ))}
      {!education?.[0] && (
        <Message>
          <GraduationIcon /> There are no details about hightschool
        </Message>
      )}
      <Title>middle school</Title>
      {!foreignUser && <AddEducation college={true} checked={true} />}
      {education
        ?.filter((edu) => edu.schoolType === 'collage')
        ?.map((edu) => (
          <Education education={edu} key={edu?._id} />
        ))}
      {!education?.[0] && (
        <Message>
          <GraduationIcon /> There are no details about middle school
        </Message>
      )}
    </InfoBlockContainer>
  );
}

export default JobAndEducationBlock;
