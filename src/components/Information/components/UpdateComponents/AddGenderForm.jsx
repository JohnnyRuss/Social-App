import { Form, Title } from './InfoBlockStyled';
import { UpdateBTNS, SelectField } from '../';
import { Error } from '../../../Layouts';

function AddGenderForm({ handleForm, formRef, field, error, message, cancelHandler }) {
  return (
    <Form onSubmit={handleForm} ref={formRef} name="gender">
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
    </Form>
  );
}

export default AddGenderForm;
