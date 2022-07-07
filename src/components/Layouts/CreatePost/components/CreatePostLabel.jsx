import { Fragment } from 'react';

import LabelTextArea from './LabelTextArea';
import LabelTool from './LabelTool';

function CreatePostLabel({ handleOpenModal, openMedia }) {
  return (
    <Fragment>
      <LabelTextArea handleOpenModal={handleOpenModal} />
      <LabelTool openMedia={openMedia} />
    </Fragment>
  );
}

export default CreatePostLabel;
