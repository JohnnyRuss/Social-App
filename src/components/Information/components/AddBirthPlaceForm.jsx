import { InputsContainer, InputEl, Title } from './InfoBlockStyled';
import { UpdateBTNS } from './';
import { Error } from '../../Layouts';

function AddBirthPlaceForm({ handleForm, formRef, error, message, field, cancelHandler }) {
  return (
    <InputsContainer onSubmit={handleForm} ref={formRef}>
      <Title>add birth place</Title>
      <InputEl type='text' placeholder='country' name='country' error={field === 'country'} />
      <InputEl type='text' placeholder='city' name='city' error={field === 'city'} />
      <InputEl type='text' placeholder='street/village' name='street' />
      {error && <Error message={message} />}
      <UpdateBTNS cancelHandler={cancelHandler} />
    </InputsContainer>
  );
}

export default AddBirthPlaceForm;
