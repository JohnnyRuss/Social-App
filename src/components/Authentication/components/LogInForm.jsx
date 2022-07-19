import { Link } from 'react-router-dom';

import { FormContainer, InputEl, BTN, Text } from './styled';
import { Error, Spinner } from '../../Layouts';

function LogInForm({ handleForm, error, pending }) {
  const { error: localError, message, field } = error;
  return (
    <FormContainer onSubmit={handleForm}>
      <InputEl
        defaultValue='john@io.com'
        placeholder='email'
        name='email'
        error={field === 'email'}
      />
      <InputEl
        defaultValue='pass1234'
        placeholder='password'
        name='password'
        error={field === 'password'}
      />
      {localError && <Error message={message} />}
      <BTN>{pending ? <Spinner color='white' /> : 'log in'}</BTN>
      <Text size={1.2} align='center'>
        forgot password ?
      </Text>
      <BTN create>
        <Link to='/register'>create new account</Link>
      </BTN>
    </FormContainer>
  );
}

export default LogInForm;
