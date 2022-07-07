import { Fragment } from 'react';

import { useBlock } from '../hooks';
import { StartUpdateBTN, AddEducationForm } from './';

function AddEducation({ college, university, checked }) {
  //prettier-ignore
  const {active, setActive, formRef, handleForm, error: { error, message, field }} = useBlock('addEducation');

  const cancelHandler = () => setActive(false);
  const startUpdateHandler = () => setActive(true);

  //prettier-ignore
  const graduateRadiosInfo =  [
    { caption: 'collage', name: 'schoolType', value: 'college', id: 'college' },
    { caption: 'university', name: 'schoolType', value: 'university', id: 'university'},
  ]

  const graduateRadios = college
    ? [graduateRadiosInfo[0]]
    : university
    ? [graduateRadiosInfo[1]]
    : graduateRadiosInfo;

  return (
    <Fragment>
      {active && (
        <AddEducationForm
          handleForm={handleForm}
          formRef={formRef}
          field={field}
          error={error}
          message={message}
          cancelHandler={cancelHandler}
          graduateRadios={graduateRadios}
          checked={checked}
        />
      )}
      {!active && (
        <StartUpdateBTN startUpdateHandler={startUpdateHandler} caption='add education info' />
      )}
    </Fragment>
  );
}

export default AddEducation;
