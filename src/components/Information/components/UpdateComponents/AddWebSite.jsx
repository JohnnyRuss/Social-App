import { useBlock } from '../../hooks';

import { AddSingleField } from '../';

function AddWebSite() {
  //prettier-ignore
  const { active, setActive, formRef, handleForm, error: { error, message, field }} = useBlock('addWebsite');

  const cancelHandler = () => setActive(false);
  const startUpdateHandler = () => setActive(true);

  return (
    <AddSingleField
      formRef={formRef}
      formName="webSite"
      active={active}
      error={error}
      message={message}
      cancelHandler={cancelHandler}
      startUpdateHandler={startUpdateHandler}
      formHandler={handleForm}
      field={field}
      title='add website'
      name='webSite'
      caption='add website'
      placeholder='website url'
    />
  );
}

export default AddWebSite;
