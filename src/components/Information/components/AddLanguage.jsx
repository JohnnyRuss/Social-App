import AddSingleField from './AddSingleField';

import { useBlock } from '../hooks';

function AddLanguage() {
  //prettier-ignore
  const { active, setActive, formRef, handleForm, error: { error, message, field }} = useBlock('addLanguage');

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
      title='add language'
      name='language'
      caption='add language'
      placeholder='language'
    />
  );
}

export default AddLanguage;
