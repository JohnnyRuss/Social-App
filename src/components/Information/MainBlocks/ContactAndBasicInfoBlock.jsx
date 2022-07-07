import { Fragment } from 'react';

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
  AddBirthDate
} from '../components';
import { Title } from '../components/InfoBlockStyled';

function ContactAndBasicInfoBlock() {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default ContactAndBasicInfoBlock;
