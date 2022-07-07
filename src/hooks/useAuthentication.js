import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import isEmail from 'validator/lib/isEmail';
import isAlphanumeric from 'validator/lib/isAlphanumeric';

import { logIn } from '../store/reducers/activeUserBasicInfoReducer';
import { authenticationProcessSelector } from '../store/selectors/userSelector';

const validate = {
  logIn: validatePasswordAndEmail,
};

const useAuthentication = (type) => {
  const { error: DB_Error, pending, message } = useSelector(authenticationProcessSelector);
  const [error, setError] = useState({
    error: false,
    message: '',
    field: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleForm(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const output = {};

    for (const [key, value] of data) {
      output[key] = value;
    }

    const warning = {
      error: false,
      message: '',
      field: '',
    };

    validate[type](output, warning);

    setError(warning);

    if (warning.error) return;

    dispatch(logIn(output));
  }

  if (!error.error && !DB_Error && !pending) navigate('/');

  useEffect(() => {
    if (DB_Error && !pending)
      setError((prevState) => ({
        ...prevState,
        error: DB_Error,
        message: message,
      }));
  }, [DB_Error, pending, message]);

  return { handleForm, error, pending };
};

function validatePasswordAndEmail(data, warning) {
  const { email, password } = data;
  const validEmail = isEmail(email);
  const validPassword = isAlphanumeric(password);

  if (!email) return validateRequiredFields('email', warning);
  else if (!validEmail) sendWarning('email', 'email', warning);
  else if (!password) return validateRequiredFields('password', warning);
  else if (!validPassword) sendWarning('password', 'email', warning);
  else if (password.length < 8) sendWarning('password', 'password', warning);
}

function sendWarning(message, field, warning) {
  warning.error = true;
  warning.message = `please reference valid ${message}`;
  warning.field = `${field}`;
}

function validateRequiredFields(property, warning) {
  warning.error = true;
  warning.message = `${property} field is required`;
  warning.field = property;
}

export default useAuthentication;
