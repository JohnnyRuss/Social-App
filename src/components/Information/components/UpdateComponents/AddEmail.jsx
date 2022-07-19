import { useBlock } from '../../hooks';

import { AddSingleField } from '../';

function AddEmail() {
  //prettier-ignore
  const { active, setActive, formRef, handleForm, error: { error, message, field }} = useBlock('addEmail');

  const cancelHandler = () => setActive(false);
  const startUpdateHandler = () => setActive(true);

  return (
    <AddSingleField
      formRef={formRef}
      formName='email'
      active={active}
      error={error}
      message={message}
      cancelHandler={cancelHandler}
      startUpdateHandler={startUpdateHandler}
      formHandler={handleForm}
      field={field}
      title='add email'
      name='email'
      caption='add email'
      placeholder='email'
    />
  );
}

export default AddEmail;
