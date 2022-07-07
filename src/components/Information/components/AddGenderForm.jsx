import { InputsContainer, Title } from './InfoBlockStyled';
import { UpdateBTNS, SelectField } from './';
import { Error } from '../../Layouts';

function AddGenderForm({ handleForm, formRef, field, error, message, cancelHandler }) {
  return (
    <InputsContainer onSubmit={handleForm} ref={formRef}>
      <Title>add your gender</Title>
      <SelectField
        data={['male', 'female', 'other']}
        name='gender'
        field={field}
        defaultField='gender'
        width='100%'
      />
      {error && <Error message={message} />}
      <UpdateBTNS cancelHandler={cancelHandler} />
    </InputsContainer>
  );
}

export default AddGenderForm;
