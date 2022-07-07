function sendWarning(message, field, warning) {
  warning.error = true;
  warning.message = `please reference valid ${message}`;
  warning.field = `${field}`;
}

function validateRequiredFields(property, warning) {
  warning.error = true;
  warning.message = `${property} field is required before update`;
  warning.field = property;
}

function valiadateDescriptionField(value, property, warning) {
  const words = value.split(' ');

  if (words.length >= 0 && words.length < 2) sendWarning();
  else if (words.length > 25) sendWarning();

  function sendWarning() {
    warning.error = true;
    warning.message = `${property} field must contain min 2 and max 25 word`;
    warning.field = property;
  }
}

function validateYears(data, property, warning) {
  if (data[property] === 'year') delete data[property];

  if (data.from && data.to && +data.from >= +data.to) {
    warning.error = true;
    warning.message = `data to field must be greater than data from field`;
    warning.field = 'to';
  }
}

function deleteUnnecesseryEmptyFields(data, property) {
  delete data[property];
}

function separateDateProperty(data) {
  data.date = {
    from: data.from,
    to: data.to,
  };

  delete data.from;
  delete data.to;
}

function specialitiesArray(data) {
  data.specialities = [data.firstSpeciality, data.secondarySpeciality, data.tertiarySpeciality];
  delete data.firstSpeciality;
  delete data.secondarySpeciality;
  delete data.tertiarySpeciality;
}

export {
  sendWarning,
  validateRequiredFields,
  valiadateDescriptionField,
  validateYears,
  deleteUnnecesseryEmptyFields,
  separateDateProperty,
  specialitiesArray,
};
