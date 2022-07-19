import { useBlock } from '../../hooks';

import { AddSingleFieldWithDescription } from '../';

function AddPoliticianOpinion() {
  //prettier-ignore
  const { active, setActive, formRef,  handleForm, error: { error, message, field }} = useBlock('addPoliticianOpinion');

  const cancelHandler = () => setActive(false);
  const startUpdateHandler = () => setActive(true);

  return (
    <AddSingleFieldWithDescription
      formRef={formRef}
      formName="politicianOpinion"
      active={active}
      error={error}
      message={message}
      cancelHandler={cancelHandler}
      startUpdateHandler={startUpdateHandler}
      formHandler={handleForm}
      field={field}
      title='add your politician opinion'
      inputName='opinion'
      textAreaName='description'
      placeholder='your opinion'
      caption='add your politician opinions'
    />
  );
}

export default AddPoliticianOpinion;
