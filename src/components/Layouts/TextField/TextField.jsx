import { useState } from 'react';
import Picker from 'emoji-picker-react';

import { Container, PickerBTN, TextArea, PickerBox } from './styled';
import { LaughIcon } from '../Icons/icons';

function TextField({ textFieldValue, setTextFieldValue, focus, handler }) {
  const [activePicker, setActivePicker] = useState(false);

  const onEmojiClick = (event, { emoji }) =>
    setTextFieldValue((prevState) => prevState.concat(emoji));

  return (
    <Container>
      <TextArea
        placeholder='leave comment ...'
        value={textFieldValue}
        onChange={(e) => setTextFieldValue(e.target.value)}
        onKeyDown={handler}
        autoFocus={focus}
      />
      <PickerBTN onClick={() => setActivePicker((prevState) => !prevState)}>
        <LaughIcon />
      </PickerBTN>
      {activePicker && (
        <PickerBox>
          <Picker
            onEmojiClick={onEmojiClick}
            disableSearchBar={true}
            pickerStyle={{ width: '100%', maxHeight: '22rem', borderRadius: '1rem' }}
          />
        </PickerBox>
      )}
    </Container>
  );
}

export default TextField;
