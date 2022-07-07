import { ChangeCover, Input } from './CoverImageStyled';
import { DetailedIcon } from '../../Layouts';
import { CameraIcon } from '../../Layouts/Icons/icons';

function ChangeCoverBTN({ profileFile, setCoverFile }) {
  return (
    <ChangeCover htmlFor='changeCover'>
      <DetailedIcon
        id='changeCover'
        Icon={<CameraIcon />}
        caption='change cover photo'
        captionSize='1.2rem'
        iconColor='grey'
        iconSize='2rem'
      />
      <Input
        type='file'
        name='coverImg'
        id={!profileFile ? 'changeCover' : ''}
        onChange={!profileFile ? (e) => setCoverFile(e.target.files[0]) : null}
      />
    </ChangeCover>
  );
}

export default ChangeCoverBTN;
