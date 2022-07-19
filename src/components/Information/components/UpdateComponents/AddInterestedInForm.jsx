import { Form, Title } from './InfoBlockStyled';
import { UpdateBTNS, CheckBox } from '../';
import { Error } from '../../../Layouts';

function AddInterestedInForm({ handleForm, formRef, field, error, message, cancelHandler }) {
  return (
    <Form onSubmit={handleForm} ref={formRef} name="interestedIn">
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
    </Form>
  );
}

export default AddInterestedInForm;
