import AddSingleField from './AddSingleField';

import { useBlock } from '../hooks';

function AddEmail() {
  //prettier-ignore
  const { active, setActive, formRef, handleForm, error: { error, message, field }} = useBlock('addEmail');

  const cancelHandler = () => setActive(false);
  const startUpdateHandler = () => setActive(true);

  return (
    <AddSingleField
      formRef={formRef}
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
