import { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { DOMcontext } from '../../../store/context/DOMContext';

import { CoverImageBox } from './CoverImageStyled';
import { ChangeCoverBTN } from './';
import { Image, Spinner } from '../../Layouts';

function CoverImage({ src, restriction, handleOpenCoverImage }) {
  const { coverFile, setCoverFile, profileFile } = useContext(DOMcontext);

  //prettier-ignore
  const {process:{pending}} = useSelector((state) => state.app);

  useEffect(() => {
    if (pending === false) setCoverFile(null);
  }, [pending, setCoverFile]);

  return (
    <CoverImageBox>
      {!coverFile && <Image src={src} ratio='2/1' onClick={handleOpenCoverImage} />}
      {coverFile && <Image src={URL.createObjectURL(coverFile)} ratio='2/1' />}
      {pending && coverFile && <Spinner />}
      {!restriction && <ChangeCoverBTN profileFile={profileFile} setCoverFile={setCoverFile} />}
    </CoverImageBox>
  );
}

export default CoverImage;
