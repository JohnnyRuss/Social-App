import { Fragment } from 'react';
import { useBlock } from '../hooks';

import { StartUpdateBTN, AddGenderForm } from './';

function AddGender() {
  //prettier-ignore
  const { active, setActive, formRef, handleForm, error:{error, message, field} } = useBlock('addGender');

  const cancelHandler = () => setActive(false);
  const startUpdateHandler = () => setActive(true);

  return (
    <Fragment>
      {active && (
        <AddGenderForm
          handleForm={handleForm}
          formRef={formRef}
          error={error}
          message={message}
          field={field}
          cancelHandler={cancelHandler}
        />
      )}
      {!active && (
        <StartUpdateBTN startUpdateHandler={startUpdateHandler} caption='add your gender' />
      )}
    </Fragment>
  );
}

export default AddGender;
