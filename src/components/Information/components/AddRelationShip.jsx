import { Fragment } from 'react';
import { useBlock } from '../hooks';

import { StartUpdateBTN, AddRelationShipForm } from './';

function AddRelationShip() {
  //prettier-ignore
  const { active, setActive, formRef, handleForm, error:{error, message, field} } = useBlock('addRelationShip');

  const cancelHandler = () => setActive(false);
  const startUpdateHandler = () => setActive(true);

  return (
    <Fragment>
      {active && (
        <AddRelationShipForm
          handleForm={handleForm}
          formRef={formRef}
          error={error}
          message={message}
          field={field}
          cancelHandler={cancelHandler}
        />
      )}
      {!active && (
        <StartUpdateBTN startUpdateHandler={startUpdateHandler} caption='add relationship' />
      )}
    </Fragment>
  );
}

export default AddRelationShip;
