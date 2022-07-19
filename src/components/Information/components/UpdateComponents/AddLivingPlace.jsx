import { Fragment } from 'react';
import { useBlock } from '../../hooks';

import { StartUpdateBTN, AddLivingPlaceForm } from '../';

function AddLivingPlace() {
  //prettier-ignore
  const { active, setActive, formRef, handleForm, error:{error, message, field} } = useBlock('addLivingPlace');

  const cancelHandler = () => setActive(false);
  const startUpdateHandler = () => setActive(true);

  return (
    <Fragment>
      {active && (
        <AddLivingPlaceForm
          handleForm={handleForm}
          formRef={formRef}
          error={error}
          message={message}
          field={field}
          cancelHandler={cancelHandler}
        />
      )}
      {!active && (
        <StartUpdateBTN startUpdateHandler={startUpdateHandler} caption='add living place' />
      )}
    </Fragment>
  );
}

export default AddLivingPlace;
