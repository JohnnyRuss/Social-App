import { Fragment } from 'react';

import { InputsContainer, InputEl, Title } from './InfoBlockStyled';
import { StartUpdateBTN, UpdateBTNS } from './';
import { Error } from '../../Layouts';

function AddSingleField({
  active,
  error,
  message,
  cancelHandler,
  startUpdateHandler,
  formHandler,
  name,
  title,
  field,
  caption,
  placeholder,
  formRef,
}) {
  return (
    <Fragment>
      {active && (
        <InputsContainer onSubmit={formHandler} ref={formRef}>
          <Title>{title}</Title>
          <InputEl type='text' placeholder={placeholder} name={name} error={field === name} />
          {error && <Error message={message} />}
          <UpdateBTNS cancelHandler={cancelHandler} />
        </InputsContainer>
      )}
      {!active && <StartUpdateBTN startUpdateHandler={startUpdateHandler} caption={caption} />}
    </Fragment>
  );
}

export default AddSingleField;
