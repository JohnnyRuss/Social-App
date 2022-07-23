import { useSelector } from 'react-redux';
import {
  AddWorkPlace,
  WorkPlace,
  AddEducation,
  Education,
  AddLivingPlace,
  LivingPlace,
  AddBirthPlace,
  BirthPlace,
  AddRelationShip,
  Relationship,
  AddPhoneNumber,
  PhoneNumber,
} from './components';
import { InfoBlockContainer } from './components/styled';
import { useForeignUser } from '../../hooks';

function AllBlock() {
  const { workPlace, education, livingPlace, birthPlace, relationship, phoneNumber } = useSelector(
    (state) => state.user.user.userInfo
  );
  const { foreignUser } = useForeignUser();

  return (
    <InfoBlockContainer>
      {!foreignUser && !workPlace?.[0] && <AddWorkPlace />}
      <WorkPlace workplace={workPlace?.[0]} />
      {!foreignUser && !education?.[0] && <AddEducation />}
      <Education education={education[0]} />
      {!foreignUser && !livingPlace && <AddLivingPlace />}
      <LivingPlace livingplace={livingPlace} />
      {!foreignUser && !birthPlace && <AddBirthPlace />}
      <BirthPlace birthplace={birthPlace} />
      {!foreignUser && !relationship && <AddRelationShip />}
      <Relationship relationship={relationship} />
      {!foreignUser && !phoneNumber && <AddPhoneNumber />}
      <PhoneNumber phonenumber={phoneNumber} />
    </InfoBlockContainer>
  );
}

export default AllBlock;
