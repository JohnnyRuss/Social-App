import { useBlock } from '../hooks';

import { AddSingleFieldWithDescription } from './';

function AddReligianOpinion() {
  //prettier-ignore
  const { active, setActive, formRef, handleForm, error: { error, message, field }} = useBlock('addReligianOpinion');

  const cancelHandler = () => setActive(false);
  const startUpdateHandler = () => setActive(true);

  return (
    <AddSingleFieldWithDescription
      formRef={formRef}
      active={active}
      error={error}
      message={message}
      cancelHandler={cancelHandler}
      startUpdateHandler={startUpdateHandler}
      formHandler={handleForm}
      field={field}
      title='add your religian opinion'
      inputName='opinion'
      textAreaName='description'
      placeholder='your opinion'
      caption='add your religian opinions'
    />
  );
}

export default AddReligianOpinion;
