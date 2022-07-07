import { HobbiesListItem as Hobbie } from './HobbiesStyled';
import { Image, DetailedIcon } from '../../Layouts';

function HobbiesListItem({ hobby }) {
  return (
    <Hobbie>
      <DetailedIcon
        Icon={
          <Image src={`/assets/hobbies/${hobby}.png`} dimention={['2rem', '2rem']} radius='50%' />
        }
        caption={hobby}
        captionSize='1.2rem'
        gap='0.5rem'
      />
    </Hobbie>
  );
}

export default HobbiesListItem;
