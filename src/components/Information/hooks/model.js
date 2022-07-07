import isEmail from 'validator/lib/isEmail';
import isNumeric from 'validator/lib/isNumeric';
import isURL from 'validator/lib/isURL';

import {
  validateRequiredFields,
  valiadateDescriptionField,
  validateYears,
  deleteUnnecesseryEmptyFields,
  sendWarning,
  separateDateProperty,
  specialitiesArray,
} from './helpers';

export function validateAddWorkPlace(data, warning) {
  const requiredFields = ['company', 'position'];

  Object.keys(data).forEach((property) => {
    if (warning.error) return;
    else if (requiredFields.includes(property) && !data[property])
      validateRequiredFields(property, warning);
    else if (property === 'description' && data[property])
      valiadateDescriptionField(data[property], property, warning);
    else if (property === 'from' || property === 'to') validateYears(data, property, warning);
    else if (!data[property]) deleteUnnecesseryEmptyFields(data, property);
  });

  separateDateProperty(data);
}

export function validateAddEducation(data, warning) {
  const requiredFields = ['schoolName'];

  Object.keys(data).forEach((property) => {
    if (warning.error) return;
    else if (requiredFields.includes(property) && !data[property])
      validateRequiredFields(property, warning);
    else if (property === 'description' && data[property])
      valiadateDescriptionField(data[property], property, warning);
    else if (property === 'from' || property === 'to') validateYears(data, property, warning);
    else if (property === 'graduated' && data[property] === 'on') data[property] = true;
    else if (!data[property]) deleteUnnecesseryEmptyFields(data, property);
  });

  separateDateProperty(data);
  specialitiesArray(data);
}

export function validateAddLivingPlace(data, warning, type) {
  const requiredFields = ['country', 'city'];

  Object.keys(data).forEach((property) => {
    if (warning.error) return;
    else if (requiredFields.includes(property) && !data[property])
      validateRequiredFields(property, warning);
  });

  let block;
  if (type === 'addBirthPlace') block = 'birthPlace';
  if (type === 'addLivingPlace') block = 'livingPlace';

  data[block] = {
    country: data.country,
    city: data.city,
    street: data.street,
  };

  Object.keys(data).forEach((key) => delete data[key !== block ? key : '']);
}

export function validateAddRelationship(data, warning) {
  if (data.relationship === 'status') sendWarning('status before update', 'relationship', warning);
}

export function validateAddPhoneNumber(data, warning) {
  const { phoneNumber: number } = data;
  const phoneNumber = number.trim();
  data.phoneNumber = phoneNumber;

  if (!phoneNumber) return validateRequiredFields('phoneNumber', warning);
  else if (phoneNumber.length < 9) sendWarning('phone number', 'phoneNumber', warning);
  else if (phoneNumber.includes('-') || phoneNumber.includes('.'))
    return sendWarning('phone number', 'phoneNumber', warning);
  else if (!isNumeric(phoneNumber)) sendWarning('phone number', 'phoneNumber', warning);
}

export function validateAddEmail(data, warning) {
  const { email } = data;
  const validEmail = isEmail(email);
  if (!email) return validateRequiredFields('phoneNumber', warning);
  else if (!validEmail) sendWarning('email', 'email', warning);
}

export function validateAddWebSite(data, warning) {
  const { website } = data;
  const validWebsite = isURL(website);
  if (!website) return validateRequiredFields('phoneNumber', warning);
  else if (!validWebsite) sendWarning('website', 'website', warning);
}

export function validateAddLanguage(data, warning) {
  const { language } = data;
  if (!language) return validateRequiredFields('language', warning);
}

export function validateReligianOpinion(data, warning) {
  const requiredFields = ['opinion'];

  Object.keys(data).forEach((property) => {
    if (warning.error) return;
    else if (requiredFields.includes(property) && !data[property])
      validateRequiredFields(property, warning);
    else if (property === 'description' && data[property])
      valiadateDescriptionField(data[property], property, warning);
  });
}

export function validatePoliticianOpinion(data, warning) {
  const requiredFields = ['opinion'];

  Object.keys(data).forEach((property) => {
    if (warning.error) return;
    else if (requiredFields.includes(property) && !data[property])
      validateRequiredFields(property, warning);
    else if (property === 'description' && data[property])
      valiadateDescriptionField(data[property], property, warning);
  });
}

export function validateAddInterests(data, warning) {
  const { men, women } = data;

  if (!men && !women) {
    warning.error = true;
    warning.message = 'please reference one of the status or you can reference both of them';
  } else if (men && women) data.interestedIn = 'both';
  else if (men && !women) data.interestedIn = 'men';
  else if (!men && women) data.interestedIn = 'women';

  deleteUnnecesseryEmptyFields(data, 'men');
  deleteUnnecesseryEmptyFields(data, 'women');
}

export function validateAddGender(data, warning) {
  const { gender } = data;
  if (gender === 'gender') sendWarning('gender', 'gender', warning);
}

export function validateAddBirthDate(data, warning) {
  const { date } = data;
  const currDate = new Date();
  const lastSixteen = new Date(
    currDate.getFullYear() - 16,
    currDate.getMonth(),
    currDate.getDate()
  );

  if (new Date(date) > lastSixteen) {
    warning.error = true;
    warning.message = 'you need to be at least 16 years old to use this app';
  }
}

export function validateAddFamilyMember(data, warning) {}
