import { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { DOMcontext } from '../../../store/context/DOMContext';

import { ProfileImageBox } from './ProfileImageStyled';
import { ChangeProfileBTN } from './';
import { Image, Spinner } from '../../Layouts';

const profileBreakPoints = {
  large: { dimention: ['18rem', '18rem'] },
  medium: { dimention: ['16rem', '16rem'] },
  small: { dimention: ['14rem', '14rem'] },
};

function ProfileImage({ src, restriction, handleOpenProfileImage }) {
  //prettier-ignore
  const {process:{ pending}} = useSelector((state) => state.app);
  
  const { profileFile, setProfileFile, coverFile } = useContext(DOMcontext);

  useEffect(() => {
    if (pending === false) setProfileFile(null);
  }, [pending, setProfileFile]);

  return (
    <ProfileImageBox>
      {!profileFile && (
        <Image
          src={src}
          dimention={['20rem', '20rem']}
          ratio='1/1'
          radius='50%'
          breakPoints={profileBreakPoints}
          onClick={handleOpenProfileImage}
        />
      )}
      {profileFile && (
        <Image
          src={URL.createObjectURL(profileFile)}
          dimention={['20rem', '20rem']}
          radius='50%'
          breakPoints={profileBreakPoints}
        />
      )}
      {pending && profileFile && <Spinner />}
      {!restriction && <ChangeProfileBTN coverFile={coverFile} setProfileFile={setProfileFile} />}
    </ProfileImageBox>
  );
}

export default ProfileImage;
