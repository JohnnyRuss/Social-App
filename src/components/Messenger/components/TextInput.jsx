import { InputBox, TextArea, IconBox} from './styled';
import { SendIcon } from '../../Layouts/Icons/icons';

function TextInput() {
  return (
    <InputBox>
      <TextArea placeholder='Aa' />
      <IconBox>
        <SendIcon />
      </IconBox>
    </InputBox>
  );
}

export default TextInput;
