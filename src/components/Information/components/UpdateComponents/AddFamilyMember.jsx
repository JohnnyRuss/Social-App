import { Fragment } from 'react';
import { useBlock } from '../../hooks';

import { AddFamilyMemberForm, StartUpdateBTN } from '../';

function AddFamilyMember() {
  //prettier-ignore
  const { active, setActive, formRef, handleForm, error:{error, message, field} } = useBlock('addFamilyMember');

  const cancelHandler = () => setActive(false);
  const startUpdateHandler = () => setActive(true);

  return (
    <Fragment>
      {active && (
        <AddFamilyMemberForm
          handleForm={handleForm}
          formRef={formRef}
          error={error}
          message={message}
          field={field}
          cancelHandler={cancelHandler}
        />
      )}
      {!active && (
        <StartUpdateBTN startUpdateHandler={startUpdateHandler} caption='add family member' />
      )}
    </Fragment>
  );
}

export default AddFamilyMember;
