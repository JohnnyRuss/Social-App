import { Fragment } from 'react';

import { Form, InputEl, Title } from './InfoBlockStyled';
import { StartUpdateBTN, UpdateBTNS } from '../';
import { Error } from '../../../Layouts';

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
  formName,
}) {
  return (
    <Fragment>
      {active && (
        <Form onSubmit={formHandler} ref={formRef} name={formName}>
          <Title>{title}</Title>
          <InputEl type='text' placeholder={placeholder} name={name} error={field === name} />
          {error && <Error message={message} />}
          <UpdateBTNS cancelHandler={cancelHandler} />
        </Form>
      )}
      {!active && <StartUpdateBTN startUpdateHandler={startUpdateHandler} caption={caption} />}
    </Fragment>
  );
}

export default AddSingleField;
