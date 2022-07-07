import { InputsContainer, InputEl } from './InfoBlockStyled';
import { UpdateBTNS, SelectField } from './';
import { Error } from '../../Layouts';

function AddFamilyMemberForm({handleForm, formRef, field, error, message, cancelHandler}) {
  return (
    <InputsContainer onSubmit={handleForm} ref={formRef}>
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
    </InputsContainer>
  );
}

export default AddFamilyMemberForm;
