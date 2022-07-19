import { Form, InputEl, Title } from './InfoBlockStyled';
import { UpdateBTNS } from '../';
import { Error } from '../../../Layouts';

function AddLivingPlaceForm({ handleForm, formRef, error, message, field, cancelHandler }) {
  return (
    <Form onSubmit={handleForm} ref={formRef} name='livingPlace'>
      <Title>add living place</Title>
      <InputEl type='text' placeholder='country' name='country' error={field === 'country'} />
      <InputEl type='text' placeholder='city' name='city' error={field === 'city'} />
      <InputEl type='text' placeholder='street/village' name='street' />
      {error && <Error message={message} />}
      <UpdateBTNS cancelHandler={cancelHandler} />
    </Form>
  );
}

export default AddLivingPlaceForm;
