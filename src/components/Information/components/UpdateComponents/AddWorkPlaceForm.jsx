import { useState } from 'react';
import { useArray } from '../../hooks';

import { Form, InputEl, Devider, TextArea, Title } from './InfoBlockStyled';
import { CheckBox, SelectField, UpdateBTNS } from '../';
import { Error } from '../../../Layouts';

function AddWorkPlaceForm({ handleForm, formRef, field, cancelHandler, error, message }) {
  const { array } = useArray();
  const [currently, setCurrently] = useState(false);
  const toggleWorkingYear = () => setCurrently((prevState) => !prevState);

  return (
    <Form onSubmit={handleForm} ref={formRef} name="workPlace">
      <Title>add work place</Title>
      <InputEl type='text' placeholder='company' name='company' error={field === 'company'} />
      <InputEl type='text' placeholder='position' name='position' error={field === 'position'} />
      <InputEl type='text' placeholder='city/village' name='location' />
      <TextArea placeholder='description' name='description' error={field === 'description'} />
      <CheckBox
        handler={toggleWorkingYear}
        boxes={[{ caption: 'I currently work here', name: 'currently' }]}
        title='schedule'
      />
      <Devider>
        <SelectField data={array} caption='from' name='from' defaultField='year' />
        {!currently && <SelectField data={array} caption='to' name='to' defaultField='year' />}
      </Devider>
      {error && <Error message={message} />}
      <UpdateBTNS cancelHandler={cancelHandler} />
    </Form>
  );
}

export default AddWorkPlaceForm;
