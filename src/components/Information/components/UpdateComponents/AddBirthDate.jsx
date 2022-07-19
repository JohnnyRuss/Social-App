import { Fragment, useState } from 'react';
import { useBlock } from '../../hooks';
import 'react-calendar/dist/Calendar.css';

import { StartUpdateBTN, AddBirthDateForm } from '../';

function AddBirthDate() {
  const [date, setDate] = useState(new Date());
  //prettier-ignore
  const { active, setActive,formRef, handleForm, error:{error, message, field} } = useBlock('addBirthDate', date);

  const cancelHandler = () => setActive(false);
  const startUpdateHandler = () => setActive(true);
  const handleDate = (calendar) => setDate(calendar);

  return (
    <Fragment>
      {active && (
        <AddBirthDateForm
          handleForm={handleForm}
          formRef={formRef}
          error={error}
          message={message}
          field={field}
          cancelHandler={cancelHandler}
          handleDate={handleDate}
        />
      )}
      {!active && (
        <StartUpdateBTN startUpdateHandler={startUpdateHandler} caption='add your birthdate' />
      )}
    </Fragment>
  );
}

export default AddBirthDate;
