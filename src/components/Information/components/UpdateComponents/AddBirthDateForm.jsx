import { Form, Title } from './InfoBlockStyled';
import { UpdateBTNS, Calendar } from '../';
import { Error } from '../../../Layouts';

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
    <Form onSubmit={handleForm} ref={formRef} name='birthDate'>
      <Title>add your birth date</Title>
      <Calendar field={field} handler={handleDate} />
      {error && <Error message={message} />}
      <UpdateBTNS cancelHandler={cancelHandler} />
    </Form>
  );
}

export default AddBirthDateForm;
