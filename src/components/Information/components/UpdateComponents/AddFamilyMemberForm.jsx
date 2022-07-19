import { Form, InputEl } from './InfoBlockStyled';
import { UpdateBTNS, SelectField } from '../';
import { Error } from '../../../Layouts';

function AddFamilyMemberForm({handleForm, formRef, field, error, message, cancelHandler}) {
  return (
    <Form onSubmit={handleForm} ref={formRef} name="familyMembers">
      <InputEl placeholder='family member' name='user' />
      <SelectField
        data={[
          'mother',
          'father',
          'brother',
          'sister',
          'grandfather',
          'grandmother',
          'son',
          'daughter',
        ]}
        defaultField='member'
        name='role'
        width='100%'
        field={field}
      />
      {error && <Error message={message} />}
      <UpdateBTNS cancelHandler={cancelHandler} />
    </Form>
  );
}

export default AddFamilyMemberForm;
