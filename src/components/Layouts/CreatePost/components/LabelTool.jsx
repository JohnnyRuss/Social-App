import { Input } from './createPostLabelStyled';
import { PostTools } from '../styled';
import { DetailedIcon } from '../../../Layouts';
import { MultiMediaIcon } from '../../Icons/icons';

const detailedBreakPoint = {
  tablet: { iconSize: 0.5, size: 0.2 },
};

function LabelTool({ openMedia }) {
  return (
    <PostTools>
      <DetailedIcon
        Icon={<MultiMediaIcon />}
        caption='photo/video'
        iconColor='red'
        gap='0.5rem'
        size='1.2rem'
        iconSize='2rem'
        breakPoints={detailedBreakPoint}
        id='multimedia'
      />
      <Input type='file' id='multimedia' onChange={(e) => openMedia(e.target.files[0])} />
    </PostTools>
  );
}

export default LabelTool;
