import { useSelector } from 'react-redux';
import {
  AddLivingPlace,
  LivingPlace,
  AddPhoneNumber,
  PhoneNumber,
  AddEmail,
  Email,
  AddWebSite,
  AddLanguage,
  Language,
  AddReligianOpinion,
  ReligianOpinion,
  AddPoliticianOpinion,
  PoliticianOpinion,
  AddInterestedIn,
  InterestedIn,
  AddGender,
  Gender,
  AddBirthDate,
  BirthDay,
} from './components';
import { Title } from './components/UpdateComponents/InfoBlockStyled';
import { InfoBlockContainer } from './components/styled';
import { useForeignUser } from '../../hooks';

function ContactAndBasicInfoBlock() {
  const {
    livingPlace,
    phoneNumber,
    email,
    language,
    religianOpinion,
    politicianOpinion,
    interestedIn,
    gender,
    birthDate,
  } = useSelector((state) => state.user.user.userInfo);
  const { foreignUser } = useForeignUser();

  return (
    <InfoBlockContainer>
      <Title>contact information</Title>
      {!foreignUser && <AddLivingPlace />}
      <LivingPlace livingplace={livingPlace} />
      {!foreignUser && <AddPhoneNumber />}
      <PhoneNumber phonenumber={phoneNumber} />
      {!foreignUser && <AddEmail />}
      <Email email={email} />
      <Title>web and social links</Title>
      {!foreignUser && <AddWebSite />}
      <Title>basic information</Title>
      {!foreignUser && <AddLanguage />}
      <Language languages={language} />
      {!foreignUser && <AddReligianOpinion />}
      <ReligianOpinion opinion={religianOpinion} />
      {!foreignUser && <AddPoliticianOpinion />}
      <PoliticianOpinion opinion={politicianOpinion} />
      {!foreignUser && <AddInterestedIn />}
      <InterestedIn interest={interestedIn} />
      {!foreignUser && <AddGender />}
      <Gender gender={gender} />
      {!foreignUser && <AddBirthDate />}
      <BirthDay birthday={birthDate} />
    </InfoBlockContainer>
  );
}

export default ContactAndBasicInfoBlock;
