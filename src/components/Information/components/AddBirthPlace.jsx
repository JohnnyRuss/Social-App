import { Fragment } from 'react';
import { useBlock } from '../hooks';

import { StartUpdateBTN, AddBirthPlaceForm } from './';

function AddBirthPlace() {
  //prettier-ignore
  const { active, setActive, formRef, handleForm, error:{error, message, field}  } = useBlock('addBirthPlace');

  const cancelHandler = () => setActive(false);
  const startUpdateHandler = () => setActive(true);

  return (
    <Fragment>
      {active && (
        <AddBirthPlaceForm
          handleForm={handleForm}
          formRef={formRef}
          error={error}
          message={message}
          field={field}
          cancelHandler={cancelHandler}
        />
      )}
      {!active && (
        <StartUpdateBTN startUpdateHandler={startUpdateHandler} caption='add birth place' />
      )}
    </Fragment>
  );
}

export default AddBirthPlace;
