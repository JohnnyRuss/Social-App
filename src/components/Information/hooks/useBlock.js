import { useState, useRef } from 'react';
import * as model from './model';
import { destructureFormData, assignTarget } from './helpers';

const validate = {
  addWorkPlace: model.validateAddWorkPlace,
  addEducation: model.validateAddEducation,
  addLivingPlace: model.validateAddLivingPlace,
  addBirthPlace: model.validateAddLivingPlace,
  addRelationShip: model.validateAddRelationship,
  addPhoneNumber: model.validateAddPhoneNumber,
  addEmail: model.validateAddEmail,
  addWebsite: model.validateAddWebSite,
  addLanguage: model.validateAddLanguage,
  addReligianOpinion: model.validateReligianOpinion,
  addPoliticianOpinion: model.validatePoliticianOpinion,
  addInterests: model.validateAddInterests,
  addGender: model.validateAddGender,
  addBirthDate: model.validateAddBirthDate,
  addFamilyMember: model.validateAddFamilyMember,
};

const useBlock = (type, value) => {
  const [active, setActive] = useState(false);
  const [error, setError] = useState({});
  const formRef = useRef();

  function handleForm(e) {
    e.preventDefault();

    const output = destructureFormData(e.target, type, value);

    const warning = {
      error: false,
      message: '',
      field: '',
    };

    validate[type](output, warning, type);
    setError(warning);

    const dataForDB = assignTarget(formRef.current.name, output);

    console.log(dataForDB);

    if (!warning.error) formRef.current.reset();
  }

  return { active, setActive, formRef, handleForm, error };
};

export default useBlock;
