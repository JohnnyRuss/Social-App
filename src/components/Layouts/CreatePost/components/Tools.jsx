import { PostTools } from '../styled';
import { Input } from './modalContentStyled';
import { MultiMediaIcon, LocationIcon, TagIcon, LaughIcon } from '../../Icons/icons';
import { DetailedIcon } from '../../../Layouts';

const detailedBreakPoint = {
  tablet: { iconSize: 0.5, size: 0.2 },
};

function Tools({ setFile }) {
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
      <Input type='file' id='multimedia' onChange={(e) => setFile(e.target.files[0])} />
      <DetailedIcon
        Icon={<TagIcon />}
        caption='tag'
        iconColor='royalblue'
        gap='0.5rem'
        size='1.2rem'
        iconSize='2.5rem'
        breakPoints={detailedBreakPoint}
      />
      <DetailedIcon
        Icon={<LocationIcon />}
        caption='location'
        iconColor='green'
        gap='0.5rem'
        size='1.2rem'
        iconSize='2.5rem'
        breakPoints={detailedBreakPoint}
      />
      <DetailedIcon
        Icon={<LaughIcon />}
        caption='feeling'
        iconColor='orange'
        gap='0.5rem'
        size='1.2rem'
        iconSize='2rem'
        breakPoints={detailedBreakPoint}
      />
    </PostTools>
  );
}

export default Tools;
