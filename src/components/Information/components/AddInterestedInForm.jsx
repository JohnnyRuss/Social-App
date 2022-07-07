import { InputsContainer, Title } from './InfoBlockStyled';
import { UpdateBTNS, CheckBox } from './';
import { Error } from '../../Layouts';

function AddInterestedInForm({ handleForm, formRef, field, error, message, cancelHandler }) {
  return (
    <InputsContainer onSubmit={handleForm} ref={formRef}>
      <Title>add your interests</Title>
      <CheckBox
        title='interested in'
        height={3}
        field={field}
        boxes={[
          { caption: 'men', name: 'men', value: true },
          { caption: 'women', name: 'women', value: true },
        ]}
      />
      {error && <Error message={message} />}
      <UpdateBTNS cancelHandler={cancelHandler} />
    </InputsContainer>
  );
}

export default AddInterestedInForm;
