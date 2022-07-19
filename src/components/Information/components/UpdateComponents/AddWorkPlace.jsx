import { Fragment } from 'react';

import { useBlock } from '../../hooks';
import { AddWorkPlaceForm, StartUpdateBTN } from '../';

function AddWorkPlace() {
  //prettier-ignore
  const { active, setActive, formRef, handleForm, error:{error, message, field}} = useBlock('addWorkPlace');

  const cancelHandler = () => setActive(false);
  const startUpdateHandler = () => setActive(true);

  return (
    <Fragment>
      {active && (
        <AddWorkPlaceForm
          handleForm={handleForm}
          cancelHandler={cancelHandler}
          formRef={formRef}
          error={error}
          message={message}
          field={field}
        />
      )}
      {!active && (
        <StartUpdateBTN startUpdateHandler={startUpdateHandler} caption='add work place' />
      )}
    </Fragment>
  );
}

export default AddWorkPlace;
