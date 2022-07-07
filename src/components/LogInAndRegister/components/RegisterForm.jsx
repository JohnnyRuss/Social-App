import { Link } from 'react-router-dom';

import { FormContainer, InputEl, BTN } from './styled';

function RegisterForm() {
  return (
    <FormContainer>
      <InputEl placeholder='username' />
      <InputEl placeholder='email' />
      <InputEl placeholder='password' />
      <InputEl placeholder='password confirm' />
      <BTN>sign up</BTN>
      <BTN create>
        <Link to='/login'>log into account</Link>
      </BTN>
    </FormContainer>
  );
}

export default RegisterForm;
