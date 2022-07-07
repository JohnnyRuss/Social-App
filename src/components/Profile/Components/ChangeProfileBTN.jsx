import { ChangeProfile, Input } from './ProfileImageStyled';
import { CameraIcon } from '../../Layouts/Icons/icons';

function ChangeProfileBTN({ coverFile, setProfileFile }) {
  return (
    <ChangeProfile htmlFor={!coverFile ? 'changeProfile' : ''}>
      <CameraIcon />
      <Input
        type='file'
        name='profileImg'
        id='changeProfile'
        onChange={!coverFile ? (e) => setProfileFile(e.target.files[0]) : null}
      />
    </ChangeProfile>
  );
}

export default ChangeProfileBTN;
