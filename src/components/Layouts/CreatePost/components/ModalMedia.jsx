import { Figure, Media, DiscardMediaBTN } from './modalContentStyled';
import { CloseXIcon } from '../../Icons/icons';

function ModalMedia({ setFile, file }) {
  return (
    <Figure>
      <Media src={typeof file === 'string' ? file : URL.createObjectURL(file)} alt='chosen file' />
      <DiscardMediaBTN onClick={() => setFile(null)}>
        <CloseXIcon />
      </DiscardMediaBTN>
    </Figure>
  );
}

export default ModalMedia;
