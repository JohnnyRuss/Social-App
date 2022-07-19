import { useArray } from '../../hooks';

import {
  Form,
  InputEl,
  CheckBoxTitle,
  Devider,
  Title,
  Text,
  TextArea,
} from './InfoBlockStyled';
import { UpdateBTNS, SelectField, CheckBox } from '../';
import { Error } from '../../../Layouts';

function AddEducationForm({
  handleForm,
  formRef,
  field,
  error,
  message,
  cancelHandler,
  graduateRadios,
  checked,
}) {
  const { array } = useArray();

  return (
    <Form onSubmit={handleForm} ref={formRef} name="education">
      <Title>add education info</Title>
      <InputEl
        type='text'
        placeholder='school/college'
        name='collage'
        error={field === 'schoolName'}
      />
      <Devider direction='column' align='start'>
        <CheckBoxTitle>Schedule</CheckBoxTitle>
        <Devider>
          <SelectField data={array} caption='from' name='from' defaultField='year' />
          <SelectField data={array} caption='to' name='to' defaultField='year' />
        </Devider>
        <Devider height={3}>
          <InputEl type='checkbox' name='graduated' /> <strong>graduated</strong>
        </Devider>
      </Devider>
      <TextArea placeholder='description' name='description' />
      <Text size={1.2} weight={600}>
        faculty
      </Text>
      <InputEl type='text' placeholder='faculty' name='faculty' />
      <InputEl type='text' placeholder='first speciality' name='firstSpeciality' />
      <InputEl type='text' placeholder='secondary speciality' name='secondarySpeciality' />
      <InputEl type='text' placeholder='tertiary speciality' name='tertiarySpeciality' />
      <CheckBox title='graduate' type='radio' height={3} boxes={graduateRadios} checked={checked} />
      <InputEl type='text' placeholder='quality' name='quality' />
      {error && <Error message={message} />}
      <UpdateBTNS cancelHandler={cancelHandler} />
    </Form>
  );
}

export default AddEducationForm;
