import { InputBoxContainer, TextArea, SentBTN } from './chatHeadInputBoxStyled';
import { SendIcon } from '../../Layouts/Icons/icons';

function InputBox({ handleSendMessage, form }) {
  return (
    <InputBoxContainer onSubmit={handleSendMessage} ref={form}>
      <TextArea placeholder='Aa' name='text' />
      <SentBTN type='submit'>
        <SendIcon />
      </SentBTN>
    </InputBoxContainer>
  );
}

export default InputBox;
