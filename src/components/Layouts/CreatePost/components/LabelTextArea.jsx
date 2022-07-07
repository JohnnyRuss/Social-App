import { useSelector } from 'react-redux';
import { userSelector } from '../../../../store/selectors/userSelector';

import { InputBox, TextArea } from './createPostLabelStyled';
import { Image } from '../../../Layouts';

function LabelTextArea({ handleOpenModal }) {
  const { profileImg } = useSelector(userSelector);

  return (
    <InputBox onClick={handleOpenModal}>
      <Image src={profileImg.image} dimention={['4rem', '4rem']} radius='50%' />
      <TextArea placeholder='whats on your mind ?' />
    </InputBox>
  );
}

export default LabelTextArea;
