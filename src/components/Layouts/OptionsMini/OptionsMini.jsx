import { useState } from 'react';

import { DotsHorizontalIcon, DeleteIcon, UpdateIcon } from '../Icons/icons';
import { OptionsBTN, OptionsList, Option } from './styled';

function OptionsMini({
  updateHandler,
  deleteHandler,
  content,
  showOnHover,
  activeHover,
}) {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <OptionsBTN
      onClick={() => setShowOptions((prevState) => !prevState)}
      showOnHover={showOnHover}
      activeHover={activeHover}>
      <DotsHorizontalIcon />
      {showOptions && (
        <OptionsList>
          {updateHandler && (
            <Option onClick={() => updateHandler(content)}>
              <UpdateIcon /> update
            </Option>
          )}
          <Option onClick={() => deleteHandler(content)}>
            <DeleteIcon /> delete
          </Option>
        </OptionsList>
      )}
    </OptionsBTN>
  );
}

export default OptionsMini;
