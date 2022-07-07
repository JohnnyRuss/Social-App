import { InputsContainer, Title } from './InfoBlockStyled';
import { UpdateBTNS, Calendar } from './';
import { Error } from '../../Layouts';

function AddBirthDateForm({
  handleForm,
  handleDate,
  formRef,
  field,
  error,
  message,
  cancelHandler,
}) {
  return (
    <InputsContainer onSubmit={handleForm} ref={formRef}>
      <Title>add your birth date</Title>
      <Calendar field={field} handler={handleDate} />
      {error && <Error message={message} />}
      <UpdateBTNS cancelHandler={cancelHandler} />
    </InputsContainer>
  );
}

export default AddBirthDateForm;
