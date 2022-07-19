
import {
  AddLivingPlace,
  AddPhoneNumber,
  AddEmail,
  AddWebSite,
  AddLanguage,
  AddReligianOpinion,
  AddPoliticianOpinion,
  AddInterestedIn,
  AddGender,
  AddBirthDate,
} from './components';
import { Title } from './components/UpdateComponents/InfoBlockStyled';
import { InfoBlockContainer } from './components/styled';


function ContactAndBasicInfoBlock() {
  return (
    <InfoBlockContainer>
      <Title>contact information</Title>
      <AddLivingPlace />
      <AddPhoneNumber />
      <AddEmail />
      <Title>web and social links</Title>
      <AddWebSite />
      <Title>basic information</Title>
      <AddLanguage />
      <AddReligianOpinion />
      <AddPoliticianOpinion />
      <AddInterestedIn />
      <AddGender />
      <AddBirthDate />
    </InfoBlockContainer>
  );
}

export default ContactAndBasicInfoBlock;
