import { useBlock } from '../../hooks';

import { AddSingleField } from '../';

function AddPhoneNumber() {
  //prettier-ignore
  const { active, setActive, formRef, handleForm, error:{error, message, field} } = useBlock('addPhoneNumber');

  const cancelHandler = () => setActive(false);
  const startUpdateHandler = () => setActive(true);

  return (
    <AddSingleField
      formRef={formRef}
      formName="phoneNumber"
      active={active}
      error={error}
      message={message}
      cancelHandler={cancelHandler}
      startUpdateHandler={startUpdateHandler}
      formHandler={handleForm}
      field={field}
      title='add phone number'
      name='phoneNumber'
      caption='add phone number'
      placeholder='phonenumber'
    />
  );
}

export default AddPhoneNumber;
