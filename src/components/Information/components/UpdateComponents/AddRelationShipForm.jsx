import { Form, Title } from './InfoBlockStyled';
import { UpdateBTNS, SelectField } from '../';
import { Error } from '../../../Layouts';

function AddRelationShipForm({ handleForm, formRef, field, message, error, cancelHandler }) {
  return (
    <Form onSubmit={handleForm} ref={formRef} name="relationship">
      <Title>add relationship</Title>
      <SelectField
        data={['married', 'single', 'complicated']}
        name='relationship'
        defaultField='status'
        width='100%'
        field={field}
      />
      {error && <Error message={message} />}
      <UpdateBTNS cancelHandler={cancelHandler} />
    </Form>
  );
}

export default AddRelationShipForm;
