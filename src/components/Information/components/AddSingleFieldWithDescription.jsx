import { Fragment } from 'react';

import { InputsContainer, InputEl, TextArea, Title } from './InfoBlockStyled';
import {UpdateBTNS, StartUpdateBTN} from "./"
import { Error } from '../../Layouts';

function AddSingleFieldWithDescription({
  formRef,
  active,
  error,
  message,
  cancelHandler,
  startUpdateHandler,
  formHandler,
  field,
  title,
  inputName,
  textAreaName,
  placeholder,
  caption,
  textArea = 'description',
}) {
  return (
    <Fragment>
      {active && (
        <InputsContainer onSubmit={formHandler} ref={formRef}>
          <Title>{title}</Title>
          <InputEl
            type='text'
            placeholder={placeholder}
            name={inputName}
            error={field === inputName}
          />
          <TextArea placeholder={textArea} name={textAreaName} error={field === textAreaName} />
          {error && <Error message={message} />}
          <UpdateBTNS cancelHandler={cancelHandler} />
        </InputsContainer>
      )}
      {!active && <StartUpdateBTN startUpdateHandler={startUpdateHandler} caption={caption} />}
    </Fragment>
  );
}

export default AddSingleFieldWithDescription;
