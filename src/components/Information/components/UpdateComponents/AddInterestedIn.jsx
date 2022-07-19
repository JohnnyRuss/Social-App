import { Fragment } from 'react';
import { useBlock } from '../../hooks';

import { StartUpdateBTN, AddInterestedInForm } from '../';

function InterestedIn() {
  //prettier-ignore
  const { active, setActive, formRef, handleForm, error:{error, message, field} } = useBlock('addInterests');

  const cancelHandler = () => setActive(false);
  const startUpdateHandler = () => setActive(true);

  return (
    <Fragment>
      {active && (
        <AddInterestedInForm
          handleForm={handleForm}
          formRef={formRef}
          error={error}
          message={message}
          field={field}
          cancelHandler={cancelHandler}
        />
      )}
      {!active && (
        <StartUpdateBTN startUpdateHandler={startUpdateHandler} caption='add your interests' />
      )}
    </Fragment>
  );
}

export default InterestedIn;
